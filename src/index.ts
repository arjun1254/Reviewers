import express from 'express'
//import todoRouter from './routes/todo.route'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import UserRouter from './routes/user.route'
import RestroRouter from './routes/restro.route'
import cors from 'cors'
import { genericErrorHandler } from './middleware/error.middleware'
import router from './routes/reviews.route'
const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

//app.use('/todos', todoRouter)
app.use('/users', UserRouter)
app.use('/restaurant', RestroRouter)
app.use(genericErrorHandler)
app.listen(PORT, () => {
  console.log('Running on port', PORT)
})



export default router;
