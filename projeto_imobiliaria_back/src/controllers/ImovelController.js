import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default {
    async createImovel(request, response) {
        try {
            const thumb = request.file.filename;
            const { id, tipo, endereco, cidade, uf, valor, descricao } = request.body;
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });

            if (!user) {
                return response.json({ message: "Usuário não encontrado!" });
            }

            const imovel = await prisma.imovel.create({
                data: {
                    thumb,
                    tipo,
                    endereco,
                    cidade,
                    uf,
                    valor,
                    descricao,
                    userID: user.id
                }
            });

            return response.json(imovel);
        } catch (error) {
            return response.json({ message: error.message });
        }
    },

    async findAllImovel(request, response) {
        try {
            const imovel = await prisma.imovel.findMany();

            return response.json(imovel);
        } catch (error) {
            return response.json({ message: error.message });
        }
    },

    async findImovel(request, response) {
        try {
            const { id } = request.params;
            const imovel = await prisma.imovel.findUnique({ where: { id: Number(id) } });

            if (!imovel) {
                return response.json({ message: "Não foi possível localizar o imóvel!" })
            }

            return response.json(imovel);
        } catch (error) {
            return response.json({ message: error.message });
        }
    }
}