"use strict";
/**
 * tiktok shop openapi
 * sdk for apis
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
exports.__esModule = true;
exports.Authorization202401GetWidgetTokenResponse = void 0;
var Authorization202401GetWidgetTokenResponse = /** @class */ (function () {
    function Authorization202401GetWidgetTokenResponse() {
    }
    Authorization202401GetWidgetTokenResponse.getAttributeTypeMap = function () {
        return Authorization202401GetWidgetTokenResponse.attributeTypeMap;
    };
    Authorization202401GetWidgetTokenResponse.discriminator = undefined;
    Authorization202401GetWidgetTokenResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Authorization202401GetWidgetTokenResponseData"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }
    ];
    return Authorization202401GetWidgetTokenResponse;
}());
exports.Authorization202401GetWidgetTokenResponse = Authorization202401GetWidgetTokenResponse;
