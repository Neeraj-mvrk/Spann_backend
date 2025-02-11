import express from 'express';
import { getProducts } from '../controllers/productController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/',authenticate, getProducts);

export default router;