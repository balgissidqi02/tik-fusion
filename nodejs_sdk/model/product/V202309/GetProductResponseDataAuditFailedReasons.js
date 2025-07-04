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
exports.Product202309GetProductResponseDataAuditFailedReasons = void 0;
var Product202309GetProductResponseDataAuditFailedReasons = /** @class */ (function () {
    function Product202309GetProductResponseDataAuditFailedReasons() {
    }
    Product202309GetProductResponseDataAuditFailedReasons.getAttributeTypeMap = function () {
        return Product202309GetProductResponseDataAuditFailedReasons.attributeTypeMap;
    };
    Product202309GetProductResponseDataAuditFailedReasons.discriminator = undefined;
    Product202309GetProductResponseDataAuditFailedReasons.attributeTypeMap = [
        {
            "name": "listingPlatform",
            "baseName": "listing_platform",
            "type": "string"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string"
        },
        {
            "name": "reasons",
            "baseName": "reasons",
            "type": "Array<string>"
        },
        {
            "name": "suggestions",
            "baseName": "suggestions",
            "type": "Array<string>"
        }
    ];
    return Product202309GetProductResponseDataAuditFailedReasons;
}());
exports.Product202309GetProductResponseDataAuditFailedReasons = Product202309GetProductResponseDataAuditFailedReasons;
