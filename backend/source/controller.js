import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Cadastrar email
export const subscribe = async (req, res) => {
   const email = req.body?.email;
   if (!email) return res.status(400).json({ message: 'Email é obrigatório' });

   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!regex.test(email)) {
      return res.status(400).json({ message: 'Formato de email inválido' });
   }

   try {
      const existing = await prisma.subscriber.findUnique({ where: { email } });
      if (existing) return res.status(400).json({ message: 'Email já cadastrado' });

      const subscriber = await prisma.subscriber.create({ data: { email } });
      res.status(201).json(subscriber);
   } catch (error) {
      res.status(500).json({ message: 'Erro ao cadastrar email' });
   }
};


// Descadastrar email
export const unsubscribe = async (req, res) => {
   const { id } = req.body;
   if (!id) return res.status(400).json({ message: 'ID é obrigatório' });

   try {
      const existing = await prisma.subscriber.findUnique({ where: { id } });
      if (!existing) return res.status(404).json({ message: 'Usuário não encontrado' });

      await prisma.subscriber.delete({ where: { id } });
      res.json({ message: 'Usuário removido com sucesso' });
   } catch (error) {
      res.status(500).json({ message: 'Erro ao remover usuário' });
   }
};

// Listar todos os emails
export const list = async (req, res) => {
   try {
      const subscribers = await prisma.subscriber.findMany();
      res.json(subscribers);
   } catch (error) {
      res.status(500).json({ message: 'Erro ao listar emails' });
   }
};
