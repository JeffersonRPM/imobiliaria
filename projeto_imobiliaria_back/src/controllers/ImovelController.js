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

            let slugify = str =>
                str
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '');

            let slug = slugify(tipo);

            const existingImovel = await prisma.imovel.findUnique({ where: { slug } });

            if (existingImovel) {
                let i = 1;
                while (await prisma.imovel.findUnique({ where: { slug: `${slug}${i}` } })) {
                    i++;
                }
                
                slug = `${slug}${i}`;
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
                    name,
                    email,
                    telefone,
                    slug,
                    userId: user.id
                }
            });

            return response.json({
                error: true,
                message: "Imóvel cadastrado com sucesso!",
                imovel
            });
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