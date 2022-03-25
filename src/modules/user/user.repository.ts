import { Database } from "../../common/database/database";
import { ApiErrorResponse, ApiOkResponse } from "../../common/response/api-response";
import { UserEntity } from "./user.entity";
import { UserRequest } from "./user.request";
export class UserRepository extends Database {
    constructor(){
        super()
    }

    async find(){
        try{
            let result = await this.execute<UserEntity[]>('select * from user');
            return result;
        }
        catch(ex){throw ex;}
    }

    async findById(_id:number){
        try{
            let result = await this.execute<UserEntity[]>(`select * from user where id=${_id}`);
            return result;
        }
        catch(ex){throw ex;}
    }

    async findByEmail(_correo:string){
        try{
            let result = await this.execute<UserEntity[]>(`select * from user where correo='${_correo}'`);
            return result;
        }
        catch(ex){throw ex;}
    }

    async insert(body:UserRequest){
        try{
            let m = await this.findByEmail(body.correo);
            if(m.length > 0) return new ApiOkResponse(null,`El correo electrónico \"${body.correo}\" ya está registrado, intente con otro.`,false);
            let sql = `insert into user (nombre,apellidos,correo,clave,celular,direccion) 
            values ('${body.nombre}','${body.apellidos}','${body.correo}','${body.clave}','${body.celular}','${body.direccion}');`;
            let result = await this.execute<any>(sql);
            if(result.affectedRows == 0) return new ApiOkResponse(null,'No es posible registrar');
            return new ApiOkResponse(null,'Nuevo usuario registrado en el sistema');
        }
        catch(ex){
            return new ApiErrorResponse(ex);
        }
    }

    async update(id:number,body:UserRequest){
        try{
            let sql = `update user set nombre ='${body.nombre}', apellidos='${body.apellidos}', correo='${body.correo}', clave= '${body.clave}', celular = '${body.celular}', direccion= '${body.direccion}' where id = ${id}`;
            let result = await this.execute<any>(sql);
            if(result.affectedRows == 0) return new ApiOkResponse(null,'No es posible actualizar');
            return new ApiOkResponse(null,'Datos de usuario fueron actualizados');
        }
        catch(ex){
            return new ApiErrorResponse(ex);
        }
    }

}