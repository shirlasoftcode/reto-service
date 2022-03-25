import { ApiOkResponse } from "../../common/response/api-response";
import { UserRepository } from "./user.repository";
import { UserRequest } from "./user.request";
export declare class UserController {
    model: UserRepository;
    constructor();
    find(): Promise<ApiOkResponse>;
    findById(id: number): Promise<ApiOkResponse>;
    insert(body: UserRequest): Promise<ApiOkResponse | import("../../common/response/api-response").ApiErrorResponse>;
    update(id: number, body: UserRequest): Promise<ApiOkResponse | import("../../common/response/api-response").ApiErrorResponse>;
}
