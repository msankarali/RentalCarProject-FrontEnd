import { CarImage } from "../entities/carImage";

export interface CarDetailsWithImagesDto {
    carId: number;
    brandName: string;
    carName: string;
    colorName: string;
    dailyPrice: number;
    modelYear: number;
    description: string;
    carImages: CarImage[]
}