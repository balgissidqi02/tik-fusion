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
exports.Product202309PartialEditProductRequestBodyCertifications = void 0;
var Product202309PartialEditProductRequestBodyCertifications = /** @class */ (function () {
    function Product202309PartialEditProductRequestBodyCertifications() {
    }
    Product202309PartialEditProductRequestBodyCertifications.getAttributeTypeMap = function () {
        return Product202309PartialEditProductRequestBodyCertifications.attributeTypeMap;
    };
    Product202309PartialEditProductRequestBodyCertifications.discriminator = undefined;
    Product202309PartialEditProductRequestBodyCertifications.attributeTypeMap = [
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "number"
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "Array<Product202309PartialEditProductRequestBodyCertificationsFiles>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<Product202309PartialEditProductRequestBodyCertificationsImages>"
        }
    ];
    return Product202309PartialEditProductRequestBodyCertifications;
}());
exports.Product202309PartialEditProductRequestBodyCertifications = Product202309PartialEditProductRequestBodyCertifications;
