
export interface ImageDataDTO{
    id: string;
	img: string;
}

export interface GetImgRepository {
    execute: () => Promise<ImageDataDTO[]>;
}