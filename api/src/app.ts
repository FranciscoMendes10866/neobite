import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import UserRouter from './root/root.router'

const { NODE_ENV } = process.env
const app = express()

if (NODE_ENV !== 'TESTING') app.use(morgan('dev'))

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(compression())
app.use('/', UserRouter)

export default app
