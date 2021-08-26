import express from 'express';

//Destructure for individual named exports
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
