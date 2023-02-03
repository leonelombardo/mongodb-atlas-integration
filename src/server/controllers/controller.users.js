import { Router } from "express"
import { usersModel } from "../models/model.users.js"

export const usersController = Router()

usersController.get("/", async (req, res) => {
    try{
        const users = await usersModel.find()

        res.status(200).json({ status: 200, ok: true, response: users })
    }catch(error){
        res.status(500).json({ status: 500, ok: false, response: error })
    }
})

usersController.post("/", async (req, res) => {
    const { first_name, last_name, email } = req.body

    if(!first_name || !last_name || !email) return res.status(400).json({ status: 400, ok: false, response: "Missing fields." })

    const user = { first_name, last_name, email }

    try{
        await usersModel.create(user)

        res.status(201).json({ status: 201, ok: true, response: "User created." })
    }catch(error){
        res.status(500).json({ status: 500, ok: false, response: error })
    }
})

usersController.put("/:id", async (req, res) => {
    const { id } = req.params
    const { first_name, last_name, email } = req.body

    if(!first_name || !last_name || !email) return res.status(400).json({ status: 400, ok: false, response: "Missing fields." })

    const update = { first_name, last_name, email }

    try{
        const found = await usersModel.findById(id)

        if(!found) return res.status(404).json({ status: 404, ok: false, response: "User not found." })

        await usersModel.updateOne({ _id: id }, update)

        res.status(200).json({ status: 200, ok: true, response: "User updated." })
    }catch(error){
        res.status(500).json({ status: 500, ok: false, response: error })
    }
})

usersController.delete("/:id", async (req, res) => {
    const { id } = req.params

    try{
        const found = await usersModel.findById(id)

        if(!found) return res.status(404).json({ status: 404, ok: false, response: "User not found." })

        await usersModel.deleteOne({ _id: id })

        res.status(200).json({ status: 200, ok: true, response: "User deleted." })
    }catch(error){
        res.status(500).json({ status: 500, ok: false, response: error })
    }
})