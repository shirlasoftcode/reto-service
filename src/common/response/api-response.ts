export class ApiResponse {
    statusCode:number;
    body:string

    constructor(_body:any, _code:number = 200){
        this.statusCode = 200;
        this.body = JSON.stringify(_body);
    }
}

export interface ApiResponseI {
    success:boolean
    message:string
    data:any
}

export class ApiOkResponse implements ApiResponseI {
    success:boolean
    message:string
    data:any
    constructor(_data?:any,_message?:string, _success:boolean = true){
        this.message = _message ? _message :'Operación exitosa';
        this.success = _success ? _success : false;
        this.data = _data ? _data : null;
    }
}

export class ApiErrorResponse implements ApiResponseI {
    success:boolean
    message:string
    data:any
    constructor(ex:any,_message?:string){
        if(ex){
            if(ex.sqlMessage != undefined){
                this.message = _message ? _message : ex.sqlMessage;
            } else {
                this.message = ex.error;
            }
        } else {
            this.message = _message ? _message : 'Error interno';
        }
        
        this.data = null;
        this.success = false;
    }
}

