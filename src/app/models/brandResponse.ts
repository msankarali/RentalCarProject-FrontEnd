import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponse extends ResponseModel {
    data: Brand[]
}