import * as serverlessMysql from "serverless-mysql";
export declare class Database {
    mysql: serverlessMysql.ServerlessMysql;
    constructor();
    execute<T>(_query: string): Promise<T>;
}
