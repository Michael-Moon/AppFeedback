import { GetImgRepository } from './../repositories/getimg-repository';
import { PrismaGEtImageRepository } from './../repositories/prisma/prisma-getimage-repository';
import { PrismaChangeImgRepository } from './../repositories/prisma/prisma-changeimg-repository';


export class GetImageUseCase {

    constructor(
        private getimgRepository: GetImgRepository,
    ){}

    async execute(){ 

        const image =  await  this.getimgRepository.execute();

        return image;
    }
}