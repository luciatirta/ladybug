const PostController = require('../controllers/posts')
const express = require('express')
const router = express.Router()

/*
 * Create post route
 */
router.get('/', PostController.getPostList)

/*
 * Create post route
 */
router.post('/add', PostController.createPost)

/*
 * Update post route
 */
router.post('/edit/:postId', PostController.updatePost)

/*
 * Delete post route
 */
router.delete('/delete', PostController.deletePost)

module.exports = router
