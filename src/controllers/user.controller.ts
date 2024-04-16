/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import * as  userservice from '../services/user.service'
import HttpStatusCodes from "http-status-codes"
import { string } from "zod"
import bcrypt from "bcrypt"
import { Boom } from "@hapi/boom"
import prisma from "../libs/prisma"


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const create = async (req: Request, res: Response, next: NextFunction) => {
  const user:any = req.body
  console.log(req.body, ' is request body')
  const createdUser = await userservice.create(user)
  res.status (HttpStatusCodes.CREATED).send(createdUser)
}
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try{
   const email = req.query.email
   const user = await userservice.get(string)
  res.status (HttpStatusCodes.CREATED).send(user)
}
 catch (error) {
  next(error)
}
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
      const { email, password }: { email: string; password: string } =
          req.body
      const { accessToken,refreshToken} = await userservice.login(email, password)
      res.cookie('refreshToken',refreshToken,
      {httpOnly:true})
      res.json(accessToken)
  } catch (error) {
      next(error)
  }
}