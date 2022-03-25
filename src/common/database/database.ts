import * as serverlessMysql  from "serverless-mysql";
import { DatabaseSetting } from "../../common/database/database.setting";
export class Database {
    mysql:serverlessMysql.ServerlessMysql;
    constructor(){
        this.mysql = serverlessMysql({config:DatabaseSetting.config});
    }


    async execute<T>(_query:string){
        try{
            await this.mysql.connect();
            let result = await this.mysql.query<T>(_query);
            return result;
        }
        catch(ex){throw ex;}
    }
}