import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    return res.json({ hw: 'Hello from the api gateway 🦷' })
})

app.listen(4000, () => console.log('Api Gateway at http://localhost:4000 👘'))
