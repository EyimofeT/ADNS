import express from 'express';
import { getUsers, createUsers, getUser } from './controller.js';
import {createuser_middleware} from './middleware.js'

const router = express.Router();


// all routes in here are starting with /users
router.get('/',getUsers)
router.post('/',createuser_middleware,createUsers)
router.get('/:id',getUser)

export default router;