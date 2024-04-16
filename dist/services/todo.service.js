"use strict";
// eslint-disable @typescript-eslint/no-unused-vars 
// import { PrismaClient } from "@prisma/client"
// import Boom from"@hapi/boom"
// import { AnyZodObject, string } from "zod"
// const prisma=new PrismaClient()
// export const getTodos = (active: boolean) => {
//   return prisma.todo.findMany()
// }
// export const create = async (body: any,userId:number) => {
//   console.log(body, ' yo aunu parne')
//     return prisma.todo.create({
//       data:{
//        title: body.title,
//        active: body.active, 
//        userId: userId
//       }
//     })
// }
// export const update = async (id: number, todo: any) => {
//   await prisma.todo.update({
//     data:{
//       title: todo.title,
//       active: true
//     },
//     where:{
//         id: id
//     }
//   })
// }
// export const remove = async ( id: number ) => {
// try {
// await prisma.todo.delete ({ where: { id: id } })
// } catch (err: any){
//   if(err.code ==='P2025'){
//     throw Boom.notFound('post not found')
//   }else{
//     throw err
//   }
// } 
// }
// export const findPostById =async (id:any) => {
//   try{
//     return await prisma.todo.findUniqueOrThrow({
//       where: {id:Number(id)},
//     })
//   }catch(err:any){
// console.log(err)
// if(err.code ==='P2025'){
//   throw Boom.notFound('post not found')
// }else{
//   throw err
// }
//   }
// }
// export const updateTodoById = async (id: Number, todo: any) => {
//   return await prisma.todo.update({
//       where: { id: Number(id) },
//       data: {
//           title: todo.title
//       },
//   })
// }
// export const deleteById = async (id: Number, loggedInUserId: number) => {
//   const todo = await prisma.todo.delete({
//       where: {
//           id: Number(id),
//       },
//   })
//   if(todo.userId !== loggedInUserId){
//       throw Boom.forbidden("This ain't your todo")
//   }
//   return await prisma.todo.delete({
//       where: {
//           id: Number(id),
//       },
//   })
// }
//# sourceMappingURL=todo.service.js.map