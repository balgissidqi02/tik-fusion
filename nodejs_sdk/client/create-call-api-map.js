"use strict";
exports.__esModule = true;
exports.createCallApiMap = void 0;
var api_1 = require("../api");
var createCallApiMap = function (basePath, interceptor) {
    // @ts-ignore
    var callApiMap = {};
    for (var apiClientName in api_1.API_OBJECT) {
        if (Object.prototype.hasOwnProperty.call(api_1.API_OBJECT, apiClientName)) {
            var ApiClient = api_1.API_OBJECT[apiClientName];
            var apiClient = new ApiClient(basePath);
            if (interceptor)
                apiClient.addInterceptor(interceptor);
            //@ts-ignore
            callApiMap[apiClientName] = apiClient;
        }
    }
    return callApiMap;
};
exports.createCallApiMap = createCallApiMap;
