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
exports.Product202309GetProductResponseDataSkusInventory = void 0;
var Product202309GetProductResponseDataSkusInventory = /** @class */ (function () {
    function Product202309GetProductResponseDataSkusInventory() {
    }
    Product202309GetProductResponseDataSkusInventory.getAttributeTypeMap = function () {
        return Product202309GetProductResponseDataSkusInventory.attributeTypeMap;
    };
    Product202309GetProductResponseDataSkusInventory.discriminator = undefined;
    Product202309GetProductResponseDataSkusInventory.attributeTypeMap = [
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "warehouseId",
            "baseName": "warehouse_id",
            "type": "string"
        }
    ];
    return Product202309GetProductResponseDataSkusInventory;
}());
exports.Product202309GetProductResponseDataSkusInventory = Product202309GetProductResponseDataSkusInventory;
