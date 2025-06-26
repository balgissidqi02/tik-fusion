"use strict";
exports.__esModule = true;
exports.TikTokShopNodeApiClient = void 0;
var create_api_instance_1 = require("./create-api-instance");
var TikTokShopNodeApiClient = /** @class */ (function () {
    function TikTokShopNodeApiClient(_a) {
        var config = _a.config;
        this.config = config;
        var api = (0, create_api_instance_1.createApiInstance)(this).api;
        this.api = api;
    }
    return TikTokShopNodeApiClient;
}());
exports.TikTokShopNodeApiClient = TikTokShopNodeApiClient;
