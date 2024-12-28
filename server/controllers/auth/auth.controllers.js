 import {supabase } from "../../utils/dbConn.js"

const auth = supabase.auth;

const baseUrl = "http://localhost:8080";


export const signup = async (req, res) => {
  const { email, password, firstName, lastName, organization } = req.body;

  try {
    const { data, error } = await auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          organization: organization,
        }
      }
    });
    // implement this error check in the frontend too
    if (error) {
      if (error.code === 'weak_password'){
        return res.status(422).json({ error, message:'Password must contain atleast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 symbol' });
      } else {
        return res.status(error.status).json({ error, message: error.message });
      }
    }
    const { access_token, refresh_token } = data.session

    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict', 
      maxAge: 3600 * 1000, 
    })
    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict', 
      maxAge: 7 * 24 * 3600 * 1000, 
    });

    return res.status(200).json({
      message: "Login Successful",
      user: data.user
    });
  } catch (error) {
    res.status(500).json(error)
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("extracted email and pass")
  try {
    const { data, error } = await auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.log(error.message);
      console.log("Returning 401")
      return res.status(401).json({ message: error.message });
    } 
    
    const { access_token, refresh_token } = data.session
    console.log("extracted tokens")
    
    
    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict', 
      maxAge: 7 * 24 * 3600 * 1000, 
    });
    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Strict', 
      maxAge: 3600 * 1000, 
      
    })
    console.log("Returning 200")
    return res.status(200).json({
      message: "Login Successful",
      user: data.user
    });
  } catch (error) {
    res.status(500).json(error)
  }
};

export const loginWithOAuth = async (req, res) => {
  try {
    const { data, error } = await auth.signInWithOAuth({
      provider: "google",
      options:{
        redirectTo: baseUrl,
      }
    });

    if (error) {
      console.log(error.message);
      return res.status(400).json({ message: error.message });
    }
    return res.status(200).json({ url: data.url });
  } catch (error) {
    return res.status(500).json(error)
  }
};

export const signout = async (req, res) => {
  try {
    const { data, error } = await auth.signOut()

    res.clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    });
    res.clearCookie('refresh_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    });

    if (error) {
      return res.status(400).json({error})
    }
    return res.status(201).json({message: "Logged out succesfully", data})

  } catch (error) {
    return res.status(500).json({message: "Internal server error"})
  }
}