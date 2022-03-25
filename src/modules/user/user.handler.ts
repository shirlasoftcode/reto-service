import { ApiResponse } from "../../common/response/api-response";
import { UserController } from "./user.controller";

const base = '/user/';
let userController = new UserController();
export const controller = async (event:any)=>{
    switch ((''+event.resource).replace(base,'')) {
        case 'list':
            return new ApiResponse(await userController.find());
        case 'list/id/{id}':
            return new ApiResponse(await userController.findById(event.pathParameters.id ? (+event.pathParameters.id):0));
        case 'insert':
            return new ApiResponse(await userController.insert(JSON.parse(event.body)));
        case 'update/{id}':
            return new ApiResponse(await userController.update(event.pathParameters.id ? (+event.pathParameters.id):0,JSON.parse(event.body)));
    }
}