/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as userController from '../controllers/user.controller'
import { validate } from '../utils/Validate'
import { createuserDto } from '../Validators/create-user.Validators'



const route = express.Router()
route.get('/', userController.get)
route.post('/login',userController.login)
route.post('/signup',validate(createuserDto), userController.create)

export default route;