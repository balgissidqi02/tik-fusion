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
exports.Product202309RecoverProductsResponseDataErrors = void 0;
var Product202309RecoverProductsResponseDataErrors = /** @class */ (function () {
    function Product202309RecoverProductsResponseDataErrors() {
    }
    Product202309RecoverProductsResponseDataErrors.getAttributeTypeMap = function () {
        return Product202309RecoverProductsResponseDataErrors.attributeTypeMap;
    };
    Product202309RecoverProductsResponseDataErrors.discriminator = undefined;
    Product202309RecoverProductsResponseDataErrors.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "Product202309RecoverProductsResponseDataErrorsDetail"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return Product202309RecoverProductsResponseDataErrors;
}());
exports.Product202309RecoverProductsResponseDataErrors = Product202309RecoverProductsResponseDataErrors;
