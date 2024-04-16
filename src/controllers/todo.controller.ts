// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { NextFunction, Request, Response } from "express"
// import * as  TodoService from '../services/todo.service'
// import HttpStatusCodes from "http-status-codes"
// export const get = async (req: Request, res: Response, next: NextFunction) => {
//   const activeStatus = req.query.active
//   const todos = await TodoService.getTodos(Boolean(activeStatus))
//   res.send(todos)
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const create = async (req: Request, res: Response, next: NextFunction) => {
//   const todo:any = req.body
//   console.log(req.body, ' is request body')
//   const todos = await TodoService.create(req.body,(req as any).user.userId)
  
//   res.status (HttpStatusCodes.CREATED).send(todos)
// }


// export const update = async (req: Request, res: Response, next: NextFunction) => {
//   const todo: any = req.body
//   const id = Number(req.params.id)
//   const todos = await TodoService.update(id, todo)
//   res.status (HttpStatusCodes.OK).send(todos)
// }
// export const remove = async (req: Request, res: Response, next: NextFunction) => {
//   const id = Number(req.params.id)
//   console.log(id, ' request params ko id yo ho hai')
//   const todos = await TodoService.remove(id)
//   res.status (HttpStatusCodes.GONE).send()
// }
// export const findPostById = async (req: Request, res: Response, next: NextFunction) => {
//   try{
   
//     const data= await TodoService.findPostById(req.params.id)
//     res.json(data)
//   }catch(err){
//     next(err)
//   }
  
// }
// export const updateByID = async (req: Request, res: Response) => {
//   const { id } = req.params

//   // @TODO: Handle errors
//   const post = await TodoService.updateTodoById(Number(id), req.body)

//   res.status(HttpStatusCodes.CREATED).json(post)
// }

// export const deleteById = async (req: Request, res: Response) => {
//   const { id } = req.params
//   // @TODO: Handle errors
//   const post = await TodoService.deleteById(Number(id), (req as any).user.userId)
//   res.status(HttpStatusCodes.NO_CONTENT).json(post)
// }

