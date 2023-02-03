import { usersController } from "../controllers/controller.users.js"

export const router = (app) => {
    app.use("/", usersController)
}