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
exports.Product202309EditProductRequestBodySkusPreSaleFulfillmentType = void 0;
var Product202309EditProductRequestBodySkusPreSaleFulfillmentType = /** @class */ (function () {
    function Product202309EditProductRequestBodySkusPreSaleFulfillmentType() {
    }
    Product202309EditProductRequestBodySkusPreSaleFulfillmentType.getAttributeTypeMap = function () {
        return Product202309EditProductRequestBodySkusPreSaleFulfillmentType.attributeTypeMap;
    };
    Product202309EditProductRequestBodySkusPreSaleFulfillmentType.discriminator = undefined;
    Product202309EditProductRequestBodySkusPreSaleFulfillmentType.attributeTypeMap = [
        {
            "name": "handlingDurationDays",
            "baseName": "handling_duration_days",
            "type": "number"
        },
        {
            "name": "releaseDate",
            "baseName": "release_date",
            "type": "number"
        }
    ];
    return Product202309EditProductRequestBodySkusPreSaleFulfillmentType;
}());
exports.Product202309EditProductRequestBodySkusPreSaleFulfillmentType = Product202309EditProductRequestBodySkusPreSaleFulfillmentType;
