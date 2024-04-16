/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express'

import * as restroController from '../controllers/restro.controller'
import * as reviewsController from '../controllers/reviews.controller'
import reviewsRouter from './reviews.route'
import { validate } from '../utils/Validate'
import { createRestaurantDto } from '../Validators/create-restro.validators'
import { authenticateToken, isAdmin } from '../middleware/authentication.middleware'

const router = Router()
router.use('/:id/reviews', reviewsRouter)

router.get('/', restroController.findAll)
router.post(`/`, validate(createRestaurantDto), authenticateToken, isAdmin, restroController.create)
router.delete(`/:id`, authenticateToken, isAdmin, restroController.deleteById)
router.patch(`/:id`, authenticateToken, isAdmin, restroController.updateByID)

router.get(`/:id`,  restroController.findByID)

export default router