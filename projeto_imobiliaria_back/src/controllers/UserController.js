import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

export default {
    async createUser(request, response) {

        const { name, email, password } = request.body;

        try {
            let user = await prisma.user.findUnique({ where: { email } });

            if (user) {
                return response.json({ message: "Usuário já existe!" });
            }

            const HashPassword = await hash(password, 8);

            user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: HashPassword
                }
            });

            return response.json(user);

        } catch (error) {
            return response.json({ message: error.message })
        }
    },


    async findAllUser(request, response) {
        try {
            const user = await prisma.user.findMany();
            return response.json(user);

        } catch (error) {
            return response.json({ message: error.message });
        }
    }
}