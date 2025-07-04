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
exports.Finance202501GetTransactionsbyOrderResponseDataSkuTransactions = void 0;
var Finance202501GetTransactionsbyOrderResponseDataSkuTransactions = /** @class */ (function () {
    function Finance202501GetTransactionsbyOrderResponseDataSkuTransactions() {
    }
    Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.getAttributeTypeMap = function () {
        return Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.attributeTypeMap;
    };
    Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.discriminator = undefined;
    Finance202501GetTransactionsbyOrderResponseDataSkuTransactions.attributeTypeMap = [
        {
            "name": "feeTaxAmount",
            "baseName": "fee_tax_amount",
            "type": "string"
        },
        {
            "name": "feeTaxBreakdown",
            "baseName": "fee_tax_breakdown",
            "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown"
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "string"
        },
        {
            "name": "revenueAmount",
            "baseName": "revenue_amount",
            "type": "string"
        },
        {
            "name": "revenueBreakdown",
            "baseName": "revenue_breakdown",
            "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown"
        },
        {
            "name": "settlementAmount",
            "baseName": "settlement_amount",
            "type": "string"
        },
        {
            "name": "shippingCostAmount",
            "baseName": "shipping_cost_amount",
            "type": "string"
        },
        {
            "name": "shippingCostBreakdown",
            "baseName": "shipping_cost_breakdown",
            "type": "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown"
        },
        {
            "name": "skuId",
            "baseName": "sku_id",
            "type": "string"
        },
        {
            "name": "skuName",
            "baseName": "sku_name",
            "type": "string"
        },
        {
            "name": "statementId",
            "baseName": "statement_id",
            "type": "string"
        }
    ];
    return Finance202501GetTransactionsbyOrderResponseDataSkuTransactions;
}());
exports.Finance202501GetTransactionsbyOrderResponseDataSkuTransactions = Finance202501GetTransactionsbyOrderResponseDataSkuTransactions;
