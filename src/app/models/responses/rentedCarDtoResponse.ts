import { RentedCarDto } from "../dtos/rentedCarDto";
import { ResponseModel } from "../responseModel";

export interface RentedCarDtoResponse extends ResponseModel {
    data: RentedCarDto[]
}