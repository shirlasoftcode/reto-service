import { ApiOkResponse } from "../../common/response/api-response";
import { UserRepository } from "./user.repository";
import { UserRequest } from "./user.request";

export class UserController {
    model: UserRepository;
    constructor(){
        this.model = new UserRepository();
    }
    
    async find(){
        let result = await this.model.find();
        return new ApiOkResponse(result)
    }

    async findById(id:number){
        let result = await this.model.findById(id);
        if(result.length == 0){ return new ApiOkResponse(null,'No es posible encontrar resultados') }
        else { return new ApiOkResponse(result[0])}
    }

    async insert(body:UserRequest){
        let result = await this.model.insert(body);
        return result;   
    }

    async update(id:number,body:UserRequest){
        let result = await this.model.update(id,body);
        return result;   
    }
}