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
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders = void 0;
var DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders = /** @class */ (function () {
    function DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders() {
    }
    DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders.getAttributeTypeMap = function () {
        return DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders.attributeTypeMap;
    };
    DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders.discriminator = undefined;
    DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders.attributeTypeMap = [
        {
            "name": "channelFinancialStatus",
            "baseName": "channel_financial_status",
            "type": "string"
        },
        {
            "name": "channelFulfillmentStatus",
            "baseName": "channel_fulfillment_status",
            "type": "string"
        },
        {
            "name": "channelOrderId",
            "baseName": "channel_order_id",
            "type": "string"
        },
        {
            "name": "channelOrderStatus",
            "baseName": "channel_order_status",
            "type": "string"
        },
        {
            "name": "channelOrderUpdateTime",
            "baseName": "channel_order_update_time",
            "type": "string"
        },
        {
            "name": "channelType",
            "baseName": "channel_type",
            "type": "string"
        },
        {
            "name": "issueReason",
            "baseName": "issue_reason",
            "type": "string"
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string"
        },
        {
            "name": "packages",
            "baseName": "packages",
            "type": "Array<DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages>"
        }
    ];
    return DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders;
}());
exports.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders = DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders;
