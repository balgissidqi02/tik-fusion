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
exports.Product202409PartialEditResponsiblePersonRequestBodyAddress = void 0;
var Product202409PartialEditResponsiblePersonRequestBodyAddress = /** @class */ (function () {
    function Product202409PartialEditResponsiblePersonRequestBodyAddress() {
    }
    Product202409PartialEditResponsiblePersonRequestBodyAddress.getAttributeTypeMap = function () {
        return Product202409PartialEditResponsiblePersonRequestBodyAddress.attributeTypeMap;
    };
    Product202409PartialEditResponsiblePersonRequestBodyAddress.discriminator = undefined;
    Product202409PartialEditResponsiblePersonRequestBodyAddress.attributeTypeMap = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "district",
            "baseName": "district",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "province",
            "baseName": "province",
            "type": "string"
        },
        {
            "name": "streetAddressLine1",
            "baseName": "street_address_line1",
            "type": "string"
        },
        {
            "name": "streetAddressLine2",
            "baseName": "street_address_line2",
            "type": "string"
        }
    ];
    return Product202409PartialEditResponsiblePersonRequestBodyAddress;
}());
exports.Product202409PartialEditResponsiblePersonRequestBodyAddress = Product202409PartialEditResponsiblePersonRequestBodyAddress;
