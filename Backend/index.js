import  "dotenv/config"
import "./database/connectDB.js"
import express from "express"
import cors from 'cors'
import drinkRoutes from './routes/routes.js'

const app = express()
const whiteList = [process.env.ORIGIN]

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || whiteList.includes(origin)) return callback(null, origin)
        return callback(`No autorizado por CORS. origin: ${origin}. No autorizado`)
    },
    credentials: true
}))

app.use(express.json())
app.use("/api/v1/drinks", drinkRoutes)

app.use(express.static('public'))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor iniciado 🔥🔥🔥 http://localhost:${PORT}`))