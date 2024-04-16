/* eslint-disable @typescript-eslint/no-unused-vars */
import{ query } from 'express'
import { z } from 'zod'


export const removetodoDto = z.object({
    query: z.object({
        id: z.number({
            required_error: 'id is required',
        })
     
})
}) 