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
exports.Seller202309GetActiveShopsResponseData = void 0;
var Seller202309GetActiveShopsResponseData = /** @class */ (function () {
    function Seller202309GetActiveShopsResponseData() {
    }
    Seller202309GetActiveShopsResponseData.getAttributeTypeMap = function () {
        return Seller202309GetActiveShopsResponseData.attributeTypeMap;
    };
    Seller202309GetActiveShopsResponseData.discriminator = undefined;
    Seller202309GetActiveShopsResponseData.attributeTypeMap = [
        {
            "name": "shops",
            "baseName": "shops",
            "type": "Array<Seller202309GetActiveShopsResponseDataShops>"
        }
    ];
    return Seller202309GetActiveShopsResponseData;
}());
exports.Seller202309GetActiveShopsResponseData = Seller202309GetActiveShopsResponseData;
