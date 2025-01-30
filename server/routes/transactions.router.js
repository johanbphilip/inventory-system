import express from 'express';

import { getAllTransactions } from '../controllers/transactions/getMethods.controller.js';

export const router = express.Router();

//transactions
router.get('/all', getAllTransactions);
