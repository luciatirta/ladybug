const ModuleController = require('../controllers/modules')
const AuthController = require('../controllers/auth')
const auth = require('../middleware/auth')
const express = require('express')
const router = express.Router()

/*
 * Get all modules
 */
router.get(
  '/',
  ModuleController.getModuleList
)

router.get(
  '/nus/:moduleName',
  ModuleController.getModuleFromNUSMODS
)

/*
 * Get modules recommendations
 */
router.get(
  '/recommendations',
  ModuleController.giveModuleRecommendations
)

/*
 * Get particular module info
 */
router.get(
  '/:moduleId',
  ModuleController.getModuleInfo
)

/*
 * Create module route
 */
router.post(
  '/add',
  AuthController.verifyToken,
  auth.roleAuthorization(['admin', 'superadmin']),
  ModuleController.createModule
);

/*
 * Delete module route
 */
router.delete(
  '/delete',
  AuthController.verifyToken,
  auth.roleAuthorization(['admin', 'superadmin']),
  ModuleController.deleteModule
);

/*
 * Add post to array route
 */
router.put(
  '/posts/add/:moduleId',
  ModuleController.addPost
)

/*
 * Delete module from array route
 */
router.put(
  '/posts/delete/:moduleId',
  ModuleController.deletePost
)

/*
 * Get particular post info
 */
router.get(
  '/posts/:moduleId',
  ModuleController.getPostList
)

module.exports = router
