import express from 'express';

import {
  signup,
  login,
  loginWithOAuth,
  signout,
} from '../controllers/auth/auth.controllers.js';

export const router = express.Router();

// auth
router.post('/signup', signup);
router.post('/login', login);
router.post('/login/oAuth', loginWithOAuth);
router.post('/signout', signout);
