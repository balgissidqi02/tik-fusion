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
exports.Product202407ListingSchemasResponseDataListingSchemasFields = void 0;
var Product202407ListingSchemasResponseDataListingSchemasFields = /** @class */ (function () {
    function Product202407ListingSchemasResponseDataListingSchemasFields() {
    }
    Product202407ListingSchemasResponseDataListingSchemasFields.getAttributeTypeMap = function () {
        return Product202407ListingSchemasResponseDataListingSchemasFields.attributeTypeMap;
    };
    Product202407ListingSchemasResponseDataListingSchemasFields.discriminator = undefined;
    Product202407ListingSchemasResponseDataListingSchemasFields.attributeTypeMap = [
        {
            "name": "complexValues",
            "baseName": "complex_values",
            "type": "Array<Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<Product202407ListingSchemasResponseDataListingSchemasFieldsOptions>"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<Product202407ListingSchemasResponseDataListingSchemasFieldsRules>"
        }
    ];
    return Product202407ListingSchemasResponseDataListingSchemasFields;
}());
exports.Product202407ListingSchemasResponseDataListingSchemasFields = Product202407ListingSchemasResponseDataListingSchemasFields;
