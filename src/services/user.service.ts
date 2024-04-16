/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client"
import Boom from"@hapi/boom"
import { AnyZodObject, string, z } from "zod"
import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from "express"
import * as jwt from 'jsonwebtoken'
import { createUserDtoBody, createuserDto } from "../Validators/create-user.Validators"
const prisma=new PrismaClient()

export const create = async (User:z.infer<typeof createUserDtoBody> )=>{
    const {email,password,name,isAdmin:isadmin}=User
   return await prisma.user.create({
        data:{
        email,
        password: await bcrypt.hash(User.password as string,10),
        isadmin,
        name
    
    }})
}
    
export async function login(email: string, password: string) {
  const user = await prisma.user.findFirstOrThrow({ where: { email } })

  // Compare the provided password with the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
      // Password does not match
      // If you want to throw a http error, you can. This is throw internal server error
      throw Error('Password not correct')
  }

  // Generate a token
  // Generate a token
const accessToken = jwt.sign(
    { userId: user.id, isAdmin:user.isadmin },
    process.env.ACCESS_TOKEN_KEY="HGVYGJBHKIHBKIB",
    {
        expiresIn: '1d',
    }
)
const refreshToken = jwt.sign(
  { userId: user.id, isAdmin:user.isadmin },
  process.env.REFRESH_TOKEN_KEY as  string,
  {
      expiresIn: '7d',
  }
)


// Return the token to the client
return { success: true, accessToken,refreshToken }
}
 
 

export function get(string: (params?: ({ errorMap?: z.ZodErrorMap | undefined; invalid_type_error?: string | undefined; required_error?: string | undefined; description?: string | undefined } & { coerce?: true | undefined }) | undefined) => z.ZodString) {
  throw new Error("Function not implemented.")
}
// export const login = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//       const { email, password }: { email: string; password: string } =
//           req.body
//       const { token } = await UserService.login(email, password)
//       res.json(token)
//   } catch (error) {
//       next(error)
//   }
// }

// export const signup = async (req: Request, res: Response) => {
//   const { email, password} = req.body
//   const result = await prisma.user.create({
//       data: {
      
//           email,
//           password: await bcrypt.hash(password as string, 10),
//       },
//   })
//   res.json(result)
// }

