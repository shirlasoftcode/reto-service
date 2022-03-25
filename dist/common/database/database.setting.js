"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSetting = void 0;
exports.DatabaseSetting = {
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD != 'NULL' ? process.env.DB_PASSWORD : ''
    }
};
//# sourceMappingURL=database.setting.js.map