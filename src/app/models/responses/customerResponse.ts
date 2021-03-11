import { Customer } from "../entities/customer";
import { ResponseModel } from "../responseModel";

export interface CustomerResponse extends ResponseModel {
    data: Customer[]
}