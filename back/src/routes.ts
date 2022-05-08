import { NodemailerMailAdapter } from './adapters/nodemailer/nodelerailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import express from 'express';
import { PrismaGEtImageRepository } from './repositories/prisma/prisma-getimage-repository';
import { GetImageUseCase } from './use-cases/get-image-use-case';
import { PrismaChangeImgRepository } from './repositories/prisma/prisma-changeimg-repository';
import { SubmitImageUseCase } from './use-cases/submit-image-use-case';


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

 routes.post('/changeImg', async (req, res) => {

  const  { img } = req.body

  try {

      const prismaChangeImgRepository = new PrismaChangeImgRepository();
      const submitImageUseCase  = new SubmitImageUseCase(prismaChangeImgRepository);

      const image =  await submitImageUseCase.execute({
          img,
      })
      
      return res.json(image).status(201).send();
  } catch (error) {
      console.log(error)
      return res.status(500).send()
  }
})



routes.get('/changeImg', async (req, res) => {   

  try {

      const prismaChangeImgRepository = new PrismaGEtImageRepository();
      const getImageUseCase  = new GetImageUseCase(prismaChangeImgRepository);

      let im: any;
      const image =  await getImageUseCase.execute();       
     
      image.forEach( (element, index) => {            
          if(image.length === index+1){
              console.log(element)
              im = element;
             
          }
      });
     
      return res.json(im).status(200).send();
  } catch (error) {
      console.log(error)
      return res.status(500).send()
  }
})
 