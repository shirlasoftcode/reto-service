import { ApiResponse } from "../../common/response/api-response";
import { PeopleController } from "./people.controller";

const base = '/people/';
const peopleController = new PeopleController();
export const controller = async (event:any)=>{
    switch ((''+event.resource).replace(base,'')) {
        case 'list':
            return new ApiResponse(await peopleController.list());
        case 'list/id/{id}':
            return new ApiResponse(await peopleController.findById(event.pathParameters.id ? (+event.pathParameters.id):0));
    }
}