"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorResponse = exports.ApiOkResponse = exports.ApiResponse = void 0;
var ApiResponse = (function () {
    function ApiResponse(_body, _code) {
        if (_code === void 0) { _code = 200; }
        this.statusCode = 200;
        this.body = JSON.stringify(_body);
    }
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
var ApiOkResponse = (function () {
    function ApiOkResponse(_data, _message, _success) {
        if (_success === void 0) { _success = true; }
        this.message = _message ? _message : 'Operación exitosa';
        this.success = _success ? _success : false;
        this.data = _data ? _data : null;
    }
    return ApiOkResponse;
}());
exports.ApiOkResponse = ApiOkResponse;
var ApiErrorResponse = (function () {
    function ApiErrorResponse(ex, _message) {
        if (ex) {
            if (ex.sqlMessage != undefined) {
                this.message = _message ? _message : ex.sqlMessage;
            }
            else {
                this.message = ex.error;
            }
        }
        else {
            this.message = _message ? _message : 'Error interno';
        }
        this.data = null;
        this.success = false;
    }
    return ApiErrorResponse;
}());
exports.ApiErrorResponse = ApiErrorResponse;
//# sourceMappingURL=api-response.js.map