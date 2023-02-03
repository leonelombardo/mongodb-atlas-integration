import express from "express"
import mongoose from "mongoose"

import { MONGODB_USER, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE } from "./db.config.js"
import { PORT } from "./config.js"
import { router } from "./router/router.js"

const app = express()

app.use(express.json())

mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`)

router(app)

app.listen(PORT, () => console.log(`Server running at ${PORT}.`))