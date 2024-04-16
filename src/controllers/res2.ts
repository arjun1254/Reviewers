// import { NextFunction, Request, Response } from "express"
// import * as RestroService from '../services/restro.service'
// import HttpStatusCodes from "http-status-codes"


// export const getAll = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     console.log((req as any).user)
//         const user_id = (req as any).user.user_id;
//         const data = await RestroService.getAll(user_id)
//         res.json(data)
//     } catch (error) {
//         next(error)
//     }
// }


// export const create = async (req: Request, res: Response, next: NextFunction) => {
//   try{
//     const restro: any = req.body
//     console.log(req.body, ' is request body')
//     const restaurants = await RestroService.create(req.body, (req as any).user.user_id)
//   res.status(HttpStatusCodes.CREATED).send(restaurants)
// } catch(error){
//   next(error)
// }
// }

// export const update = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//   const restro: any = req.body
//   const id = Number(req.params.id)
//   const restaurants = await RestroService.update(id, restro)
//   res.status(HttpStatusCodes.OK).send(restaurants);
//   } catch(error) {
//     next(error)
//   }
// }


// export const remove = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id } = req.params
//   // @TODO: Handle errors
//   const restaurants = await RestroService.remove(Number(id))
//   res.status(HttpStatusCodes.NO_CONTENT).send()
// }catch(error){
//   next(error)
// }
// }



// // try {
// //   const id = Number(req.params.id)
// // console.log(id, ' request params ko id yo ho hai')
// // const todos = await RestroService.remove(id)
// // res.status(HttpStatusCodes.GONE).send()
// // } catch (error) {
// // next(error)
// // }

// export const findOne =async (req: Request, res: Response, next: NextFunction) => {
//   try {
//       const  id  = Number(req.params.id);
//       const restaurants =  await RestroService.findOne(id);

//       res.status(HttpStatusCodes.ACCEPTED).send(restaurants);
//   } catch (error: any) {
//     next(error);
//   }
//   }


// //   res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error.message);

// //   if (!todo) {
// //     res.status(HttpStatusCodes.NOT_FOUND).send('Todo not found');
// //   } else {
// //     res.status(HttpStatusCodes.ACCEPTED).send(todo);
// //   }
