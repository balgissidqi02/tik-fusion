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
exports.Finance202501GetTransactionsbyStatementResponseDataTransactions = void 0;
var Finance202501GetTransactionsbyStatementResponseDataTransactions = /** @class */ (function () {
    function Finance202501GetTransactionsbyStatementResponseDataTransactions() {
    }
    Finance202501GetTransactionsbyStatementResponseDataTransactions.getAttributeTypeMap = function () {
        return Finance202501GetTransactionsbyStatementResponseDataTransactions.attributeTypeMap;
    };
    Finance202501GetTransactionsbyStatementResponseDataTransactions.discriminator = undefined;
    Finance202501GetTransactionsbyStatementResponseDataTransactions.attributeTypeMap = [
        {
            "name": "adjustmentAmount",
            "baseName": "adjustment_amount",
            "type": "string"
        },
        {
            "name": "adjustmentId",
            "baseName": "adjustment_id",
            "type": "string"
        },
        {
            "name": "adjustmentOrderId",
            "baseName": "adjustment_order_id",
            "type": "string"
        },
        {
            "name": "associatedOrderId",
            "baseName": "associated_order_id",
            "type": "string"
        },
        {
            "name": "estimatedReleaseTime",
            "baseName": "estimated_release_time",
            "type": "string"
        },
        {
            "name": "feeTaxAmount",
            "baseName": "fee_tax_amount",
            "type": "string"
        },
        {
            "name": "feeTaxBreakdown",
            "baseName": "fee_tax_breakdown",
            "type": "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "orderCreateTime",
            "baseName": "order_create_time",
            "type": "number"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "reserveAmount",
            "baseName": "reserve_amount",
            "type": "string"
        },
        {
            "name": "reserveId",
            "baseName": "reserve_id",
            "type": "string"
        },
        {
            "name": "reserveStatus",
            "baseName": "reserve_status",
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
            "type": "Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown"
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
            "type": "Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown"
        },
        {
            "name": "supplementaryComponent",
            "baseName": "supplementary_component",
            "type": "Finance202501GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return Finance202501GetTransactionsbyStatementResponseDataTransactions;
}());
exports.Finance202501GetTransactionsbyStatementResponseDataTransactions = Finance202501GetTransactionsbyStatementResponseDataTransactions;
