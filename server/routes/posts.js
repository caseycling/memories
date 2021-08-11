import express from 'express';

//Destructure for individual named exports
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);

export default router;
