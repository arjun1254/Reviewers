/* eslint-disable @typescript-eslint/no-unused-vars */


/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { query } from 'express'
import { z } from 'zod'
import { isAdmin } from '../middleware/authentication.middleware'

export const createUserDtoBody =  z.object({
    email: z.string({
        required_error: 'email is required',
    }),
  password: z.string({
        required_error: 'password is required',
    }),
    isAdmin:z.boolean().optional().default(false),
    name: z.string({
        required_error: 'name is required',
    
    })
})


export const createuserDto = z.object({
    body: createUserDtoBody
}) 

