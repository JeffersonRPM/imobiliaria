import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
    async createImovel(request, response) {
        try {
            const thumb = request.file.filename;
            const { id, name, email, telefone, tipo, endereco, cidade, uf, valor, descricao } = request.body;
            
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });

            if (!user) {
                return response.json({ message: "Usuário não encontrado!" });
            }

            const slugify = str =>
                str
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '');

            const slug = slugify(tipo);

            const imovel = await prisma.imovel.create({
                data: {
                    thumb,
                    tipo,
                    endereco,
                    cidade,
                    uf,
                    valor,
                    descricao,
                    name,
                    email,
                    telefone,
                    slug,
                    userId: user.id
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
            const { slug } = request.params;
            const imovel = await prisma.imovel.findFirst({
                where: {
                    slug: slug
                },
            });

            if (!imovel) {
                return response.json({ message: "Não foi possível localizar o imóvel!" })
            }

            return response.json(imovel);
        } catch (error) {
            return response.json({ message: error.message });
        }
    }
}