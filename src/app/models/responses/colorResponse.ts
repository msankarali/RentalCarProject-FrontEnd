import { Color } from "../entities/color";
import { ResponseModel } from "../responseModel";

export interface ColorResponse extends ResponseModel {
    data: Color[]
}