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
exports.Product202309RecoverProductsResponse = void 0;
var Product202309RecoverProductsResponse = /** @class */ (function () {
    function Product202309RecoverProductsResponse() {
    }
    Product202309RecoverProductsResponse.getAttributeTypeMap = function () {
        return Product202309RecoverProductsResponse.attributeTypeMap;
    };
    Product202309RecoverProductsResponse.discriminator = undefined;
    Product202309RecoverProductsResponse.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Product202309RecoverProductsResponseData"
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
    return Product202309RecoverProductsResponse;
}());
exports.Product202309RecoverProductsResponse = Product202309RecoverProductsResponse;
