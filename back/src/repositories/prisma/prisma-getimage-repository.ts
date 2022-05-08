import { prisma } from './../../prisma';
import { ChangeImgData, ChangeImgRepository } from '../changeimg-repository';
import { GetImgRepository, ImageDataDTO } from '../getimg-repository';



export class PrismaGEtImageRepository implements GetImgRepository  {
     async execute(){
      return  await prisma.changeImg.findMany();
    }
    
}