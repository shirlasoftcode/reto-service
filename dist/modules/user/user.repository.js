"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var database_1 = require("../../common/database/database");
var api_response_1 = require("../../common/response/api-response");
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this) || this;
    }
    UserRepository.prototype.find = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.execute('select * from user')];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                    case 2:
                        ex_1 = _a.sent();
                        throw ex_1;
                    case 3: return [2];
                }
            });
        });
    };
    UserRepository.prototype.findById = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.execute("select * from user where id=" + _id)];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                    case 2:
                        ex_2 = _a.sent();
                        throw ex_2;
                    case 3: return [2];
                }
            });
        });
    };
    UserRepository.prototype.findByEmail = function (_correo) {
        return __awaiter(this, void 0, void 0, function () {
            var result, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.execute("select * from user where correo='" + _correo + "'")];
                    case 1:
                        result = _a.sent();
                        return [2, result];
                    case 2:
                        ex_3 = _a.sent();
                        throw ex_3;
                    case 3: return [2];
                }
            });
        });
    };
    UserRepository.prototype.insert = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var m, sql, result, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, this.findByEmail(body.correo)];
                    case 1:
                        m = _a.sent();
                        if (m.length > 0)
                            return [2, new api_response_1.ApiOkResponse(null, "El correo electr\u00F3nico \"" + body.correo + "\" ya est\u00E1 registrado, intente con otro.", false)];
                        sql = "insert into user (nombre,apellidos,correo,clave,celular,direccion) \n            values ('" + body.nombre + "','" + body.apellidos + "','" + body.correo + "','" + body.clave + "','" + body.celular + "','" + body.direccion + "');";
                        return [4, this.execute(sql)];
                    case 2:
                        result = _a.sent();
                        if (result.affectedRows == 0)
                            return [2, new api_response_1.ApiOkResponse(null, 'No es posible registrar')];
                        return [2, new api_response_1.ApiOkResponse(null, 'Nuevo usuario registrado en el sistema')];
                    case 3:
                        ex_4 = _a.sent();
                        return [2, new api_response_1.ApiErrorResponse(ex_4)];
                    case 4: return [2];
                }
            });
        });
    };
    UserRepository.prototype.update = function (id, body) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, result, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        sql = "update user set nombre ='" + body.nombre + "', apellidos='" + body.apellidos + "', correo='" + body.correo + "', clave= '" + body.clave + "', celular = '" + body.celular + "', direccion= '" + body.direccion + "' where id = " + id;
                        return [4, this.execute(sql)];
                    case 1:
                        result = _a.sent();
                        if (result.affectedRows == 0)
                            return [2, new api_response_1.ApiOkResponse(null, 'No es posible actualizar')];
                        return [2, new api_response_1.ApiOkResponse(null, 'Datos de usuario fueron actualizados')];
                    case 2:
                        ex_5 = _a.sent();
                        return [2, new api_response_1.ApiErrorResponse(ex_5)];
                    case 3: return [2];
                }
            });
        });
    };
    return UserRepository;
}(database_1.Database));
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map