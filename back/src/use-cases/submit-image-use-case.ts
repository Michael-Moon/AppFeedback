import { json } from 'stream/consumers';
import { ChangeImgRepository } from './../repositories/changeimg-repository';


interface SubmitImgCaseRequest {
    img: string;
}

export class SubmitImageUseCase {

    constructor(
        private changeimgRepository: ChangeImgRepository,
    ){}

    async execute(request: SubmitImgCaseRequest){

        const { img } = request;

        const image =  await this.changeimgRepository.execute({
            img,
        })      
        return image;
    }
}