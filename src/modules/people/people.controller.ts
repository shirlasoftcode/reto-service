import { ApiErrorResponse, ApiOkResponse } from "../../common/response/api-response";
import axios from "axios";
import { PeopleResponse } from "./people.response";
export class PeopleController {
    baseURL ='https://swapi.py4e.com/api/';
    constructor(){
        
    }

    async list(){
        let result = await axios.get(`${this.baseURL}people/`);
        return new ApiOkResponse(result.data.results.map(x=> new PeopleResponse(x)));
    }

    async findById(id:number){
        try{
            let result = await axios.get(`${this.baseURL}people/${id}/`);
        if(!result.data) return new ApiOkResponse(null,'No es posible encontrar');
        return new ApiOkResponse(new PeopleResponse(result.data));
        }
        catch(ex){ 
            if(ex.response) { if(+ex.response.status == 404) { return new ApiErrorResponse(null,'No es posible encontrar elemento');} }
            else{ return new ApiErrorResponse(ex)}
        }
    }
}