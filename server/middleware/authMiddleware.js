import dotenv from 'dotenv';
import { supabase } from '../utils/dbConn.js';
import jwt from 'jsonwebtoken';

dotenv.config();

export const authenticateRequest = async (req, res, next) => {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;

  if (!accessToken) {
    return res
      .status(401)
      .json({ valid: false, message: 'Unauthorized: No token provided.' });
  }
  console.log('Token found!');

  try {
    console.log('Going to decode token');
    const decodedToken = jwt.decode(accessToken);
    const now = Math.floor(Date.now() / 1000);

    if (decodedToken && decodedToken.exp < now) {
      console.log('Current token is expired');
      if (!refreshToken) {
        return res
          .status(401)
          .json({ valid: false, message: 'Unauthorized: No token provided.' });
      }

      const { data, error } = await supabase.auth.refreshSession({
        refresh_token: refreshToken,
      });
      if (error || !data?.session) {
        return res.status(401).json({ error });
      }
      console.log('Refreshed session');
      const { access_token: newAccessToken, refresh_token: newRefreshToken } =
        data.session;
      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: 3600 * 1000,
      });
      res.cookie('refresh_token', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: 7 * 24 * 3600 * 1000,
      });

      const {
        data: { user },
      } = await supabase.auth.getUser(newAccessToken);
      req.user = user;
      console.log('Got new user');
    } else {
      console.log('token valid');
      const {
        data: { user },
      } = await supabase.auth.getUser(accessToken);
      req.user = user;
    }
    next();
  } catch (error) {
    console.log('Middle ware error: ', error);
    return res.status(401).json({
      message: 'Unauthorized: Invalid or expired token.',
      valid: false,
      error,
      message: error.message,
    });
  }
};
