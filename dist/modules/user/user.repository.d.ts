import { Database } from "../../common/database/database";
import { ApiErrorResponse, ApiOkResponse } from "../../common/response/api-response";
import { UserEntity } from "./user.entity";
import { UserRequest } from "./user.request";
export declare class UserRepository extends Database {
    constructor();
    find(): Promise<UserEntity[]>;
    findById(_id: number): Promise<UserEntity[]>;
    findByEmail(_correo: string): Promise<UserEntity[]>;
    insert(body: UserRequest): Promise<ApiOkResponse | ApiErrorResponse>;
    update(id: number, body: UserRequest): Promise<ApiOkResponse | ApiErrorResponse>;
}
