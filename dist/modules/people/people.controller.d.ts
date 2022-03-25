import { ApiErrorResponse, ApiOkResponse } from "../../common/response/api-response";
export declare class PeopleController {
    baseURL: string;
    constructor();
    list(): Promise<ApiOkResponse>;
    findById(id: number): Promise<ApiOkResponse | ApiErrorResponse | undefined>;
}
