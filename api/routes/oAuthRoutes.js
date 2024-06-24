import express from 'express';
import oAuthController from '../controllers/oAuthController.js';

const router = express.Router();

router.get('/callback', oAuthController.handleCallback);

export default router;
