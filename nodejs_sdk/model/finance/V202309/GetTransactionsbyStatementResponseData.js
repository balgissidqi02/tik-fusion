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
exports.Finance202309GetTransactionsbyStatementResponseData = void 0;
var Finance202309GetTransactionsbyStatementResponseData = /** @class */ (function () {
    function Finance202309GetTransactionsbyStatementResponseData() {
    }
    Finance202309GetTransactionsbyStatementResponseData.getAttributeTypeMap = function () {
        return Finance202309GetTransactionsbyStatementResponseData.attributeTypeMap;
    };
    Finance202309GetTransactionsbyStatementResponseData.discriminator = undefined;
    Finance202309GetTransactionsbyStatementResponseData.attributeTypeMap = [
        {
            "name": "adjustmentAmount",
            "baseName": "adjustment_amount",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "feeAmount",
            "baseName": "fee_amount",
            "type": "string"
        },
        {
            "name": "netSalesAmount",
            "baseName": "net_sales_amount",
            "type": "string"
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string"
        },
        {
            "name": "revenueAmount",
            "baseName": "revenue_amount",
            "type": "string"
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
            "name": "statementId",
            "baseName": "statement_id",
            "type": "string"
        },
        {
            "name": "statementTime",
            "baseName": "statement_time",
            "type": "number"
        },
        {
            "name": "statementTransactions",
            "baseName": "statement_transactions",
            "type": "Array<Finance202309GetTransactionsbyStatementResponseDataStatementTransactions>"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        }
    ];
    return Finance202309GetTransactionsbyStatementResponseData;
}());
exports.Finance202309GetTransactionsbyStatementResponseData = Finance202309GetTransactionsbyStatementResponseData;
