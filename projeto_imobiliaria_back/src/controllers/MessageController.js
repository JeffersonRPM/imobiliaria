import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async createMessage(request, response) {
    const { client_name, client_email, client_mensagem, userId } = request.body;
    
    try {  
      let messagem = await prisma.message.findFirst({ where: { client_email } });
          
      if (messagem) {
        return response.json({ 
          error: true,
          message: "Sua mensagem já foi cadastrada, aguarde a resposta do anunciante!" 
        });
      }
    
      messagem = await prisma.message.create({
        data: {
          client_name,
          client_email,
          client_mensagem,
          userId
        }
      });
    
      return response.json({
        error: false,
        message: "Mensagem cadastrada com sucesso!",
        messagem
      });
    
    } catch (error) {
      return response.json({ message: error.message })
    }    
  },
  
  async findMessage(request, response) {
    try {
      const { id } = request.params;

      const messagem = await prisma.message.findMany({
        where: { userId : Number(id) }
      });

      return response.json({
        messagem
      });

    } catch (error) {
      return response.json({ message: error.message })
    }
  }
};