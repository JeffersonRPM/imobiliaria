import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default {
    async createSession(request, response) {
        try {
            const { email, password } = request.body;
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                return response.json({ message: "E-mail ou senha incorretos!" })
            }

            const checkPassword = await compare(password, user.password);

            if (!checkPassword) {
                return response.json({ message: "E-mail ou senha incorretos!" })
            }

            const token = jwt.sign({ id: user.id }, "202cb962ac59075b964b07152d234b70", {
                expiresIn: '1d'
            });

            delete user.password

            return response.json({ user, token });

        } catch (error) {
            return response.json({ message: error.message })
        }
    }
}