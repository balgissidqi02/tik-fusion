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
exports.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues = void 0;
var Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues = /** @class */ (function () {
    function Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues() {
    }
    Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues.getAttributeTypeMap = function () {
        return Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues.attributeTypeMap;
    };
    Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues.discriminator = undefined;
    Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues.attributeTypeMap = [
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
            "type": "Array<Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions>"
        },
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules>"
        }
    ];
    return Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues;
}());
exports.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues = Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues;
