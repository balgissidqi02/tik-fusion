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
exports.Product202309InventorySearchRequestBody = void 0;
var Product202309InventorySearchRequestBody = /** @class */ (function () {
    function Product202309InventorySearchRequestBody() {
    }
    Product202309InventorySearchRequestBody.getAttributeTypeMap = function () {
        return Product202309InventorySearchRequestBody.attributeTypeMap;
    };
    Product202309InventorySearchRequestBody.discriminator = undefined;
    Product202309InventorySearchRequestBody.attributeTypeMap = [
        {
            "name": "productIds",
            "baseName": "product_ids",
            "type": "Array<string>"
        },
        {
            "name": "skuIds",
            "baseName": "sku_ids",
            "type": "Array<string>"
        }
    ];
    return Product202309InventorySearchRequestBody;
}());
exports.Product202309InventorySearchRequestBody = Product202309InventorySearchRequestBody;
