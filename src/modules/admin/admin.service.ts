import { hashPassword, comparePassword } from "../../utils/hash.util"
import * as repository from "./admin.repository"

export const createAdmin = async (data: any) => {
    const hashedPassword = await hashPassword(data.password)

    const newAdmin = await repository.create({ ...data, password: hashedPassword })

    return newAdmin
}

export const loginAdmin = async (username: string, password: string) => {
    const admin = await repository.findByUsername(username)

    if (!admin) {
        throw new Error("Admin not found")
    }

    const isValid = await comparePassword(password, admin.password)

    if (!isValid) {
        throw new Error("Invalid credentials")
    }

    return admin
}


export const findByUsername = async (username: string) => {
    return await repository.findByUsername(username)
}