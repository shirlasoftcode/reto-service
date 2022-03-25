export declare class ApiResponse {
    statusCode: number;
    body: string;
    constructor(_body: any, _code?: number);
}
export interface ApiResponseI {
    success: boolean;
    message: string;
    data: any;
}
export declare class ApiOkResponse implements ApiResponseI {
    success: boolean;
    message: string;
    data: any;
    constructor(_data?: any, _message?: string, _success?: boolean);
}
export declare class ApiErrorResponse implements ApiResponseI {
    success: boolean;
    message: string;
    data: any;
    constructor(ex: any, _message?: string);
}
