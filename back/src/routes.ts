import { NodemailerMailAdapter } from './adapters/nodemailer/nodelerailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import express from 'express';


export const routes = express.Router();





routes.post('/feedbacks', async (req, res) =>{

    const { type, comment, screenshot }= req.body;
  
    try {
      
      const prismaFeedbackRepository = new PrismaFeedbacksRepository();
      const nodemailerMailAdapter = new NodemailerMailAdapter();
      const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository,nodemailerMailAdapter);
  
      await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
      })
   
  
      return res.status(201).send();

    } catch (error) {
      console.log(error)
      return res.status(500).send();
    }
 })
 