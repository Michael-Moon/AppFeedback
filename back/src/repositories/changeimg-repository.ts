export interface ChangeImgData {
    img: string
}
export interface ImageDataDTO{
    id: string;
	img: string;
}

export interface ChangeImgRepository {
    execute: (data: ChangeImgData) => Promise<ImageDataDTO>;
}