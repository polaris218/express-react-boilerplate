import express from 'express';
import serverSideRendering from '../controllers/ssrendering';

const router = express.Router();

router.use(serverSideRendering);

export default router;