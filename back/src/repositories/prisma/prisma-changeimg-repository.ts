import { prisma } from './../../prisma';
import { ChangeImgData, ChangeImgRepository } from '../changeimg-repository';



export class PrismaChangeImgRepository implements ChangeImgRepository {
    async execute({ img }: ChangeImgData){
        return  await prisma.changeImg.create({
            data: {
                img
            }
        });        
    };

    
}