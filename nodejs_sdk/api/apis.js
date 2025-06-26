"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.API_OPERATION_NAME_MAP = exports.API_OBJECT = exports.API_ENUM = exports.APIS = exports.HttpError = void 0;
__exportStar(require("./authorizationV202309Api"), exports);
var authorizationV202309Api_1 = require("./authorizationV202309Api");
__exportStar(require("./authorizationV202312Api"), exports);
var authorizationV202312Api_1 = require("./authorizationV202312Api");
__exportStar(require("./authorizationV202401Api"), exports);
var authorizationV202401Api_1 = require("./authorizationV202401Api");
__exportStar(require("./authorizationV202403Api"), exports);
var authorizationV202403Api_1 = require("./authorizationV202403Api");
__exportStar(require("./customerServiceV202309Api"), exports);
var customerServiceV202309Api_1 = require("./customerServiceV202309Api");
__exportStar(require("./customerServiceV202407Api"), exports);
var customerServiceV202407Api_1 = require("./customerServiceV202407Api");
__exportStar(require("./dataReconciliationV202309Api"), exports);
var dataReconciliationV202309Api_1 = require("./dataReconciliationV202309Api");
__exportStar(require("./dataReconciliationV202310Api"), exports);
var dataReconciliationV202310Api_1 = require("./dataReconciliationV202310Api");
__exportStar(require("./dataReconciliationV202401Api"), exports);
var dataReconciliationV202401Api_1 = require("./dataReconciliationV202401Api");
__exportStar(require("./eventV202309Api"), exports);
var eventV202309Api_1 = require("./eventV202309Api");
__exportStar(require("./financeV202309Api"), exports);
var financeV202309Api_1 = require("./financeV202309Api");
__exportStar(require("./financeV202501Api"), exports);
var financeV202501Api_1 = require("./financeV202501Api");
__exportStar(require("./fulfillmentV202309Api"), exports);
var fulfillmentV202309Api_1 = require("./fulfillmentV202309Api");
__exportStar(require("./fulfillmentV202407Api"), exports);
var fulfillmentV202407Api_1 = require("./fulfillmentV202407Api");
__exportStar(require("./fulfillmentV202502Api"), exports);
var fulfillmentV202502Api_1 = require("./fulfillmentV202502Api");
__exportStar(require("./logisticsV202309Api"), exports);
var logisticsV202309Api_1 = require("./logisticsV202309Api");
__exportStar(require("./orderV202309Api"), exports);
var orderV202309Api_1 = require("./orderV202309Api");
__exportStar(require("./orderV202407Api"), exports);
var orderV202407Api_1 = require("./orderV202407Api");
__exportStar(require("./productV202309Api"), exports);
var productV202309Api_1 = require("./productV202309Api");
__exportStar(require("./productV202312Api"), exports);
var productV202312Api_1 = require("./productV202312Api");
__exportStar(require("./productV202401Api"), exports);
var productV202401Api_1 = require("./productV202401Api");
__exportStar(require("./productV202404Api"), exports);
var productV202404Api_1 = require("./productV202404Api");
__exportStar(require("./productV202405Api"), exports);
var productV202405Api_1 = require("./productV202405Api");
__exportStar(require("./productV202407Api"), exports);
var productV202407Api_1 = require("./productV202407Api");
__exportStar(require("./productV202409Api"), exports);
var productV202409Api_1 = require("./productV202409Api");
__exportStar(require("./productV202501Api"), exports);
var productV202501Api_1 = require("./productV202501Api");
__exportStar(require("./productV202502Api"), exports);
var productV202502Api_1 = require("./productV202502Api");
__exportStar(require("./productV202505Api"), exports);
var productV202505Api_1 = require("./productV202505Api");
__exportStar(require("./productV202506Api"), exports);
var productV202506Api_1 = require("./productV202506Api");
__exportStar(require("./promotionV202309Api"), exports);
var promotionV202309Api_1 = require("./promotionV202309Api");
__exportStar(require("./promotionV202406Api"), exports);
var promotionV202406Api_1 = require("./promotionV202406Api");
__exportStar(require("./returnRefundV202309Api"), exports);
var returnRefundV202309Api_1 = require("./returnRefundV202309Api");
__exportStar(require("./sellerV202309Api"), exports);
var sellerV202309Api_1 = require("./sellerV202309Api");
__exportStar(require("./supplyChainV202309Api"), exports);
var supplyChainV202309Api_1 = require("./supplyChainV202309Api");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [authorizationV202309Api_1.AuthorizationV202309Api, authorizationV202312Api_1.AuthorizationV202312Api, authorizationV202401Api_1.AuthorizationV202401Api, authorizationV202403Api_1.AuthorizationV202403Api, customerServiceV202309Api_1.CustomerServiceV202309Api, customerServiceV202407Api_1.CustomerServiceV202407Api, dataReconciliationV202309Api_1.DataReconciliationV202309Api, dataReconciliationV202310Api_1.DataReconciliationV202310Api, dataReconciliationV202401Api_1.DataReconciliationV202401Api, eventV202309Api_1.EventV202309Api, financeV202309Api_1.FinanceV202309Api, financeV202501Api_1.FinanceV202501Api, fulfillmentV202309Api_1.FulfillmentV202309Api, fulfillmentV202407Api_1.FulfillmentV202407Api, fulfillmentV202502Api_1.FulfillmentV202502Api, logisticsV202309Api_1.LogisticsV202309Api, orderV202309Api_1.OrderV202309Api, orderV202407Api_1.OrderV202407Api, productV202309Api_1.ProductV202309Api, productV202312Api_1.ProductV202312Api, productV202401Api_1.ProductV202401Api, productV202404Api_1.ProductV202404Api, productV202405Api_1.ProductV202405Api, productV202407Api_1.ProductV202407Api, productV202409Api_1.ProductV202409Api, productV202501Api_1.ProductV202501Api, productV202502Api_1.ProductV202502Api, productV202505Api_1.ProductV202505Api, productV202506Api_1.ProductV202506Api, promotionV202309Api_1.PromotionV202309Api, promotionV202406Api_1.PromotionV202406Api, returnRefundV202309Api_1.ReturnRefundV202309Api, sellerV202309Api_1.SellerV202309Api, supplyChainV202309Api_1.SupplyChainV202309Api];
var API_ENUM;
(function (API_ENUM) {
    API_ENUM["AuthorizationV202309Api"] = "AuthorizationV202309Api";
    API_ENUM["AuthorizationV202312Api"] = "AuthorizationV202312Api";
    API_ENUM["AuthorizationV202401Api"] = "AuthorizationV202401Api";
    API_ENUM["AuthorizationV202403Api"] = "AuthorizationV202403Api";
    API_ENUM["CustomerServiceV202309Api"] = "CustomerServiceV202309Api";
    API_ENUM["CustomerServiceV202407Api"] = "CustomerServiceV202407Api";
    API_ENUM["DataReconciliationV202309Api"] = "DataReconciliationV202309Api";
    API_ENUM["DataReconciliationV202310Api"] = "DataReconciliationV202310Api";
    API_ENUM["DataReconciliationV202401Api"] = "DataReconciliationV202401Api";
    API_ENUM["EventV202309Api"] = "EventV202309Api";
    API_ENUM["FinanceV202309Api"] = "FinanceV202309Api";
    API_ENUM["FinanceV202501Api"] = "FinanceV202501Api";
    API_ENUM["FulfillmentV202309Api"] = "FulfillmentV202309Api";
    API_ENUM["FulfillmentV202407Api"] = "FulfillmentV202407Api";
    API_ENUM["FulfillmentV202502Api"] = "FulfillmentV202502Api";
    API_ENUM["LogisticsV202309Api"] = "LogisticsV202309Api";
    API_ENUM["OrderV202309Api"] = "OrderV202309Api";
    API_ENUM["OrderV202407Api"] = "OrderV202407Api";
    API_ENUM["ProductV202309Api"] = "ProductV202309Api";
    API_ENUM["ProductV202312Api"] = "ProductV202312Api";
    API_ENUM["ProductV202401Api"] = "ProductV202401Api";
    API_ENUM["ProductV202404Api"] = "ProductV202404Api";
    API_ENUM["ProductV202405Api"] = "ProductV202405Api";
    API_ENUM["ProductV202407Api"] = "ProductV202407Api";
    API_ENUM["ProductV202409Api"] = "ProductV202409Api";
    API_ENUM["ProductV202501Api"] = "ProductV202501Api";
    API_ENUM["ProductV202502Api"] = "ProductV202502Api";
    API_ENUM["ProductV202505Api"] = "ProductV202505Api";
    API_ENUM["ProductV202506Api"] = "ProductV202506Api";
    API_ENUM["PromotionV202309Api"] = "PromotionV202309Api";
    API_ENUM["PromotionV202406Api"] = "PromotionV202406Api";
    API_ENUM["ReturnRefundV202309Api"] = "ReturnRefundV202309Api";
    API_ENUM["SellerV202309Api"] = "SellerV202309Api";
    API_ENUM["SupplyChainV202309Api"] = "SupplyChainV202309Api";
})(API_ENUM = exports.API_ENUM || (exports.API_ENUM = {}));
exports.API_OBJECT = {
    AuthorizationV202309Api: authorizationV202309Api_1.AuthorizationV202309Api,
    AuthorizationV202312Api: authorizationV202312Api_1.AuthorizationV202312Api,
    AuthorizationV202401Api: authorizationV202401Api_1.AuthorizationV202401Api,
    AuthorizationV202403Api: authorizationV202403Api_1.AuthorizationV202403Api,
    CustomerServiceV202309Api: customerServiceV202309Api_1.CustomerServiceV202309Api,
    CustomerServiceV202407Api: customerServiceV202407Api_1.CustomerServiceV202407Api,
    DataReconciliationV202309Api: dataReconciliationV202309Api_1.DataReconciliationV202309Api,
    DataReconciliationV202310Api: dataReconciliationV202310Api_1.DataReconciliationV202310Api,
    DataReconciliationV202401Api: dataReconciliationV202401Api_1.DataReconciliationV202401Api,
    EventV202309Api: eventV202309Api_1.EventV202309Api,
    FinanceV202309Api: financeV202309Api_1.FinanceV202309Api,
    FinanceV202501Api: financeV202501Api_1.FinanceV202501Api,
    FulfillmentV202309Api: fulfillmentV202309Api_1.FulfillmentV202309Api,
    FulfillmentV202407Api: fulfillmentV202407Api_1.FulfillmentV202407Api,
    FulfillmentV202502Api: fulfillmentV202502Api_1.FulfillmentV202502Api,
    LogisticsV202309Api: logisticsV202309Api_1.LogisticsV202309Api,
    OrderV202309Api: orderV202309Api_1.OrderV202309Api,
    OrderV202407Api: orderV202407Api_1.OrderV202407Api,
    ProductV202309Api: productV202309Api_1.ProductV202309Api,
    ProductV202312Api: productV202312Api_1.ProductV202312Api,
    ProductV202401Api: productV202401Api_1.ProductV202401Api,
    ProductV202404Api: productV202404Api_1.ProductV202404Api,
    ProductV202405Api: productV202405Api_1.ProductV202405Api,
    ProductV202407Api: productV202407Api_1.ProductV202407Api,
    ProductV202409Api: productV202409Api_1.ProductV202409Api,
    ProductV202501Api: productV202501Api_1.ProductV202501Api,
    ProductV202502Api: productV202502Api_1.ProductV202502Api,
    ProductV202505Api: productV202505Api_1.ProductV202505Api,
    ProductV202506Api: productV202506Api_1.ProductV202506Api,
    PromotionV202309Api: promotionV202309Api_1.PromotionV202309Api,
    PromotionV202406Api: promotionV202406Api_1.PromotionV202406Api,
    ReturnRefundV202309Api: returnRefundV202309Api_1.ReturnRefundV202309Api,
    SellerV202309Api: sellerV202309Api_1.SellerV202309Api,
    SupplyChainV202309Api: supplyChainV202309Api_1.SupplyChainV202309Api
};
exports.API_OPERATION_NAME_MAP = {
    AuthorizationV202309Api: authorizationV202309Api_1.AuthorizationV202309ApiOperationNames,
    AuthorizationV202312Api: authorizationV202312Api_1.AuthorizationV202312ApiOperationNames,
    AuthorizationV202401Api: authorizationV202401Api_1.AuthorizationV202401ApiOperationNames,
    AuthorizationV202403Api: authorizationV202403Api_1.AuthorizationV202403ApiOperationNames,
    CustomerServiceV202309Api: customerServiceV202309Api_1.CustomerServiceV202309ApiOperationNames,
    CustomerServiceV202407Api: customerServiceV202407Api_1.CustomerServiceV202407ApiOperationNames,
    DataReconciliationV202309Api: dataReconciliationV202309Api_1.DataReconciliationV202309ApiOperationNames,
    DataReconciliationV202310Api: dataReconciliationV202310Api_1.DataReconciliationV202310ApiOperationNames,
    DataReconciliationV202401Api: dataReconciliationV202401Api_1.DataReconciliationV202401ApiOperationNames,
    EventV202309Api: eventV202309Api_1.EventV202309ApiOperationNames,
    FinanceV202309Api: financeV202309Api_1.FinanceV202309ApiOperationNames,
    FinanceV202501Api: financeV202501Api_1.FinanceV202501ApiOperationNames,
    FulfillmentV202309Api: fulfillmentV202309Api_1.FulfillmentV202309ApiOperationNames,
    FulfillmentV202407Api: fulfillmentV202407Api_1.FulfillmentV202407ApiOperationNames,
    FulfillmentV202502Api: fulfillmentV202502Api_1.FulfillmentV202502ApiOperationNames,
    LogisticsV202309Api: logisticsV202309Api_1.LogisticsV202309ApiOperationNames,
    OrderV202309Api: orderV202309Api_1.OrderV202309ApiOperationNames,
    OrderV202407Api: orderV202407Api_1.OrderV202407ApiOperationNames,
    ProductV202309Api: productV202309Api_1.ProductV202309ApiOperationNames,
    ProductV202312Api: productV202312Api_1.ProductV202312ApiOperationNames,
    ProductV202401Api: productV202401Api_1.ProductV202401ApiOperationNames,
    ProductV202404Api: productV202404Api_1.ProductV202404ApiOperationNames,
    ProductV202405Api: productV202405Api_1.ProductV202405ApiOperationNames,
    ProductV202407Api: productV202407Api_1.ProductV202407ApiOperationNames,
    ProductV202409Api: productV202409Api_1.ProductV202409ApiOperationNames,
    ProductV202501Api: productV202501Api_1.ProductV202501ApiOperationNames,
    ProductV202502Api: productV202502Api_1.ProductV202502ApiOperationNames,
    ProductV202505Api: productV202505Api_1.ProductV202505ApiOperationNames,
    ProductV202506Api: productV202506Api_1.ProductV202506ApiOperationNames,
    PromotionV202309Api: promotionV202309Api_1.PromotionV202309ApiOperationNames,
    PromotionV202406Api: promotionV202406Api_1.PromotionV202406ApiOperationNames,
    ReturnRefundV202309Api: returnRefundV202309Api_1.ReturnRefundV202309ApiOperationNames,
    SellerV202309Api: sellerV202309Api_1.SellerV202309ApiOperationNames,
    SupplyChainV202309Api: supplyChainV202309Api_1.SupplyChainV202309ApiOperationNames
};
