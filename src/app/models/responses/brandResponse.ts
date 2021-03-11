import { Brand } from "../entities/brand";
import { ResponseModel } from "../responseModel";

export interface BrandResponse extends ResponseModel {
    data: Brand[]
}