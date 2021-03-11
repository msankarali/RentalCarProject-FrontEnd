import { Customer } from "./customer";
import { ResponseModel } from "./responseModel";

export interface CustomerResponse extends ResponseModel {
    data: Customer[]
}