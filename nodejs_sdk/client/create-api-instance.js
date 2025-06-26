"use strict";
exports.__esModule = true;
exports.createApiInstance = void 0;
var create_trans_request_options_1 = require("./create-trans-request-options");
var create_call_api_map_1 = require("./create-call-api-map");
var basePath = 'https://open-api.tiktokglobalshop.com';
var createApiInstance = function (client) {
    var _a;
    var path = ((_a = client.config) === null || _a === void 0 ? void 0 : _a.basePath) || basePath;
    var interceptor = (0, create_trans_request_options_1.createTransRequestOptionsInterceptor)(client);
    var apiInstanceGroup = (0, create_call_api_map_1.createCallApiMap)(path, interceptor);
    return {
        api: apiInstanceGroup
    };
};
exports.createApiInstance = createApiInstance;
