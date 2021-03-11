import { CarDto } from "./carDto";
import { ResponseModel } from "./responseModel";

export interface CarDtoResponse extends ResponseModel {
    data: CarDto[]
}