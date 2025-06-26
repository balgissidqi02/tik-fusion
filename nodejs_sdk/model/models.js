"use strict";
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
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./authorization/V202309/GetAuthorizedShopsResponse"), exports);
__exportStar(require("./authorization/V202309/GetAuthorizedShopsResponseData"), exports);
__exportStar(require("./authorization/V202309/GetAuthorizedShopsResponseDataShops"), exports);
__exportStar(require("./authorization/V202312/GetWidgetTokenResponse"), exports);
__exportStar(require("./authorization/V202312/GetWidgetTokenResponseData"), exports);
__exportStar(require("./authorization/V202312/GetWidgetTokenResponseDataWidgetToken"), exports);
__exportStar(require("./authorization/V202401/GetWidgetTokenResponse"), exports);
__exportStar(require("./authorization/V202401/GetWidgetTokenResponseData"), exports);
__exportStar(require("./authorization/V202401/GetWidgetTokenResponseDataWidgetToken"), exports);
__exportStar(require("./authorization/V202403/DeauthorizeShopResponse"), exports);
__exportStar(require("./customerService/V202309/CreateConversationRequestBody"), exports);
__exportStar(require("./customerService/V202309/CreateConversationResponse"), exports);
__exportStar(require("./customerService/V202309/CreateConversationResponseData"), exports);
__exportStar(require("./customerService/V202309/GetAgentSettingsResponse"), exports);
__exportStar(require("./customerService/V202309/GetAgentSettingsResponseData"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponse"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponseData"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponseDataMessages"), exports);
__exportStar(require("./customerService/V202309/GetConversationMessagesResponseDataMessagesSender"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponse"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseData"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversations"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessage"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessageSender"), exports);
__exportStar(require("./customerService/V202309/GetConversationsResponseDataConversationsParticipants"), exports);
__exportStar(require("./customerService/V202309/ReadMessageResponse"), exports);
__exportStar(require("./customerService/V202309/SendMessageRequestBody"), exports);
__exportStar(require("./customerService/V202309/SendMessageResponse"), exports);
__exportStar(require("./customerService/V202309/SendMessageResponseData"), exports);
__exportStar(require("./customerService/V202309/UpdateAgentSettingsRequestBody"), exports);
__exportStar(require("./customerService/V202309/UpdateAgentSettingsResponse"), exports);
__exportStar(require("./customerService/V202309/UploadBuyerMessagesImageResponse"), exports);
__exportStar(require("./customerService/V202309/UploadBuyerMessagesImageResponseData"), exports);
__exportStar(require("./customerService/V202407/GetCustomerServicePerformanceResponse"), exports);
__exportStar(require("./customerService/V202407/GetCustomerServicePerformanceResponseData"), exports);
__exportStar(require("./customerService/V202407/GetCustomerServicePerformanceResponseDataPerformance"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBody"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrders"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrdersPackages"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponse"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseData"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrors"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetail"), exports);
__exportStar(require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBody"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrders"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponse"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseData"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrors"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail"), exports);
__exportStar(require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBody"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrders"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponse"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseData"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrors"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail"), exports);
__exportStar(require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./event/V202309/DeleteShopWebhookRequestBody"), exports);
__exportStar(require("./event/V202309/DeleteShopWebhookResponse"), exports);
__exportStar(require("./event/V202309/GetShopWebhooksResponse"), exports);
__exportStar(require("./event/V202309/GetShopWebhooksResponseData"), exports);
__exportStar(require("./event/V202309/GetShopWebhooksResponseDataWebhooks"), exports);
__exportStar(require("./event/V202309/UpdateShopWebhookRequestBody"), exports);
__exportStar(require("./event/V202309/UpdateShopWebhookResponse"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponse"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseData"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPayments"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsAmount"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsReserveAmount"), exports);
__exportStar(require("./finance/V202309/GetPaymentsResponseDataPaymentsSettlementAmount"), exports);
__exportStar(require("./finance/V202309/GetStatementsResponse"), exports);
__exportStar(require("./finance/V202309/GetStatementsResponseData"), exports);
__exportStar(require("./finance/V202309/GetStatementsResponseDataStatements"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponse"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponseData"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactions"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyStatementResponse"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyStatementResponseData"), exports);
__exportStar(require("./finance/V202309/GetTransactionsbyStatementResponseDataStatementTransactions"), exports);
__exportStar(require("./finance/V202309/GetWithdrawalsResponse"), exports);
__exportStar(require("./finance/V202309/GetWithdrawalsResponseData"), exports);
__exportStar(require("./finance/V202309/GetWithdrawalsResponseDataWithdrawals"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponse"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseData"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactions"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponse"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseData"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTotalSettlementBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactions"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent"), exports);
__exportStar(require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackages"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesSelfShipment"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202309/BatchShipPackagesResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageRequestBodyCombinablePackages"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponse"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseData"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202309/CombinePackageResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesRequestBodyDimension"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesRequestBodyWeight"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseDataShippingServiceInfo"), exports);
__exportStar(require("./fulfillment/V202309/CreatePackagesResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponse"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponseData"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponse"), exports);
__exportStar(require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyDimension"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyWeight"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataShippingServices"), exports);
__exportStar(require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/GetHandoverTimeslotsResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetHandoverTimeslotsResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetHandoverTimeslotsResponseDataPickupSlots"), exports);
__exportStar(require("./fulfillment/V202309/GetOrderSplitAttributesResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetOrderSplitAttributesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetOrderSplitAttributesResponseDataSplitAttributes"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataInsurance"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataOrders"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataOrdersSkus"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataRecipientAddress"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataSenderAddress"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageDetailResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseDataPickupSlots"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageShippingDocumentResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetPackageShippingDocumentResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetTrackingResponse"), exports);
__exportStar(require("./fulfillment/V202309/GetTrackingResponseData"), exports);
__exportStar(require("./fulfillment/V202309/GetTrackingResponseDataTracking"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedResponse"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedResponseData"), exports);
__exportStar(require("./fulfillment/V202309/MarkPackageAsShippedResponseDataWarning"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverRequestBodyPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponse"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponseDataDimension"), exports);
__exportStar(require("./fulfillment/V202309/SchedulePackageHandoverResponseDataWeight"), exports);
__exportStar(require("./fulfillment/V202309/SearchCombinablePackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/SearchCombinablePackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SearchCombinablePackagesResponseDataCombinablePackages"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponse"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrders"), exports);
__exportStar(require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrdersSkus"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageRequestBodyPickupSlot"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageRequestBodySelfShipment"), exports);
__exportStar(require("./fulfillment/V202309/ShipPackageResponse"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersRequestBodySplittableGroups"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersResponse"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersResponseData"), exports);
__exportStar(require("./fulfillment/V202309/SplitOrdersResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesResponse"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesResponseData"), exports);
__exportStar(require("./fulfillment/V202309/UncombinePackagesResponseDataPackages"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBodyPackages"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponse"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseData"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageShippingInfoRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UpdatePackageShippingInfoResponse"), exports);
__exportStar(require("./fulfillment/V202309/UpdateShippingInfoRequestBody"), exports);
__exportStar(require("./fulfillment/V202309/UpdateShippingInfoResponse"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleRequestBody"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponse"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponseData"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrorsDetail"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceRequestBody"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceRequestBodyInvoices"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponse"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponseData"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponseDataErrors"), exports);
__exportStar(require("./fulfillment/V202502/UploadInvoiceResponseDataErrorsDetail"), exports);
__exportStar(require("./logistics/V202309/GetGlobalSellerWarehouseResponse"), exports);
__exportStar(require("./logistics/V202309/GetGlobalSellerWarehouseResponseData"), exports);
__exportStar(require("./logistics/V202309/GetGlobalSellerWarehouseResponseDataGlobalWarehouses"), exports);
__exportStar(require("./logistics/V202309/GetShippingProvidersResponse"), exports);
__exportStar(require("./logistics/V202309/GetShippingProvidersResponseData"), exports);
__exportStar(require("./logistics/V202309/GetShippingProvidersResponseDataShippingProviders"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponse"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseData"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptions"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponse"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseData"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseDataWarehouses"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddress"), exports);
__exportStar(require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddressGeolocation"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponse"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseData"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrders"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersHandlingDuration"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersLineItems"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsItemTax"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersPackages"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersPayment"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddress"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences"), exports);
__exportStar(require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo"), exports);
__exportStar(require("./order/V202309/GetOrderListRequestBody"), exports);
__exportStar(require("./order/V202309/GetOrderListResponse"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseData"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrders"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersHandlingDuration"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersLineItems"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersLineItemsCombinedListingSkus"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersLineItemsItemTax"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersPackages"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersPayment"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddress"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences"), exports);
__exportStar(require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDistrictInfo"), exports);
__exportStar(require("./order/V202407/GetPriceDetailResponse"), exports);
__exportStar(require("./order/V202407/GetPriceDetailResponseData"), exports);
__exportStar(require("./order/V202407/GetPriceDetailResponseDataLineItems"), exports);
__exportStar(require("./product/V202309/ActivateProductRequestBody"), exports);
__exportStar(require("./product/V202309/ActivateProductResponse"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseData"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseDataErrors"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/ActivateProductResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponse"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseData"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseDataShop"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseDataShopGne"), exports);
__exportStar(require("./product/V202309/CheckListingPrerequisitesResponseDataShopLogistics"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBody"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkus"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponse"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseData"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnoses"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesDiagnosisResults"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestions"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsImages"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSeoWords"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataFailReasons"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataListingQuality"), exports);
__exportStar(require("./product/V202309/CheckProductListingResponseDataWarnings"), exports);
__exportStar(require("./product/V202309/CreateCustomBrandsRequestBody"), exports);
__exportStar(require("./product/V202309/CreateCustomBrandsResponse"), exports);
__exportStar(require("./product/V202309/CreateCustomBrandsResponseData"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBody"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyManufacturer"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponseDataGlobalSkus"), exports);
__exportStar(require("./product/V202309/CreateGlobalProductResponseDataGlobalSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBody"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/CreateProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/CreateProductResponse"), exports);
__exportStar(require("./product/V202309/CreateProductResponseData"), exports);
__exportStar(require("./product/V202309/CreateProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/CreateProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/CreateProductResponseDataWarnings"), exports);
__exportStar(require("./product/V202309/DeactivateProductsRequestBody"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponse"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponseData"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/DeactivateProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsRequestBody"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponse"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponseData"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/DeleteGlobalProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/DeleteProductsRequestBody"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponse"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponseData"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/DeleteProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBody"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyManufacturer"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusSalePrices"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/EditGlobalProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataGlobalSkus"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataGlobalSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataPublishResults"), exports);
__exportStar(require("./product/V202309/EditGlobalProductResponseDataPublishResultsFailReasons"), exports);
__exportStar(require("./product/V202309/EditProductRequestBody"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/EditProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/EditProductResponse"), exports);
__exportStar(require("./product/V202309/EditProductResponseData"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataAudit"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/EditProductResponseDataWarnings"), exports);
__exportStar(require("./product/V202309/GetAttributesResponse"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseData"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseDataAttributes"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseDataAttributesRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetAttributesResponseDataAttributesValues"), exports);
__exportStar(require("./product/V202309/GetBrandsResponse"), exports);
__exportStar(require("./product/V202309/GetBrandsResponseData"), exports);
__exportStar(require("./product/V202309/GetBrandsResponseDataBrands"), exports);
__exportStar(require("./product/V202309/GetCategoriesResponse"), exports);
__exportStar(require("./product/V202309/GetCategoriesResponseData"), exports);
__exportStar(require("./product/V202309/GetCategoriesResponseDataCategories"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponse"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseData"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataCod"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataEpr"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataManufacturer"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataPackageDimension"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataProductCertifications"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsExpirationDate"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataResponsiblePerson"), exports);
__exportStar(require("./product/V202309/GetCategoryRulesResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseDataAttributes"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseDataAttributesRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetGlobalAttributesResponseDataAttributesValues"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoriesResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoriesResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoriesResponseDataCategories"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataManufacturer"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertifications"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataResponsiblePerson"), exports);
__exportStar(require("./product/V202309/GetGlobalCategoryRulesResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataBrand"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCategory"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCertifications"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCertificationsFiles"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataCertificationsImages"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataMainImages"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataManufacturer"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataPackageDimensions"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataPackageWeight"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductAttributes"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductAttributesValues"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProducts"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappings"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSizeChartImage"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSizeChartTemplate"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusInventory"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusPrice"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/GetGlobalProductResponseDataVideo"), exports);
__exportStar(require("./product/V202309/GetProductResponse"), exports);
__exportStar(require("./product/V202309/GetProductResponseData"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataAudit"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataAuditFailedReasons"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataBrand"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCategoryChains"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCertifications"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCertificationsFiles"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataCertificationsImages"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataDeliveryOptions"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataGlobalProductAssociation"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappings"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataIntegratedPlatformStatuses"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataMainImages"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataPackageDimensions"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataPackageWeight"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataPrescriptionRequirement"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductAttributes"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductAttributesValues"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductFamilies"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataProductFamiliesProducts"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataRecommendedCategories"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSizeChart"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSizeChartImage"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSizeChartTemplate"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusCombinedSkus"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicy"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicyReplicateSource"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusInventory"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusListPrice"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusPreSale"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusPrice"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataSkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/GetProductResponseDataVideo"), exports);
__exportStar(require("./product/V202309/InventorySearchRequestBody"), exports);
__exportStar(require("./product/V202309/InventorySearchResponse"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseData"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkus"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory"), exports);
__exportStar(require("./product/V202309/InventorySearchResponseDataInventorySkusWarehouseInventory"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBody"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyCertifications"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyCertificationsFiles"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyCertificationsImages"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyMainImages"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyPackageDimensions"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyPackageWeight"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyProductAttributes"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyProductAttributesValues"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySizeChart"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySizeChartImage"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySizeChartTemplate"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkus"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusIdentifierCode"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusPreSale"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSkuImg"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages"), exports);
__exportStar(require("./product/V202309/PartialEditProductRequestBodyVideo"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponse"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseData"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataAudit"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataSkus"), exports);
__exportStar(require("./product/V202309/PartialEditProductResponseDataSkusSalesAttributes"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBody"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTarget"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkus"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusInventory"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusPrice"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponse"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseData"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataProducts"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataProductsSkusSaleAttributes"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataPublishResult"), exports);
__exportStar(require("./product/V202309/PublishGlobalProductResponseDataPublishResultFailReasons"), exports);
__exportStar(require("./product/V202309/RecommendCategoryRequestBody"), exports);
__exportStar(require("./product/V202309/RecommendCategoryRequestBodyImages"), exports);
__exportStar(require("./product/V202309/RecommendCategoryResponse"), exports);
__exportStar(require("./product/V202309/RecommendCategoryResponseData"), exports);
__exportStar(require("./product/V202309/RecommendCategoryResponseDataCategories"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesRequestBody"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesRequestBodyImages"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesResponse"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesResponseData"), exports);
__exportStar(require("./product/V202309/RecommendGlobalCategoriesResponseDataCategories"), exports);
__exportStar(require("./product/V202309/RecoverProductsRequestBody"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponse"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponseData"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponseDataErrors"), exports);
__exportStar(require("./product/V202309/RecoverProductsResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsRequestBody"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponse"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponseData"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponseDataGlobalProducts"), exports);
__exportStar(require("./product/V202309/SearchGlobalProductsResponseDataGlobalProductsSkus"), exports);
__exportStar(require("./product/V202309/SearchProductsRequestBody"), exports);
__exportStar(require("./product/V202309/SearchProductsResponse"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseData"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProducts"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsRecommendedCategories"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsSkusInventory"), exports);
__exportStar(require("./product/V202309/SearchProductsResponseDataProductsSkusPrice"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryRequestBody"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkus"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkusInventory"), exports);
__exportStar(require("./product/V202309/UpdateGlobalInventoryResponse"), exports);
__exportStar(require("./product/V202309/UpdateInventoryRequestBody"), exports);
__exportStar(require("./product/V202309/UpdateInventoryRequestBodySkus"), exports);
__exportStar(require("./product/V202309/UpdateInventoryRequestBodySkusInventory"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponse"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseData"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseDataErrors"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202309/UpdateInventoryResponseDataErrorsDetailExtraErrors"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBody"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkus"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkusExternalListPrices"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkusListPrice"), exports);
__exportStar(require("./product/V202309/UpdatePriceRequestBodySkusPrice"), exports);
__exportStar(require("./product/V202309/UpdatePriceResponse"), exports);
__exportStar(require("./product/V202309/UploadProductFileResponse"), exports);
__exportStar(require("./product/V202309/UploadProductFileResponseData"), exports);
__exportStar(require("./product/V202309/UploadProductImageResponse"), exports);
__exportStar(require("./product/V202309/UploadProductImageResponseData"), exports);
__exportStar(require("./product/V202312/CheckListingPrerequisitesResponse"), exports);
__exportStar(require("./product/V202312/CheckListingPrerequisitesResponseData"), exports);
__exportStar(require("./product/V202312/CheckListingPrerequisitesResponseDataCheckResults"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsRequestBody"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponse"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponseData"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponseDataGlobalProducts"), exports);
__exportStar(require("./product/V202312/SearchGlobalProductsResponseDataGlobalProductsSkus"), exports);
__exportStar(require("./product/V202312/SearchProductsRequestBody"), exports);
__exportStar(require("./product/V202312/SearchProductsResponse"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseData"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProducts"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsAudit"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsIntegratedPlatformStatuses"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsRecommendedCategories"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusExternalListPrices"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusInventory"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusListPrice"), exports);
__exportStar(require("./product/V202312/SearchProductsResponseDataProductsSkusPrice"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponse"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseData"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataErrors"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemas"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFileds"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValues"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsOptions"), exports);
__exportStar(require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsRules"), exports);
__exportStar(require("./product/V202404/OptimizedImagesRequestBody"), exports);
__exportStar(require("./product/V202404/OptimizedImagesRequestBodyImages"), exports);
__exportStar(require("./product/V202404/OptimizedImagesResponse"), exports);
__exportStar(require("./product/V202404/OptimizedImagesResponseData"), exports);
__exportStar(require("./product/V202404/OptimizedImagesResponseDataImages"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponse"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponseData"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponseDataProducts"), exports);
__exportStar(require("./product/V202405/GetProductsSEOWordsResponseDataProductsSeoWords"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponse"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseData"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProducts"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions"), exports);
__exportStar(require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponse"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseData"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProducts"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnoses"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts"), exports);
__exportStar(require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsListingQuality"), exports);
__exportStar(require("./product/V202407/CreateCategoryUpgradeTaskResponse"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponse"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseData"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataErrors"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataErrorsDetail"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemas"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFields"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValues"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsOptions"), exports);
__exportStar(require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsRules"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsRequestBody"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponse"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponseData"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponseDataSizeChart"), exports);
__exportStar(require("./product/V202407/SearchSizeChartsResponseDataSizeChartImages"), exports);
__exportStar(require("./product/V202409/CreateManufacturerRequestBody"), exports);
__exportStar(require("./product/V202409/CreateManufacturerRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/CreateManufacturerResponse"), exports);
__exportStar(require("./product/V202409/CreateManufacturerResponseData"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonRequestBody"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonRequestBodyAddress"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonResponse"), exports);
__exportStar(require("./product/V202409/CreateResponsiblePersonResponseData"), exports);
__exportStar(require("./product/V202409/PartialEditManufacturerRequestBody"), exports);
__exportStar(require("./product/V202409/PartialEditManufacturerRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/PartialEditManufacturerResponse"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonRequestBody"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonRequestBodyAddress"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonRequestBodyPhoneNumber"), exports);
__exportStar(require("./product/V202409/PartialEditResponsiblePersonResponse"), exports);
__exportStar(require("./product/V202409/SearchManufacturersRequestBody"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponse"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponseData"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponseDataManufacturers"), exports);
__exportStar(require("./product/V202409/SearchManufacturersResponseDataManufacturersPhoneNumber"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsRequestBody"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponse"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseData"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersons"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsAddress"), exports);
__exportStar(require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber"), exports);
__exportStar(require("./product/V202501/SearchManufacturersRequestBody"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponse"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseData"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseDataManufacturers"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfiles"), exports);
__exportStar(require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsRequestBody"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponse"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseData"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersons"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress"), exports);
__exportStar(require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber"), exports);
__exportStar(require("./product/V202502/SearchProductsRequestBody"), exports);
__exportStar(require("./product/V202502/SearchProductsResponse"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseData"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProducts"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsAudit"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsIntegratedPlatformStatuses"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsProductFamilies"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsProductFamiliesProducts"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsRecommendedCategories"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkus"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusExternalListPrices"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusInventory"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusListPrice"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusPreSale"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusPreSaleFulfillmentType"), exports);
__exportStar(require("./product/V202502/SearchProductsResponseDataProductsSkusPrice"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksRequestBody"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksRequestBodyImages"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksResponse"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksResponseData"), exports);
__exportStar(require("./product/V202505/CreateImageTranslationTasksResponseDataTranslationTasks"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponse"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseData"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasks"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksOriginalImage"), exports);
__exportStar(require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBody"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscount"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/CreateActivityRequestBodyParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/CreateActivityResponse"), exports);
__exportStar(require("./promotion/V202309/CreateActivityResponseData"), exports);
__exportStar(require("./promotion/V202309/DeactivateActivityResponse"), exports);
__exportStar(require("./promotion/V202309/DeactivateActivityResponseData"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponse"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseData"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscount"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProducts"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProductsActivityPrice"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProductsSkus"), exports);
__exportStar(require("./promotion/V202309/GetActivityResponseDataProductsSkusActivityPrice"), exports);
__exportStar(require("./promotion/V202309/RemoveActivityProductRequestBody"), exports);
__exportStar(require("./promotion/V202309/RemoveActivityProductResponse"), exports);
__exportStar(require("./promotion/V202309/RemoveActivityProductResponseData"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesRequestBody"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponse"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseData"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivities"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscount"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/SearchActivitiesResponseDataActivitiesParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductRequestBody"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductRequestBodyProducts"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductRequestBodyProductsSkus"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductResponse"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityProductResponseData"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBody"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscount"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscount"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscountDetails"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscount"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscountAreaScope"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityRequestBodyParticipationLimit"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityResponse"), exports);
__exportStar(require("./promotion/V202309/UpdateActivityResponseData"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponse"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseData"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCoupon"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponClaimDuration"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponDiscount"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponDiscountMaxDiscount"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponDiscountReductionAmount"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponLiveTasks"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponRedemptionDuration"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponThreshold"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponThresholdMinSpend"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponUsageLimits"), exports);
__exportStar(require("./promotion/V202406/GetCouponResponseDataCouponUsageStats"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsRequestBody"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponse"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseData"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCoupons"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsClaimDuration"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscount"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountMaxDiscount"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountReductionAmount"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsRedemptionDuration"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsThreshold"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsThresholdMinSpend"), exports);
__exportStar(require("./promotion/V202406/SearchCouponsResponseDataCouponsUsageLimits"), exports);
__exportStar(require("./returnRefund/V202309/ApproveCancellationResponse"), exports);
__exportStar(require("./returnRefund/V202309/ApproveReturnRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/ApproveReturnRequestBodyPartialRefund"), exports);
__exportStar(require("./returnRefund/V202309/ApproveReturnResponse"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundRequestBodySkus"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundResponse"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundResponseData"), exports);
__exportStar(require("./returnRefund/V202309/CalculateRefundResponseDataOrderRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderRequestBodySkus"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderResponse"), exports);
__exportStar(require("./returnRefund/V202309/CancelOrderResponseData"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnRequestBodySkus"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnResponse"), exports);
__exportStar(require("./returnRefund/V202309/CreateReturnResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponse"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibility"), exports);
__exportStar(require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility"), exports);
__exportStar(require("./returnRefund/V202309/GetRejectReasonsResponse"), exports);
__exportStar(require("./returnRefund/V202309/GetRejectReasonsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetRejectReasonsResponseDataReasons"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponse"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseDataRecords"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsImages"), exports);
__exportStar(require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsVideos"), exports);
__exportStar(require("./returnRefund/V202309/RejectCancellationRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/RejectCancellationRequestBodyImages"), exports);
__exportStar(require("./returnRefund/V202309/RejectCancellationResponse"), exports);
__exportStar(require("./returnRefund/V202309/RejectReturnRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/RejectReturnRequestBodyImages"), exports);
__exportStar(require("./returnRefund/V202309/RejectReturnResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellations"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItems"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsSellerNextActionResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsRequestBody"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseData"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrders"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersDiscountAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersPartialRefund"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItems"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersSellerNextActionResponse"), exports);
__exportStar(require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersShippingFeeAmount"), exports);
__exportStar(require("./seller/V202309/GetActiveShopsResponse"), exports);
__exportStar(require("./seller/V202309/GetActiveShopsResponseData"), exports);
__exportStar(require("./seller/V202309/GetActiveShopsResponseDataShops"), exports);
__exportStar(require("./seller/V202309/GetSellerPermissionsResponse"), exports);
__exportStar(require("./seller/V202309/GetSellerPermissionsResponseData"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBody"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackages"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesDimension"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesSkus"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesWeight"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponse"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponseData"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrors"), exports);
__exportStar(require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrorsDetail"), exports);
var GetAuthorizedShopsResponse_1 = require("./authorization/V202309/GetAuthorizedShopsResponse");
var GetAuthorizedShopsResponseData_1 = require("./authorization/V202309/GetAuthorizedShopsResponseData");
var GetAuthorizedShopsResponseDataShops_1 = require("./authorization/V202309/GetAuthorizedShopsResponseDataShops");
var GetWidgetTokenResponse_1 = require("./authorization/V202312/GetWidgetTokenResponse");
var GetWidgetTokenResponseData_1 = require("./authorization/V202312/GetWidgetTokenResponseData");
var GetWidgetTokenResponseDataWidgetToken_1 = require("./authorization/V202312/GetWidgetTokenResponseDataWidgetToken");
var GetWidgetTokenResponse_2 = require("./authorization/V202401/GetWidgetTokenResponse");
var GetWidgetTokenResponseData_2 = require("./authorization/V202401/GetWidgetTokenResponseData");
var GetWidgetTokenResponseDataWidgetToken_2 = require("./authorization/V202401/GetWidgetTokenResponseDataWidgetToken");
var DeauthorizeShopResponse_1 = require("./authorization/V202403/DeauthorizeShopResponse");
var CreateConversationRequestBody_1 = require("./customerService/V202309/CreateConversationRequestBody");
var CreateConversationResponse_1 = require("./customerService/V202309/CreateConversationResponse");
var CreateConversationResponseData_1 = require("./customerService/V202309/CreateConversationResponseData");
var GetAgentSettingsResponse_1 = require("./customerService/V202309/GetAgentSettingsResponse");
var GetAgentSettingsResponseData_1 = require("./customerService/V202309/GetAgentSettingsResponseData");
var GetConversationMessagesResponse_1 = require("./customerService/V202309/GetConversationMessagesResponse");
var GetConversationMessagesResponseData_1 = require("./customerService/V202309/GetConversationMessagesResponseData");
var GetConversationMessagesResponseDataMessages_1 = require("./customerService/V202309/GetConversationMessagesResponseDataMessages");
var GetConversationMessagesResponseDataMessagesSender_1 = require("./customerService/V202309/GetConversationMessagesResponseDataMessagesSender");
var GetConversationsResponse_1 = require("./customerService/V202309/GetConversationsResponse");
var GetConversationsResponseData_1 = require("./customerService/V202309/GetConversationsResponseData");
var GetConversationsResponseDataConversations_1 = require("./customerService/V202309/GetConversationsResponseDataConversations");
var GetConversationsResponseDataConversationsLatestMessage_1 = require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessage");
var GetConversationsResponseDataConversationsLatestMessageSender_1 = require("./customerService/V202309/GetConversationsResponseDataConversationsLatestMessageSender");
var GetConversationsResponseDataConversationsParticipants_1 = require("./customerService/V202309/GetConversationsResponseDataConversationsParticipants");
var ReadMessageResponse_1 = require("./customerService/V202309/ReadMessageResponse");
var SendMessageRequestBody_1 = require("./customerService/V202309/SendMessageRequestBody");
var SendMessageResponse_1 = require("./customerService/V202309/SendMessageResponse");
var SendMessageResponseData_1 = require("./customerService/V202309/SendMessageResponseData");
var UpdateAgentSettingsRequestBody_1 = require("./customerService/V202309/UpdateAgentSettingsRequestBody");
var UpdateAgentSettingsResponse_1 = require("./customerService/V202309/UpdateAgentSettingsResponse");
var UploadBuyerMessagesImageResponse_1 = require("./customerService/V202309/UploadBuyerMessagesImageResponse");
var UploadBuyerMessagesImageResponseData_1 = require("./customerService/V202309/UploadBuyerMessagesImageResponseData");
var GetCustomerServicePerformanceResponse_1 = require("./customerService/V202407/GetCustomerServicePerformanceResponse");
var GetCustomerServicePerformanceResponseData_1 = require("./customerService/V202407/GetCustomerServicePerformanceResponseData");
var GetCustomerServicePerformanceResponseDataPerformance_1 = require("./customerService/V202407/GetCustomerServicePerformanceResponseDataPerformance");
var OrderStatusDataExchangeRequestBody_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBody");
var OrderStatusDataExchangeRequestBodyOrders_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrders");
var OrderStatusDataExchangeRequestBodyOrdersPackages_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeRequestBodyOrdersPackages");
var OrderStatusDataExchangeResponse_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponse");
var OrderStatusDataExchangeResponseData_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseData");
var OrderStatusDataExchangeResponseDataErrors_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrors");
var OrderStatusDataExchangeResponseDataErrorsDetail_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetail");
var OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors_1 = require("./dataReconciliation/V202309/OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors");
var QualityFactoryOrderDataImportAPIRequestBody_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBody");
var QualityFactoryOrderDataImportAPIRequestBodyOrders_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrders");
var QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages");
var QualityFactoryOrderDataImportAPIResponse_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponse");
var QualityFactoryOrderDataImportAPIResponseData_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseData");
var QualityFactoryOrderDataImportAPIResponseDataErrors_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrors");
var QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail");
var QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_1 = require("./dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors");
var QualityFactoryOrderDataImportAPIRequestBody_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBody");
var QualityFactoryOrderDataImportAPIRequestBodyOrders_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrders");
var QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages");
var QualityFactoryOrderDataImportAPIResponse_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponse");
var QualityFactoryOrderDataImportAPIResponseData_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseData");
var QualityFactoryOrderDataImportAPIResponseDataErrors_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrors");
var QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetail");
var QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_2 = require("./dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors");
var DeleteShopWebhookRequestBody_1 = require("./event/V202309/DeleteShopWebhookRequestBody");
var DeleteShopWebhookResponse_1 = require("./event/V202309/DeleteShopWebhookResponse");
var GetShopWebhooksResponse_1 = require("./event/V202309/GetShopWebhooksResponse");
var GetShopWebhooksResponseData_1 = require("./event/V202309/GetShopWebhooksResponseData");
var GetShopWebhooksResponseDataWebhooks_1 = require("./event/V202309/GetShopWebhooksResponseDataWebhooks");
var UpdateShopWebhookRequestBody_1 = require("./event/V202309/UpdateShopWebhookRequestBody");
var UpdateShopWebhookResponse_1 = require("./event/V202309/UpdateShopWebhookResponse");
var GetPaymentsResponse_1 = require("./finance/V202309/GetPaymentsResponse");
var GetPaymentsResponseData_1 = require("./finance/V202309/GetPaymentsResponseData");
var GetPaymentsResponseDataPayments_1 = require("./finance/V202309/GetPaymentsResponseDataPayments");
var GetPaymentsResponseDataPaymentsAmount_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsAmount");
var GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange");
var GetPaymentsResponseDataPaymentsReserveAmount_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsReserveAmount");
var GetPaymentsResponseDataPaymentsSettlementAmount_1 = require("./finance/V202309/GetPaymentsResponseDataPaymentsSettlementAmount");
var GetStatementsResponse_1 = require("./finance/V202309/GetStatementsResponse");
var GetStatementsResponseData_1 = require("./finance/V202309/GetStatementsResponseData");
var GetStatementsResponseDataStatements_1 = require("./finance/V202309/GetStatementsResponseDataStatements");
var GetTransactionsbyOrderResponse_1 = require("./finance/V202309/GetTransactionsbyOrderResponse");
var GetTransactionsbyOrderResponseData_1 = require("./finance/V202309/GetTransactionsbyOrderResponseData");
var GetTransactionsbyOrderResponseDataStatementTransactions_1 = require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactions");
var GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions_1 = require("./finance/V202309/GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions");
var GetTransactionsbyStatementResponse_1 = require("./finance/V202309/GetTransactionsbyStatementResponse");
var GetTransactionsbyStatementResponseData_1 = require("./finance/V202309/GetTransactionsbyStatementResponseData");
var GetTransactionsbyStatementResponseDataStatementTransactions_1 = require("./finance/V202309/GetTransactionsbyStatementResponseDataStatementTransactions");
var GetWithdrawalsResponse_1 = require("./finance/V202309/GetWithdrawalsResponse");
var GetWithdrawalsResponseData_1 = require("./finance/V202309/GetWithdrawalsResponseData");
var GetWithdrawalsResponseDataWithdrawals_1 = require("./finance/V202309/GetWithdrawalsResponseDataWithdrawals");
var GetTransactionsbyOrderResponse_2 = require("./finance/V202501/GetTransactionsbyOrderResponse");
var GetTransactionsbyOrderResponseData_2 = require("./finance/V202501/GetTransactionsbyOrderResponseData");
var GetTransactionsbyOrderResponseDataSkuTransactions_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactions");
var GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown");
var GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee");
var GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax");
var GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown");
var GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown");
var GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent_1 = require("./finance/V202501/GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent");
var GetTransactionsbyStatementResponse_2 = require("./finance/V202501/GetTransactionsbyStatementResponse");
var GetTransactionsbyStatementResponseData_2 = require("./finance/V202501/GetTransactionsbyStatementResponseData");
var GetTransactionsbyStatementResponseDataTotalSettlementBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTotalSettlementBreakdown");
var GetTransactionsbyStatementResponseDataTransactions_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactions");
var GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown");
var GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee");
var GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax");
var GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown");
var GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown");
var GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent");
var GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent_1 = require("./finance/V202501/GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent");
var BatchShipPackagesRequestBody_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBody");
var BatchShipPackagesRequestBodyPackages_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackages");
var BatchShipPackagesRequestBodyPackagesPickupSlot_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesPickupSlot");
var BatchShipPackagesRequestBodyPackagesSelfShipment_1 = require("./fulfillment/V202309/BatchShipPackagesRequestBodyPackagesSelfShipment");
var BatchShipPackagesResponse_1 = require("./fulfillment/V202309/BatchShipPackagesResponse");
var BatchShipPackagesResponseData_1 = require("./fulfillment/V202309/BatchShipPackagesResponseData");
var BatchShipPackagesResponseDataErrors_1 = require("./fulfillment/V202309/BatchShipPackagesResponseDataErrors");
var BatchShipPackagesResponseDataErrorsDetail_1 = require("./fulfillment/V202309/BatchShipPackagesResponseDataErrorsDetail");
var CombinePackageRequestBody_1 = require("./fulfillment/V202309/CombinePackageRequestBody");
var CombinePackageRequestBodyCombinablePackages_1 = require("./fulfillment/V202309/CombinePackageRequestBodyCombinablePackages");
var CombinePackageResponse_1 = require("./fulfillment/V202309/CombinePackageResponse");
var CombinePackageResponseData_1 = require("./fulfillment/V202309/CombinePackageResponseData");
var CombinePackageResponseDataErrors_1 = require("./fulfillment/V202309/CombinePackageResponseDataErrors");
var CombinePackageResponseDataErrorsDetail_1 = require("./fulfillment/V202309/CombinePackageResponseDataErrorsDetail");
var CombinePackageResponseDataPackages_1 = require("./fulfillment/V202309/CombinePackageResponseDataPackages");
var CreatePackagesRequestBody_1 = require("./fulfillment/V202309/CreatePackagesRequestBody");
var CreatePackagesRequestBodyDimension_1 = require("./fulfillment/V202309/CreatePackagesRequestBodyDimension");
var CreatePackagesRequestBodyWeight_1 = require("./fulfillment/V202309/CreatePackagesRequestBodyWeight");
var CreatePackagesResponse_1 = require("./fulfillment/V202309/CreatePackagesResponse");
var CreatePackagesResponseData_1 = require("./fulfillment/V202309/CreatePackagesResponseData");
var CreatePackagesResponseDataDimension_1 = require("./fulfillment/V202309/CreatePackagesResponseDataDimension");
var CreatePackagesResponseDataShippingServiceInfo_1 = require("./fulfillment/V202309/CreatePackagesResponseDataShippingServiceInfo");
var CreatePackagesResponseDataWeight_1 = require("./fulfillment/V202309/CreatePackagesResponseDataWeight");
var FulfillmentUploadDeliveryFileResponse_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponse");
var FulfillmentUploadDeliveryFileResponseData_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryFileResponseData");
var FulfillmentUploadDeliveryImageResponse_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponse");
var FulfillmentUploadDeliveryImageResponseData_1 = require("./fulfillment/V202309/FulfillmentUploadDeliveryImageResponseData");
var GetEligibleShippingServiceRequestBody_1 = require("./fulfillment/V202309/GetEligibleShippingServiceRequestBody");
var GetEligibleShippingServiceRequestBodyDimension_1 = require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyDimension");
var GetEligibleShippingServiceRequestBodyWeight_1 = require("./fulfillment/V202309/GetEligibleShippingServiceRequestBodyWeight");
var GetEligibleShippingServiceResponse_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponse");
var GetEligibleShippingServiceResponseData_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseData");
var GetEligibleShippingServiceResponseDataDimension_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataDimension");
var GetEligibleShippingServiceResponseDataShippingServices_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataShippingServices");
var GetEligibleShippingServiceResponseDataWeight_1 = require("./fulfillment/V202309/GetEligibleShippingServiceResponseDataWeight");
var GetHandoverTimeslotsResponse_1 = require("./fulfillment/V202309/GetHandoverTimeslotsResponse");
var GetHandoverTimeslotsResponseData_1 = require("./fulfillment/V202309/GetHandoverTimeslotsResponseData");
var GetHandoverTimeslotsResponseDataPickupSlots_1 = require("./fulfillment/V202309/GetHandoverTimeslotsResponseDataPickupSlots");
var GetOrderSplitAttributesResponse_1 = require("./fulfillment/V202309/GetOrderSplitAttributesResponse");
var GetOrderSplitAttributesResponseData_1 = require("./fulfillment/V202309/GetOrderSplitAttributesResponseData");
var GetOrderSplitAttributesResponseDataSplitAttributes_1 = require("./fulfillment/V202309/GetOrderSplitAttributesResponseDataSplitAttributes");
var GetPackageDetailResponse_1 = require("./fulfillment/V202309/GetPackageDetailResponse");
var GetPackageDetailResponseData_1 = require("./fulfillment/V202309/GetPackageDetailResponseData");
var GetPackageDetailResponseDataDimension_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataDimension");
var GetPackageDetailResponseDataInsurance_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataInsurance");
var GetPackageDetailResponseDataOrders_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataOrders");
var GetPackageDetailResponseDataOrdersSkus_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataOrdersSkus");
var GetPackageDetailResponseDataPickupSlot_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataPickupSlot");
var GetPackageDetailResponseDataRecipientAddress_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataRecipientAddress");
var GetPackageDetailResponseDataSenderAddress_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataSenderAddress");
var GetPackageDetailResponseDataWeight_1 = require("./fulfillment/V202309/GetPackageDetailResponseDataWeight");
var GetPackageHandoverTimeSlotsResponse_1 = require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponse");
var GetPackageHandoverTimeSlotsResponseData_1 = require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseData");
var GetPackageHandoverTimeSlotsResponseDataPickupSlots_1 = require("./fulfillment/V202309/GetPackageHandoverTimeSlotsResponseDataPickupSlots");
var GetPackageShippingDocumentResponse_1 = require("./fulfillment/V202309/GetPackageShippingDocumentResponse");
var GetPackageShippingDocumentResponseData_1 = require("./fulfillment/V202309/GetPackageShippingDocumentResponseData");
var GetTrackingResponse_1 = require("./fulfillment/V202309/GetTrackingResponse");
var GetTrackingResponseData_1 = require("./fulfillment/V202309/GetTrackingResponseData");
var GetTrackingResponseDataTracking_1 = require("./fulfillment/V202309/GetTrackingResponseDataTracking");
var MarkPackageAsShippedRequestBody_1 = require("./fulfillment/V202309/MarkPackageAsShippedRequestBody");
var MarkPackageAsShippedResponse_1 = require("./fulfillment/V202309/MarkPackageAsShippedResponse");
var MarkPackageAsShippedResponseData_1 = require("./fulfillment/V202309/MarkPackageAsShippedResponseData");
var MarkPackageAsShippedResponseDataWarning_1 = require("./fulfillment/V202309/MarkPackageAsShippedResponseDataWarning");
var SchedulePackageHandoverRequestBody_1 = require("./fulfillment/V202309/SchedulePackageHandoverRequestBody");
var SchedulePackageHandoverRequestBodyPickupSlot_1 = require("./fulfillment/V202309/SchedulePackageHandoverRequestBodyPickupSlot");
var SchedulePackageHandoverResponse_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponse");
var SchedulePackageHandoverResponseData_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponseData");
var SchedulePackageHandoverResponseDataDimension_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponseDataDimension");
var SchedulePackageHandoverResponseDataWeight_1 = require("./fulfillment/V202309/SchedulePackageHandoverResponseDataWeight");
var SearchCombinablePackagesResponse_1 = require("./fulfillment/V202309/SearchCombinablePackagesResponse");
var SearchCombinablePackagesResponseData_1 = require("./fulfillment/V202309/SearchCombinablePackagesResponseData");
var SearchCombinablePackagesResponseDataCombinablePackages_1 = require("./fulfillment/V202309/SearchCombinablePackagesResponseDataCombinablePackages");
var SearchPackageRequestBody_1 = require("./fulfillment/V202309/SearchPackageRequestBody");
var SearchPackageResponse_1 = require("./fulfillment/V202309/SearchPackageResponse");
var SearchPackageResponseData_1 = require("./fulfillment/V202309/SearchPackageResponseData");
var SearchPackageResponseDataPackages_1 = require("./fulfillment/V202309/SearchPackageResponseDataPackages");
var SearchPackageResponseDataPackagesOrders_1 = require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrders");
var SearchPackageResponseDataPackagesOrdersSkus_1 = require("./fulfillment/V202309/SearchPackageResponseDataPackagesOrdersSkus");
var ShipPackageRequestBody_1 = require("./fulfillment/V202309/ShipPackageRequestBody");
var ShipPackageRequestBodyPickupSlot_1 = require("./fulfillment/V202309/ShipPackageRequestBodyPickupSlot");
var ShipPackageRequestBodySelfShipment_1 = require("./fulfillment/V202309/ShipPackageRequestBodySelfShipment");
var ShipPackageResponse_1 = require("./fulfillment/V202309/ShipPackageResponse");
var SplitOrdersRequestBody_1 = require("./fulfillment/V202309/SplitOrdersRequestBody");
var SplitOrdersRequestBodySplittableGroups_1 = require("./fulfillment/V202309/SplitOrdersRequestBodySplittableGroups");
var SplitOrdersResponse_1 = require("./fulfillment/V202309/SplitOrdersResponse");
var SplitOrdersResponseData_1 = require("./fulfillment/V202309/SplitOrdersResponseData");
var SplitOrdersResponseDataPackages_1 = require("./fulfillment/V202309/SplitOrdersResponseDataPackages");
var UncombinePackagesRequestBody_1 = require("./fulfillment/V202309/UncombinePackagesRequestBody");
var UncombinePackagesResponse_1 = require("./fulfillment/V202309/UncombinePackagesResponse");
var UncombinePackagesResponseData_1 = require("./fulfillment/V202309/UncombinePackagesResponseData");
var UncombinePackagesResponseDataPackages_1 = require("./fulfillment/V202309/UncombinePackagesResponseDataPackages");
var UpdatePackageDeliveryStatusRequestBody_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBody");
var UpdatePackageDeliveryStatusRequestBodyPackages_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusRequestBodyPackages");
var UpdatePackageDeliveryStatusResponse_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponse");
var UpdatePackageDeliveryStatusResponseData_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseData");
var UpdatePackageDeliveryStatusResponseDataErrors_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrors");
var UpdatePackageDeliveryStatusResponseDataErrorsDetail_1 = require("./fulfillment/V202309/UpdatePackageDeliveryStatusResponseDataErrorsDetail");
var UpdatePackageShippingInfoRequestBody_1 = require("./fulfillment/V202309/UpdatePackageShippingInfoRequestBody");
var UpdatePackageShippingInfoResponse_1 = require("./fulfillment/V202309/UpdatePackageShippingInfoResponse");
var UpdateShippingInfoRequestBody_1 = require("./fulfillment/V202309/UpdateShippingInfoRequestBody");
var UpdateShippingInfoResponse_1 = require("./fulfillment/V202309/UpdateShippingInfoResponse");
var CreateFirstMileBundleRequestBody_1 = require("./fulfillment/V202407/CreateFirstMileBundleRequestBody");
var CreateFirstMileBundleResponse_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponse");
var CreateFirstMileBundleResponseData_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponseData");
var CreateFirstMileBundleResponseDataErrors_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrors");
var CreateFirstMileBundleResponseDataErrorsDetail_1 = require("./fulfillment/V202407/CreateFirstMileBundleResponseDataErrorsDetail");
var UploadInvoiceRequestBody_1 = require("./fulfillment/V202502/UploadInvoiceRequestBody");
var UploadInvoiceRequestBodyInvoices_1 = require("./fulfillment/V202502/UploadInvoiceRequestBodyInvoices");
var UploadInvoiceResponse_1 = require("./fulfillment/V202502/UploadInvoiceResponse");
var UploadInvoiceResponseData_1 = require("./fulfillment/V202502/UploadInvoiceResponseData");
var UploadInvoiceResponseDataErrors_1 = require("./fulfillment/V202502/UploadInvoiceResponseDataErrors");
var UploadInvoiceResponseDataErrorsDetail_1 = require("./fulfillment/V202502/UploadInvoiceResponseDataErrorsDetail");
var GetGlobalSellerWarehouseResponse_1 = require("./logistics/V202309/GetGlobalSellerWarehouseResponse");
var GetGlobalSellerWarehouseResponseData_1 = require("./logistics/V202309/GetGlobalSellerWarehouseResponseData");
var GetGlobalSellerWarehouseResponseDataGlobalWarehouses_1 = require("./logistics/V202309/GetGlobalSellerWarehouseResponseDataGlobalWarehouses");
var GetShippingProvidersResponse_1 = require("./logistics/V202309/GetShippingProvidersResponse");
var GetShippingProvidersResponseData_1 = require("./logistics/V202309/GetShippingProvidersResponseData");
var GetShippingProvidersResponseDataShippingProviders_1 = require("./logistics/V202309/GetShippingProvidersResponseDataShippingProviders");
var GetWarehouseDeliveryOptionsResponse_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponse");
var GetWarehouseDeliveryOptionsResponseData_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseData");
var GetWarehouseDeliveryOptionsResponseDataDeliveryOptions_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptions");
var GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit");
var GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit_1 = require("./logistics/V202309/GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit");
var GetWarehouseListResponse_1 = require("./logistics/V202309/GetWarehouseListResponse");
var GetWarehouseListResponseData_1 = require("./logistics/V202309/GetWarehouseListResponseData");
var GetWarehouseListResponseDataWarehouses_1 = require("./logistics/V202309/GetWarehouseListResponseDataWarehouses");
var GetWarehouseListResponseDataWarehousesAddress_1 = require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddress");
var GetWarehouseListResponseDataWarehousesAddressGeolocation_1 = require("./logistics/V202309/GetWarehouseListResponseDataWarehousesAddressGeolocation");
var GetOrderDetailResponse_1 = require("./order/V202309/GetOrderDetailResponse");
var GetOrderDetailResponseData_1 = require("./order/V202309/GetOrderDetailResponseData");
var GetOrderDetailResponseDataOrders_1 = require("./order/V202309/GetOrderDetailResponseDataOrders");
var GetOrderDetailResponseDataOrdersHandlingDuration_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersHandlingDuration");
var GetOrderDetailResponseDataOrdersLineItems_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersLineItems");
var GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus");
var GetOrderDetailResponseDataOrdersLineItemsItemTax_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersLineItemsItemTax");
var GetOrderDetailResponseDataOrdersPackages_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersPackages");
var GetOrderDetailResponseDataOrdersPayment_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersPayment");
var GetOrderDetailResponseDataOrdersRecipientAddress_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddress");
var GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences");
var GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo_1 = require("./order/V202309/GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo");
var GetOrderListRequestBody_1 = require("./order/V202309/GetOrderListRequestBody");
var GetOrderListResponse_1 = require("./order/V202309/GetOrderListResponse");
var GetOrderListResponseData_1 = require("./order/V202309/GetOrderListResponseData");
var GetOrderListResponseDataOrders_1 = require("./order/V202309/GetOrderListResponseDataOrders");
var GetOrderListResponseDataOrdersHandlingDuration_1 = require("./order/V202309/GetOrderListResponseDataOrdersHandlingDuration");
var GetOrderListResponseDataOrdersLineItems_1 = require("./order/V202309/GetOrderListResponseDataOrdersLineItems");
var GetOrderListResponseDataOrdersLineItemsCombinedListingSkus_1 = require("./order/V202309/GetOrderListResponseDataOrdersLineItemsCombinedListingSkus");
var GetOrderListResponseDataOrdersLineItemsItemTax_1 = require("./order/V202309/GetOrderListResponseDataOrdersLineItemsItemTax");
var GetOrderListResponseDataOrdersPackages_1 = require("./order/V202309/GetOrderListResponseDataOrdersPackages");
var GetOrderListResponseDataOrdersPayment_1 = require("./order/V202309/GetOrderListResponseDataOrdersPayment");
var GetOrderListResponseDataOrdersRecipientAddress_1 = require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddress");
var GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences_1 = require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences");
var GetOrderListResponseDataOrdersRecipientAddressDistrictInfo_1 = require("./order/V202309/GetOrderListResponseDataOrdersRecipientAddressDistrictInfo");
var GetPriceDetailResponse_1 = require("./order/V202407/GetPriceDetailResponse");
var GetPriceDetailResponseData_1 = require("./order/V202407/GetPriceDetailResponseData");
var GetPriceDetailResponseDataLineItems_1 = require("./order/V202407/GetPriceDetailResponseDataLineItems");
var ActivateProductRequestBody_1 = require("./product/V202309/ActivateProductRequestBody");
var ActivateProductResponse_1 = require("./product/V202309/ActivateProductResponse");
var ActivateProductResponseData_1 = require("./product/V202309/ActivateProductResponseData");
var ActivateProductResponseDataErrors_1 = require("./product/V202309/ActivateProductResponseDataErrors");
var ActivateProductResponseDataErrorsDetail_1 = require("./product/V202309/ActivateProductResponseDataErrorsDetail");
var ActivateProductResponseDataErrorsDetailExtraErrors_1 = require("./product/V202309/ActivateProductResponseDataErrorsDetailExtraErrors");
var CheckListingPrerequisitesResponse_1 = require("./product/V202309/CheckListingPrerequisitesResponse");
var CheckListingPrerequisitesResponseData_1 = require("./product/V202309/CheckListingPrerequisitesResponseData");
var CheckListingPrerequisitesResponseDataShop_1 = require("./product/V202309/CheckListingPrerequisitesResponseDataShop");
var CheckListingPrerequisitesResponseDataShopGne_1 = require("./product/V202309/CheckListingPrerequisitesResponseDataShopGne");
var CheckListingPrerequisitesResponseDataShopLogistics_1 = require("./product/V202309/CheckListingPrerequisitesResponseDataShopLogistics");
var CheckProductListingRequestBody_1 = require("./product/V202309/CheckProductListingRequestBody");
var CheckProductListingRequestBodyCertifications_1 = require("./product/V202309/CheckProductListingRequestBodyCertifications");
var CheckProductListingRequestBodyCertificationsFiles_1 = require("./product/V202309/CheckProductListingRequestBodyCertificationsFiles");
var CheckProductListingRequestBodyCertificationsImages_1 = require("./product/V202309/CheckProductListingRequestBodyCertificationsImages");
var CheckProductListingRequestBodyMainImages_1 = require("./product/V202309/CheckProductListingRequestBodyMainImages");
var CheckProductListingRequestBodyPackageDimensions_1 = require("./product/V202309/CheckProductListingRequestBodyPackageDimensions");
var CheckProductListingRequestBodyPackageWeight_1 = require("./product/V202309/CheckProductListingRequestBodyPackageWeight");
var CheckProductListingRequestBodyProductAttributes_1 = require("./product/V202309/CheckProductListingRequestBodyProductAttributes");
var CheckProductListingRequestBodyProductAttributesValues_1 = require("./product/V202309/CheckProductListingRequestBodyProductAttributesValues");
var CheckProductListingRequestBodySizeChart_1 = require("./product/V202309/CheckProductListingRequestBodySizeChart");
var CheckProductListingRequestBodySizeChartImage_1 = require("./product/V202309/CheckProductListingRequestBodySizeChartImage");
var CheckProductListingRequestBodySizeChartTemplate_1 = require("./product/V202309/CheckProductListingRequestBodySizeChartTemplate");
var CheckProductListingRequestBodySkus_1 = require("./product/V202309/CheckProductListingRequestBodySkus");
var CheckProductListingRequestBodySkusCombinedSkus_1 = require("./product/V202309/CheckProductListingRequestBodySkusCombinedSkus");
var CheckProductListingRequestBodySkusExternalListPrices_1 = require("./product/V202309/CheckProductListingRequestBodySkusExternalListPrices");
var CheckProductListingRequestBodySkusIdentifierCode_1 = require("./product/V202309/CheckProductListingRequestBodySkusIdentifierCode");
var CheckProductListingRequestBodySkusInventory_1 = require("./product/V202309/CheckProductListingRequestBodySkusInventory");
var CheckProductListingRequestBodySkusListPrice_1 = require("./product/V202309/CheckProductListingRequestBodySkusListPrice");
var CheckProductListingRequestBodySkusPreSale_1 = require("./product/V202309/CheckProductListingRequestBodySkusPreSale");
var CheckProductListingRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/CheckProductListingRequestBodySkusPreSaleFulfillmentType");
var CheckProductListingRequestBodySkusPrice_1 = require("./product/V202309/CheckProductListingRequestBodySkusPrice");
var CheckProductListingRequestBodySkusSalesAttributes_1 = require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributes");
var CheckProductListingRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSkuImg");
var CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages");
var CheckProductListingRequestBodyVideo_1 = require("./product/V202309/CheckProductListingRequestBodyVideo");
var CheckProductListingResponse_1 = require("./product/V202309/CheckProductListingResponse");
var CheckProductListingResponseData_1 = require("./product/V202309/CheckProductListingResponseData");
var CheckProductListingResponseDataDiagnoses_1 = require("./product/V202309/CheckProductListingResponseDataDiagnoses");
var CheckProductListingResponseDataDiagnosesDiagnosisResults_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesDiagnosisResults");
var CheckProductListingResponseDataDiagnosesSuggestions_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestions");
var CheckProductListingResponseDataDiagnosesSuggestionsImages_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsImages");
var CheckProductListingResponseDataDiagnosesSuggestionsSeoWords_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSeoWords");
var CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts_1 = require("./product/V202309/CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts");
var CheckProductListingResponseDataFailReasons_1 = require("./product/V202309/CheckProductListingResponseDataFailReasons");
var CheckProductListingResponseDataListingQuality_1 = require("./product/V202309/CheckProductListingResponseDataListingQuality");
var CheckProductListingResponseDataWarnings_1 = require("./product/V202309/CheckProductListingResponseDataWarnings");
var CreateCustomBrandsRequestBody_1 = require("./product/V202309/CreateCustomBrandsRequestBody");
var CreateCustomBrandsResponse_1 = require("./product/V202309/CreateCustomBrandsResponse");
var CreateCustomBrandsResponseData_1 = require("./product/V202309/CreateCustomBrandsResponseData");
var CreateGlobalProductRequestBody_1 = require("./product/V202309/CreateGlobalProductRequestBody");
var CreateGlobalProductRequestBodyCertifications_1 = require("./product/V202309/CreateGlobalProductRequestBodyCertifications");
var CreateGlobalProductRequestBodyCertificationsFiles_1 = require("./product/V202309/CreateGlobalProductRequestBodyCertificationsFiles");
var CreateGlobalProductRequestBodyCertificationsImages_1 = require("./product/V202309/CreateGlobalProductRequestBodyCertificationsImages");
var CreateGlobalProductRequestBodyMainImages_1 = require("./product/V202309/CreateGlobalProductRequestBodyMainImages");
var CreateGlobalProductRequestBodyManufacturer_1 = require("./product/V202309/CreateGlobalProductRequestBodyManufacturer");
var CreateGlobalProductRequestBodyPackageDimensions_1 = require("./product/V202309/CreateGlobalProductRequestBodyPackageDimensions");
var CreateGlobalProductRequestBodyPackageWeight_1 = require("./product/V202309/CreateGlobalProductRequestBodyPackageWeight");
var CreateGlobalProductRequestBodyProductAttributes_1 = require("./product/V202309/CreateGlobalProductRequestBodyProductAttributes");
var CreateGlobalProductRequestBodyProductAttributesValues_1 = require("./product/V202309/CreateGlobalProductRequestBodyProductAttributesValues");
var CreateGlobalProductRequestBodySizeChart_1 = require("./product/V202309/CreateGlobalProductRequestBodySizeChart");
var CreateGlobalProductRequestBodySizeChartImage_1 = require("./product/V202309/CreateGlobalProductRequestBodySizeChartImage");
var CreateGlobalProductRequestBodySizeChartTemplate_1 = require("./product/V202309/CreateGlobalProductRequestBodySizeChartTemplate");
var CreateGlobalProductRequestBodySkus_1 = require("./product/V202309/CreateGlobalProductRequestBodySkus");
var CreateGlobalProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusIdentifierCode");
var CreateGlobalProductRequestBodySkusInventory_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusInventory");
var CreateGlobalProductRequestBodySkusPrice_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusPrice");
var CreateGlobalProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributes");
var CreateGlobalProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/CreateGlobalProductRequestBodySkusSalesAttributesSkuImg");
var CreateGlobalProductRequestBodyVideo_1 = require("./product/V202309/CreateGlobalProductRequestBodyVideo");
var CreateGlobalProductResponse_1 = require("./product/V202309/CreateGlobalProductResponse");
var CreateGlobalProductResponseData_1 = require("./product/V202309/CreateGlobalProductResponseData");
var CreateGlobalProductResponseDataGlobalSkus_1 = require("./product/V202309/CreateGlobalProductResponseDataGlobalSkus");
var CreateGlobalProductResponseDataGlobalSkusSalesAttributes_1 = require("./product/V202309/CreateGlobalProductResponseDataGlobalSkusSalesAttributes");
var CreateProductRequestBody_1 = require("./product/V202309/CreateProductRequestBody");
var CreateProductRequestBodyCertifications_1 = require("./product/V202309/CreateProductRequestBodyCertifications");
var CreateProductRequestBodyCertificationsFiles_1 = require("./product/V202309/CreateProductRequestBodyCertificationsFiles");
var CreateProductRequestBodyCertificationsImages_1 = require("./product/V202309/CreateProductRequestBodyCertificationsImages");
var CreateProductRequestBodyMainImages_1 = require("./product/V202309/CreateProductRequestBodyMainImages");
var CreateProductRequestBodyPackageDimensions_1 = require("./product/V202309/CreateProductRequestBodyPackageDimensions");
var CreateProductRequestBodyPackageWeight_1 = require("./product/V202309/CreateProductRequestBodyPackageWeight");
var CreateProductRequestBodyProductAttributes_1 = require("./product/V202309/CreateProductRequestBodyProductAttributes");
var CreateProductRequestBodyProductAttributesValues_1 = require("./product/V202309/CreateProductRequestBodyProductAttributesValues");
var CreateProductRequestBodySizeChart_1 = require("./product/V202309/CreateProductRequestBodySizeChart");
var CreateProductRequestBodySizeChartImage_1 = require("./product/V202309/CreateProductRequestBodySizeChartImage");
var CreateProductRequestBodySizeChartTemplate_1 = require("./product/V202309/CreateProductRequestBodySizeChartTemplate");
var CreateProductRequestBodySkus_1 = require("./product/V202309/CreateProductRequestBodySkus");
var CreateProductRequestBodySkusCombinedSkus_1 = require("./product/V202309/CreateProductRequestBodySkusCombinedSkus");
var CreateProductRequestBodySkusExternalListPrices_1 = require("./product/V202309/CreateProductRequestBodySkusExternalListPrices");
var CreateProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/CreateProductRequestBodySkusIdentifierCode");
var CreateProductRequestBodySkusInventory_1 = require("./product/V202309/CreateProductRequestBodySkusInventory");
var CreateProductRequestBodySkusListPrice_1 = require("./product/V202309/CreateProductRequestBodySkusListPrice");
var CreateProductRequestBodySkusPreSale_1 = require("./product/V202309/CreateProductRequestBodySkusPreSale");
var CreateProductRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/CreateProductRequestBodySkusPreSaleFulfillmentType");
var CreateProductRequestBodySkusPrice_1 = require("./product/V202309/CreateProductRequestBodySkusPrice");
var CreateProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/CreateProductRequestBodySkusSalesAttributes");
var CreateProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSkuImg");
var CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages");
var CreateProductRequestBodyVideo_1 = require("./product/V202309/CreateProductRequestBodyVideo");
var CreateProductResponse_1 = require("./product/V202309/CreateProductResponse");
var CreateProductResponseData_1 = require("./product/V202309/CreateProductResponseData");
var CreateProductResponseDataSkus_1 = require("./product/V202309/CreateProductResponseDataSkus");
var CreateProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/CreateProductResponseDataSkusSalesAttributes");
var CreateProductResponseDataWarnings_1 = require("./product/V202309/CreateProductResponseDataWarnings");
var DeactivateProductsRequestBody_1 = require("./product/V202309/DeactivateProductsRequestBody");
var DeactivateProductsResponse_1 = require("./product/V202309/DeactivateProductsResponse");
var DeactivateProductsResponseData_1 = require("./product/V202309/DeactivateProductsResponseData");
var DeactivateProductsResponseDataErrors_1 = require("./product/V202309/DeactivateProductsResponseDataErrors");
var DeactivateProductsResponseDataErrorsDetail_1 = require("./product/V202309/DeactivateProductsResponseDataErrorsDetail");
var DeleteGlobalProductsRequestBody_1 = require("./product/V202309/DeleteGlobalProductsRequestBody");
var DeleteGlobalProductsResponse_1 = require("./product/V202309/DeleteGlobalProductsResponse");
var DeleteGlobalProductsResponseData_1 = require("./product/V202309/DeleteGlobalProductsResponseData");
var DeleteGlobalProductsResponseDataErrors_1 = require("./product/V202309/DeleteGlobalProductsResponseDataErrors");
var DeleteGlobalProductsResponseDataErrorsDetail_1 = require("./product/V202309/DeleteGlobalProductsResponseDataErrorsDetail");
var DeleteProductsRequestBody_1 = require("./product/V202309/DeleteProductsRequestBody");
var DeleteProductsResponse_1 = require("./product/V202309/DeleteProductsResponse");
var DeleteProductsResponseData_1 = require("./product/V202309/DeleteProductsResponseData");
var DeleteProductsResponseDataErrors_1 = require("./product/V202309/DeleteProductsResponseDataErrors");
var DeleteProductsResponseDataErrorsDetail_1 = require("./product/V202309/DeleteProductsResponseDataErrorsDetail");
var EditGlobalProductRequestBody_1 = require("./product/V202309/EditGlobalProductRequestBody");
var EditGlobalProductRequestBodyCertifications_1 = require("./product/V202309/EditGlobalProductRequestBodyCertifications");
var EditGlobalProductRequestBodyCertificationsFiles_1 = require("./product/V202309/EditGlobalProductRequestBodyCertificationsFiles");
var EditGlobalProductRequestBodyCertificationsImages_1 = require("./product/V202309/EditGlobalProductRequestBodyCertificationsImages");
var EditGlobalProductRequestBodyMainImages_1 = require("./product/V202309/EditGlobalProductRequestBodyMainImages");
var EditGlobalProductRequestBodyManufacturer_1 = require("./product/V202309/EditGlobalProductRequestBodyManufacturer");
var EditGlobalProductRequestBodyPackageDimensions_1 = require("./product/V202309/EditGlobalProductRequestBodyPackageDimensions");
var EditGlobalProductRequestBodyPackageWeight_1 = require("./product/V202309/EditGlobalProductRequestBodyPackageWeight");
var EditGlobalProductRequestBodyProductAttributes_1 = require("./product/V202309/EditGlobalProductRequestBodyProductAttributes");
var EditGlobalProductRequestBodyProductAttributesValues_1 = require("./product/V202309/EditGlobalProductRequestBodyProductAttributesValues");
var EditGlobalProductRequestBodySizeChart_1 = require("./product/V202309/EditGlobalProductRequestBodySizeChart");
var EditGlobalProductRequestBodySizeChartImage_1 = require("./product/V202309/EditGlobalProductRequestBodySizeChartImage");
var EditGlobalProductRequestBodySizeChartTemplate_1 = require("./product/V202309/EditGlobalProductRequestBodySizeChartTemplate");
var EditGlobalProductRequestBodySkus_1 = require("./product/V202309/EditGlobalProductRequestBodySkus");
var EditGlobalProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/EditGlobalProductRequestBodySkusIdentifierCode");
var EditGlobalProductRequestBodySkusInventory_1 = require("./product/V202309/EditGlobalProductRequestBodySkusInventory");
var EditGlobalProductRequestBodySkusPrice_1 = require("./product/V202309/EditGlobalProductRequestBodySkusPrice");
var EditGlobalProductRequestBodySkusSalePrices_1 = require("./product/V202309/EditGlobalProductRequestBodySkusSalePrices");
var EditGlobalProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributes");
var EditGlobalProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/EditGlobalProductRequestBodySkusSalesAttributesSkuImg");
var EditGlobalProductRequestBodyVideo_1 = require("./product/V202309/EditGlobalProductRequestBodyVideo");
var EditGlobalProductResponse_1 = require("./product/V202309/EditGlobalProductResponse");
var EditGlobalProductResponseData_1 = require("./product/V202309/EditGlobalProductResponseData");
var EditGlobalProductResponseDataGlobalSkus_1 = require("./product/V202309/EditGlobalProductResponseDataGlobalSkus");
var EditGlobalProductResponseDataGlobalSkusSalesAttributes_1 = require("./product/V202309/EditGlobalProductResponseDataGlobalSkusSalesAttributes");
var EditGlobalProductResponseDataPublishResults_1 = require("./product/V202309/EditGlobalProductResponseDataPublishResults");
var EditGlobalProductResponseDataPublishResultsFailReasons_1 = require("./product/V202309/EditGlobalProductResponseDataPublishResultsFailReasons");
var EditProductRequestBody_1 = require("./product/V202309/EditProductRequestBody");
var EditProductRequestBodyCertifications_1 = require("./product/V202309/EditProductRequestBodyCertifications");
var EditProductRequestBodyCertificationsFiles_1 = require("./product/V202309/EditProductRequestBodyCertificationsFiles");
var EditProductRequestBodyCertificationsImages_1 = require("./product/V202309/EditProductRequestBodyCertificationsImages");
var EditProductRequestBodyMainImages_1 = require("./product/V202309/EditProductRequestBodyMainImages");
var EditProductRequestBodyPackageDimensions_1 = require("./product/V202309/EditProductRequestBodyPackageDimensions");
var EditProductRequestBodyPackageWeight_1 = require("./product/V202309/EditProductRequestBodyPackageWeight");
var EditProductRequestBodyProductAttributes_1 = require("./product/V202309/EditProductRequestBodyProductAttributes");
var EditProductRequestBodyProductAttributesValues_1 = require("./product/V202309/EditProductRequestBodyProductAttributesValues");
var EditProductRequestBodySizeChart_1 = require("./product/V202309/EditProductRequestBodySizeChart");
var EditProductRequestBodySizeChartImage_1 = require("./product/V202309/EditProductRequestBodySizeChartImage");
var EditProductRequestBodySizeChartTemplate_1 = require("./product/V202309/EditProductRequestBodySizeChartTemplate");
var EditProductRequestBodySkus_1 = require("./product/V202309/EditProductRequestBodySkus");
var EditProductRequestBodySkusCombinedSkus_1 = require("./product/V202309/EditProductRequestBodySkusCombinedSkus");
var EditProductRequestBodySkusExternalListPrices_1 = require("./product/V202309/EditProductRequestBodySkusExternalListPrices");
var EditProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/EditProductRequestBodySkusIdentifierCode");
var EditProductRequestBodySkusInventory_1 = require("./product/V202309/EditProductRequestBodySkusInventory");
var EditProductRequestBodySkusListPrice_1 = require("./product/V202309/EditProductRequestBodySkusListPrice");
var EditProductRequestBodySkusPreSale_1 = require("./product/V202309/EditProductRequestBodySkusPreSale");
var EditProductRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/EditProductRequestBodySkusPreSaleFulfillmentType");
var EditProductRequestBodySkusPrice_1 = require("./product/V202309/EditProductRequestBodySkusPrice");
var EditProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/EditProductRequestBodySkusSalesAttributes");
var EditProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/EditProductRequestBodySkusSalesAttributesSkuImg");
var EditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/EditProductRequestBodySkusSalesAttributesSupplementarySkuImages");
var EditProductRequestBodyVideo_1 = require("./product/V202309/EditProductRequestBodyVideo");
var EditProductResponse_1 = require("./product/V202309/EditProductResponse");
var EditProductResponseData_1 = require("./product/V202309/EditProductResponseData");
var EditProductResponseDataAudit_1 = require("./product/V202309/EditProductResponseDataAudit");
var EditProductResponseDataSkus_1 = require("./product/V202309/EditProductResponseDataSkus");
var EditProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/EditProductResponseDataSkusSalesAttributes");
var EditProductResponseDataWarnings_1 = require("./product/V202309/EditProductResponseDataWarnings");
var GetAttributesResponse_1 = require("./product/V202309/GetAttributesResponse");
var GetAttributesResponseData_1 = require("./product/V202309/GetAttributesResponseData");
var GetAttributesResponseDataAttributes_1 = require("./product/V202309/GetAttributesResponseDataAttributes");
var GetAttributesResponseDataAttributesRequirementConditions_1 = require("./product/V202309/GetAttributesResponseDataAttributesRequirementConditions");
var GetAttributesResponseDataAttributesValues_1 = require("./product/V202309/GetAttributesResponseDataAttributesValues");
var GetBrandsResponse_1 = require("./product/V202309/GetBrandsResponse");
var GetBrandsResponseData_1 = require("./product/V202309/GetBrandsResponseData");
var GetBrandsResponseDataBrands_1 = require("./product/V202309/GetBrandsResponseDataBrands");
var GetCategoriesResponse_1 = require("./product/V202309/GetCategoriesResponse");
var GetCategoriesResponseData_1 = require("./product/V202309/GetCategoriesResponseData");
var GetCategoriesResponseDataCategories_1 = require("./product/V202309/GetCategoriesResponseDataCategories");
var GetCategoryRulesResponse_1 = require("./product/V202309/GetCategoryRulesResponse");
var GetCategoryRulesResponseData_1 = require("./product/V202309/GetCategoryRulesResponseData");
var GetCategoryRulesResponseDataCod_1 = require("./product/V202309/GetCategoryRulesResponseDataCod");
var GetCategoryRulesResponseDataEpr_1 = require("./product/V202309/GetCategoryRulesResponseDataEpr");
var GetCategoryRulesResponseDataManufacturer_1 = require("./product/V202309/GetCategoryRulesResponseDataManufacturer");
var GetCategoryRulesResponseDataPackageDimension_1 = require("./product/V202309/GetCategoryRulesResponseDataPackageDimension");
var GetCategoryRulesResponseDataProductCertifications_1 = require("./product/V202309/GetCategoryRulesResponseDataProductCertifications");
var GetCategoryRulesResponseDataProductCertificationsExpirationDate_1 = require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsExpirationDate");
var GetCategoryRulesResponseDataProductCertificationsRequirementConditions_1 = require("./product/V202309/GetCategoryRulesResponseDataProductCertificationsRequirementConditions");
var GetCategoryRulesResponseDataResponsiblePerson_1 = require("./product/V202309/GetCategoryRulesResponseDataResponsiblePerson");
var GetCategoryRulesResponseDataSizeChart_1 = require("./product/V202309/GetCategoryRulesResponseDataSizeChart");
var GetGlobalAttributesResponse_1 = require("./product/V202309/GetGlobalAttributesResponse");
var GetGlobalAttributesResponseData_1 = require("./product/V202309/GetGlobalAttributesResponseData");
var GetGlobalAttributesResponseDataAttributes_1 = require("./product/V202309/GetGlobalAttributesResponseDataAttributes");
var GetGlobalAttributesResponseDataAttributesRequirementConditions_1 = require("./product/V202309/GetGlobalAttributesResponseDataAttributesRequirementConditions");
var GetGlobalAttributesResponseDataAttributesValues_1 = require("./product/V202309/GetGlobalAttributesResponseDataAttributesValues");
var GetGlobalCategoriesResponse_1 = require("./product/V202309/GetGlobalCategoriesResponse");
var GetGlobalCategoriesResponseData_1 = require("./product/V202309/GetGlobalCategoriesResponseData");
var GetGlobalCategoriesResponseDataCategories_1 = require("./product/V202309/GetGlobalCategoriesResponseDataCategories");
var GetGlobalCategoryRulesResponse_1 = require("./product/V202309/GetGlobalCategoryRulesResponse");
var GetGlobalCategoryRulesResponseData_1 = require("./product/V202309/GetGlobalCategoryRulesResponseData");
var GetGlobalCategoryRulesResponseDataManufacturer_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataManufacturer");
var GetGlobalCategoryRulesResponseDataProductCertifications_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertifications");
var GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions");
var GetGlobalCategoryRulesResponseDataResponsiblePerson_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataResponsiblePerson");
var GetGlobalCategoryRulesResponseDataSizeChart_1 = require("./product/V202309/GetGlobalCategoryRulesResponseDataSizeChart");
var GetGlobalProductResponse_1 = require("./product/V202309/GetGlobalProductResponse");
var GetGlobalProductResponseData_1 = require("./product/V202309/GetGlobalProductResponseData");
var GetGlobalProductResponseDataBrand_1 = require("./product/V202309/GetGlobalProductResponseDataBrand");
var GetGlobalProductResponseDataCategory_1 = require("./product/V202309/GetGlobalProductResponseDataCategory");
var GetGlobalProductResponseDataCertifications_1 = require("./product/V202309/GetGlobalProductResponseDataCertifications");
var GetGlobalProductResponseDataCertificationsFiles_1 = require("./product/V202309/GetGlobalProductResponseDataCertificationsFiles");
var GetGlobalProductResponseDataCertificationsImages_1 = require("./product/V202309/GetGlobalProductResponseDataCertificationsImages");
var GetGlobalProductResponseDataMainImages_1 = require("./product/V202309/GetGlobalProductResponseDataMainImages");
var GetGlobalProductResponseDataManufacturer_1 = require("./product/V202309/GetGlobalProductResponseDataManufacturer");
var GetGlobalProductResponseDataPackageDimensions_1 = require("./product/V202309/GetGlobalProductResponseDataPackageDimensions");
var GetGlobalProductResponseDataPackageWeight_1 = require("./product/V202309/GetGlobalProductResponseDataPackageWeight");
var GetGlobalProductResponseDataProductAttributes_1 = require("./product/V202309/GetGlobalProductResponseDataProductAttributes");
var GetGlobalProductResponseDataProductAttributesValues_1 = require("./product/V202309/GetGlobalProductResponseDataProductAttributesValues");
var GetGlobalProductResponseDataProducts_1 = require("./product/V202309/GetGlobalProductResponseDataProducts");
var GetGlobalProductResponseDataProductsSkuMappings_1 = require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappings");
var GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings_1 = require("./product/V202309/GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings");
var GetGlobalProductResponseDataSizeChart_1 = require("./product/V202309/GetGlobalProductResponseDataSizeChart");
var GetGlobalProductResponseDataSizeChartImage_1 = require("./product/V202309/GetGlobalProductResponseDataSizeChartImage");
var GetGlobalProductResponseDataSizeChartTemplate_1 = require("./product/V202309/GetGlobalProductResponseDataSizeChartTemplate");
var GetGlobalProductResponseDataSkus_1 = require("./product/V202309/GetGlobalProductResponseDataSkus");
var GetGlobalProductResponseDataSkusIdentifierCode_1 = require("./product/V202309/GetGlobalProductResponseDataSkusIdentifierCode");
var GetGlobalProductResponseDataSkusInventory_1 = require("./product/V202309/GetGlobalProductResponseDataSkusInventory");
var GetGlobalProductResponseDataSkusPrice_1 = require("./product/V202309/GetGlobalProductResponseDataSkusPrice");
var GetGlobalProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributes");
var GetGlobalProductResponseDataSkusSalesAttributesSkuImg_1 = require("./product/V202309/GetGlobalProductResponseDataSkusSalesAttributesSkuImg");
var GetGlobalProductResponseDataVideo_1 = require("./product/V202309/GetGlobalProductResponseDataVideo");
var GetProductResponse_1 = require("./product/V202309/GetProductResponse");
var GetProductResponseData_1 = require("./product/V202309/GetProductResponseData");
var GetProductResponseDataAudit_1 = require("./product/V202309/GetProductResponseDataAudit");
var GetProductResponseDataAuditFailedReasons_1 = require("./product/V202309/GetProductResponseDataAuditFailedReasons");
var GetProductResponseDataBrand_1 = require("./product/V202309/GetProductResponseDataBrand");
var GetProductResponseDataCategoryChains_1 = require("./product/V202309/GetProductResponseDataCategoryChains");
var GetProductResponseDataCertifications_1 = require("./product/V202309/GetProductResponseDataCertifications");
var GetProductResponseDataCertificationsFiles_1 = require("./product/V202309/GetProductResponseDataCertificationsFiles");
var GetProductResponseDataCertificationsImages_1 = require("./product/V202309/GetProductResponseDataCertificationsImages");
var GetProductResponseDataDeliveryOptions_1 = require("./product/V202309/GetProductResponseDataDeliveryOptions");
var GetProductResponseDataGlobalProductAssociation_1 = require("./product/V202309/GetProductResponseDataGlobalProductAssociation");
var GetProductResponseDataGlobalProductAssociationSkuMappings_1 = require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappings");
var GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings_1 = require("./product/V202309/GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings");
var GetProductResponseDataIntegratedPlatformStatuses_1 = require("./product/V202309/GetProductResponseDataIntegratedPlatformStatuses");
var GetProductResponseDataMainImages_1 = require("./product/V202309/GetProductResponseDataMainImages");
var GetProductResponseDataPackageDimensions_1 = require("./product/V202309/GetProductResponseDataPackageDimensions");
var GetProductResponseDataPackageWeight_1 = require("./product/V202309/GetProductResponseDataPackageWeight");
var GetProductResponseDataPrescriptionRequirement_1 = require("./product/V202309/GetProductResponseDataPrescriptionRequirement");
var GetProductResponseDataProductAttributes_1 = require("./product/V202309/GetProductResponseDataProductAttributes");
var GetProductResponseDataProductAttributesValues_1 = require("./product/V202309/GetProductResponseDataProductAttributesValues");
var GetProductResponseDataProductFamilies_1 = require("./product/V202309/GetProductResponseDataProductFamilies");
var GetProductResponseDataProductFamiliesProducts_1 = require("./product/V202309/GetProductResponseDataProductFamiliesProducts");
var GetProductResponseDataRecommendedCategories_1 = require("./product/V202309/GetProductResponseDataRecommendedCategories");
var GetProductResponseDataSizeChart_1 = require("./product/V202309/GetProductResponseDataSizeChart");
var GetProductResponseDataSizeChartImage_1 = require("./product/V202309/GetProductResponseDataSizeChartImage");
var GetProductResponseDataSizeChartTemplate_1 = require("./product/V202309/GetProductResponseDataSizeChartTemplate");
var GetProductResponseDataSkus_1 = require("./product/V202309/GetProductResponseDataSkus");
var GetProductResponseDataSkusCombinedSkus_1 = require("./product/V202309/GetProductResponseDataSkusCombinedSkus");
var GetProductResponseDataSkusExternalListPrices_1 = require("./product/V202309/GetProductResponseDataSkusExternalListPrices");
var GetProductResponseDataSkusGlobalListingPolicy_1 = require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicy");
var GetProductResponseDataSkusGlobalListingPolicyReplicateSource_1 = require("./product/V202309/GetProductResponseDataSkusGlobalListingPolicyReplicateSource");
var GetProductResponseDataSkusIdentifierCode_1 = require("./product/V202309/GetProductResponseDataSkusIdentifierCode");
var GetProductResponseDataSkusInventory_1 = require("./product/V202309/GetProductResponseDataSkusInventory");
var GetProductResponseDataSkusListPrice_1 = require("./product/V202309/GetProductResponseDataSkusListPrice");
var GetProductResponseDataSkusPreSale_1 = require("./product/V202309/GetProductResponseDataSkusPreSale");
var GetProductResponseDataSkusPreSaleFulfillmentType_1 = require("./product/V202309/GetProductResponseDataSkusPreSaleFulfillmentType");
var GetProductResponseDataSkusPrice_1 = require("./product/V202309/GetProductResponseDataSkusPrice");
var GetProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/GetProductResponseDataSkusSalesAttributes");
var GetProductResponseDataSkusSalesAttributesSkuImg_1 = require("./product/V202309/GetProductResponseDataSkusSalesAttributesSkuImg");
var GetProductResponseDataSkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/GetProductResponseDataSkusSalesAttributesSupplementarySkuImages");
var GetProductResponseDataVideo_1 = require("./product/V202309/GetProductResponseDataVideo");
var InventorySearchRequestBody_1 = require("./product/V202309/InventorySearchRequestBody");
var InventorySearchResponse_1 = require("./product/V202309/InventorySearchResponse");
var InventorySearchResponseData_1 = require("./product/V202309/InventorySearchResponseData");
var InventorySearchResponseDataInventory_1 = require("./product/V202309/InventorySearchResponseDataInventory");
var InventorySearchResponseDataInventorySkus_1 = require("./product/V202309/InventorySearchResponseDataInventorySkus");
var InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution");
var InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory");
var InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory");
var InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory");
var InventorySearchResponseDataInventorySkusWarehouseInventory_1 = require("./product/V202309/InventorySearchResponseDataInventorySkusWarehouseInventory");
var PartialEditProductRequestBody_1 = require("./product/V202309/PartialEditProductRequestBody");
var PartialEditProductRequestBodyCertifications_1 = require("./product/V202309/PartialEditProductRequestBodyCertifications");
var PartialEditProductRequestBodyCertificationsFiles_1 = require("./product/V202309/PartialEditProductRequestBodyCertificationsFiles");
var PartialEditProductRequestBodyCertificationsImages_1 = require("./product/V202309/PartialEditProductRequestBodyCertificationsImages");
var PartialEditProductRequestBodyMainImages_1 = require("./product/V202309/PartialEditProductRequestBodyMainImages");
var PartialEditProductRequestBodyPackageDimensions_1 = require("./product/V202309/PartialEditProductRequestBodyPackageDimensions");
var PartialEditProductRequestBodyPackageWeight_1 = require("./product/V202309/PartialEditProductRequestBodyPackageWeight");
var PartialEditProductRequestBodyProductAttributes_1 = require("./product/V202309/PartialEditProductRequestBodyProductAttributes");
var PartialEditProductRequestBodyProductAttributesValues_1 = require("./product/V202309/PartialEditProductRequestBodyProductAttributesValues");
var PartialEditProductRequestBodySizeChart_1 = require("./product/V202309/PartialEditProductRequestBodySizeChart");
var PartialEditProductRequestBodySizeChartImage_1 = require("./product/V202309/PartialEditProductRequestBodySizeChartImage");
var PartialEditProductRequestBodySizeChartTemplate_1 = require("./product/V202309/PartialEditProductRequestBodySizeChartTemplate");
var PartialEditProductRequestBodySkus_1 = require("./product/V202309/PartialEditProductRequestBodySkus");
var PartialEditProductRequestBodySkusExternalListPrices_1 = require("./product/V202309/PartialEditProductRequestBodySkusExternalListPrices");
var PartialEditProductRequestBodySkusIdentifierCode_1 = require("./product/V202309/PartialEditProductRequestBodySkusIdentifierCode");
var PartialEditProductRequestBodySkusInventory_1 = require("./product/V202309/PartialEditProductRequestBodySkusInventory");
var PartialEditProductRequestBodySkusListPrice_1 = require("./product/V202309/PartialEditProductRequestBodySkusListPrice");
var PartialEditProductRequestBodySkusPreSale_1 = require("./product/V202309/PartialEditProductRequestBodySkusPreSale");
var PartialEditProductRequestBodySkusPreSaleFulfillmentType_1 = require("./product/V202309/PartialEditProductRequestBodySkusPreSaleFulfillmentType");
var PartialEditProductRequestBodySkusPrice_1 = require("./product/V202309/PartialEditProductRequestBodySkusPrice");
var PartialEditProductRequestBodySkusSalesAttributes_1 = require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributes");
var PartialEditProductRequestBodySkusSalesAttributesSkuImg_1 = require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSkuImg");
var PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1 = require("./product/V202309/PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages");
var PartialEditProductRequestBodyVideo_1 = require("./product/V202309/PartialEditProductRequestBodyVideo");
var PartialEditProductResponse_1 = require("./product/V202309/PartialEditProductResponse");
var PartialEditProductResponseData_1 = require("./product/V202309/PartialEditProductResponseData");
var PartialEditProductResponseDataAudit_1 = require("./product/V202309/PartialEditProductResponseDataAudit");
var PartialEditProductResponseDataSkus_1 = require("./product/V202309/PartialEditProductResponseDataSkus");
var PartialEditProductResponseDataSkusSalesAttributes_1 = require("./product/V202309/PartialEditProductResponseDataSkusSalesAttributes");
var PublishGlobalProductRequestBody_1 = require("./product/V202309/PublishGlobalProductRequestBody");
var PublishGlobalProductRequestBodyPublishTarget_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTarget");
var PublishGlobalProductRequestBodyPublishTargetSkus_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkus");
var PublishGlobalProductRequestBodyPublishTargetSkusInventory_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusInventory");
var PublishGlobalProductRequestBodyPublishTargetSkusPrice_1 = require("./product/V202309/PublishGlobalProductRequestBodyPublishTargetSkusPrice");
var PublishGlobalProductResponse_1 = require("./product/V202309/PublishGlobalProductResponse");
var PublishGlobalProductResponseData_1 = require("./product/V202309/PublishGlobalProductResponseData");
var PublishGlobalProductResponseDataProducts_1 = require("./product/V202309/PublishGlobalProductResponseDataProducts");
var PublishGlobalProductResponseDataProductsSkus_1 = require("./product/V202309/PublishGlobalProductResponseDataProductsSkus");
var PublishGlobalProductResponseDataProductsSkusSaleAttributes_1 = require("./product/V202309/PublishGlobalProductResponseDataProductsSkusSaleAttributes");
var PublishGlobalProductResponseDataPublishResult_1 = require("./product/V202309/PublishGlobalProductResponseDataPublishResult");
var PublishGlobalProductResponseDataPublishResultFailReasons_1 = require("./product/V202309/PublishGlobalProductResponseDataPublishResultFailReasons");
var RecommendCategoryRequestBody_1 = require("./product/V202309/RecommendCategoryRequestBody");
var RecommendCategoryRequestBodyImages_1 = require("./product/V202309/RecommendCategoryRequestBodyImages");
var RecommendCategoryResponse_1 = require("./product/V202309/RecommendCategoryResponse");
var RecommendCategoryResponseData_1 = require("./product/V202309/RecommendCategoryResponseData");
var RecommendCategoryResponseDataCategories_1 = require("./product/V202309/RecommendCategoryResponseDataCategories");
var RecommendGlobalCategoriesRequestBody_1 = require("./product/V202309/RecommendGlobalCategoriesRequestBody");
var RecommendGlobalCategoriesRequestBodyImages_1 = require("./product/V202309/RecommendGlobalCategoriesRequestBodyImages");
var RecommendGlobalCategoriesResponse_1 = require("./product/V202309/RecommendGlobalCategoriesResponse");
var RecommendGlobalCategoriesResponseData_1 = require("./product/V202309/RecommendGlobalCategoriesResponseData");
var RecommendGlobalCategoriesResponseDataCategories_1 = require("./product/V202309/RecommendGlobalCategoriesResponseDataCategories");
var RecoverProductsRequestBody_1 = require("./product/V202309/RecoverProductsRequestBody");
var RecoverProductsResponse_1 = require("./product/V202309/RecoverProductsResponse");
var RecoverProductsResponseData_1 = require("./product/V202309/RecoverProductsResponseData");
var RecoverProductsResponseDataErrors_1 = require("./product/V202309/RecoverProductsResponseDataErrors");
var RecoverProductsResponseDataErrorsDetail_1 = require("./product/V202309/RecoverProductsResponseDataErrorsDetail");
var SearchGlobalProductsRequestBody_1 = require("./product/V202309/SearchGlobalProductsRequestBody");
var SearchGlobalProductsResponse_1 = require("./product/V202309/SearchGlobalProductsResponse");
var SearchGlobalProductsResponseData_1 = require("./product/V202309/SearchGlobalProductsResponseData");
var SearchGlobalProductsResponseDataGlobalProducts_1 = require("./product/V202309/SearchGlobalProductsResponseDataGlobalProducts");
var SearchGlobalProductsResponseDataGlobalProductsSkus_1 = require("./product/V202309/SearchGlobalProductsResponseDataGlobalProductsSkus");
var SearchProductsRequestBody_1 = require("./product/V202309/SearchProductsRequestBody");
var SearchProductsResponse_1 = require("./product/V202309/SearchProductsResponse");
var SearchProductsResponseData_1 = require("./product/V202309/SearchProductsResponseData");
var SearchProductsResponseDataProducts_1 = require("./product/V202309/SearchProductsResponseDataProducts");
var SearchProductsResponseDataProductsRecommendedCategories_1 = require("./product/V202309/SearchProductsResponseDataProductsRecommendedCategories");
var SearchProductsResponseDataProductsSkus_1 = require("./product/V202309/SearchProductsResponseDataProductsSkus");
var SearchProductsResponseDataProductsSkusInventory_1 = require("./product/V202309/SearchProductsResponseDataProductsSkusInventory");
var SearchProductsResponseDataProductsSkusPrice_1 = require("./product/V202309/SearchProductsResponseDataProductsSkusPrice");
var UpdateGlobalInventoryRequestBody_1 = require("./product/V202309/UpdateGlobalInventoryRequestBody");
var UpdateGlobalInventoryRequestBodyGlobalSkus_1 = require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkus");
var UpdateGlobalInventoryRequestBodyGlobalSkusInventory_1 = require("./product/V202309/UpdateGlobalInventoryRequestBodyGlobalSkusInventory");
var UpdateGlobalInventoryResponse_1 = require("./product/V202309/UpdateGlobalInventoryResponse");
var UpdateInventoryRequestBody_1 = require("./product/V202309/UpdateInventoryRequestBody");
var UpdateInventoryRequestBodySkus_1 = require("./product/V202309/UpdateInventoryRequestBodySkus");
var UpdateInventoryRequestBodySkusInventory_1 = require("./product/V202309/UpdateInventoryRequestBodySkusInventory");
var UpdateInventoryResponse_1 = require("./product/V202309/UpdateInventoryResponse");
var UpdateInventoryResponseData_1 = require("./product/V202309/UpdateInventoryResponseData");
var UpdateInventoryResponseDataErrors_1 = require("./product/V202309/UpdateInventoryResponseDataErrors");
var UpdateInventoryResponseDataErrorsDetail_1 = require("./product/V202309/UpdateInventoryResponseDataErrorsDetail");
var UpdateInventoryResponseDataErrorsDetailExtraErrors_1 = require("./product/V202309/UpdateInventoryResponseDataErrorsDetailExtraErrors");
var UpdatePriceRequestBody_1 = require("./product/V202309/UpdatePriceRequestBody");
var UpdatePriceRequestBodySkus_1 = require("./product/V202309/UpdatePriceRequestBodySkus");
var UpdatePriceRequestBodySkusExternalListPrices_1 = require("./product/V202309/UpdatePriceRequestBodySkusExternalListPrices");
var UpdatePriceRequestBodySkusListPrice_1 = require("./product/V202309/UpdatePriceRequestBodySkusListPrice");
var UpdatePriceRequestBodySkusPrice_1 = require("./product/V202309/UpdatePriceRequestBodySkusPrice");
var UpdatePriceResponse_1 = require("./product/V202309/UpdatePriceResponse");
var UploadProductFileResponse_1 = require("./product/V202309/UploadProductFileResponse");
var UploadProductFileResponseData_1 = require("./product/V202309/UploadProductFileResponseData");
var UploadProductImageResponse_1 = require("./product/V202309/UploadProductImageResponse");
var UploadProductImageResponseData_1 = require("./product/V202309/UploadProductImageResponseData");
var CheckListingPrerequisitesResponse_2 = require("./product/V202312/CheckListingPrerequisitesResponse");
var CheckListingPrerequisitesResponseData_2 = require("./product/V202312/CheckListingPrerequisitesResponseData");
var CheckListingPrerequisitesResponseDataCheckResults_1 = require("./product/V202312/CheckListingPrerequisitesResponseDataCheckResults");
var SearchGlobalProductsRequestBody_2 = require("./product/V202312/SearchGlobalProductsRequestBody");
var SearchGlobalProductsResponse_2 = require("./product/V202312/SearchGlobalProductsResponse");
var SearchGlobalProductsResponseData_2 = require("./product/V202312/SearchGlobalProductsResponseData");
var SearchGlobalProductsResponseDataGlobalProducts_2 = require("./product/V202312/SearchGlobalProductsResponseDataGlobalProducts");
var SearchGlobalProductsResponseDataGlobalProductsSkus_2 = require("./product/V202312/SearchGlobalProductsResponseDataGlobalProductsSkus");
var SearchProductsRequestBody_2 = require("./product/V202312/SearchProductsRequestBody");
var SearchProductsResponse_2 = require("./product/V202312/SearchProductsResponse");
var SearchProductsResponseData_2 = require("./product/V202312/SearchProductsResponseData");
var SearchProductsResponseDataProducts_2 = require("./product/V202312/SearchProductsResponseDataProducts");
var SearchProductsResponseDataProductsAudit_1 = require("./product/V202312/SearchProductsResponseDataProductsAudit");
var SearchProductsResponseDataProductsIntegratedPlatformStatuses_1 = require("./product/V202312/SearchProductsResponseDataProductsIntegratedPlatformStatuses");
var SearchProductsResponseDataProductsRecommendedCategories_2 = require("./product/V202312/SearchProductsResponseDataProductsRecommendedCategories");
var SearchProductsResponseDataProductsSkus_2 = require("./product/V202312/SearchProductsResponseDataProductsSkus");
var SearchProductsResponseDataProductsSkusExternalListPrices_1 = require("./product/V202312/SearchProductsResponseDataProductsSkusExternalListPrices");
var SearchProductsResponseDataProductsSkusInventory_2 = require("./product/V202312/SearchProductsResponseDataProductsSkusInventory");
var SearchProductsResponseDataProductsSkusListPrice_1 = require("./product/V202312/SearchProductsResponseDataProductsSkusListPrice");
var SearchProductsResponseDataProductsSkusPrice_2 = require("./product/V202312/SearchProductsResponseDataProductsSkusPrice");
var ListingSchemasResponse_1 = require("./product/V202401/ListingSchemasResponse");
var ListingSchemasResponseData_1 = require("./product/V202401/ListingSchemasResponseData");
var ListingSchemasResponseDataErrors_1 = require("./product/V202401/ListingSchemasResponseDataErrors");
var ListingSchemasResponseDataErrorsDetail_1 = require("./product/V202401/ListingSchemasResponseDataErrorsDetail");
var ListingSchemasResponseDataListingSchemas_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemas");
var ListingSchemasResponseDataListingSchemasFileds_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFileds");
var ListingSchemasResponseDataListingSchemasFiledsComplexValues_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValues");
var ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions");
var ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules");
var ListingSchemasResponseDataListingSchemasFiledsOptions_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsOptions");
var ListingSchemasResponseDataListingSchemasFiledsRules_1 = require("./product/V202401/ListingSchemasResponseDataListingSchemasFiledsRules");
var OptimizedImagesRequestBody_1 = require("./product/V202404/OptimizedImagesRequestBody");
var OptimizedImagesRequestBodyImages_1 = require("./product/V202404/OptimizedImagesRequestBodyImages");
var OptimizedImagesResponse_1 = require("./product/V202404/OptimizedImagesResponse");
var OptimizedImagesResponseData_1 = require("./product/V202404/OptimizedImagesResponseData");
var OptimizedImagesResponseDataImages_1 = require("./product/V202404/OptimizedImagesResponseDataImages");
var GetProductsSEOWordsResponse_1 = require("./product/V202405/GetProductsSEOWordsResponse");
var GetProductsSEOWordsResponseData_1 = require("./product/V202405/GetProductsSEOWordsResponseData");
var GetProductsSEOWordsResponseDataProducts_1 = require("./product/V202405/GetProductsSEOWordsResponseDataProducts");
var GetProductsSEOWordsResponseDataProductsSeoWords_1 = require("./product/V202405/GetProductsSEOWordsResponseDataProductsSeoWords");
var GetRecommendedProductTitleAndDescriptionResponse_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponse");
var GetRecommendedProductTitleAndDescriptionResponseData_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseData");
var GetRecommendedProductTitleAndDescriptionResponseDataProducts_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProducts");
var GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions");
var GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems_1 = require("./product/V202405/GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems");
var ProductInformationIssueDiagnosisResponse_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponse");
var ProductInformationIssueDiagnosisResponseData_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseData");
var ProductInformationIssueDiagnosisResponseDataProducts_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProducts");
var ProductInformationIssueDiagnosisResponseDataProductsDiagnoses_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnoses");
var ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults");
var ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion");
var ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages");
var ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords");
var ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts");
var ProductInformationIssueDiagnosisResponseDataProductsListingQuality_1 = require("./product/V202405/ProductInformationIssueDiagnosisResponseDataProductsListingQuality");
var CreateCategoryUpgradeTaskResponse_1 = require("./product/V202407/CreateCategoryUpgradeTaskResponse");
var ListingSchemasResponse_2 = require("./product/V202407/ListingSchemasResponse");
var ListingSchemasResponseData_2 = require("./product/V202407/ListingSchemasResponseData");
var ListingSchemasResponseDataErrors_2 = require("./product/V202407/ListingSchemasResponseDataErrors");
var ListingSchemasResponseDataErrorsDetail_2 = require("./product/V202407/ListingSchemasResponseDataErrorsDetail");
var ListingSchemasResponseDataListingSchemas_2 = require("./product/V202407/ListingSchemasResponseDataListingSchemas");
var ListingSchemasResponseDataListingSchemasFields_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFields");
var ListingSchemasResponseDataListingSchemasFieldsComplexValues_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValues");
var ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions");
var ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules");
var ListingSchemasResponseDataListingSchemasFieldsOptions_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsOptions");
var ListingSchemasResponseDataListingSchemasFieldsRules_1 = require("./product/V202407/ListingSchemasResponseDataListingSchemasFieldsRules");
var SearchSizeChartsRequestBody_1 = require("./product/V202407/SearchSizeChartsRequestBody");
var SearchSizeChartsResponse_1 = require("./product/V202407/SearchSizeChartsResponse");
var SearchSizeChartsResponseData_1 = require("./product/V202407/SearchSizeChartsResponseData");
var SearchSizeChartsResponseDataSizeChart_1 = require("./product/V202407/SearchSizeChartsResponseDataSizeChart");
var SearchSizeChartsResponseDataSizeChartImages_1 = require("./product/V202407/SearchSizeChartsResponseDataSizeChartImages");
var CreateManufacturerRequestBody_1 = require("./product/V202409/CreateManufacturerRequestBody");
var CreateManufacturerRequestBodyPhoneNumber_1 = require("./product/V202409/CreateManufacturerRequestBodyPhoneNumber");
var CreateManufacturerResponse_1 = require("./product/V202409/CreateManufacturerResponse");
var CreateManufacturerResponseData_1 = require("./product/V202409/CreateManufacturerResponseData");
var CreateResponsiblePersonRequestBody_1 = require("./product/V202409/CreateResponsiblePersonRequestBody");
var CreateResponsiblePersonRequestBodyAddress_1 = require("./product/V202409/CreateResponsiblePersonRequestBodyAddress");
var CreateResponsiblePersonRequestBodyPhoneNumber_1 = require("./product/V202409/CreateResponsiblePersonRequestBodyPhoneNumber");
var CreateResponsiblePersonResponse_1 = require("./product/V202409/CreateResponsiblePersonResponse");
var CreateResponsiblePersonResponseData_1 = require("./product/V202409/CreateResponsiblePersonResponseData");
var PartialEditManufacturerRequestBody_1 = require("./product/V202409/PartialEditManufacturerRequestBody");
var PartialEditManufacturerRequestBodyPhoneNumber_1 = require("./product/V202409/PartialEditManufacturerRequestBodyPhoneNumber");
var PartialEditManufacturerResponse_1 = require("./product/V202409/PartialEditManufacturerResponse");
var PartialEditResponsiblePersonRequestBody_1 = require("./product/V202409/PartialEditResponsiblePersonRequestBody");
var PartialEditResponsiblePersonRequestBodyAddress_1 = require("./product/V202409/PartialEditResponsiblePersonRequestBodyAddress");
var PartialEditResponsiblePersonRequestBodyPhoneNumber_1 = require("./product/V202409/PartialEditResponsiblePersonRequestBodyPhoneNumber");
var PartialEditResponsiblePersonResponse_1 = require("./product/V202409/PartialEditResponsiblePersonResponse");
var SearchManufacturersRequestBody_1 = require("./product/V202409/SearchManufacturersRequestBody");
var SearchManufacturersResponse_1 = require("./product/V202409/SearchManufacturersResponse");
var SearchManufacturersResponseData_1 = require("./product/V202409/SearchManufacturersResponseData");
var SearchManufacturersResponseDataManufacturers_1 = require("./product/V202409/SearchManufacturersResponseDataManufacturers");
var SearchManufacturersResponseDataManufacturersPhoneNumber_1 = require("./product/V202409/SearchManufacturersResponseDataManufacturersPhoneNumber");
var SearchResponsiblePersonsRequestBody_1 = require("./product/V202409/SearchResponsiblePersonsRequestBody");
var SearchResponsiblePersonsResponse_1 = require("./product/V202409/SearchResponsiblePersonsResponse");
var SearchResponsiblePersonsResponseData_1 = require("./product/V202409/SearchResponsiblePersonsResponseData");
var SearchResponsiblePersonsResponseDataResponsiblePersons_1 = require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersons");
var SearchResponsiblePersonsResponseDataResponsiblePersonsAddress_1 = require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsAddress");
var SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber_1 = require("./product/V202409/SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber");
var SearchManufacturersRequestBody_2 = require("./product/V202501/SearchManufacturersRequestBody");
var SearchManufacturersResponse_2 = require("./product/V202501/SearchManufacturersResponse");
var SearchManufacturersResponseData_2 = require("./product/V202501/SearchManufacturersResponseData");
var SearchManufacturersResponseDataManufacturers_2 = require("./product/V202501/SearchManufacturersResponseDataManufacturers");
var SearchManufacturersResponseDataManufacturersRegionalProfiles_1 = require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfiles");
var SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber_1 = require("./product/V202501/SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber");
var SearchResponsiblePersonsRequestBody_2 = require("./product/V202501/SearchResponsiblePersonsRequestBody");
var SearchResponsiblePersonsResponse_2 = require("./product/V202501/SearchResponsiblePersonsResponse");
var SearchResponsiblePersonsResponseData_2 = require("./product/V202501/SearchResponsiblePersonsResponseData");
var SearchResponsiblePersonsResponseDataResponsiblePersons_2 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersons");
var SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles_1 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles");
var SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress_1 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress");
var SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber_1 = require("./product/V202501/SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber");
var SearchProductsRequestBody_3 = require("./product/V202502/SearchProductsRequestBody");
var SearchProductsResponse_3 = require("./product/V202502/SearchProductsResponse");
var SearchProductsResponseData_3 = require("./product/V202502/SearchProductsResponseData");
var SearchProductsResponseDataProducts_3 = require("./product/V202502/SearchProductsResponseDataProducts");
var SearchProductsResponseDataProductsAudit_2 = require("./product/V202502/SearchProductsResponseDataProductsAudit");
var SearchProductsResponseDataProductsIntegratedPlatformStatuses_2 = require("./product/V202502/SearchProductsResponseDataProductsIntegratedPlatformStatuses");
var SearchProductsResponseDataProductsProductFamilies_1 = require("./product/V202502/SearchProductsResponseDataProductsProductFamilies");
var SearchProductsResponseDataProductsProductFamiliesProducts_1 = require("./product/V202502/SearchProductsResponseDataProductsProductFamiliesProducts");
var SearchProductsResponseDataProductsRecommendedCategories_3 = require("./product/V202502/SearchProductsResponseDataProductsRecommendedCategories");
var SearchProductsResponseDataProductsSkus_3 = require("./product/V202502/SearchProductsResponseDataProductsSkus");
var SearchProductsResponseDataProductsSkusExternalListPrices_2 = require("./product/V202502/SearchProductsResponseDataProductsSkusExternalListPrices");
var SearchProductsResponseDataProductsSkusInventory_3 = require("./product/V202502/SearchProductsResponseDataProductsSkusInventory");
var SearchProductsResponseDataProductsSkusListPrice_2 = require("./product/V202502/SearchProductsResponseDataProductsSkusListPrice");
var SearchProductsResponseDataProductsSkusPreSale_1 = require("./product/V202502/SearchProductsResponseDataProductsSkusPreSale");
var SearchProductsResponseDataProductsSkusPreSaleFulfillmentType_1 = require("./product/V202502/SearchProductsResponseDataProductsSkusPreSaleFulfillmentType");
var SearchProductsResponseDataProductsSkusPrice_3 = require("./product/V202502/SearchProductsResponseDataProductsSkusPrice");
var CreateImageTranslationTasksRequestBody_1 = require("./product/V202505/CreateImageTranslationTasksRequestBody");
var CreateImageTranslationTasksRequestBodyImages_1 = require("./product/V202505/CreateImageTranslationTasksRequestBodyImages");
var CreateImageTranslationTasksResponse_1 = require("./product/V202505/CreateImageTranslationTasksResponse");
var CreateImageTranslationTasksResponseData_1 = require("./product/V202505/CreateImageTranslationTasksResponseData");
var CreateImageTranslationTasksResponseDataTranslationTasks_1 = require("./product/V202505/CreateImageTranslationTasksResponseDataTranslationTasks");
var GetImageTranslationTasksResponse_1 = require("./product/V202506/GetImageTranslationTasksResponse");
var GetImageTranslationTasksResponseData_1 = require("./product/V202506/GetImageTranslationTasksResponseData");
var GetImageTranslationTasksResponseDataTranslationTasks_1 = require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasks");
var GetImageTranslationTasksResponseDataTranslationTasksOriginalImage_1 = require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksOriginalImage");
var GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage_1 = require("./product/V202506/GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage");
var CreateActivityRequestBody_1 = require("./promotion/V202309/CreateActivityRequestBody");
var CreateActivityRequestBodyDiscount_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscount");
var CreateActivityRequestBodyDiscountBmsmDiscount_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscount");
var CreateActivityRequestBodyDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountBmsmDiscountDetails");
var CreateActivityRequestBodyDiscountShippingDiscount_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscount");
var CreateActivityRequestBodyDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/CreateActivityRequestBodyDiscountShippingDiscountAreaScope");
var CreateActivityRequestBodyParticipationLimit_1 = require("./promotion/V202309/CreateActivityRequestBodyParticipationLimit");
var CreateActivityResponse_1 = require("./promotion/V202309/CreateActivityResponse");
var CreateActivityResponseData_1 = require("./promotion/V202309/CreateActivityResponseData");
var DeactivateActivityResponse_1 = require("./promotion/V202309/DeactivateActivityResponse");
var DeactivateActivityResponseData_1 = require("./promotion/V202309/DeactivateActivityResponseData");
var GetActivityResponse_1 = require("./promotion/V202309/GetActivityResponse");
var GetActivityResponseData_1 = require("./promotion/V202309/GetActivityResponseData");
var GetActivityResponseDataDiscount_1 = require("./promotion/V202309/GetActivityResponseDataDiscount");
var GetActivityResponseDataDiscountBmsmDiscount_1 = require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscount");
var GetActivityResponseDataDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/GetActivityResponseDataDiscountBmsmDiscountDetails");
var GetActivityResponseDataDiscountShippingDiscount_1 = require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscount");
var GetActivityResponseDataDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/GetActivityResponseDataDiscountShippingDiscountAreaScope");
var GetActivityResponseDataParticipationLimit_1 = require("./promotion/V202309/GetActivityResponseDataParticipationLimit");
var GetActivityResponseDataProducts_1 = require("./promotion/V202309/GetActivityResponseDataProducts");
var GetActivityResponseDataProductsActivityPrice_1 = require("./promotion/V202309/GetActivityResponseDataProductsActivityPrice");
var GetActivityResponseDataProductsSkus_1 = require("./promotion/V202309/GetActivityResponseDataProductsSkus");
var GetActivityResponseDataProductsSkusActivityPrice_1 = require("./promotion/V202309/GetActivityResponseDataProductsSkusActivityPrice");
var RemoveActivityProductRequestBody_1 = require("./promotion/V202309/RemoveActivityProductRequestBody");
var RemoveActivityProductResponse_1 = require("./promotion/V202309/RemoveActivityProductResponse");
var RemoveActivityProductResponseData_1 = require("./promotion/V202309/RemoveActivityProductResponseData");
var SearchActivitiesRequestBody_1 = require("./promotion/V202309/SearchActivitiesRequestBody");
var SearchActivitiesResponse_1 = require("./promotion/V202309/SearchActivitiesResponse");
var SearchActivitiesResponseData_1 = require("./promotion/V202309/SearchActivitiesResponseData");
var SearchActivitiesResponseDataActivities_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivities");
var SearchActivitiesResponseDataActivitiesDiscount_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscount");
var SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount");
var SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails");
var SearchActivitiesResponseDataActivitiesDiscountShippingDiscount_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscount");
var SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope");
var SearchActivitiesResponseDataActivitiesParticipationLimit_1 = require("./promotion/V202309/SearchActivitiesResponseDataActivitiesParticipationLimit");
var UpdateActivityProductRequestBody_1 = require("./promotion/V202309/UpdateActivityProductRequestBody");
var UpdateActivityProductRequestBodyProducts_1 = require("./promotion/V202309/UpdateActivityProductRequestBodyProducts");
var UpdateActivityProductRequestBodyProductsSkus_1 = require("./promotion/V202309/UpdateActivityProductRequestBodyProductsSkus");
var UpdateActivityProductResponse_1 = require("./promotion/V202309/UpdateActivityProductResponse");
var UpdateActivityProductResponseData_1 = require("./promotion/V202309/UpdateActivityProductResponseData");
var UpdateActivityRequestBody_1 = require("./promotion/V202309/UpdateActivityRequestBody");
var UpdateActivityRequestBodyDiscount_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscount");
var UpdateActivityRequestBodyDiscountBmsmDiscount_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscount");
var UpdateActivityRequestBodyDiscountBmsmDiscountDetails_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountBmsmDiscountDetails");
var UpdateActivityRequestBodyDiscountShippingDiscount_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscount");
var UpdateActivityRequestBodyDiscountShippingDiscountAreaScope_1 = require("./promotion/V202309/UpdateActivityRequestBodyDiscountShippingDiscountAreaScope");
var UpdateActivityRequestBodyParticipationLimit_1 = require("./promotion/V202309/UpdateActivityRequestBodyParticipationLimit");
var UpdateActivityResponse_1 = require("./promotion/V202309/UpdateActivityResponse");
var UpdateActivityResponseData_1 = require("./promotion/V202309/UpdateActivityResponseData");
var GetCouponResponse_1 = require("./promotion/V202406/GetCouponResponse");
var GetCouponResponseData_1 = require("./promotion/V202406/GetCouponResponseData");
var GetCouponResponseDataCoupon_1 = require("./promotion/V202406/GetCouponResponseDataCoupon");
var GetCouponResponseDataCouponClaimDuration_1 = require("./promotion/V202406/GetCouponResponseDataCouponClaimDuration");
var GetCouponResponseDataCouponDiscount_1 = require("./promotion/V202406/GetCouponResponseDataCouponDiscount");
var GetCouponResponseDataCouponDiscountMaxDiscount_1 = require("./promotion/V202406/GetCouponResponseDataCouponDiscountMaxDiscount");
var GetCouponResponseDataCouponDiscountReductionAmount_1 = require("./promotion/V202406/GetCouponResponseDataCouponDiscountReductionAmount");
var GetCouponResponseDataCouponLiveTasks_1 = require("./promotion/V202406/GetCouponResponseDataCouponLiveTasks");
var GetCouponResponseDataCouponRedemptionDuration_1 = require("./promotion/V202406/GetCouponResponseDataCouponRedemptionDuration");
var GetCouponResponseDataCouponThreshold_1 = require("./promotion/V202406/GetCouponResponseDataCouponThreshold");
var GetCouponResponseDataCouponThresholdMinSpend_1 = require("./promotion/V202406/GetCouponResponseDataCouponThresholdMinSpend");
var GetCouponResponseDataCouponUsageLimits_1 = require("./promotion/V202406/GetCouponResponseDataCouponUsageLimits");
var GetCouponResponseDataCouponUsageStats_1 = require("./promotion/V202406/GetCouponResponseDataCouponUsageStats");
var SearchCouponsRequestBody_1 = require("./promotion/V202406/SearchCouponsRequestBody");
var SearchCouponsResponse_1 = require("./promotion/V202406/SearchCouponsResponse");
var SearchCouponsResponseData_1 = require("./promotion/V202406/SearchCouponsResponseData");
var SearchCouponsResponseDataCoupons_1 = require("./promotion/V202406/SearchCouponsResponseDataCoupons");
var SearchCouponsResponseDataCouponsClaimDuration_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsClaimDuration");
var SearchCouponsResponseDataCouponsDiscount_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscount");
var SearchCouponsResponseDataCouponsDiscountMaxDiscount_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountMaxDiscount");
var SearchCouponsResponseDataCouponsDiscountReductionAmount_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsDiscountReductionAmount");
var SearchCouponsResponseDataCouponsRedemptionDuration_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsRedemptionDuration");
var SearchCouponsResponseDataCouponsThreshold_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsThreshold");
var SearchCouponsResponseDataCouponsThresholdMinSpend_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsThresholdMinSpend");
var SearchCouponsResponseDataCouponsUsageLimits_1 = require("./promotion/V202406/SearchCouponsResponseDataCouponsUsageLimits");
var ApproveCancellationResponse_1 = require("./returnRefund/V202309/ApproveCancellationResponse");
var ApproveReturnRequestBody_1 = require("./returnRefund/V202309/ApproveReturnRequestBody");
var ApproveReturnRequestBodyPartialRefund_1 = require("./returnRefund/V202309/ApproveReturnRequestBodyPartialRefund");
var ApproveReturnResponse_1 = require("./returnRefund/V202309/ApproveReturnResponse");
var CalculateRefundRequestBody_1 = require("./returnRefund/V202309/CalculateRefundRequestBody");
var CalculateRefundRequestBodySkus_1 = require("./returnRefund/V202309/CalculateRefundRequestBodySkus");
var CalculateRefundResponse_1 = require("./returnRefund/V202309/CalculateRefundResponse");
var CalculateRefundResponseData_1 = require("./returnRefund/V202309/CalculateRefundResponseData");
var CalculateRefundResponseDataOrderRefundAmount_1 = require("./returnRefund/V202309/CalculateRefundResponseDataOrderRefundAmount");
var CancelOrderRequestBody_1 = require("./returnRefund/V202309/CancelOrderRequestBody");
var CancelOrderRequestBodySkus_1 = require("./returnRefund/V202309/CancelOrderRequestBodySkus");
var CancelOrderResponse_1 = require("./returnRefund/V202309/CancelOrderResponse");
var CancelOrderResponseData_1 = require("./returnRefund/V202309/CancelOrderResponseData");
var CreateReturnRequestBody_1 = require("./returnRefund/V202309/CreateReturnRequestBody");
var CreateReturnRequestBodySkus_1 = require("./returnRefund/V202309/CreateReturnRequestBodySkus");
var CreateReturnResponse_1 = require("./returnRefund/V202309/CreateReturnResponse");
var CreateReturnResponseData_1 = require("./returnRefund/V202309/CreateReturnResponseData");
var GetAftersaleEligibilityResponse_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponse");
var GetAftersaleEligibilityResponseData_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponseData");
var GetAftersaleEligibilityResponseDataSkuEligibility_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibility");
var GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility_1 = require("./returnRefund/V202309/GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility");
var GetRejectReasonsResponse_1 = require("./returnRefund/V202309/GetRejectReasonsResponse");
var GetRejectReasonsResponseData_1 = require("./returnRefund/V202309/GetRejectReasonsResponseData");
var GetRejectReasonsResponseDataReasons_1 = require("./returnRefund/V202309/GetRejectReasonsResponseDataReasons");
var GetReturnRecordsResponse_1 = require("./returnRefund/V202309/GetReturnRecordsResponse");
var GetReturnRecordsResponseData_1 = require("./returnRefund/V202309/GetReturnRecordsResponseData");
var GetReturnRecordsResponseDataRecords_1 = require("./returnRefund/V202309/GetReturnRecordsResponseDataRecords");
var GetReturnRecordsResponseDataRecordsImages_1 = require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsImages");
var GetReturnRecordsResponseDataRecordsVideos_1 = require("./returnRefund/V202309/GetReturnRecordsResponseDataRecordsVideos");
var RejectCancellationRequestBody_1 = require("./returnRefund/V202309/RejectCancellationRequestBody");
var RejectCancellationRequestBodyImages_1 = require("./returnRefund/V202309/RejectCancellationRequestBodyImages");
var RejectCancellationResponse_1 = require("./returnRefund/V202309/RejectCancellationResponse");
var RejectReturnRequestBody_1 = require("./returnRefund/V202309/RejectReturnRequestBody");
var RejectReturnRequestBodyImages_1 = require("./returnRefund/V202309/RejectReturnRequestBodyImages");
var RejectReturnResponse_1 = require("./returnRefund/V202309/RejectReturnResponse");
var SearchCancellationsRequestBody_1 = require("./returnRefund/V202309/SearchCancellationsRequestBody");
var SearchCancellationsResponse_1 = require("./returnRefund/V202309/SearchCancellationsResponse");
var SearchCancellationsResponseData_1 = require("./returnRefund/V202309/SearchCancellationsResponseData");
var SearchCancellationsResponseDataCancellations_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellations");
var SearchCancellationsResponseDataCancellationsCancelLineItems_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItems");
var SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage");
var SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount");
var SearchCancellationsResponseDataCancellationsRefundAmount_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsRefundAmount");
var SearchCancellationsResponseDataCancellationsSellerNextActionResponse_1 = require("./returnRefund/V202309/SearchCancellationsResponseDataCancellationsSellerNextActionResponse");
var SearchReturnsRequestBody_1 = require("./returnRefund/V202309/SearchReturnsRequestBody");
var SearchReturnsResponse_1 = require("./returnRefund/V202309/SearchReturnsResponse");
var SearchReturnsResponseData_1 = require("./returnRefund/V202309/SearchReturnsResponseData");
var SearchReturnsResponseDataReturnOrders_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrders");
var SearchReturnsResponseDataReturnOrdersDiscountAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersDiscountAmount");
var SearchReturnsResponseDataReturnOrdersPartialRefund_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersPartialRefund");
var SearchReturnsResponseDataReturnOrdersRefundAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersRefundAmount");
var SearchReturnsResponseDataReturnOrdersReturnLineItems_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItems");
var SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage");
var SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount");
var SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress");
var SearchReturnsResponseDataReturnOrdersSellerNextActionResponse_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersSellerNextActionResponse");
var SearchReturnsResponseDataReturnOrdersShippingFeeAmount_1 = require("./returnRefund/V202309/SearchReturnsResponseDataReturnOrdersShippingFeeAmount");
var GetActiveShopsResponse_1 = require("./seller/V202309/GetActiveShopsResponse");
var GetActiveShopsResponseData_1 = require("./seller/V202309/GetActiveShopsResponseData");
var GetActiveShopsResponseDataShops_1 = require("./seller/V202309/GetActiveShopsResponseDataShops");
var GetSellerPermissionsResponse_1 = require("./seller/V202309/GetSellerPermissionsResponse");
var GetSellerPermissionsResponseData_1 = require("./seller/V202309/GetSellerPermissionsResponseData");
var ConfirmPackageShipmentRequestBody_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBody");
var ConfirmPackageShipmentRequestBodyPackages_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackages");
var ConfirmPackageShipmentRequestBodyPackagesDimension_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesDimension");
var ConfirmPackageShipmentRequestBodyPackagesSkus_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesSkus");
var ConfirmPackageShipmentRequestBodyPackagesWeight_1 = require("./supplyChain/V202309/ConfirmPackageShipmentRequestBodyPackagesWeight");
var ConfirmPackageShipmentResponse_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponse");
var ConfirmPackageShipmentResponseData_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponseData");
var ConfirmPackageShipmentResponseDataErrors_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrors");
var ConfirmPackageShipmentResponseDataErrorsDetail_1 = require("./supplyChain/V202309/ConfirmPackageShipmentResponseDataErrorsDetail");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {};
var typeMap = {
    "Authorization202309GetAuthorizedShopsResponse": GetAuthorizedShopsResponse_1.Authorization202309GetAuthorizedShopsResponse,
    "Authorization202309GetAuthorizedShopsResponseData": GetAuthorizedShopsResponseData_1.Authorization202309GetAuthorizedShopsResponseData,
    "Authorization202309GetAuthorizedShopsResponseDataShops": GetAuthorizedShopsResponseDataShops_1.Authorization202309GetAuthorizedShopsResponseDataShops,
    "Authorization202312GetWidgetTokenResponse": GetWidgetTokenResponse_1.Authorization202312GetWidgetTokenResponse,
    "Authorization202312GetWidgetTokenResponseData": GetWidgetTokenResponseData_1.Authorization202312GetWidgetTokenResponseData,
    "Authorization202312GetWidgetTokenResponseDataWidgetToken": GetWidgetTokenResponseDataWidgetToken_1.Authorization202312GetWidgetTokenResponseDataWidgetToken,
    "Authorization202401GetWidgetTokenResponse": GetWidgetTokenResponse_2.Authorization202401GetWidgetTokenResponse,
    "Authorization202401GetWidgetTokenResponseData": GetWidgetTokenResponseData_2.Authorization202401GetWidgetTokenResponseData,
    "Authorization202401GetWidgetTokenResponseDataWidgetToken": GetWidgetTokenResponseDataWidgetToken_2.Authorization202401GetWidgetTokenResponseDataWidgetToken,
    "Authorization202403DeauthorizeShopResponse": DeauthorizeShopResponse_1.Authorization202403DeauthorizeShopResponse,
    "CustomerService202309CreateConversationRequestBody": CreateConversationRequestBody_1.CustomerService202309CreateConversationRequestBody,
    "CustomerService202309CreateConversationResponse": CreateConversationResponse_1.CustomerService202309CreateConversationResponse,
    "CustomerService202309CreateConversationResponseData": CreateConversationResponseData_1.CustomerService202309CreateConversationResponseData,
    "CustomerService202309GetAgentSettingsResponse": GetAgentSettingsResponse_1.CustomerService202309GetAgentSettingsResponse,
    "CustomerService202309GetAgentSettingsResponseData": GetAgentSettingsResponseData_1.CustomerService202309GetAgentSettingsResponseData,
    "CustomerService202309GetConversationMessagesResponse": GetConversationMessagesResponse_1.CustomerService202309GetConversationMessagesResponse,
    "CustomerService202309GetConversationMessagesResponseData": GetConversationMessagesResponseData_1.CustomerService202309GetConversationMessagesResponseData,
    "CustomerService202309GetConversationMessagesResponseDataMessages": GetConversationMessagesResponseDataMessages_1.CustomerService202309GetConversationMessagesResponseDataMessages,
    "CustomerService202309GetConversationMessagesResponseDataMessagesSender": GetConversationMessagesResponseDataMessagesSender_1.CustomerService202309GetConversationMessagesResponseDataMessagesSender,
    "CustomerService202309GetConversationsResponse": GetConversationsResponse_1.CustomerService202309GetConversationsResponse,
    "CustomerService202309GetConversationsResponseData": GetConversationsResponseData_1.CustomerService202309GetConversationsResponseData,
    "CustomerService202309GetConversationsResponseDataConversations": GetConversationsResponseDataConversations_1.CustomerService202309GetConversationsResponseDataConversations,
    "CustomerService202309GetConversationsResponseDataConversationsLatestMessage": GetConversationsResponseDataConversationsLatestMessage_1.CustomerService202309GetConversationsResponseDataConversationsLatestMessage,
    "CustomerService202309GetConversationsResponseDataConversationsLatestMessageSender": GetConversationsResponseDataConversationsLatestMessageSender_1.CustomerService202309GetConversationsResponseDataConversationsLatestMessageSender,
    "CustomerService202309GetConversationsResponseDataConversationsParticipants": GetConversationsResponseDataConversationsParticipants_1.CustomerService202309GetConversationsResponseDataConversationsParticipants,
    "CustomerService202309ReadMessageResponse": ReadMessageResponse_1.CustomerService202309ReadMessageResponse,
    "CustomerService202309SendMessageRequestBody": SendMessageRequestBody_1.CustomerService202309SendMessageRequestBody,
    "CustomerService202309SendMessageResponse": SendMessageResponse_1.CustomerService202309SendMessageResponse,
    "CustomerService202309SendMessageResponseData": SendMessageResponseData_1.CustomerService202309SendMessageResponseData,
    "CustomerService202309UpdateAgentSettingsRequestBody": UpdateAgentSettingsRequestBody_1.CustomerService202309UpdateAgentSettingsRequestBody,
    "CustomerService202309UpdateAgentSettingsResponse": UpdateAgentSettingsResponse_1.CustomerService202309UpdateAgentSettingsResponse,
    "CustomerService202309UploadBuyerMessagesImageResponse": UploadBuyerMessagesImageResponse_1.CustomerService202309UploadBuyerMessagesImageResponse,
    "CustomerService202309UploadBuyerMessagesImageResponseData": UploadBuyerMessagesImageResponseData_1.CustomerService202309UploadBuyerMessagesImageResponseData,
    "CustomerService202407GetCustomerServicePerformanceResponse": GetCustomerServicePerformanceResponse_1.CustomerService202407GetCustomerServicePerformanceResponse,
    "CustomerService202407GetCustomerServicePerformanceResponseData": GetCustomerServicePerformanceResponseData_1.CustomerService202407GetCustomerServicePerformanceResponseData,
    "CustomerService202407GetCustomerServicePerformanceResponseDataPerformance": GetCustomerServicePerformanceResponseDataPerformance_1.CustomerService202407GetCustomerServicePerformanceResponseDataPerformance,
    "DataReconciliation202309OrderStatusDataExchangeRequestBody": OrderStatusDataExchangeRequestBody_1.DataReconciliation202309OrderStatusDataExchangeRequestBody,
    "DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders": OrderStatusDataExchangeRequestBodyOrders_1.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders,
    "DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages": OrderStatusDataExchangeRequestBodyOrdersPackages_1.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages,
    "DataReconciliation202309OrderStatusDataExchangeResponse": OrderStatusDataExchangeResponse_1.DataReconciliation202309OrderStatusDataExchangeResponse,
    "DataReconciliation202309OrderStatusDataExchangeResponseData": OrderStatusDataExchangeResponseData_1.DataReconciliation202309OrderStatusDataExchangeResponseData,
    "DataReconciliation202309OrderStatusDataExchangeResponseDataErrors": OrderStatusDataExchangeResponseDataErrors_1.DataReconciliation202309OrderStatusDataExchangeResponseDataErrors,
    "DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail": OrderStatusDataExchangeResponseDataErrorsDetail_1.DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail,
    "DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors": OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors_1.DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody": QualityFactoryOrderDataImportAPIRequestBody_1.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders": QualityFactoryOrderDataImportAPIRequestBodyOrders_1.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages": QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_1.DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponse": QualityFactoryOrderDataImportAPIResponse_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponse,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseData": QualityFactoryOrderDataImportAPIResponseData_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseData,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors": QualityFactoryOrderDataImportAPIResponseDataErrors_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrors,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail": QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetail,
    "DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors": QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_1.DataReconciliation202310QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody": QualityFactoryOrderDataImportAPIRequestBody_2.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders": QualityFactoryOrderDataImportAPIRequestBodyOrders_2.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages": QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages_2.DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponse": QualityFactoryOrderDataImportAPIResponse_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponse,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseData": QualityFactoryOrderDataImportAPIResponseData_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseData,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors": QualityFactoryOrderDataImportAPIResponseDataErrors_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrors,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail": QualityFactoryOrderDataImportAPIResponseDataErrorsDetail_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetail,
    "DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors": QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors_2.DataReconciliation202401QualityFactoryOrderDataImportAPIResponseDataErrorsDetailExtraErrors,
    "Event202309DeleteShopWebhookRequestBody": DeleteShopWebhookRequestBody_1.Event202309DeleteShopWebhookRequestBody,
    "Event202309DeleteShopWebhookResponse": DeleteShopWebhookResponse_1.Event202309DeleteShopWebhookResponse,
    "Event202309GetShopWebhooksResponse": GetShopWebhooksResponse_1.Event202309GetShopWebhooksResponse,
    "Event202309GetShopWebhooksResponseData": GetShopWebhooksResponseData_1.Event202309GetShopWebhooksResponseData,
    "Event202309GetShopWebhooksResponseDataWebhooks": GetShopWebhooksResponseDataWebhooks_1.Event202309GetShopWebhooksResponseDataWebhooks,
    "Event202309UpdateShopWebhookRequestBody": UpdateShopWebhookRequestBody_1.Event202309UpdateShopWebhookRequestBody,
    "Event202309UpdateShopWebhookResponse": UpdateShopWebhookResponse_1.Event202309UpdateShopWebhookResponse,
    "Finance202309GetPaymentsResponse": GetPaymentsResponse_1.Finance202309GetPaymentsResponse,
    "Finance202309GetPaymentsResponseData": GetPaymentsResponseData_1.Finance202309GetPaymentsResponseData,
    "Finance202309GetPaymentsResponseDataPayments": GetPaymentsResponseDataPayments_1.Finance202309GetPaymentsResponseDataPayments,
    "Finance202309GetPaymentsResponseDataPaymentsAmount": GetPaymentsResponseDataPaymentsAmount_1.Finance202309GetPaymentsResponseDataPaymentsAmount,
    "Finance202309GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange": GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange_1.Finance202309GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange,
    "Finance202309GetPaymentsResponseDataPaymentsReserveAmount": GetPaymentsResponseDataPaymentsReserveAmount_1.Finance202309GetPaymentsResponseDataPaymentsReserveAmount,
    "Finance202309GetPaymentsResponseDataPaymentsSettlementAmount": GetPaymentsResponseDataPaymentsSettlementAmount_1.Finance202309GetPaymentsResponseDataPaymentsSettlementAmount,
    "Finance202309GetStatementsResponse": GetStatementsResponse_1.Finance202309GetStatementsResponse,
    "Finance202309GetStatementsResponseData": GetStatementsResponseData_1.Finance202309GetStatementsResponseData,
    "Finance202309GetStatementsResponseDataStatements": GetStatementsResponseDataStatements_1.Finance202309GetStatementsResponseDataStatements,
    "Finance202309GetTransactionsbyOrderResponse": GetTransactionsbyOrderResponse_1.Finance202309GetTransactionsbyOrderResponse,
    "Finance202309GetTransactionsbyOrderResponseData": GetTransactionsbyOrderResponseData_1.Finance202309GetTransactionsbyOrderResponseData,
    "Finance202309GetTransactionsbyOrderResponseDataStatementTransactions": GetTransactionsbyOrderResponseDataStatementTransactions_1.Finance202309GetTransactionsbyOrderResponseDataStatementTransactions,
    "Finance202309GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions": GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions_1.Finance202309GetTransactionsbyOrderResponseDataStatementTransactionsSkuStatementTransactions,
    "Finance202309GetTransactionsbyStatementResponse": GetTransactionsbyStatementResponse_1.Finance202309GetTransactionsbyStatementResponse,
    "Finance202309GetTransactionsbyStatementResponseData": GetTransactionsbyStatementResponseData_1.Finance202309GetTransactionsbyStatementResponseData,
    "Finance202309GetTransactionsbyStatementResponseDataStatementTransactions": GetTransactionsbyStatementResponseDataStatementTransactions_1.Finance202309GetTransactionsbyStatementResponseDataStatementTransactions,
    "Finance202309GetWithdrawalsResponse": GetWithdrawalsResponse_1.Finance202309GetWithdrawalsResponse,
    "Finance202309GetWithdrawalsResponseData": GetWithdrawalsResponseData_1.Finance202309GetWithdrawalsResponseData,
    "Finance202309GetWithdrawalsResponseDataWithdrawals": GetWithdrawalsResponseDataWithdrawals_1.Finance202309GetWithdrawalsResponseDataWithdrawals,
    "Finance202501GetTransactionsbyOrderResponse": GetTransactionsbyOrderResponse_2.Finance202501GetTransactionsbyOrderResponse,
    "Finance202501GetTransactionsbyOrderResponseData": GetTransactionsbyOrderResponseData_2.Finance202501GetTransactionsbyOrderResponseData,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactions": GetTransactionsbyOrderResponseDataSkuTransactions_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactions,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown": GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdown,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee": GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownFee,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax": GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsFeeTaxBreakdownTax,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown": GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsRevenueBreakdown,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown": GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdown,
    "Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent": GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent_1.Finance202501GetTransactionsbyOrderResponseDataSkuTransactionsShippingCostBreakdownSupplementaryComponent,
    "Finance202501GetTransactionsbyStatementResponse": GetTransactionsbyStatementResponse_2.Finance202501GetTransactionsbyStatementResponse,
    "Finance202501GetTransactionsbyStatementResponseData": GetTransactionsbyStatementResponseData_2.Finance202501GetTransactionsbyStatementResponseData,
    "Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown": GetTransactionsbyStatementResponseDataTotalSettlementBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTotalSettlementBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactions": GetTransactionsbyStatementResponseDataTransactions_1.Finance202501GetTransactionsbyStatementResponseDataTransactions,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown": GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee": GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownFee,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax": GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdownTax,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown": GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown": GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent": GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdownSupplementaryComponent,
    "Finance202501GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent": GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent_1.Finance202501GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent,
    "Fulfillment202309BatchShipPackagesRequestBody": BatchShipPackagesRequestBody_1.Fulfillment202309BatchShipPackagesRequestBody,
    "Fulfillment202309BatchShipPackagesRequestBodyPackages": BatchShipPackagesRequestBodyPackages_1.Fulfillment202309BatchShipPackagesRequestBodyPackages,
    "Fulfillment202309BatchShipPackagesRequestBodyPackagesPickupSlot": BatchShipPackagesRequestBodyPackagesPickupSlot_1.Fulfillment202309BatchShipPackagesRequestBodyPackagesPickupSlot,
    "Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment": BatchShipPackagesRequestBodyPackagesSelfShipment_1.Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment,
    "Fulfillment202309BatchShipPackagesResponse": BatchShipPackagesResponse_1.Fulfillment202309BatchShipPackagesResponse,
    "Fulfillment202309BatchShipPackagesResponseData": BatchShipPackagesResponseData_1.Fulfillment202309BatchShipPackagesResponseData,
    "Fulfillment202309BatchShipPackagesResponseDataErrors": BatchShipPackagesResponseDataErrors_1.Fulfillment202309BatchShipPackagesResponseDataErrors,
    "Fulfillment202309BatchShipPackagesResponseDataErrorsDetail": BatchShipPackagesResponseDataErrorsDetail_1.Fulfillment202309BatchShipPackagesResponseDataErrorsDetail,
    "Fulfillment202309CombinePackageRequestBody": CombinePackageRequestBody_1.Fulfillment202309CombinePackageRequestBody,
    "Fulfillment202309CombinePackageRequestBodyCombinablePackages": CombinePackageRequestBodyCombinablePackages_1.Fulfillment202309CombinePackageRequestBodyCombinablePackages,
    "Fulfillment202309CombinePackageResponse": CombinePackageResponse_1.Fulfillment202309CombinePackageResponse,
    "Fulfillment202309CombinePackageResponseData": CombinePackageResponseData_1.Fulfillment202309CombinePackageResponseData,
    "Fulfillment202309CombinePackageResponseDataErrors": CombinePackageResponseDataErrors_1.Fulfillment202309CombinePackageResponseDataErrors,
    "Fulfillment202309CombinePackageResponseDataErrorsDetail": CombinePackageResponseDataErrorsDetail_1.Fulfillment202309CombinePackageResponseDataErrorsDetail,
    "Fulfillment202309CombinePackageResponseDataPackages": CombinePackageResponseDataPackages_1.Fulfillment202309CombinePackageResponseDataPackages,
    "Fulfillment202309CreatePackagesRequestBody": CreatePackagesRequestBody_1.Fulfillment202309CreatePackagesRequestBody,
    "Fulfillment202309CreatePackagesRequestBodyDimension": CreatePackagesRequestBodyDimension_1.Fulfillment202309CreatePackagesRequestBodyDimension,
    "Fulfillment202309CreatePackagesRequestBodyWeight": CreatePackagesRequestBodyWeight_1.Fulfillment202309CreatePackagesRequestBodyWeight,
    "Fulfillment202309CreatePackagesResponse": CreatePackagesResponse_1.Fulfillment202309CreatePackagesResponse,
    "Fulfillment202309CreatePackagesResponseData": CreatePackagesResponseData_1.Fulfillment202309CreatePackagesResponseData,
    "Fulfillment202309CreatePackagesResponseDataDimension": CreatePackagesResponseDataDimension_1.Fulfillment202309CreatePackagesResponseDataDimension,
    "Fulfillment202309CreatePackagesResponseDataShippingServiceInfo": CreatePackagesResponseDataShippingServiceInfo_1.Fulfillment202309CreatePackagesResponseDataShippingServiceInfo,
    "Fulfillment202309CreatePackagesResponseDataWeight": CreatePackagesResponseDataWeight_1.Fulfillment202309CreatePackagesResponseDataWeight,
    "Fulfillment202309FulfillmentUploadDeliveryFileResponse": FulfillmentUploadDeliveryFileResponse_1.Fulfillment202309FulfillmentUploadDeliveryFileResponse,
    "Fulfillment202309FulfillmentUploadDeliveryFileResponseData": FulfillmentUploadDeliveryFileResponseData_1.Fulfillment202309FulfillmentUploadDeliveryFileResponseData,
    "Fulfillment202309FulfillmentUploadDeliveryImageResponse": FulfillmentUploadDeliveryImageResponse_1.Fulfillment202309FulfillmentUploadDeliveryImageResponse,
    "Fulfillment202309FulfillmentUploadDeliveryImageResponseData": FulfillmentUploadDeliveryImageResponseData_1.Fulfillment202309FulfillmentUploadDeliveryImageResponseData,
    "Fulfillment202309GetEligibleShippingServiceRequestBody": GetEligibleShippingServiceRequestBody_1.Fulfillment202309GetEligibleShippingServiceRequestBody,
    "Fulfillment202309GetEligibleShippingServiceRequestBodyDimension": GetEligibleShippingServiceRequestBodyDimension_1.Fulfillment202309GetEligibleShippingServiceRequestBodyDimension,
    "Fulfillment202309GetEligibleShippingServiceRequestBodyWeight": GetEligibleShippingServiceRequestBodyWeight_1.Fulfillment202309GetEligibleShippingServiceRequestBodyWeight,
    "Fulfillment202309GetEligibleShippingServiceResponse": GetEligibleShippingServiceResponse_1.Fulfillment202309GetEligibleShippingServiceResponse,
    "Fulfillment202309GetEligibleShippingServiceResponseData": GetEligibleShippingServiceResponseData_1.Fulfillment202309GetEligibleShippingServiceResponseData,
    "Fulfillment202309GetEligibleShippingServiceResponseDataDimension": GetEligibleShippingServiceResponseDataDimension_1.Fulfillment202309GetEligibleShippingServiceResponseDataDimension,
    "Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices": GetEligibleShippingServiceResponseDataShippingServices_1.Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices,
    "Fulfillment202309GetEligibleShippingServiceResponseDataWeight": GetEligibleShippingServiceResponseDataWeight_1.Fulfillment202309GetEligibleShippingServiceResponseDataWeight,
    "Fulfillment202309GetHandoverTimeslotsResponse": GetHandoverTimeslotsResponse_1.Fulfillment202309GetHandoverTimeslotsResponse,
    "Fulfillment202309GetHandoverTimeslotsResponseData": GetHandoverTimeslotsResponseData_1.Fulfillment202309GetHandoverTimeslotsResponseData,
    "Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots": GetHandoverTimeslotsResponseDataPickupSlots_1.Fulfillment202309GetHandoverTimeslotsResponseDataPickupSlots,
    "Fulfillment202309GetOrderSplitAttributesResponse": GetOrderSplitAttributesResponse_1.Fulfillment202309GetOrderSplitAttributesResponse,
    "Fulfillment202309GetOrderSplitAttributesResponseData": GetOrderSplitAttributesResponseData_1.Fulfillment202309GetOrderSplitAttributesResponseData,
    "Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes": GetOrderSplitAttributesResponseDataSplitAttributes_1.Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes,
    "Fulfillment202309GetPackageDetailResponse": GetPackageDetailResponse_1.Fulfillment202309GetPackageDetailResponse,
    "Fulfillment202309GetPackageDetailResponseData": GetPackageDetailResponseData_1.Fulfillment202309GetPackageDetailResponseData,
    "Fulfillment202309GetPackageDetailResponseDataDimension": GetPackageDetailResponseDataDimension_1.Fulfillment202309GetPackageDetailResponseDataDimension,
    "Fulfillment202309GetPackageDetailResponseDataInsurance": GetPackageDetailResponseDataInsurance_1.Fulfillment202309GetPackageDetailResponseDataInsurance,
    "Fulfillment202309GetPackageDetailResponseDataOrders": GetPackageDetailResponseDataOrders_1.Fulfillment202309GetPackageDetailResponseDataOrders,
    "Fulfillment202309GetPackageDetailResponseDataOrdersSkus": GetPackageDetailResponseDataOrdersSkus_1.Fulfillment202309GetPackageDetailResponseDataOrdersSkus,
    "Fulfillment202309GetPackageDetailResponseDataPickupSlot": GetPackageDetailResponseDataPickupSlot_1.Fulfillment202309GetPackageDetailResponseDataPickupSlot,
    "Fulfillment202309GetPackageDetailResponseDataRecipientAddress": GetPackageDetailResponseDataRecipientAddress_1.Fulfillment202309GetPackageDetailResponseDataRecipientAddress,
    "Fulfillment202309GetPackageDetailResponseDataSenderAddress": GetPackageDetailResponseDataSenderAddress_1.Fulfillment202309GetPackageDetailResponseDataSenderAddress,
    "Fulfillment202309GetPackageDetailResponseDataWeight": GetPackageDetailResponseDataWeight_1.Fulfillment202309GetPackageDetailResponseDataWeight,
    "Fulfillment202309GetPackageHandoverTimeSlotsResponse": GetPackageHandoverTimeSlotsResponse_1.Fulfillment202309GetPackageHandoverTimeSlotsResponse,
    "Fulfillment202309GetPackageHandoverTimeSlotsResponseData": GetPackageHandoverTimeSlotsResponseData_1.Fulfillment202309GetPackageHandoverTimeSlotsResponseData,
    "Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots": GetPackageHandoverTimeSlotsResponseDataPickupSlots_1.Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots,
    "Fulfillment202309GetPackageShippingDocumentResponse": GetPackageShippingDocumentResponse_1.Fulfillment202309GetPackageShippingDocumentResponse,
    "Fulfillment202309GetPackageShippingDocumentResponseData": GetPackageShippingDocumentResponseData_1.Fulfillment202309GetPackageShippingDocumentResponseData,
    "Fulfillment202309GetTrackingResponse": GetTrackingResponse_1.Fulfillment202309GetTrackingResponse,
    "Fulfillment202309GetTrackingResponseData": GetTrackingResponseData_1.Fulfillment202309GetTrackingResponseData,
    "Fulfillment202309GetTrackingResponseDataTracking": GetTrackingResponseDataTracking_1.Fulfillment202309GetTrackingResponseDataTracking,
    "Fulfillment202309MarkPackageAsShippedRequestBody": MarkPackageAsShippedRequestBody_1.Fulfillment202309MarkPackageAsShippedRequestBody,
    "Fulfillment202309MarkPackageAsShippedResponse": MarkPackageAsShippedResponse_1.Fulfillment202309MarkPackageAsShippedResponse,
    "Fulfillment202309MarkPackageAsShippedResponseData": MarkPackageAsShippedResponseData_1.Fulfillment202309MarkPackageAsShippedResponseData,
    "Fulfillment202309MarkPackageAsShippedResponseDataWarning": MarkPackageAsShippedResponseDataWarning_1.Fulfillment202309MarkPackageAsShippedResponseDataWarning,
    "Fulfillment202309SchedulePackageHandoverRequestBody": SchedulePackageHandoverRequestBody_1.Fulfillment202309SchedulePackageHandoverRequestBody,
    "Fulfillment202309SchedulePackageHandoverRequestBodyPickupSlot": SchedulePackageHandoverRequestBodyPickupSlot_1.Fulfillment202309SchedulePackageHandoverRequestBodyPickupSlot,
    "Fulfillment202309SchedulePackageHandoverResponse": SchedulePackageHandoverResponse_1.Fulfillment202309SchedulePackageHandoverResponse,
    "Fulfillment202309SchedulePackageHandoverResponseData": SchedulePackageHandoverResponseData_1.Fulfillment202309SchedulePackageHandoverResponseData,
    "Fulfillment202309SchedulePackageHandoverResponseDataDimension": SchedulePackageHandoverResponseDataDimension_1.Fulfillment202309SchedulePackageHandoverResponseDataDimension,
    "Fulfillment202309SchedulePackageHandoverResponseDataWeight": SchedulePackageHandoverResponseDataWeight_1.Fulfillment202309SchedulePackageHandoverResponseDataWeight,
    "Fulfillment202309SearchCombinablePackagesResponse": SearchCombinablePackagesResponse_1.Fulfillment202309SearchCombinablePackagesResponse,
    "Fulfillment202309SearchCombinablePackagesResponseData": SearchCombinablePackagesResponseData_1.Fulfillment202309SearchCombinablePackagesResponseData,
    "Fulfillment202309SearchCombinablePackagesResponseDataCombinablePackages": SearchCombinablePackagesResponseDataCombinablePackages_1.Fulfillment202309SearchCombinablePackagesResponseDataCombinablePackages,
    "Fulfillment202309SearchPackageRequestBody": SearchPackageRequestBody_1.Fulfillment202309SearchPackageRequestBody,
    "Fulfillment202309SearchPackageResponse": SearchPackageResponse_1.Fulfillment202309SearchPackageResponse,
    "Fulfillment202309SearchPackageResponseData": SearchPackageResponseData_1.Fulfillment202309SearchPackageResponseData,
    "Fulfillment202309SearchPackageResponseDataPackages": SearchPackageResponseDataPackages_1.Fulfillment202309SearchPackageResponseDataPackages,
    "Fulfillment202309SearchPackageResponseDataPackagesOrders": SearchPackageResponseDataPackagesOrders_1.Fulfillment202309SearchPackageResponseDataPackagesOrders,
    "Fulfillment202309SearchPackageResponseDataPackagesOrdersSkus": SearchPackageResponseDataPackagesOrdersSkus_1.Fulfillment202309SearchPackageResponseDataPackagesOrdersSkus,
    "Fulfillment202309ShipPackageRequestBody": ShipPackageRequestBody_1.Fulfillment202309ShipPackageRequestBody,
    "Fulfillment202309ShipPackageRequestBodyPickupSlot": ShipPackageRequestBodyPickupSlot_1.Fulfillment202309ShipPackageRequestBodyPickupSlot,
    "Fulfillment202309ShipPackageRequestBodySelfShipment": ShipPackageRequestBodySelfShipment_1.Fulfillment202309ShipPackageRequestBodySelfShipment,
    "Fulfillment202309ShipPackageResponse": ShipPackageResponse_1.Fulfillment202309ShipPackageResponse,
    "Fulfillment202309SplitOrdersRequestBody": SplitOrdersRequestBody_1.Fulfillment202309SplitOrdersRequestBody,
    "Fulfillment202309SplitOrdersRequestBodySplittableGroups": SplitOrdersRequestBodySplittableGroups_1.Fulfillment202309SplitOrdersRequestBodySplittableGroups,
    "Fulfillment202309SplitOrdersResponse": SplitOrdersResponse_1.Fulfillment202309SplitOrdersResponse,
    "Fulfillment202309SplitOrdersResponseData": SplitOrdersResponseData_1.Fulfillment202309SplitOrdersResponseData,
    "Fulfillment202309SplitOrdersResponseDataPackages": SplitOrdersResponseDataPackages_1.Fulfillment202309SplitOrdersResponseDataPackages,
    "Fulfillment202309UncombinePackagesRequestBody": UncombinePackagesRequestBody_1.Fulfillment202309UncombinePackagesRequestBody,
    "Fulfillment202309UncombinePackagesResponse": UncombinePackagesResponse_1.Fulfillment202309UncombinePackagesResponse,
    "Fulfillment202309UncombinePackagesResponseData": UncombinePackagesResponseData_1.Fulfillment202309UncombinePackagesResponseData,
    "Fulfillment202309UncombinePackagesResponseDataPackages": UncombinePackagesResponseDataPackages_1.Fulfillment202309UncombinePackagesResponseDataPackages,
    "Fulfillment202309UpdatePackageDeliveryStatusRequestBody": UpdatePackageDeliveryStatusRequestBody_1.Fulfillment202309UpdatePackageDeliveryStatusRequestBody,
    "Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages": UpdatePackageDeliveryStatusRequestBodyPackages_1.Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages,
    "Fulfillment202309UpdatePackageDeliveryStatusResponse": UpdatePackageDeliveryStatusResponse_1.Fulfillment202309UpdatePackageDeliveryStatusResponse,
    "Fulfillment202309UpdatePackageDeliveryStatusResponseData": UpdatePackageDeliveryStatusResponseData_1.Fulfillment202309UpdatePackageDeliveryStatusResponseData,
    "Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors": UpdatePackageDeliveryStatusResponseDataErrors_1.Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors,
    "Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrorsDetail": UpdatePackageDeliveryStatusResponseDataErrorsDetail_1.Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrorsDetail,
    "Fulfillment202309UpdatePackageShippingInfoRequestBody": UpdatePackageShippingInfoRequestBody_1.Fulfillment202309UpdatePackageShippingInfoRequestBody,
    "Fulfillment202309UpdatePackageShippingInfoResponse": UpdatePackageShippingInfoResponse_1.Fulfillment202309UpdatePackageShippingInfoResponse,
    "Fulfillment202309UpdateShippingInfoRequestBody": UpdateShippingInfoRequestBody_1.Fulfillment202309UpdateShippingInfoRequestBody,
    "Fulfillment202309UpdateShippingInfoResponse": UpdateShippingInfoResponse_1.Fulfillment202309UpdateShippingInfoResponse,
    "Fulfillment202407CreateFirstMileBundleRequestBody": CreateFirstMileBundleRequestBody_1.Fulfillment202407CreateFirstMileBundleRequestBody,
    "Fulfillment202407CreateFirstMileBundleResponse": CreateFirstMileBundleResponse_1.Fulfillment202407CreateFirstMileBundleResponse,
    "Fulfillment202407CreateFirstMileBundleResponseData": CreateFirstMileBundleResponseData_1.Fulfillment202407CreateFirstMileBundleResponseData,
    "Fulfillment202407CreateFirstMileBundleResponseDataErrors": CreateFirstMileBundleResponseDataErrors_1.Fulfillment202407CreateFirstMileBundleResponseDataErrors,
    "Fulfillment202407CreateFirstMileBundleResponseDataErrorsDetail": CreateFirstMileBundleResponseDataErrorsDetail_1.Fulfillment202407CreateFirstMileBundleResponseDataErrorsDetail,
    "Fulfillment202502UploadInvoiceRequestBody": UploadInvoiceRequestBody_1.Fulfillment202502UploadInvoiceRequestBody,
    "Fulfillment202502UploadInvoiceRequestBodyInvoices": UploadInvoiceRequestBodyInvoices_1.Fulfillment202502UploadInvoiceRequestBodyInvoices,
    "Fulfillment202502UploadInvoiceResponse": UploadInvoiceResponse_1.Fulfillment202502UploadInvoiceResponse,
    "Fulfillment202502UploadInvoiceResponseData": UploadInvoiceResponseData_1.Fulfillment202502UploadInvoiceResponseData,
    "Fulfillment202502UploadInvoiceResponseDataErrors": UploadInvoiceResponseDataErrors_1.Fulfillment202502UploadInvoiceResponseDataErrors,
    "Fulfillment202502UploadInvoiceResponseDataErrorsDetail": UploadInvoiceResponseDataErrorsDetail_1.Fulfillment202502UploadInvoiceResponseDataErrorsDetail,
    "Logistics202309GetGlobalSellerWarehouseResponse": GetGlobalSellerWarehouseResponse_1.Logistics202309GetGlobalSellerWarehouseResponse,
    "Logistics202309GetGlobalSellerWarehouseResponseData": GetGlobalSellerWarehouseResponseData_1.Logistics202309GetGlobalSellerWarehouseResponseData,
    "Logistics202309GetGlobalSellerWarehouseResponseDataGlobalWarehouses": GetGlobalSellerWarehouseResponseDataGlobalWarehouses_1.Logistics202309GetGlobalSellerWarehouseResponseDataGlobalWarehouses,
    "Logistics202309GetShippingProvidersResponse": GetShippingProvidersResponse_1.Logistics202309GetShippingProvidersResponse,
    "Logistics202309GetShippingProvidersResponseData": GetShippingProvidersResponseData_1.Logistics202309GetShippingProvidersResponseData,
    "Logistics202309GetShippingProvidersResponseDataShippingProviders": GetShippingProvidersResponseDataShippingProviders_1.Logistics202309GetShippingProvidersResponseDataShippingProviders,
    "Logistics202309GetWarehouseDeliveryOptionsResponse": GetWarehouseDeliveryOptionsResponse_1.Logistics202309GetWarehouseDeliveryOptionsResponse,
    "Logistics202309GetWarehouseDeliveryOptionsResponseData": GetWarehouseDeliveryOptionsResponseData_1.Logistics202309GetWarehouseDeliveryOptionsResponseData,
    "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions": GetWarehouseDeliveryOptionsResponseDataDeliveryOptions_1.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions,
    "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit": GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit_1.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit,
    "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit": GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit_1.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit,
    "Logistics202309GetWarehouseListResponse": GetWarehouseListResponse_1.Logistics202309GetWarehouseListResponse,
    "Logistics202309GetWarehouseListResponseData": GetWarehouseListResponseData_1.Logistics202309GetWarehouseListResponseData,
    "Logistics202309GetWarehouseListResponseDataWarehouses": GetWarehouseListResponseDataWarehouses_1.Logistics202309GetWarehouseListResponseDataWarehouses,
    "Logistics202309GetWarehouseListResponseDataWarehousesAddress": GetWarehouseListResponseDataWarehousesAddress_1.Logistics202309GetWarehouseListResponseDataWarehousesAddress,
    "Logistics202309GetWarehouseListResponseDataWarehousesAddressGeolocation": GetWarehouseListResponseDataWarehousesAddressGeolocation_1.Logistics202309GetWarehouseListResponseDataWarehousesAddressGeolocation,
    "Order202309GetOrderDetailResponse": GetOrderDetailResponse_1.Order202309GetOrderDetailResponse,
    "Order202309GetOrderDetailResponseData": GetOrderDetailResponseData_1.Order202309GetOrderDetailResponseData,
    "Order202309GetOrderDetailResponseDataOrders": GetOrderDetailResponseDataOrders_1.Order202309GetOrderDetailResponseDataOrders,
    "Order202309GetOrderDetailResponseDataOrdersHandlingDuration": GetOrderDetailResponseDataOrdersHandlingDuration_1.Order202309GetOrderDetailResponseDataOrdersHandlingDuration,
    "Order202309GetOrderDetailResponseDataOrdersLineItems": GetOrderDetailResponseDataOrdersLineItems_1.Order202309GetOrderDetailResponseDataOrdersLineItems,
    "Order202309GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus": GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus_1.Order202309GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus,
    "Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax": GetOrderDetailResponseDataOrdersLineItemsItemTax_1.Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax,
    "Order202309GetOrderDetailResponseDataOrdersPackages": GetOrderDetailResponseDataOrdersPackages_1.Order202309GetOrderDetailResponseDataOrdersPackages,
    "Order202309GetOrderDetailResponseDataOrdersPayment": GetOrderDetailResponseDataOrdersPayment_1.Order202309GetOrderDetailResponseDataOrdersPayment,
    "Order202309GetOrderDetailResponseDataOrdersRecipientAddress": GetOrderDetailResponseDataOrdersRecipientAddress_1.Order202309GetOrderDetailResponseDataOrdersRecipientAddress,
    "Order202309GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences": GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences_1.Order202309GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences,
    "Order202309GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo": GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo_1.Order202309GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo,
    "Order202309GetOrderListRequestBody": GetOrderListRequestBody_1.Order202309GetOrderListRequestBody,
    "Order202309GetOrderListResponse": GetOrderListResponse_1.Order202309GetOrderListResponse,
    "Order202309GetOrderListResponseData": GetOrderListResponseData_1.Order202309GetOrderListResponseData,
    "Order202309GetOrderListResponseDataOrders": GetOrderListResponseDataOrders_1.Order202309GetOrderListResponseDataOrders,
    "Order202309GetOrderListResponseDataOrdersHandlingDuration": GetOrderListResponseDataOrdersHandlingDuration_1.Order202309GetOrderListResponseDataOrdersHandlingDuration,
    "Order202309GetOrderListResponseDataOrdersLineItems": GetOrderListResponseDataOrdersLineItems_1.Order202309GetOrderListResponseDataOrdersLineItems,
    "Order202309GetOrderListResponseDataOrdersLineItemsCombinedListingSkus": GetOrderListResponseDataOrdersLineItemsCombinedListingSkus_1.Order202309GetOrderListResponseDataOrdersLineItemsCombinedListingSkus,
    "Order202309GetOrderListResponseDataOrdersLineItemsItemTax": GetOrderListResponseDataOrdersLineItemsItemTax_1.Order202309GetOrderListResponseDataOrdersLineItemsItemTax,
    "Order202309GetOrderListResponseDataOrdersPackages": GetOrderListResponseDataOrdersPackages_1.Order202309GetOrderListResponseDataOrdersPackages,
    "Order202309GetOrderListResponseDataOrdersPayment": GetOrderListResponseDataOrdersPayment_1.Order202309GetOrderListResponseDataOrdersPayment,
    "Order202309GetOrderListResponseDataOrdersRecipientAddress": GetOrderListResponseDataOrdersRecipientAddress_1.Order202309GetOrderListResponseDataOrdersRecipientAddress,
    "Order202309GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences": GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences_1.Order202309GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences,
    "Order202309GetOrderListResponseDataOrdersRecipientAddressDistrictInfo": GetOrderListResponseDataOrdersRecipientAddressDistrictInfo_1.Order202309GetOrderListResponseDataOrdersRecipientAddressDistrictInfo,
    "Order202407GetPriceDetailResponse": GetPriceDetailResponse_1.Order202407GetPriceDetailResponse,
    "Order202407GetPriceDetailResponseData": GetPriceDetailResponseData_1.Order202407GetPriceDetailResponseData,
    "Order202407GetPriceDetailResponseDataLineItems": GetPriceDetailResponseDataLineItems_1.Order202407GetPriceDetailResponseDataLineItems,
    "Product202309ActivateProductRequestBody": ActivateProductRequestBody_1.Product202309ActivateProductRequestBody,
    "Product202309ActivateProductResponse": ActivateProductResponse_1.Product202309ActivateProductResponse,
    "Product202309ActivateProductResponseData": ActivateProductResponseData_1.Product202309ActivateProductResponseData,
    "Product202309ActivateProductResponseDataErrors": ActivateProductResponseDataErrors_1.Product202309ActivateProductResponseDataErrors,
    "Product202309ActivateProductResponseDataErrorsDetail": ActivateProductResponseDataErrorsDetail_1.Product202309ActivateProductResponseDataErrorsDetail,
    "Product202309ActivateProductResponseDataErrorsDetailExtraErrors": ActivateProductResponseDataErrorsDetailExtraErrors_1.Product202309ActivateProductResponseDataErrorsDetailExtraErrors,
    "Product202309CheckListingPrerequisitesResponse": CheckListingPrerequisitesResponse_1.Product202309CheckListingPrerequisitesResponse,
    "Product202309CheckListingPrerequisitesResponseData": CheckListingPrerequisitesResponseData_1.Product202309CheckListingPrerequisitesResponseData,
    "Product202309CheckListingPrerequisitesResponseDataShop": CheckListingPrerequisitesResponseDataShop_1.Product202309CheckListingPrerequisitesResponseDataShop,
    "Product202309CheckListingPrerequisitesResponseDataShopGne": CheckListingPrerequisitesResponseDataShopGne_1.Product202309CheckListingPrerequisitesResponseDataShopGne,
    "Product202309CheckListingPrerequisitesResponseDataShopLogistics": CheckListingPrerequisitesResponseDataShopLogistics_1.Product202309CheckListingPrerequisitesResponseDataShopLogistics,
    "Product202309CheckProductListingRequestBody": CheckProductListingRequestBody_1.Product202309CheckProductListingRequestBody,
    "Product202309CheckProductListingRequestBodyCertifications": CheckProductListingRequestBodyCertifications_1.Product202309CheckProductListingRequestBodyCertifications,
    "Product202309CheckProductListingRequestBodyCertificationsFiles": CheckProductListingRequestBodyCertificationsFiles_1.Product202309CheckProductListingRequestBodyCertificationsFiles,
    "Product202309CheckProductListingRequestBodyCertificationsImages": CheckProductListingRequestBodyCertificationsImages_1.Product202309CheckProductListingRequestBodyCertificationsImages,
    "Product202309CheckProductListingRequestBodyMainImages": CheckProductListingRequestBodyMainImages_1.Product202309CheckProductListingRequestBodyMainImages,
    "Product202309CheckProductListingRequestBodyPackageDimensions": CheckProductListingRequestBodyPackageDimensions_1.Product202309CheckProductListingRequestBodyPackageDimensions,
    "Product202309CheckProductListingRequestBodyPackageWeight": CheckProductListingRequestBodyPackageWeight_1.Product202309CheckProductListingRequestBodyPackageWeight,
    "Product202309CheckProductListingRequestBodyProductAttributes": CheckProductListingRequestBodyProductAttributes_1.Product202309CheckProductListingRequestBodyProductAttributes,
    "Product202309CheckProductListingRequestBodyProductAttributesValues": CheckProductListingRequestBodyProductAttributesValues_1.Product202309CheckProductListingRequestBodyProductAttributesValues,
    "Product202309CheckProductListingRequestBodySizeChart": CheckProductListingRequestBodySizeChart_1.Product202309CheckProductListingRequestBodySizeChart,
    "Product202309CheckProductListingRequestBodySizeChartImage": CheckProductListingRequestBodySizeChartImage_1.Product202309CheckProductListingRequestBodySizeChartImage,
    "Product202309CheckProductListingRequestBodySizeChartTemplate": CheckProductListingRequestBodySizeChartTemplate_1.Product202309CheckProductListingRequestBodySizeChartTemplate,
    "Product202309CheckProductListingRequestBodySkus": CheckProductListingRequestBodySkus_1.Product202309CheckProductListingRequestBodySkus,
    "Product202309CheckProductListingRequestBodySkusCombinedSkus": CheckProductListingRequestBodySkusCombinedSkus_1.Product202309CheckProductListingRequestBodySkusCombinedSkus,
    "Product202309CheckProductListingRequestBodySkusExternalListPrices": CheckProductListingRequestBodySkusExternalListPrices_1.Product202309CheckProductListingRequestBodySkusExternalListPrices,
    "Product202309CheckProductListingRequestBodySkusIdentifierCode": CheckProductListingRequestBodySkusIdentifierCode_1.Product202309CheckProductListingRequestBodySkusIdentifierCode,
    "Product202309CheckProductListingRequestBodySkusInventory": CheckProductListingRequestBodySkusInventory_1.Product202309CheckProductListingRequestBodySkusInventory,
    "Product202309CheckProductListingRequestBodySkusListPrice": CheckProductListingRequestBodySkusListPrice_1.Product202309CheckProductListingRequestBodySkusListPrice,
    "Product202309CheckProductListingRequestBodySkusPreSale": CheckProductListingRequestBodySkusPreSale_1.Product202309CheckProductListingRequestBodySkusPreSale,
    "Product202309CheckProductListingRequestBodySkusPreSaleFulfillmentType": CheckProductListingRequestBodySkusPreSaleFulfillmentType_1.Product202309CheckProductListingRequestBodySkusPreSaleFulfillmentType,
    "Product202309CheckProductListingRequestBodySkusPrice": CheckProductListingRequestBodySkusPrice_1.Product202309CheckProductListingRequestBodySkusPrice,
    "Product202309CheckProductListingRequestBodySkusSalesAttributes": CheckProductListingRequestBodySkusSalesAttributes_1.Product202309CheckProductListingRequestBodySkusSalesAttributes,
    "Product202309CheckProductListingRequestBodySkusSalesAttributesSkuImg": CheckProductListingRequestBodySkusSalesAttributesSkuImg_1.Product202309CheckProductListingRequestBodySkusSalesAttributesSkuImg,
    "Product202309CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages": CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309CheckProductListingRequestBodyVideo": CheckProductListingRequestBodyVideo_1.Product202309CheckProductListingRequestBodyVideo,
    "Product202309CheckProductListingResponse": CheckProductListingResponse_1.Product202309CheckProductListingResponse,
    "Product202309CheckProductListingResponseData": CheckProductListingResponseData_1.Product202309CheckProductListingResponseData,
    "Product202309CheckProductListingResponseDataDiagnoses": CheckProductListingResponseDataDiagnoses_1.Product202309CheckProductListingResponseDataDiagnoses,
    "Product202309CheckProductListingResponseDataDiagnosesDiagnosisResults": CheckProductListingResponseDataDiagnosesDiagnosisResults_1.Product202309CheckProductListingResponseDataDiagnosesDiagnosisResults,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestions": CheckProductListingResponseDataDiagnosesSuggestions_1.Product202309CheckProductListingResponseDataDiagnosesSuggestions,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestionsImages": CheckProductListingResponseDataDiagnosesSuggestionsImages_1.Product202309CheckProductListingResponseDataDiagnosesSuggestionsImages,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestionsSeoWords": CheckProductListingResponseDataDiagnosesSuggestionsSeoWords_1.Product202309CheckProductListingResponseDataDiagnosesSuggestionsSeoWords,
    "Product202309CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts": CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts_1.Product202309CheckProductListingResponseDataDiagnosesSuggestionsSmartTexts,
    "Product202309CheckProductListingResponseDataFailReasons": CheckProductListingResponseDataFailReasons_1.Product202309CheckProductListingResponseDataFailReasons,
    "Product202309CheckProductListingResponseDataListingQuality": CheckProductListingResponseDataListingQuality_1.Product202309CheckProductListingResponseDataListingQuality,
    "Product202309CheckProductListingResponseDataWarnings": CheckProductListingResponseDataWarnings_1.Product202309CheckProductListingResponseDataWarnings,
    "Product202309CreateCustomBrandsRequestBody": CreateCustomBrandsRequestBody_1.Product202309CreateCustomBrandsRequestBody,
    "Product202309CreateCustomBrandsResponse": CreateCustomBrandsResponse_1.Product202309CreateCustomBrandsResponse,
    "Product202309CreateCustomBrandsResponseData": CreateCustomBrandsResponseData_1.Product202309CreateCustomBrandsResponseData,
    "Product202309CreateGlobalProductRequestBody": CreateGlobalProductRequestBody_1.Product202309CreateGlobalProductRequestBody,
    "Product202309CreateGlobalProductRequestBodyCertifications": CreateGlobalProductRequestBodyCertifications_1.Product202309CreateGlobalProductRequestBodyCertifications,
    "Product202309CreateGlobalProductRequestBodyCertificationsFiles": CreateGlobalProductRequestBodyCertificationsFiles_1.Product202309CreateGlobalProductRequestBodyCertificationsFiles,
    "Product202309CreateGlobalProductRequestBodyCertificationsImages": CreateGlobalProductRequestBodyCertificationsImages_1.Product202309CreateGlobalProductRequestBodyCertificationsImages,
    "Product202309CreateGlobalProductRequestBodyMainImages": CreateGlobalProductRequestBodyMainImages_1.Product202309CreateGlobalProductRequestBodyMainImages,
    "Product202309CreateGlobalProductRequestBodyManufacturer": CreateGlobalProductRequestBodyManufacturer_1.Product202309CreateGlobalProductRequestBodyManufacturer,
    "Product202309CreateGlobalProductRequestBodyPackageDimensions": CreateGlobalProductRequestBodyPackageDimensions_1.Product202309CreateGlobalProductRequestBodyPackageDimensions,
    "Product202309CreateGlobalProductRequestBodyPackageWeight": CreateGlobalProductRequestBodyPackageWeight_1.Product202309CreateGlobalProductRequestBodyPackageWeight,
    "Product202309CreateGlobalProductRequestBodyProductAttributes": CreateGlobalProductRequestBodyProductAttributes_1.Product202309CreateGlobalProductRequestBodyProductAttributes,
    "Product202309CreateGlobalProductRequestBodyProductAttributesValues": CreateGlobalProductRequestBodyProductAttributesValues_1.Product202309CreateGlobalProductRequestBodyProductAttributesValues,
    "Product202309CreateGlobalProductRequestBodySizeChart": CreateGlobalProductRequestBodySizeChart_1.Product202309CreateGlobalProductRequestBodySizeChart,
    "Product202309CreateGlobalProductRequestBodySizeChartImage": CreateGlobalProductRequestBodySizeChartImage_1.Product202309CreateGlobalProductRequestBodySizeChartImage,
    "Product202309CreateGlobalProductRequestBodySizeChartTemplate": CreateGlobalProductRequestBodySizeChartTemplate_1.Product202309CreateGlobalProductRequestBodySizeChartTemplate,
    "Product202309CreateGlobalProductRequestBodySkus": CreateGlobalProductRequestBodySkus_1.Product202309CreateGlobalProductRequestBodySkus,
    "Product202309CreateGlobalProductRequestBodySkusIdentifierCode": CreateGlobalProductRequestBodySkusIdentifierCode_1.Product202309CreateGlobalProductRequestBodySkusIdentifierCode,
    "Product202309CreateGlobalProductRequestBodySkusInventory": CreateGlobalProductRequestBodySkusInventory_1.Product202309CreateGlobalProductRequestBodySkusInventory,
    "Product202309CreateGlobalProductRequestBodySkusPrice": CreateGlobalProductRequestBodySkusPrice_1.Product202309CreateGlobalProductRequestBodySkusPrice,
    "Product202309CreateGlobalProductRequestBodySkusSalesAttributes": CreateGlobalProductRequestBodySkusSalesAttributes_1.Product202309CreateGlobalProductRequestBodySkusSalesAttributes,
    "Product202309CreateGlobalProductRequestBodySkusSalesAttributesSkuImg": CreateGlobalProductRequestBodySkusSalesAttributesSkuImg_1.Product202309CreateGlobalProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309CreateGlobalProductRequestBodyVideo": CreateGlobalProductRequestBodyVideo_1.Product202309CreateGlobalProductRequestBodyVideo,
    "Product202309CreateGlobalProductResponse": CreateGlobalProductResponse_1.Product202309CreateGlobalProductResponse,
    "Product202309CreateGlobalProductResponseData": CreateGlobalProductResponseData_1.Product202309CreateGlobalProductResponseData,
    "Product202309CreateGlobalProductResponseDataGlobalSkus": CreateGlobalProductResponseDataGlobalSkus_1.Product202309CreateGlobalProductResponseDataGlobalSkus,
    "Product202309CreateGlobalProductResponseDataGlobalSkusSalesAttributes": CreateGlobalProductResponseDataGlobalSkusSalesAttributes_1.Product202309CreateGlobalProductResponseDataGlobalSkusSalesAttributes,
    "Product202309CreateProductRequestBody": CreateProductRequestBody_1.Product202309CreateProductRequestBody,
    "Product202309CreateProductRequestBodyCertifications": CreateProductRequestBodyCertifications_1.Product202309CreateProductRequestBodyCertifications,
    "Product202309CreateProductRequestBodyCertificationsFiles": CreateProductRequestBodyCertificationsFiles_1.Product202309CreateProductRequestBodyCertificationsFiles,
    "Product202309CreateProductRequestBodyCertificationsImages": CreateProductRequestBodyCertificationsImages_1.Product202309CreateProductRequestBodyCertificationsImages,
    "Product202309CreateProductRequestBodyMainImages": CreateProductRequestBodyMainImages_1.Product202309CreateProductRequestBodyMainImages,
    "Product202309CreateProductRequestBodyPackageDimensions": CreateProductRequestBodyPackageDimensions_1.Product202309CreateProductRequestBodyPackageDimensions,
    "Product202309CreateProductRequestBodyPackageWeight": CreateProductRequestBodyPackageWeight_1.Product202309CreateProductRequestBodyPackageWeight,
    "Product202309CreateProductRequestBodyProductAttributes": CreateProductRequestBodyProductAttributes_1.Product202309CreateProductRequestBodyProductAttributes,
    "Product202309CreateProductRequestBodyProductAttributesValues": CreateProductRequestBodyProductAttributesValues_1.Product202309CreateProductRequestBodyProductAttributesValues,
    "Product202309CreateProductRequestBodySizeChart": CreateProductRequestBodySizeChart_1.Product202309CreateProductRequestBodySizeChart,
    "Product202309CreateProductRequestBodySizeChartImage": CreateProductRequestBodySizeChartImage_1.Product202309CreateProductRequestBodySizeChartImage,
    "Product202309CreateProductRequestBodySizeChartTemplate": CreateProductRequestBodySizeChartTemplate_1.Product202309CreateProductRequestBodySizeChartTemplate,
    "Product202309CreateProductRequestBodySkus": CreateProductRequestBodySkus_1.Product202309CreateProductRequestBodySkus,
    "Product202309CreateProductRequestBodySkusCombinedSkus": CreateProductRequestBodySkusCombinedSkus_1.Product202309CreateProductRequestBodySkusCombinedSkus,
    "Product202309CreateProductRequestBodySkusExternalListPrices": CreateProductRequestBodySkusExternalListPrices_1.Product202309CreateProductRequestBodySkusExternalListPrices,
    "Product202309CreateProductRequestBodySkusIdentifierCode": CreateProductRequestBodySkusIdentifierCode_1.Product202309CreateProductRequestBodySkusIdentifierCode,
    "Product202309CreateProductRequestBodySkusInventory": CreateProductRequestBodySkusInventory_1.Product202309CreateProductRequestBodySkusInventory,
    "Product202309CreateProductRequestBodySkusListPrice": CreateProductRequestBodySkusListPrice_1.Product202309CreateProductRequestBodySkusListPrice,
    "Product202309CreateProductRequestBodySkusPreSale": CreateProductRequestBodySkusPreSale_1.Product202309CreateProductRequestBodySkusPreSale,
    "Product202309CreateProductRequestBodySkusPreSaleFulfillmentType": CreateProductRequestBodySkusPreSaleFulfillmentType_1.Product202309CreateProductRequestBodySkusPreSaleFulfillmentType,
    "Product202309CreateProductRequestBodySkusPrice": CreateProductRequestBodySkusPrice_1.Product202309CreateProductRequestBodySkusPrice,
    "Product202309CreateProductRequestBodySkusSalesAttributes": CreateProductRequestBodySkusSalesAttributes_1.Product202309CreateProductRequestBodySkusSalesAttributes,
    "Product202309CreateProductRequestBodySkusSalesAttributesSkuImg": CreateProductRequestBodySkusSalesAttributesSkuImg_1.Product202309CreateProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages": CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309CreateProductRequestBodyVideo": CreateProductRequestBodyVideo_1.Product202309CreateProductRequestBodyVideo,
    "Product202309CreateProductResponse": CreateProductResponse_1.Product202309CreateProductResponse,
    "Product202309CreateProductResponseData": CreateProductResponseData_1.Product202309CreateProductResponseData,
    "Product202309CreateProductResponseDataSkus": CreateProductResponseDataSkus_1.Product202309CreateProductResponseDataSkus,
    "Product202309CreateProductResponseDataSkusSalesAttributes": CreateProductResponseDataSkusSalesAttributes_1.Product202309CreateProductResponseDataSkusSalesAttributes,
    "Product202309CreateProductResponseDataWarnings": CreateProductResponseDataWarnings_1.Product202309CreateProductResponseDataWarnings,
    "Product202309DeactivateProductsRequestBody": DeactivateProductsRequestBody_1.Product202309DeactivateProductsRequestBody,
    "Product202309DeactivateProductsResponse": DeactivateProductsResponse_1.Product202309DeactivateProductsResponse,
    "Product202309DeactivateProductsResponseData": DeactivateProductsResponseData_1.Product202309DeactivateProductsResponseData,
    "Product202309DeactivateProductsResponseDataErrors": DeactivateProductsResponseDataErrors_1.Product202309DeactivateProductsResponseDataErrors,
    "Product202309DeactivateProductsResponseDataErrorsDetail": DeactivateProductsResponseDataErrorsDetail_1.Product202309DeactivateProductsResponseDataErrorsDetail,
    "Product202309DeleteGlobalProductsRequestBody": DeleteGlobalProductsRequestBody_1.Product202309DeleteGlobalProductsRequestBody,
    "Product202309DeleteGlobalProductsResponse": DeleteGlobalProductsResponse_1.Product202309DeleteGlobalProductsResponse,
    "Product202309DeleteGlobalProductsResponseData": DeleteGlobalProductsResponseData_1.Product202309DeleteGlobalProductsResponseData,
    "Product202309DeleteGlobalProductsResponseDataErrors": DeleteGlobalProductsResponseDataErrors_1.Product202309DeleteGlobalProductsResponseDataErrors,
    "Product202309DeleteGlobalProductsResponseDataErrorsDetail": DeleteGlobalProductsResponseDataErrorsDetail_1.Product202309DeleteGlobalProductsResponseDataErrorsDetail,
    "Product202309DeleteProductsRequestBody": DeleteProductsRequestBody_1.Product202309DeleteProductsRequestBody,
    "Product202309DeleteProductsResponse": DeleteProductsResponse_1.Product202309DeleteProductsResponse,
    "Product202309DeleteProductsResponseData": DeleteProductsResponseData_1.Product202309DeleteProductsResponseData,
    "Product202309DeleteProductsResponseDataErrors": DeleteProductsResponseDataErrors_1.Product202309DeleteProductsResponseDataErrors,
    "Product202309DeleteProductsResponseDataErrorsDetail": DeleteProductsResponseDataErrorsDetail_1.Product202309DeleteProductsResponseDataErrorsDetail,
    "Product202309EditGlobalProductRequestBody": EditGlobalProductRequestBody_1.Product202309EditGlobalProductRequestBody,
    "Product202309EditGlobalProductRequestBodyCertifications": EditGlobalProductRequestBodyCertifications_1.Product202309EditGlobalProductRequestBodyCertifications,
    "Product202309EditGlobalProductRequestBodyCertificationsFiles": EditGlobalProductRequestBodyCertificationsFiles_1.Product202309EditGlobalProductRequestBodyCertificationsFiles,
    "Product202309EditGlobalProductRequestBodyCertificationsImages": EditGlobalProductRequestBodyCertificationsImages_1.Product202309EditGlobalProductRequestBodyCertificationsImages,
    "Product202309EditGlobalProductRequestBodyMainImages": EditGlobalProductRequestBodyMainImages_1.Product202309EditGlobalProductRequestBodyMainImages,
    "Product202309EditGlobalProductRequestBodyManufacturer": EditGlobalProductRequestBodyManufacturer_1.Product202309EditGlobalProductRequestBodyManufacturer,
    "Product202309EditGlobalProductRequestBodyPackageDimensions": EditGlobalProductRequestBodyPackageDimensions_1.Product202309EditGlobalProductRequestBodyPackageDimensions,
    "Product202309EditGlobalProductRequestBodyPackageWeight": EditGlobalProductRequestBodyPackageWeight_1.Product202309EditGlobalProductRequestBodyPackageWeight,
    "Product202309EditGlobalProductRequestBodyProductAttributes": EditGlobalProductRequestBodyProductAttributes_1.Product202309EditGlobalProductRequestBodyProductAttributes,
    "Product202309EditGlobalProductRequestBodyProductAttributesValues": EditGlobalProductRequestBodyProductAttributesValues_1.Product202309EditGlobalProductRequestBodyProductAttributesValues,
    "Product202309EditGlobalProductRequestBodySizeChart": EditGlobalProductRequestBodySizeChart_1.Product202309EditGlobalProductRequestBodySizeChart,
    "Product202309EditGlobalProductRequestBodySizeChartImage": EditGlobalProductRequestBodySizeChartImage_1.Product202309EditGlobalProductRequestBodySizeChartImage,
    "Product202309EditGlobalProductRequestBodySizeChartTemplate": EditGlobalProductRequestBodySizeChartTemplate_1.Product202309EditGlobalProductRequestBodySizeChartTemplate,
    "Product202309EditGlobalProductRequestBodySkus": EditGlobalProductRequestBodySkus_1.Product202309EditGlobalProductRequestBodySkus,
    "Product202309EditGlobalProductRequestBodySkusIdentifierCode": EditGlobalProductRequestBodySkusIdentifierCode_1.Product202309EditGlobalProductRequestBodySkusIdentifierCode,
    "Product202309EditGlobalProductRequestBodySkusInventory": EditGlobalProductRequestBodySkusInventory_1.Product202309EditGlobalProductRequestBodySkusInventory,
    "Product202309EditGlobalProductRequestBodySkusPrice": EditGlobalProductRequestBodySkusPrice_1.Product202309EditGlobalProductRequestBodySkusPrice,
    "Product202309EditGlobalProductRequestBodySkusSalePrices": EditGlobalProductRequestBodySkusSalePrices_1.Product202309EditGlobalProductRequestBodySkusSalePrices,
    "Product202309EditGlobalProductRequestBodySkusSalesAttributes": EditGlobalProductRequestBodySkusSalesAttributes_1.Product202309EditGlobalProductRequestBodySkusSalesAttributes,
    "Product202309EditGlobalProductRequestBodySkusSalesAttributesSkuImg": EditGlobalProductRequestBodySkusSalesAttributesSkuImg_1.Product202309EditGlobalProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309EditGlobalProductRequestBodyVideo": EditGlobalProductRequestBodyVideo_1.Product202309EditGlobalProductRequestBodyVideo,
    "Product202309EditGlobalProductResponse": EditGlobalProductResponse_1.Product202309EditGlobalProductResponse,
    "Product202309EditGlobalProductResponseData": EditGlobalProductResponseData_1.Product202309EditGlobalProductResponseData,
    "Product202309EditGlobalProductResponseDataGlobalSkus": EditGlobalProductResponseDataGlobalSkus_1.Product202309EditGlobalProductResponseDataGlobalSkus,
    "Product202309EditGlobalProductResponseDataGlobalSkusSalesAttributes": EditGlobalProductResponseDataGlobalSkusSalesAttributes_1.Product202309EditGlobalProductResponseDataGlobalSkusSalesAttributes,
    "Product202309EditGlobalProductResponseDataPublishResults": EditGlobalProductResponseDataPublishResults_1.Product202309EditGlobalProductResponseDataPublishResults,
    "Product202309EditGlobalProductResponseDataPublishResultsFailReasons": EditGlobalProductResponseDataPublishResultsFailReasons_1.Product202309EditGlobalProductResponseDataPublishResultsFailReasons,
    "Product202309EditProductRequestBody": EditProductRequestBody_1.Product202309EditProductRequestBody,
    "Product202309EditProductRequestBodyCertifications": EditProductRequestBodyCertifications_1.Product202309EditProductRequestBodyCertifications,
    "Product202309EditProductRequestBodyCertificationsFiles": EditProductRequestBodyCertificationsFiles_1.Product202309EditProductRequestBodyCertificationsFiles,
    "Product202309EditProductRequestBodyCertificationsImages": EditProductRequestBodyCertificationsImages_1.Product202309EditProductRequestBodyCertificationsImages,
    "Product202309EditProductRequestBodyMainImages": EditProductRequestBodyMainImages_1.Product202309EditProductRequestBodyMainImages,
    "Product202309EditProductRequestBodyPackageDimensions": EditProductRequestBodyPackageDimensions_1.Product202309EditProductRequestBodyPackageDimensions,
    "Product202309EditProductRequestBodyPackageWeight": EditProductRequestBodyPackageWeight_1.Product202309EditProductRequestBodyPackageWeight,
    "Product202309EditProductRequestBodyProductAttributes": EditProductRequestBodyProductAttributes_1.Product202309EditProductRequestBodyProductAttributes,
    "Product202309EditProductRequestBodyProductAttributesValues": EditProductRequestBodyProductAttributesValues_1.Product202309EditProductRequestBodyProductAttributesValues,
    "Product202309EditProductRequestBodySizeChart": EditProductRequestBodySizeChart_1.Product202309EditProductRequestBodySizeChart,
    "Product202309EditProductRequestBodySizeChartImage": EditProductRequestBodySizeChartImage_1.Product202309EditProductRequestBodySizeChartImage,
    "Product202309EditProductRequestBodySizeChartTemplate": EditProductRequestBodySizeChartTemplate_1.Product202309EditProductRequestBodySizeChartTemplate,
    "Product202309EditProductRequestBodySkus": EditProductRequestBodySkus_1.Product202309EditProductRequestBodySkus,
    "Product202309EditProductRequestBodySkusCombinedSkus": EditProductRequestBodySkusCombinedSkus_1.Product202309EditProductRequestBodySkusCombinedSkus,
    "Product202309EditProductRequestBodySkusExternalListPrices": EditProductRequestBodySkusExternalListPrices_1.Product202309EditProductRequestBodySkusExternalListPrices,
    "Product202309EditProductRequestBodySkusIdentifierCode": EditProductRequestBodySkusIdentifierCode_1.Product202309EditProductRequestBodySkusIdentifierCode,
    "Product202309EditProductRequestBodySkusInventory": EditProductRequestBodySkusInventory_1.Product202309EditProductRequestBodySkusInventory,
    "Product202309EditProductRequestBodySkusListPrice": EditProductRequestBodySkusListPrice_1.Product202309EditProductRequestBodySkusListPrice,
    "Product202309EditProductRequestBodySkusPreSale": EditProductRequestBodySkusPreSale_1.Product202309EditProductRequestBodySkusPreSale,
    "Product202309EditProductRequestBodySkusPreSaleFulfillmentType": EditProductRequestBodySkusPreSaleFulfillmentType_1.Product202309EditProductRequestBodySkusPreSaleFulfillmentType,
    "Product202309EditProductRequestBodySkusPrice": EditProductRequestBodySkusPrice_1.Product202309EditProductRequestBodySkusPrice,
    "Product202309EditProductRequestBodySkusSalesAttributes": EditProductRequestBodySkusSalesAttributes_1.Product202309EditProductRequestBodySkusSalesAttributes,
    "Product202309EditProductRequestBodySkusSalesAttributesSkuImg": EditProductRequestBodySkusSalesAttributesSkuImg_1.Product202309EditProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309EditProductRequestBodySkusSalesAttributesSupplementarySkuImages": EditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309EditProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309EditProductRequestBodyVideo": EditProductRequestBodyVideo_1.Product202309EditProductRequestBodyVideo,
    "Product202309EditProductResponse": EditProductResponse_1.Product202309EditProductResponse,
    "Product202309EditProductResponseData": EditProductResponseData_1.Product202309EditProductResponseData,
    "Product202309EditProductResponseDataAudit": EditProductResponseDataAudit_1.Product202309EditProductResponseDataAudit,
    "Product202309EditProductResponseDataSkus": EditProductResponseDataSkus_1.Product202309EditProductResponseDataSkus,
    "Product202309EditProductResponseDataSkusSalesAttributes": EditProductResponseDataSkusSalesAttributes_1.Product202309EditProductResponseDataSkusSalesAttributes,
    "Product202309EditProductResponseDataWarnings": EditProductResponseDataWarnings_1.Product202309EditProductResponseDataWarnings,
    "Product202309GetAttributesResponse": GetAttributesResponse_1.Product202309GetAttributesResponse,
    "Product202309GetAttributesResponseData": GetAttributesResponseData_1.Product202309GetAttributesResponseData,
    "Product202309GetAttributesResponseDataAttributes": GetAttributesResponseDataAttributes_1.Product202309GetAttributesResponseDataAttributes,
    "Product202309GetAttributesResponseDataAttributesRequirementConditions": GetAttributesResponseDataAttributesRequirementConditions_1.Product202309GetAttributesResponseDataAttributesRequirementConditions,
    "Product202309GetAttributesResponseDataAttributesValues": GetAttributesResponseDataAttributesValues_1.Product202309GetAttributesResponseDataAttributesValues,
    "Product202309GetBrandsResponse": GetBrandsResponse_1.Product202309GetBrandsResponse,
    "Product202309GetBrandsResponseData": GetBrandsResponseData_1.Product202309GetBrandsResponseData,
    "Product202309GetBrandsResponseDataBrands": GetBrandsResponseDataBrands_1.Product202309GetBrandsResponseDataBrands,
    "Product202309GetCategoriesResponse": GetCategoriesResponse_1.Product202309GetCategoriesResponse,
    "Product202309GetCategoriesResponseData": GetCategoriesResponseData_1.Product202309GetCategoriesResponseData,
    "Product202309GetCategoriesResponseDataCategories": GetCategoriesResponseDataCategories_1.Product202309GetCategoriesResponseDataCategories,
    "Product202309GetCategoryRulesResponse": GetCategoryRulesResponse_1.Product202309GetCategoryRulesResponse,
    "Product202309GetCategoryRulesResponseData": GetCategoryRulesResponseData_1.Product202309GetCategoryRulesResponseData,
    "Product202309GetCategoryRulesResponseDataCod": GetCategoryRulesResponseDataCod_1.Product202309GetCategoryRulesResponseDataCod,
    "Product202309GetCategoryRulesResponseDataEpr": GetCategoryRulesResponseDataEpr_1.Product202309GetCategoryRulesResponseDataEpr,
    "Product202309GetCategoryRulesResponseDataManufacturer": GetCategoryRulesResponseDataManufacturer_1.Product202309GetCategoryRulesResponseDataManufacturer,
    "Product202309GetCategoryRulesResponseDataPackageDimension": GetCategoryRulesResponseDataPackageDimension_1.Product202309GetCategoryRulesResponseDataPackageDimension,
    "Product202309GetCategoryRulesResponseDataProductCertifications": GetCategoryRulesResponseDataProductCertifications_1.Product202309GetCategoryRulesResponseDataProductCertifications,
    "Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate": GetCategoryRulesResponseDataProductCertificationsExpirationDate_1.Product202309GetCategoryRulesResponseDataProductCertificationsExpirationDate,
    "Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions": GetCategoryRulesResponseDataProductCertificationsRequirementConditions_1.Product202309GetCategoryRulesResponseDataProductCertificationsRequirementConditions,
    "Product202309GetCategoryRulesResponseDataResponsiblePerson": GetCategoryRulesResponseDataResponsiblePerson_1.Product202309GetCategoryRulesResponseDataResponsiblePerson,
    "Product202309GetCategoryRulesResponseDataSizeChart": GetCategoryRulesResponseDataSizeChart_1.Product202309GetCategoryRulesResponseDataSizeChart,
    "Product202309GetGlobalAttributesResponse": GetGlobalAttributesResponse_1.Product202309GetGlobalAttributesResponse,
    "Product202309GetGlobalAttributesResponseData": GetGlobalAttributesResponseData_1.Product202309GetGlobalAttributesResponseData,
    "Product202309GetGlobalAttributesResponseDataAttributes": GetGlobalAttributesResponseDataAttributes_1.Product202309GetGlobalAttributesResponseDataAttributes,
    "Product202309GetGlobalAttributesResponseDataAttributesRequirementConditions": GetGlobalAttributesResponseDataAttributesRequirementConditions_1.Product202309GetGlobalAttributesResponseDataAttributesRequirementConditions,
    "Product202309GetGlobalAttributesResponseDataAttributesValues": GetGlobalAttributesResponseDataAttributesValues_1.Product202309GetGlobalAttributesResponseDataAttributesValues,
    "Product202309GetGlobalCategoriesResponse": GetGlobalCategoriesResponse_1.Product202309GetGlobalCategoriesResponse,
    "Product202309GetGlobalCategoriesResponseData": GetGlobalCategoriesResponseData_1.Product202309GetGlobalCategoriesResponseData,
    "Product202309GetGlobalCategoriesResponseDataCategories": GetGlobalCategoriesResponseDataCategories_1.Product202309GetGlobalCategoriesResponseDataCategories,
    "Product202309GetGlobalCategoryRulesResponse": GetGlobalCategoryRulesResponse_1.Product202309GetGlobalCategoryRulesResponse,
    "Product202309GetGlobalCategoryRulesResponseData": GetGlobalCategoryRulesResponseData_1.Product202309GetGlobalCategoryRulesResponseData,
    "Product202309GetGlobalCategoryRulesResponseDataManufacturer": GetGlobalCategoryRulesResponseDataManufacturer_1.Product202309GetGlobalCategoryRulesResponseDataManufacturer,
    "Product202309GetGlobalCategoryRulesResponseDataProductCertifications": GetGlobalCategoryRulesResponseDataProductCertifications_1.Product202309GetGlobalCategoryRulesResponseDataProductCertifications,
    "Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions": GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions_1.Product202309GetGlobalCategoryRulesResponseDataProductCertificationsRequirementConditions,
    "Product202309GetGlobalCategoryRulesResponseDataResponsiblePerson": GetGlobalCategoryRulesResponseDataResponsiblePerson_1.Product202309GetGlobalCategoryRulesResponseDataResponsiblePerson,
    "Product202309GetGlobalCategoryRulesResponseDataSizeChart": GetGlobalCategoryRulesResponseDataSizeChart_1.Product202309GetGlobalCategoryRulesResponseDataSizeChart,
    "Product202309GetGlobalProductResponse": GetGlobalProductResponse_1.Product202309GetGlobalProductResponse,
    "Product202309GetGlobalProductResponseData": GetGlobalProductResponseData_1.Product202309GetGlobalProductResponseData,
    "Product202309GetGlobalProductResponseDataBrand": GetGlobalProductResponseDataBrand_1.Product202309GetGlobalProductResponseDataBrand,
    "Product202309GetGlobalProductResponseDataCategory": GetGlobalProductResponseDataCategory_1.Product202309GetGlobalProductResponseDataCategory,
    "Product202309GetGlobalProductResponseDataCertifications": GetGlobalProductResponseDataCertifications_1.Product202309GetGlobalProductResponseDataCertifications,
    "Product202309GetGlobalProductResponseDataCertificationsFiles": GetGlobalProductResponseDataCertificationsFiles_1.Product202309GetGlobalProductResponseDataCertificationsFiles,
    "Product202309GetGlobalProductResponseDataCertificationsImages": GetGlobalProductResponseDataCertificationsImages_1.Product202309GetGlobalProductResponseDataCertificationsImages,
    "Product202309GetGlobalProductResponseDataMainImages": GetGlobalProductResponseDataMainImages_1.Product202309GetGlobalProductResponseDataMainImages,
    "Product202309GetGlobalProductResponseDataManufacturer": GetGlobalProductResponseDataManufacturer_1.Product202309GetGlobalProductResponseDataManufacturer,
    "Product202309GetGlobalProductResponseDataPackageDimensions": GetGlobalProductResponseDataPackageDimensions_1.Product202309GetGlobalProductResponseDataPackageDimensions,
    "Product202309GetGlobalProductResponseDataPackageWeight": GetGlobalProductResponseDataPackageWeight_1.Product202309GetGlobalProductResponseDataPackageWeight,
    "Product202309GetGlobalProductResponseDataProductAttributes": GetGlobalProductResponseDataProductAttributes_1.Product202309GetGlobalProductResponseDataProductAttributes,
    "Product202309GetGlobalProductResponseDataProductAttributesValues": GetGlobalProductResponseDataProductAttributesValues_1.Product202309GetGlobalProductResponseDataProductAttributesValues,
    "Product202309GetGlobalProductResponseDataProducts": GetGlobalProductResponseDataProducts_1.Product202309GetGlobalProductResponseDataProducts,
    "Product202309GetGlobalProductResponseDataProductsSkuMappings": GetGlobalProductResponseDataProductsSkuMappings_1.Product202309GetGlobalProductResponseDataProductsSkuMappings,
    "Product202309GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings": GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings_1.Product202309GetGlobalProductResponseDataProductsSkuMappingsSalesAttributeMappings,
    "Product202309GetGlobalProductResponseDataSizeChart": GetGlobalProductResponseDataSizeChart_1.Product202309GetGlobalProductResponseDataSizeChart,
    "Product202309GetGlobalProductResponseDataSizeChartImage": GetGlobalProductResponseDataSizeChartImage_1.Product202309GetGlobalProductResponseDataSizeChartImage,
    "Product202309GetGlobalProductResponseDataSizeChartTemplate": GetGlobalProductResponseDataSizeChartTemplate_1.Product202309GetGlobalProductResponseDataSizeChartTemplate,
    "Product202309GetGlobalProductResponseDataSkus": GetGlobalProductResponseDataSkus_1.Product202309GetGlobalProductResponseDataSkus,
    "Product202309GetGlobalProductResponseDataSkusIdentifierCode": GetGlobalProductResponseDataSkusIdentifierCode_1.Product202309GetGlobalProductResponseDataSkusIdentifierCode,
    "Product202309GetGlobalProductResponseDataSkusInventory": GetGlobalProductResponseDataSkusInventory_1.Product202309GetGlobalProductResponseDataSkusInventory,
    "Product202309GetGlobalProductResponseDataSkusPrice": GetGlobalProductResponseDataSkusPrice_1.Product202309GetGlobalProductResponseDataSkusPrice,
    "Product202309GetGlobalProductResponseDataSkusSalesAttributes": GetGlobalProductResponseDataSkusSalesAttributes_1.Product202309GetGlobalProductResponseDataSkusSalesAttributes,
    "Product202309GetGlobalProductResponseDataSkusSalesAttributesSkuImg": GetGlobalProductResponseDataSkusSalesAttributesSkuImg_1.Product202309GetGlobalProductResponseDataSkusSalesAttributesSkuImg,
    "Product202309GetGlobalProductResponseDataVideo": GetGlobalProductResponseDataVideo_1.Product202309GetGlobalProductResponseDataVideo,
    "Product202309GetProductResponse": GetProductResponse_1.Product202309GetProductResponse,
    "Product202309GetProductResponseData": GetProductResponseData_1.Product202309GetProductResponseData,
    "Product202309GetProductResponseDataAudit": GetProductResponseDataAudit_1.Product202309GetProductResponseDataAudit,
    "Product202309GetProductResponseDataAuditFailedReasons": GetProductResponseDataAuditFailedReasons_1.Product202309GetProductResponseDataAuditFailedReasons,
    "Product202309GetProductResponseDataBrand": GetProductResponseDataBrand_1.Product202309GetProductResponseDataBrand,
    "Product202309GetProductResponseDataCategoryChains": GetProductResponseDataCategoryChains_1.Product202309GetProductResponseDataCategoryChains,
    "Product202309GetProductResponseDataCertifications": GetProductResponseDataCertifications_1.Product202309GetProductResponseDataCertifications,
    "Product202309GetProductResponseDataCertificationsFiles": GetProductResponseDataCertificationsFiles_1.Product202309GetProductResponseDataCertificationsFiles,
    "Product202309GetProductResponseDataCertificationsImages": GetProductResponseDataCertificationsImages_1.Product202309GetProductResponseDataCertificationsImages,
    "Product202309GetProductResponseDataDeliveryOptions": GetProductResponseDataDeliveryOptions_1.Product202309GetProductResponseDataDeliveryOptions,
    "Product202309GetProductResponseDataGlobalProductAssociation": GetProductResponseDataGlobalProductAssociation_1.Product202309GetProductResponseDataGlobalProductAssociation,
    "Product202309GetProductResponseDataGlobalProductAssociationSkuMappings": GetProductResponseDataGlobalProductAssociationSkuMappings_1.Product202309GetProductResponseDataGlobalProductAssociationSkuMappings,
    "Product202309GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings": GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings_1.Product202309GetProductResponseDataGlobalProductAssociationSkuMappingsSalesAttributeMappings,
    "Product202309GetProductResponseDataIntegratedPlatformStatuses": GetProductResponseDataIntegratedPlatformStatuses_1.Product202309GetProductResponseDataIntegratedPlatformStatuses,
    "Product202309GetProductResponseDataMainImages": GetProductResponseDataMainImages_1.Product202309GetProductResponseDataMainImages,
    "Product202309GetProductResponseDataPackageDimensions": GetProductResponseDataPackageDimensions_1.Product202309GetProductResponseDataPackageDimensions,
    "Product202309GetProductResponseDataPackageWeight": GetProductResponseDataPackageWeight_1.Product202309GetProductResponseDataPackageWeight,
    "Product202309GetProductResponseDataPrescriptionRequirement": GetProductResponseDataPrescriptionRequirement_1.Product202309GetProductResponseDataPrescriptionRequirement,
    "Product202309GetProductResponseDataProductAttributes": GetProductResponseDataProductAttributes_1.Product202309GetProductResponseDataProductAttributes,
    "Product202309GetProductResponseDataProductAttributesValues": GetProductResponseDataProductAttributesValues_1.Product202309GetProductResponseDataProductAttributesValues,
    "Product202309GetProductResponseDataProductFamilies": GetProductResponseDataProductFamilies_1.Product202309GetProductResponseDataProductFamilies,
    "Product202309GetProductResponseDataProductFamiliesProducts": GetProductResponseDataProductFamiliesProducts_1.Product202309GetProductResponseDataProductFamiliesProducts,
    "Product202309GetProductResponseDataRecommendedCategories": GetProductResponseDataRecommendedCategories_1.Product202309GetProductResponseDataRecommendedCategories,
    "Product202309GetProductResponseDataSizeChart": GetProductResponseDataSizeChart_1.Product202309GetProductResponseDataSizeChart,
    "Product202309GetProductResponseDataSizeChartImage": GetProductResponseDataSizeChartImage_1.Product202309GetProductResponseDataSizeChartImage,
    "Product202309GetProductResponseDataSizeChartTemplate": GetProductResponseDataSizeChartTemplate_1.Product202309GetProductResponseDataSizeChartTemplate,
    "Product202309GetProductResponseDataSkus": GetProductResponseDataSkus_1.Product202309GetProductResponseDataSkus,
    "Product202309GetProductResponseDataSkusCombinedSkus": GetProductResponseDataSkusCombinedSkus_1.Product202309GetProductResponseDataSkusCombinedSkus,
    "Product202309GetProductResponseDataSkusExternalListPrices": GetProductResponseDataSkusExternalListPrices_1.Product202309GetProductResponseDataSkusExternalListPrices,
    "Product202309GetProductResponseDataSkusGlobalListingPolicy": GetProductResponseDataSkusGlobalListingPolicy_1.Product202309GetProductResponseDataSkusGlobalListingPolicy,
    "Product202309GetProductResponseDataSkusGlobalListingPolicyReplicateSource": GetProductResponseDataSkusGlobalListingPolicyReplicateSource_1.Product202309GetProductResponseDataSkusGlobalListingPolicyReplicateSource,
    "Product202309GetProductResponseDataSkusIdentifierCode": GetProductResponseDataSkusIdentifierCode_1.Product202309GetProductResponseDataSkusIdentifierCode,
    "Product202309GetProductResponseDataSkusInventory": GetProductResponseDataSkusInventory_1.Product202309GetProductResponseDataSkusInventory,
    "Product202309GetProductResponseDataSkusListPrice": GetProductResponseDataSkusListPrice_1.Product202309GetProductResponseDataSkusListPrice,
    "Product202309GetProductResponseDataSkusPreSale": GetProductResponseDataSkusPreSale_1.Product202309GetProductResponseDataSkusPreSale,
    "Product202309GetProductResponseDataSkusPreSaleFulfillmentType": GetProductResponseDataSkusPreSaleFulfillmentType_1.Product202309GetProductResponseDataSkusPreSaleFulfillmentType,
    "Product202309GetProductResponseDataSkusPrice": GetProductResponseDataSkusPrice_1.Product202309GetProductResponseDataSkusPrice,
    "Product202309GetProductResponseDataSkusSalesAttributes": GetProductResponseDataSkusSalesAttributes_1.Product202309GetProductResponseDataSkusSalesAttributes,
    "Product202309GetProductResponseDataSkusSalesAttributesSkuImg": GetProductResponseDataSkusSalesAttributesSkuImg_1.Product202309GetProductResponseDataSkusSalesAttributesSkuImg,
    "Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages": GetProductResponseDataSkusSalesAttributesSupplementarySkuImages_1.Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages,
    "Product202309GetProductResponseDataVideo": GetProductResponseDataVideo_1.Product202309GetProductResponseDataVideo,
    "Product202309InventorySearchRequestBody": InventorySearchRequestBody_1.Product202309InventorySearchRequestBody,
    "Product202309InventorySearchResponse": InventorySearchResponse_1.Product202309InventorySearchResponse,
    "Product202309InventorySearchResponseData": InventorySearchResponseData_1.Product202309InventorySearchResponseData,
    "Product202309InventorySearchResponseDataInventory": InventorySearchResponseDataInventory_1.Product202309InventorySearchResponseDataInventory,
    "Product202309InventorySearchResponseDataInventorySkus": InventorySearchResponseDataInventorySkus_1.Product202309InventorySearchResponseDataInventorySkus,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory,
    "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory": InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory_1.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory,
    "Product202309InventorySearchResponseDataInventorySkusWarehouseInventory": InventorySearchResponseDataInventorySkusWarehouseInventory_1.Product202309InventorySearchResponseDataInventorySkusWarehouseInventory,
    "Product202309PartialEditProductRequestBody": PartialEditProductRequestBody_1.Product202309PartialEditProductRequestBody,
    "Product202309PartialEditProductRequestBodyCertifications": PartialEditProductRequestBodyCertifications_1.Product202309PartialEditProductRequestBodyCertifications,
    "Product202309PartialEditProductRequestBodyCertificationsFiles": PartialEditProductRequestBodyCertificationsFiles_1.Product202309PartialEditProductRequestBodyCertificationsFiles,
    "Product202309PartialEditProductRequestBodyCertificationsImages": PartialEditProductRequestBodyCertificationsImages_1.Product202309PartialEditProductRequestBodyCertificationsImages,
    "Product202309PartialEditProductRequestBodyMainImages": PartialEditProductRequestBodyMainImages_1.Product202309PartialEditProductRequestBodyMainImages,
    "Product202309PartialEditProductRequestBodyPackageDimensions": PartialEditProductRequestBodyPackageDimensions_1.Product202309PartialEditProductRequestBodyPackageDimensions,
    "Product202309PartialEditProductRequestBodyPackageWeight": PartialEditProductRequestBodyPackageWeight_1.Product202309PartialEditProductRequestBodyPackageWeight,
    "Product202309PartialEditProductRequestBodyProductAttributes": PartialEditProductRequestBodyProductAttributes_1.Product202309PartialEditProductRequestBodyProductAttributes,
    "Product202309PartialEditProductRequestBodyProductAttributesValues": PartialEditProductRequestBodyProductAttributesValues_1.Product202309PartialEditProductRequestBodyProductAttributesValues,
    "Product202309PartialEditProductRequestBodySizeChart": PartialEditProductRequestBodySizeChart_1.Product202309PartialEditProductRequestBodySizeChart,
    "Product202309PartialEditProductRequestBodySizeChartImage": PartialEditProductRequestBodySizeChartImage_1.Product202309PartialEditProductRequestBodySizeChartImage,
    "Product202309PartialEditProductRequestBodySizeChartTemplate": PartialEditProductRequestBodySizeChartTemplate_1.Product202309PartialEditProductRequestBodySizeChartTemplate,
    "Product202309PartialEditProductRequestBodySkus": PartialEditProductRequestBodySkus_1.Product202309PartialEditProductRequestBodySkus,
    "Product202309PartialEditProductRequestBodySkusExternalListPrices": PartialEditProductRequestBodySkusExternalListPrices_1.Product202309PartialEditProductRequestBodySkusExternalListPrices,
    "Product202309PartialEditProductRequestBodySkusIdentifierCode": PartialEditProductRequestBodySkusIdentifierCode_1.Product202309PartialEditProductRequestBodySkusIdentifierCode,
    "Product202309PartialEditProductRequestBodySkusInventory": PartialEditProductRequestBodySkusInventory_1.Product202309PartialEditProductRequestBodySkusInventory,
    "Product202309PartialEditProductRequestBodySkusListPrice": PartialEditProductRequestBodySkusListPrice_1.Product202309PartialEditProductRequestBodySkusListPrice,
    "Product202309PartialEditProductRequestBodySkusPreSale": PartialEditProductRequestBodySkusPreSale_1.Product202309PartialEditProductRequestBodySkusPreSale,
    "Product202309PartialEditProductRequestBodySkusPreSaleFulfillmentType": PartialEditProductRequestBodySkusPreSaleFulfillmentType_1.Product202309PartialEditProductRequestBodySkusPreSaleFulfillmentType,
    "Product202309PartialEditProductRequestBodySkusPrice": PartialEditProductRequestBodySkusPrice_1.Product202309PartialEditProductRequestBodySkusPrice,
    "Product202309PartialEditProductRequestBodySkusSalesAttributes": PartialEditProductRequestBodySkusSalesAttributes_1.Product202309PartialEditProductRequestBodySkusSalesAttributes,
    "Product202309PartialEditProductRequestBodySkusSalesAttributesSkuImg": PartialEditProductRequestBodySkusSalesAttributesSkuImg_1.Product202309PartialEditProductRequestBodySkusSalesAttributesSkuImg,
    "Product202309PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages": PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages_1.Product202309PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages,
    "Product202309PartialEditProductRequestBodyVideo": PartialEditProductRequestBodyVideo_1.Product202309PartialEditProductRequestBodyVideo,
    "Product202309PartialEditProductResponse": PartialEditProductResponse_1.Product202309PartialEditProductResponse,
    "Product202309PartialEditProductResponseData": PartialEditProductResponseData_1.Product202309PartialEditProductResponseData,
    "Product202309PartialEditProductResponseDataAudit": PartialEditProductResponseDataAudit_1.Product202309PartialEditProductResponseDataAudit,
    "Product202309PartialEditProductResponseDataSkus": PartialEditProductResponseDataSkus_1.Product202309PartialEditProductResponseDataSkus,
    "Product202309PartialEditProductResponseDataSkusSalesAttributes": PartialEditProductResponseDataSkusSalesAttributes_1.Product202309PartialEditProductResponseDataSkusSalesAttributes,
    "Product202309PublishGlobalProductRequestBody": PublishGlobalProductRequestBody_1.Product202309PublishGlobalProductRequestBody,
    "Product202309PublishGlobalProductRequestBodyPublishTarget": PublishGlobalProductRequestBodyPublishTarget_1.Product202309PublishGlobalProductRequestBodyPublishTarget,
    "Product202309PublishGlobalProductRequestBodyPublishTargetSkus": PublishGlobalProductRequestBodyPublishTargetSkus_1.Product202309PublishGlobalProductRequestBodyPublishTargetSkus,
    "Product202309PublishGlobalProductRequestBodyPublishTargetSkusInventory": PublishGlobalProductRequestBodyPublishTargetSkusInventory_1.Product202309PublishGlobalProductRequestBodyPublishTargetSkusInventory,
    "Product202309PublishGlobalProductRequestBodyPublishTargetSkusPrice": PublishGlobalProductRequestBodyPublishTargetSkusPrice_1.Product202309PublishGlobalProductRequestBodyPublishTargetSkusPrice,
    "Product202309PublishGlobalProductResponse": PublishGlobalProductResponse_1.Product202309PublishGlobalProductResponse,
    "Product202309PublishGlobalProductResponseData": PublishGlobalProductResponseData_1.Product202309PublishGlobalProductResponseData,
    "Product202309PublishGlobalProductResponseDataProducts": PublishGlobalProductResponseDataProducts_1.Product202309PublishGlobalProductResponseDataProducts,
    "Product202309PublishGlobalProductResponseDataProductsSkus": PublishGlobalProductResponseDataProductsSkus_1.Product202309PublishGlobalProductResponseDataProductsSkus,
    "Product202309PublishGlobalProductResponseDataProductsSkusSaleAttributes": PublishGlobalProductResponseDataProductsSkusSaleAttributes_1.Product202309PublishGlobalProductResponseDataProductsSkusSaleAttributes,
    "Product202309PublishGlobalProductResponseDataPublishResult": PublishGlobalProductResponseDataPublishResult_1.Product202309PublishGlobalProductResponseDataPublishResult,
    "Product202309PublishGlobalProductResponseDataPublishResultFailReasons": PublishGlobalProductResponseDataPublishResultFailReasons_1.Product202309PublishGlobalProductResponseDataPublishResultFailReasons,
    "Product202309RecommendCategoryRequestBody": RecommendCategoryRequestBody_1.Product202309RecommendCategoryRequestBody,
    "Product202309RecommendCategoryRequestBodyImages": RecommendCategoryRequestBodyImages_1.Product202309RecommendCategoryRequestBodyImages,
    "Product202309RecommendCategoryResponse": RecommendCategoryResponse_1.Product202309RecommendCategoryResponse,
    "Product202309RecommendCategoryResponseData": RecommendCategoryResponseData_1.Product202309RecommendCategoryResponseData,
    "Product202309RecommendCategoryResponseDataCategories": RecommendCategoryResponseDataCategories_1.Product202309RecommendCategoryResponseDataCategories,
    "Product202309RecommendGlobalCategoriesRequestBody": RecommendGlobalCategoriesRequestBody_1.Product202309RecommendGlobalCategoriesRequestBody,
    "Product202309RecommendGlobalCategoriesRequestBodyImages": RecommendGlobalCategoriesRequestBodyImages_1.Product202309RecommendGlobalCategoriesRequestBodyImages,
    "Product202309RecommendGlobalCategoriesResponse": RecommendGlobalCategoriesResponse_1.Product202309RecommendGlobalCategoriesResponse,
    "Product202309RecommendGlobalCategoriesResponseData": RecommendGlobalCategoriesResponseData_1.Product202309RecommendGlobalCategoriesResponseData,
    "Product202309RecommendGlobalCategoriesResponseDataCategories": RecommendGlobalCategoriesResponseDataCategories_1.Product202309RecommendGlobalCategoriesResponseDataCategories,
    "Product202309RecoverProductsRequestBody": RecoverProductsRequestBody_1.Product202309RecoverProductsRequestBody,
    "Product202309RecoverProductsResponse": RecoverProductsResponse_1.Product202309RecoverProductsResponse,
    "Product202309RecoverProductsResponseData": RecoverProductsResponseData_1.Product202309RecoverProductsResponseData,
    "Product202309RecoverProductsResponseDataErrors": RecoverProductsResponseDataErrors_1.Product202309RecoverProductsResponseDataErrors,
    "Product202309RecoverProductsResponseDataErrorsDetail": RecoverProductsResponseDataErrorsDetail_1.Product202309RecoverProductsResponseDataErrorsDetail,
    "Product202309SearchGlobalProductsRequestBody": SearchGlobalProductsRequestBody_1.Product202309SearchGlobalProductsRequestBody,
    "Product202309SearchGlobalProductsResponse": SearchGlobalProductsResponse_1.Product202309SearchGlobalProductsResponse,
    "Product202309SearchGlobalProductsResponseData": SearchGlobalProductsResponseData_1.Product202309SearchGlobalProductsResponseData,
    "Product202309SearchGlobalProductsResponseDataGlobalProducts": SearchGlobalProductsResponseDataGlobalProducts_1.Product202309SearchGlobalProductsResponseDataGlobalProducts,
    "Product202309SearchGlobalProductsResponseDataGlobalProductsSkus": SearchGlobalProductsResponseDataGlobalProductsSkus_1.Product202309SearchGlobalProductsResponseDataGlobalProductsSkus,
    "Product202309SearchProductsRequestBody": SearchProductsRequestBody_1.Product202309SearchProductsRequestBody,
    "Product202309SearchProductsResponse": SearchProductsResponse_1.Product202309SearchProductsResponse,
    "Product202309SearchProductsResponseData": SearchProductsResponseData_1.Product202309SearchProductsResponseData,
    "Product202309SearchProductsResponseDataProducts": SearchProductsResponseDataProducts_1.Product202309SearchProductsResponseDataProducts,
    "Product202309SearchProductsResponseDataProductsRecommendedCategories": SearchProductsResponseDataProductsRecommendedCategories_1.Product202309SearchProductsResponseDataProductsRecommendedCategories,
    "Product202309SearchProductsResponseDataProductsSkus": SearchProductsResponseDataProductsSkus_1.Product202309SearchProductsResponseDataProductsSkus,
    "Product202309SearchProductsResponseDataProductsSkusInventory": SearchProductsResponseDataProductsSkusInventory_1.Product202309SearchProductsResponseDataProductsSkusInventory,
    "Product202309SearchProductsResponseDataProductsSkusPrice": SearchProductsResponseDataProductsSkusPrice_1.Product202309SearchProductsResponseDataProductsSkusPrice,
    "Product202309UpdateGlobalInventoryRequestBody": UpdateGlobalInventoryRequestBody_1.Product202309UpdateGlobalInventoryRequestBody,
    "Product202309UpdateGlobalInventoryRequestBodyGlobalSkus": UpdateGlobalInventoryRequestBodyGlobalSkus_1.Product202309UpdateGlobalInventoryRequestBodyGlobalSkus,
    "Product202309UpdateGlobalInventoryRequestBodyGlobalSkusInventory": UpdateGlobalInventoryRequestBodyGlobalSkusInventory_1.Product202309UpdateGlobalInventoryRequestBodyGlobalSkusInventory,
    "Product202309UpdateGlobalInventoryResponse": UpdateGlobalInventoryResponse_1.Product202309UpdateGlobalInventoryResponse,
    "Product202309UpdateInventoryRequestBody": UpdateInventoryRequestBody_1.Product202309UpdateInventoryRequestBody,
    "Product202309UpdateInventoryRequestBodySkus": UpdateInventoryRequestBodySkus_1.Product202309UpdateInventoryRequestBodySkus,
    "Product202309UpdateInventoryRequestBodySkusInventory": UpdateInventoryRequestBodySkusInventory_1.Product202309UpdateInventoryRequestBodySkusInventory,
    "Product202309UpdateInventoryResponse": UpdateInventoryResponse_1.Product202309UpdateInventoryResponse,
    "Product202309UpdateInventoryResponseData": UpdateInventoryResponseData_1.Product202309UpdateInventoryResponseData,
    "Product202309UpdateInventoryResponseDataErrors": UpdateInventoryResponseDataErrors_1.Product202309UpdateInventoryResponseDataErrors,
    "Product202309UpdateInventoryResponseDataErrorsDetail": UpdateInventoryResponseDataErrorsDetail_1.Product202309UpdateInventoryResponseDataErrorsDetail,
    "Product202309UpdateInventoryResponseDataErrorsDetailExtraErrors": UpdateInventoryResponseDataErrorsDetailExtraErrors_1.Product202309UpdateInventoryResponseDataErrorsDetailExtraErrors,
    "Product202309UpdatePriceRequestBody": UpdatePriceRequestBody_1.Product202309UpdatePriceRequestBody,
    "Product202309UpdatePriceRequestBodySkus": UpdatePriceRequestBodySkus_1.Product202309UpdatePriceRequestBodySkus,
    "Product202309UpdatePriceRequestBodySkusExternalListPrices": UpdatePriceRequestBodySkusExternalListPrices_1.Product202309UpdatePriceRequestBodySkusExternalListPrices,
    "Product202309UpdatePriceRequestBodySkusListPrice": UpdatePriceRequestBodySkusListPrice_1.Product202309UpdatePriceRequestBodySkusListPrice,
    "Product202309UpdatePriceRequestBodySkusPrice": UpdatePriceRequestBodySkusPrice_1.Product202309UpdatePriceRequestBodySkusPrice,
    "Product202309UpdatePriceResponse": UpdatePriceResponse_1.Product202309UpdatePriceResponse,
    "Product202309UploadProductFileResponse": UploadProductFileResponse_1.Product202309UploadProductFileResponse,
    "Product202309UploadProductFileResponseData": UploadProductFileResponseData_1.Product202309UploadProductFileResponseData,
    "Product202309UploadProductImageResponse": UploadProductImageResponse_1.Product202309UploadProductImageResponse,
    "Product202309UploadProductImageResponseData": UploadProductImageResponseData_1.Product202309UploadProductImageResponseData,
    "Product202312CheckListingPrerequisitesResponse": CheckListingPrerequisitesResponse_2.Product202312CheckListingPrerequisitesResponse,
    "Product202312CheckListingPrerequisitesResponseData": CheckListingPrerequisitesResponseData_2.Product202312CheckListingPrerequisitesResponseData,
    "Product202312CheckListingPrerequisitesResponseDataCheckResults": CheckListingPrerequisitesResponseDataCheckResults_1.Product202312CheckListingPrerequisitesResponseDataCheckResults,
    "Product202312SearchGlobalProductsRequestBody": SearchGlobalProductsRequestBody_2.Product202312SearchGlobalProductsRequestBody,
    "Product202312SearchGlobalProductsResponse": SearchGlobalProductsResponse_2.Product202312SearchGlobalProductsResponse,
    "Product202312SearchGlobalProductsResponseData": SearchGlobalProductsResponseData_2.Product202312SearchGlobalProductsResponseData,
    "Product202312SearchGlobalProductsResponseDataGlobalProducts": SearchGlobalProductsResponseDataGlobalProducts_2.Product202312SearchGlobalProductsResponseDataGlobalProducts,
    "Product202312SearchGlobalProductsResponseDataGlobalProductsSkus": SearchGlobalProductsResponseDataGlobalProductsSkus_2.Product202312SearchGlobalProductsResponseDataGlobalProductsSkus,
    "Product202312SearchProductsRequestBody": SearchProductsRequestBody_2.Product202312SearchProductsRequestBody,
    "Product202312SearchProductsResponse": SearchProductsResponse_2.Product202312SearchProductsResponse,
    "Product202312SearchProductsResponseData": SearchProductsResponseData_2.Product202312SearchProductsResponseData,
    "Product202312SearchProductsResponseDataProducts": SearchProductsResponseDataProducts_2.Product202312SearchProductsResponseDataProducts,
    "Product202312SearchProductsResponseDataProductsAudit": SearchProductsResponseDataProductsAudit_1.Product202312SearchProductsResponseDataProductsAudit,
    "Product202312SearchProductsResponseDataProductsIntegratedPlatformStatuses": SearchProductsResponseDataProductsIntegratedPlatformStatuses_1.Product202312SearchProductsResponseDataProductsIntegratedPlatformStatuses,
    "Product202312SearchProductsResponseDataProductsRecommendedCategories": SearchProductsResponseDataProductsRecommendedCategories_2.Product202312SearchProductsResponseDataProductsRecommendedCategories,
    "Product202312SearchProductsResponseDataProductsSkus": SearchProductsResponseDataProductsSkus_2.Product202312SearchProductsResponseDataProductsSkus,
    "Product202312SearchProductsResponseDataProductsSkusExternalListPrices": SearchProductsResponseDataProductsSkusExternalListPrices_1.Product202312SearchProductsResponseDataProductsSkusExternalListPrices,
    "Product202312SearchProductsResponseDataProductsSkusInventory": SearchProductsResponseDataProductsSkusInventory_2.Product202312SearchProductsResponseDataProductsSkusInventory,
    "Product202312SearchProductsResponseDataProductsSkusListPrice": SearchProductsResponseDataProductsSkusListPrice_1.Product202312SearchProductsResponseDataProductsSkusListPrice,
    "Product202312SearchProductsResponseDataProductsSkusPrice": SearchProductsResponseDataProductsSkusPrice_2.Product202312SearchProductsResponseDataProductsSkusPrice,
    "Product202401ListingSchemasResponse": ListingSchemasResponse_1.Product202401ListingSchemasResponse,
    "Product202401ListingSchemasResponseData": ListingSchemasResponseData_1.Product202401ListingSchemasResponseData,
    "Product202401ListingSchemasResponseDataErrors": ListingSchemasResponseDataErrors_1.Product202401ListingSchemasResponseDataErrors,
    "Product202401ListingSchemasResponseDataErrorsDetail": ListingSchemasResponseDataErrorsDetail_1.Product202401ListingSchemasResponseDataErrorsDetail,
    "Product202401ListingSchemasResponseDataListingSchemas": ListingSchemasResponseDataListingSchemas_1.Product202401ListingSchemasResponseDataListingSchemas,
    "Product202401ListingSchemasResponseDataListingSchemasFileds": ListingSchemasResponseDataListingSchemasFileds_1.Product202401ListingSchemasResponseDataListingSchemasFileds,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues": ListingSchemasResponseDataListingSchemasFiledsComplexValues_1.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions": ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions_1.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules": ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules_1.Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsOptions": ListingSchemasResponseDataListingSchemasFiledsOptions_1.Product202401ListingSchemasResponseDataListingSchemasFiledsOptions,
    "Product202401ListingSchemasResponseDataListingSchemasFiledsRules": ListingSchemasResponseDataListingSchemasFiledsRules_1.Product202401ListingSchemasResponseDataListingSchemasFiledsRules,
    "Product202404OptimizedImagesRequestBody": OptimizedImagesRequestBody_1.Product202404OptimizedImagesRequestBody,
    "Product202404OptimizedImagesRequestBodyImages": OptimizedImagesRequestBodyImages_1.Product202404OptimizedImagesRequestBodyImages,
    "Product202404OptimizedImagesResponse": OptimizedImagesResponse_1.Product202404OptimizedImagesResponse,
    "Product202404OptimizedImagesResponseData": OptimizedImagesResponseData_1.Product202404OptimizedImagesResponseData,
    "Product202404OptimizedImagesResponseDataImages": OptimizedImagesResponseDataImages_1.Product202404OptimizedImagesResponseDataImages,
    "Product202405GetProductsSEOWordsResponse": GetProductsSEOWordsResponse_1.Product202405GetProductsSEOWordsResponse,
    "Product202405GetProductsSEOWordsResponseData": GetProductsSEOWordsResponseData_1.Product202405GetProductsSEOWordsResponseData,
    "Product202405GetProductsSEOWordsResponseDataProducts": GetProductsSEOWordsResponseDataProducts_1.Product202405GetProductsSEOWordsResponseDataProducts,
    "Product202405GetProductsSEOWordsResponseDataProductsSeoWords": GetProductsSEOWordsResponseDataProductsSeoWords_1.Product202405GetProductsSEOWordsResponseDataProductsSeoWords,
    "Product202405GetRecommendedProductTitleAndDescriptionResponse": GetRecommendedProductTitleAndDescriptionResponse_1.Product202405GetRecommendedProductTitleAndDescriptionResponse,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseData": GetRecommendedProductTitleAndDescriptionResponseData_1.Product202405GetRecommendedProductTitleAndDescriptionResponseData,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts": GetRecommendedProductTitleAndDescriptionResponseDataProducts_1.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProducts,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions": GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions_1.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestions,
    "Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems": GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems_1.Product202405GetRecommendedProductTitleAndDescriptionResponseDataProductsSuggestionsItems,
    "Product202405ProductInformationIssueDiagnosisResponse": ProductInformationIssueDiagnosisResponse_1.Product202405ProductInformationIssueDiagnosisResponse,
    "Product202405ProductInformationIssueDiagnosisResponseData": ProductInformationIssueDiagnosisResponseData_1.Product202405ProductInformationIssueDiagnosisResponseData,
    "Product202405ProductInformationIssueDiagnosisResponseDataProducts": ProductInformationIssueDiagnosisResponseDataProducts_1.Product202405ProductInformationIssueDiagnosisResponseDataProducts,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses": ProductInformationIssueDiagnosisResponseDataProductsDiagnoses_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesDiagnosisResults,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestion,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionImages,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSeoWords,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts": ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnosesSuggestionSmartTexts,
    "Product202405ProductInformationIssueDiagnosisResponseDataProductsListingQuality": ProductInformationIssueDiagnosisResponseDataProductsListingQuality_1.Product202405ProductInformationIssueDiagnosisResponseDataProductsListingQuality,
    "Product202407CreateCategoryUpgradeTaskResponse": CreateCategoryUpgradeTaskResponse_1.Product202407CreateCategoryUpgradeTaskResponse,
    "Product202407ListingSchemasResponse": ListingSchemasResponse_2.Product202407ListingSchemasResponse,
    "Product202407ListingSchemasResponseData": ListingSchemasResponseData_2.Product202407ListingSchemasResponseData,
    "Product202407ListingSchemasResponseDataErrors": ListingSchemasResponseDataErrors_2.Product202407ListingSchemasResponseDataErrors,
    "Product202407ListingSchemasResponseDataErrorsDetail": ListingSchemasResponseDataErrorsDetail_2.Product202407ListingSchemasResponseDataErrorsDetail,
    "Product202407ListingSchemasResponseDataListingSchemas": ListingSchemasResponseDataListingSchemas_2.Product202407ListingSchemasResponseDataListingSchemas,
    "Product202407ListingSchemasResponseDataListingSchemasFields": ListingSchemasResponseDataListingSchemasFields_1.Product202407ListingSchemasResponseDataListingSchemasFields,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues": ListingSchemasResponseDataListingSchemasFieldsComplexValues_1.Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions": ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions_1.Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules": ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules_1.Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsOptions": ListingSchemasResponseDataListingSchemasFieldsOptions_1.Product202407ListingSchemasResponseDataListingSchemasFieldsOptions,
    "Product202407ListingSchemasResponseDataListingSchemasFieldsRules": ListingSchemasResponseDataListingSchemasFieldsRules_1.Product202407ListingSchemasResponseDataListingSchemasFieldsRules,
    "Product202407SearchSizeChartsRequestBody": SearchSizeChartsRequestBody_1.Product202407SearchSizeChartsRequestBody,
    "Product202407SearchSizeChartsResponse": SearchSizeChartsResponse_1.Product202407SearchSizeChartsResponse,
    "Product202407SearchSizeChartsResponseData": SearchSizeChartsResponseData_1.Product202407SearchSizeChartsResponseData,
    "Product202407SearchSizeChartsResponseDataSizeChart": SearchSizeChartsResponseDataSizeChart_1.Product202407SearchSizeChartsResponseDataSizeChart,
    "Product202407SearchSizeChartsResponseDataSizeChartImages": SearchSizeChartsResponseDataSizeChartImages_1.Product202407SearchSizeChartsResponseDataSizeChartImages,
    "Product202409CreateManufacturerRequestBody": CreateManufacturerRequestBody_1.Product202409CreateManufacturerRequestBody,
    "Product202409CreateManufacturerRequestBodyPhoneNumber": CreateManufacturerRequestBodyPhoneNumber_1.Product202409CreateManufacturerRequestBodyPhoneNumber,
    "Product202409CreateManufacturerResponse": CreateManufacturerResponse_1.Product202409CreateManufacturerResponse,
    "Product202409CreateManufacturerResponseData": CreateManufacturerResponseData_1.Product202409CreateManufacturerResponseData,
    "Product202409CreateResponsiblePersonRequestBody": CreateResponsiblePersonRequestBody_1.Product202409CreateResponsiblePersonRequestBody,
    "Product202409CreateResponsiblePersonRequestBodyAddress": CreateResponsiblePersonRequestBodyAddress_1.Product202409CreateResponsiblePersonRequestBodyAddress,
    "Product202409CreateResponsiblePersonRequestBodyPhoneNumber": CreateResponsiblePersonRequestBodyPhoneNumber_1.Product202409CreateResponsiblePersonRequestBodyPhoneNumber,
    "Product202409CreateResponsiblePersonResponse": CreateResponsiblePersonResponse_1.Product202409CreateResponsiblePersonResponse,
    "Product202409CreateResponsiblePersonResponseData": CreateResponsiblePersonResponseData_1.Product202409CreateResponsiblePersonResponseData,
    "Product202409PartialEditManufacturerRequestBody": PartialEditManufacturerRequestBody_1.Product202409PartialEditManufacturerRequestBody,
    "Product202409PartialEditManufacturerRequestBodyPhoneNumber": PartialEditManufacturerRequestBodyPhoneNumber_1.Product202409PartialEditManufacturerRequestBodyPhoneNumber,
    "Product202409PartialEditManufacturerResponse": PartialEditManufacturerResponse_1.Product202409PartialEditManufacturerResponse,
    "Product202409PartialEditResponsiblePersonRequestBody": PartialEditResponsiblePersonRequestBody_1.Product202409PartialEditResponsiblePersonRequestBody,
    "Product202409PartialEditResponsiblePersonRequestBodyAddress": PartialEditResponsiblePersonRequestBodyAddress_1.Product202409PartialEditResponsiblePersonRequestBodyAddress,
    "Product202409PartialEditResponsiblePersonRequestBodyPhoneNumber": PartialEditResponsiblePersonRequestBodyPhoneNumber_1.Product202409PartialEditResponsiblePersonRequestBodyPhoneNumber,
    "Product202409PartialEditResponsiblePersonResponse": PartialEditResponsiblePersonResponse_1.Product202409PartialEditResponsiblePersonResponse,
    "Product202409SearchManufacturersRequestBody": SearchManufacturersRequestBody_1.Product202409SearchManufacturersRequestBody,
    "Product202409SearchManufacturersResponse": SearchManufacturersResponse_1.Product202409SearchManufacturersResponse,
    "Product202409SearchManufacturersResponseData": SearchManufacturersResponseData_1.Product202409SearchManufacturersResponseData,
    "Product202409SearchManufacturersResponseDataManufacturers": SearchManufacturersResponseDataManufacturers_1.Product202409SearchManufacturersResponseDataManufacturers,
    "Product202409SearchManufacturersResponseDataManufacturersPhoneNumber": SearchManufacturersResponseDataManufacturersPhoneNumber_1.Product202409SearchManufacturersResponseDataManufacturersPhoneNumber,
    "Product202409SearchResponsiblePersonsRequestBody": SearchResponsiblePersonsRequestBody_1.Product202409SearchResponsiblePersonsRequestBody,
    "Product202409SearchResponsiblePersonsResponse": SearchResponsiblePersonsResponse_1.Product202409SearchResponsiblePersonsResponse,
    "Product202409SearchResponsiblePersonsResponseData": SearchResponsiblePersonsResponseData_1.Product202409SearchResponsiblePersonsResponseData,
    "Product202409SearchResponsiblePersonsResponseDataResponsiblePersons": SearchResponsiblePersonsResponseDataResponsiblePersons_1.Product202409SearchResponsiblePersonsResponseDataResponsiblePersons,
    "Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsAddress": SearchResponsiblePersonsResponseDataResponsiblePersonsAddress_1.Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsAddress,
    "Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber": SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber_1.Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber,
    "Product202501SearchManufacturersRequestBody": SearchManufacturersRequestBody_2.Product202501SearchManufacturersRequestBody,
    "Product202501SearchManufacturersResponse": SearchManufacturersResponse_2.Product202501SearchManufacturersResponse,
    "Product202501SearchManufacturersResponseData": SearchManufacturersResponseData_2.Product202501SearchManufacturersResponseData,
    "Product202501SearchManufacturersResponseDataManufacturers": SearchManufacturersResponseDataManufacturers_2.Product202501SearchManufacturersResponseDataManufacturers,
    "Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles": SearchManufacturersResponseDataManufacturersRegionalProfiles_1.Product202501SearchManufacturersResponseDataManufacturersRegionalProfiles,
    "Product202501SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber": SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber_1.Product202501SearchManufacturersResponseDataManufacturersRegionalProfilesPhoneNumber,
    "Product202501SearchResponsiblePersonsRequestBody": SearchResponsiblePersonsRequestBody_2.Product202501SearchResponsiblePersonsRequestBody,
    "Product202501SearchResponsiblePersonsResponse": SearchResponsiblePersonsResponse_2.Product202501SearchResponsiblePersonsResponse,
    "Product202501SearchResponsiblePersonsResponseData": SearchResponsiblePersonsResponseData_2.Product202501SearchResponsiblePersonsResponseData,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersons": SearchResponsiblePersonsResponseDataResponsiblePersons_2.Product202501SearchResponsiblePersonsResponseDataResponsiblePersons,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles": SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles_1.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress": SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress_1.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress,
    "Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber": SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber_1.Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber,
    "Product202502SearchProductsRequestBody": SearchProductsRequestBody_3.Product202502SearchProductsRequestBody,
    "Product202502SearchProductsResponse": SearchProductsResponse_3.Product202502SearchProductsResponse,
    "Product202502SearchProductsResponseData": SearchProductsResponseData_3.Product202502SearchProductsResponseData,
    "Product202502SearchProductsResponseDataProducts": SearchProductsResponseDataProducts_3.Product202502SearchProductsResponseDataProducts,
    "Product202502SearchProductsResponseDataProductsAudit": SearchProductsResponseDataProductsAudit_2.Product202502SearchProductsResponseDataProductsAudit,
    "Product202502SearchProductsResponseDataProductsIntegratedPlatformStatuses": SearchProductsResponseDataProductsIntegratedPlatformStatuses_2.Product202502SearchProductsResponseDataProductsIntegratedPlatformStatuses,
    "Product202502SearchProductsResponseDataProductsProductFamilies": SearchProductsResponseDataProductsProductFamilies_1.Product202502SearchProductsResponseDataProductsProductFamilies,
    "Product202502SearchProductsResponseDataProductsProductFamiliesProducts": SearchProductsResponseDataProductsProductFamiliesProducts_1.Product202502SearchProductsResponseDataProductsProductFamiliesProducts,
    "Product202502SearchProductsResponseDataProductsRecommendedCategories": SearchProductsResponseDataProductsRecommendedCategories_3.Product202502SearchProductsResponseDataProductsRecommendedCategories,
    "Product202502SearchProductsResponseDataProductsSkus": SearchProductsResponseDataProductsSkus_3.Product202502SearchProductsResponseDataProductsSkus,
    "Product202502SearchProductsResponseDataProductsSkusExternalListPrices": SearchProductsResponseDataProductsSkusExternalListPrices_2.Product202502SearchProductsResponseDataProductsSkusExternalListPrices,
    "Product202502SearchProductsResponseDataProductsSkusInventory": SearchProductsResponseDataProductsSkusInventory_3.Product202502SearchProductsResponseDataProductsSkusInventory,
    "Product202502SearchProductsResponseDataProductsSkusListPrice": SearchProductsResponseDataProductsSkusListPrice_2.Product202502SearchProductsResponseDataProductsSkusListPrice,
    "Product202502SearchProductsResponseDataProductsSkusPreSale": SearchProductsResponseDataProductsSkusPreSale_1.Product202502SearchProductsResponseDataProductsSkusPreSale,
    "Product202502SearchProductsResponseDataProductsSkusPreSaleFulfillmentType": SearchProductsResponseDataProductsSkusPreSaleFulfillmentType_1.Product202502SearchProductsResponseDataProductsSkusPreSaleFulfillmentType,
    "Product202502SearchProductsResponseDataProductsSkusPrice": SearchProductsResponseDataProductsSkusPrice_3.Product202502SearchProductsResponseDataProductsSkusPrice,
    "Product202505CreateImageTranslationTasksRequestBody": CreateImageTranslationTasksRequestBody_1.Product202505CreateImageTranslationTasksRequestBody,
    "Product202505CreateImageTranslationTasksRequestBodyImages": CreateImageTranslationTasksRequestBodyImages_1.Product202505CreateImageTranslationTasksRequestBodyImages,
    "Product202505CreateImageTranslationTasksResponse": CreateImageTranslationTasksResponse_1.Product202505CreateImageTranslationTasksResponse,
    "Product202505CreateImageTranslationTasksResponseData": CreateImageTranslationTasksResponseData_1.Product202505CreateImageTranslationTasksResponseData,
    "Product202505CreateImageTranslationTasksResponseDataTranslationTasks": CreateImageTranslationTasksResponseDataTranslationTasks_1.Product202505CreateImageTranslationTasksResponseDataTranslationTasks,
    "Product202506GetImageTranslationTasksResponse": GetImageTranslationTasksResponse_1.Product202506GetImageTranslationTasksResponse,
    "Product202506GetImageTranslationTasksResponseData": GetImageTranslationTasksResponseData_1.Product202506GetImageTranslationTasksResponseData,
    "Product202506GetImageTranslationTasksResponseDataTranslationTasks": GetImageTranslationTasksResponseDataTranslationTasks_1.Product202506GetImageTranslationTasksResponseDataTranslationTasks,
    "Product202506GetImageTranslationTasksResponseDataTranslationTasksOriginalImage": GetImageTranslationTasksResponseDataTranslationTasksOriginalImage_1.Product202506GetImageTranslationTasksResponseDataTranslationTasksOriginalImage,
    "Product202506GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage": GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage_1.Product202506GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage,
    "Promotion202309CreateActivityRequestBody": CreateActivityRequestBody_1.Promotion202309CreateActivityRequestBody,
    "Promotion202309CreateActivityRequestBodyDiscount": CreateActivityRequestBodyDiscount_1.Promotion202309CreateActivityRequestBodyDiscount,
    "Promotion202309CreateActivityRequestBodyDiscountBmsmDiscount": CreateActivityRequestBodyDiscountBmsmDiscount_1.Promotion202309CreateActivityRequestBodyDiscountBmsmDiscount,
    "Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails": CreateActivityRequestBodyDiscountBmsmDiscountDetails_1.Promotion202309CreateActivityRequestBodyDiscountBmsmDiscountDetails,
    "Promotion202309CreateActivityRequestBodyDiscountShippingDiscount": CreateActivityRequestBodyDiscountShippingDiscount_1.Promotion202309CreateActivityRequestBodyDiscountShippingDiscount,
    "Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope": CreateActivityRequestBodyDiscountShippingDiscountAreaScope_1.Promotion202309CreateActivityRequestBodyDiscountShippingDiscountAreaScope,
    "Promotion202309CreateActivityRequestBodyParticipationLimit": CreateActivityRequestBodyParticipationLimit_1.Promotion202309CreateActivityRequestBodyParticipationLimit,
    "Promotion202309CreateActivityResponse": CreateActivityResponse_1.Promotion202309CreateActivityResponse,
    "Promotion202309CreateActivityResponseData": CreateActivityResponseData_1.Promotion202309CreateActivityResponseData,
    "Promotion202309DeactivateActivityResponse": DeactivateActivityResponse_1.Promotion202309DeactivateActivityResponse,
    "Promotion202309DeactivateActivityResponseData": DeactivateActivityResponseData_1.Promotion202309DeactivateActivityResponseData,
    "Promotion202309GetActivityResponse": GetActivityResponse_1.Promotion202309GetActivityResponse,
    "Promotion202309GetActivityResponseData": GetActivityResponseData_1.Promotion202309GetActivityResponseData,
    "Promotion202309GetActivityResponseDataDiscount": GetActivityResponseDataDiscount_1.Promotion202309GetActivityResponseDataDiscount,
    "Promotion202309GetActivityResponseDataDiscountBmsmDiscount": GetActivityResponseDataDiscountBmsmDiscount_1.Promotion202309GetActivityResponseDataDiscountBmsmDiscount,
    "Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails": GetActivityResponseDataDiscountBmsmDiscountDetails_1.Promotion202309GetActivityResponseDataDiscountBmsmDiscountDetails,
    "Promotion202309GetActivityResponseDataDiscountShippingDiscount": GetActivityResponseDataDiscountShippingDiscount_1.Promotion202309GetActivityResponseDataDiscountShippingDiscount,
    "Promotion202309GetActivityResponseDataDiscountShippingDiscountAreaScope": GetActivityResponseDataDiscountShippingDiscountAreaScope_1.Promotion202309GetActivityResponseDataDiscountShippingDiscountAreaScope,
    "Promotion202309GetActivityResponseDataParticipationLimit": GetActivityResponseDataParticipationLimit_1.Promotion202309GetActivityResponseDataParticipationLimit,
    "Promotion202309GetActivityResponseDataProducts": GetActivityResponseDataProducts_1.Promotion202309GetActivityResponseDataProducts,
    "Promotion202309GetActivityResponseDataProductsActivityPrice": GetActivityResponseDataProductsActivityPrice_1.Promotion202309GetActivityResponseDataProductsActivityPrice,
    "Promotion202309GetActivityResponseDataProductsSkus": GetActivityResponseDataProductsSkus_1.Promotion202309GetActivityResponseDataProductsSkus,
    "Promotion202309GetActivityResponseDataProductsSkusActivityPrice": GetActivityResponseDataProductsSkusActivityPrice_1.Promotion202309GetActivityResponseDataProductsSkusActivityPrice,
    "Promotion202309RemoveActivityProductRequestBody": RemoveActivityProductRequestBody_1.Promotion202309RemoveActivityProductRequestBody,
    "Promotion202309RemoveActivityProductResponse": RemoveActivityProductResponse_1.Promotion202309RemoveActivityProductResponse,
    "Promotion202309RemoveActivityProductResponseData": RemoveActivityProductResponseData_1.Promotion202309RemoveActivityProductResponseData,
    "Promotion202309SearchActivitiesRequestBody": SearchActivitiesRequestBody_1.Promotion202309SearchActivitiesRequestBody,
    "Promotion202309SearchActivitiesResponse": SearchActivitiesResponse_1.Promotion202309SearchActivitiesResponse,
    "Promotion202309SearchActivitiesResponseData": SearchActivitiesResponseData_1.Promotion202309SearchActivitiesResponseData,
    "Promotion202309SearchActivitiesResponseDataActivities": SearchActivitiesResponseDataActivities_1.Promotion202309SearchActivitiesResponseDataActivities,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscount": SearchActivitiesResponseDataActivitiesDiscount_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscount,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount": SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails": SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscountDetails,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount": SearchActivitiesResponseDataActivitiesDiscountShippingDiscount_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount,
    "Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope": SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope_1.Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscountAreaScope,
    "Promotion202309SearchActivitiesResponseDataActivitiesParticipationLimit": SearchActivitiesResponseDataActivitiesParticipationLimit_1.Promotion202309SearchActivitiesResponseDataActivitiesParticipationLimit,
    "Promotion202309UpdateActivityProductRequestBody": UpdateActivityProductRequestBody_1.Promotion202309UpdateActivityProductRequestBody,
    "Promotion202309UpdateActivityProductRequestBodyProducts": UpdateActivityProductRequestBodyProducts_1.Promotion202309UpdateActivityProductRequestBodyProducts,
    "Promotion202309UpdateActivityProductRequestBodyProductsSkus": UpdateActivityProductRequestBodyProductsSkus_1.Promotion202309UpdateActivityProductRequestBodyProductsSkus,
    "Promotion202309UpdateActivityProductResponse": UpdateActivityProductResponse_1.Promotion202309UpdateActivityProductResponse,
    "Promotion202309UpdateActivityProductResponseData": UpdateActivityProductResponseData_1.Promotion202309UpdateActivityProductResponseData,
    "Promotion202309UpdateActivityRequestBody": UpdateActivityRequestBody_1.Promotion202309UpdateActivityRequestBody,
    "Promotion202309UpdateActivityRequestBodyDiscount": UpdateActivityRequestBodyDiscount_1.Promotion202309UpdateActivityRequestBodyDiscount,
    "Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount": UpdateActivityRequestBodyDiscountBmsmDiscount_1.Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount,
    "Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails": UpdateActivityRequestBodyDiscountBmsmDiscountDetails_1.Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscountDetails,
    "Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount": UpdateActivityRequestBodyDiscountShippingDiscount_1.Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount,
    "Promotion202309UpdateActivityRequestBodyDiscountShippingDiscountAreaScope": UpdateActivityRequestBodyDiscountShippingDiscountAreaScope_1.Promotion202309UpdateActivityRequestBodyDiscountShippingDiscountAreaScope,
    "Promotion202309UpdateActivityRequestBodyParticipationLimit": UpdateActivityRequestBodyParticipationLimit_1.Promotion202309UpdateActivityRequestBodyParticipationLimit,
    "Promotion202309UpdateActivityResponse": UpdateActivityResponse_1.Promotion202309UpdateActivityResponse,
    "Promotion202309UpdateActivityResponseData": UpdateActivityResponseData_1.Promotion202309UpdateActivityResponseData,
    "Promotion202406GetCouponResponse": GetCouponResponse_1.Promotion202406GetCouponResponse,
    "Promotion202406GetCouponResponseData": GetCouponResponseData_1.Promotion202406GetCouponResponseData,
    "Promotion202406GetCouponResponseDataCoupon": GetCouponResponseDataCoupon_1.Promotion202406GetCouponResponseDataCoupon,
    "Promotion202406GetCouponResponseDataCouponClaimDuration": GetCouponResponseDataCouponClaimDuration_1.Promotion202406GetCouponResponseDataCouponClaimDuration,
    "Promotion202406GetCouponResponseDataCouponDiscount": GetCouponResponseDataCouponDiscount_1.Promotion202406GetCouponResponseDataCouponDiscount,
    "Promotion202406GetCouponResponseDataCouponDiscountMaxDiscount": GetCouponResponseDataCouponDiscountMaxDiscount_1.Promotion202406GetCouponResponseDataCouponDiscountMaxDiscount,
    "Promotion202406GetCouponResponseDataCouponDiscountReductionAmount": GetCouponResponseDataCouponDiscountReductionAmount_1.Promotion202406GetCouponResponseDataCouponDiscountReductionAmount,
    "Promotion202406GetCouponResponseDataCouponLiveTasks": GetCouponResponseDataCouponLiveTasks_1.Promotion202406GetCouponResponseDataCouponLiveTasks,
    "Promotion202406GetCouponResponseDataCouponRedemptionDuration": GetCouponResponseDataCouponRedemptionDuration_1.Promotion202406GetCouponResponseDataCouponRedemptionDuration,
    "Promotion202406GetCouponResponseDataCouponThreshold": GetCouponResponseDataCouponThreshold_1.Promotion202406GetCouponResponseDataCouponThreshold,
    "Promotion202406GetCouponResponseDataCouponThresholdMinSpend": GetCouponResponseDataCouponThresholdMinSpend_1.Promotion202406GetCouponResponseDataCouponThresholdMinSpend,
    "Promotion202406GetCouponResponseDataCouponUsageLimits": GetCouponResponseDataCouponUsageLimits_1.Promotion202406GetCouponResponseDataCouponUsageLimits,
    "Promotion202406GetCouponResponseDataCouponUsageStats": GetCouponResponseDataCouponUsageStats_1.Promotion202406GetCouponResponseDataCouponUsageStats,
    "Promotion202406SearchCouponsRequestBody": SearchCouponsRequestBody_1.Promotion202406SearchCouponsRequestBody,
    "Promotion202406SearchCouponsResponse": SearchCouponsResponse_1.Promotion202406SearchCouponsResponse,
    "Promotion202406SearchCouponsResponseData": SearchCouponsResponseData_1.Promotion202406SearchCouponsResponseData,
    "Promotion202406SearchCouponsResponseDataCoupons": SearchCouponsResponseDataCoupons_1.Promotion202406SearchCouponsResponseDataCoupons,
    "Promotion202406SearchCouponsResponseDataCouponsClaimDuration": SearchCouponsResponseDataCouponsClaimDuration_1.Promotion202406SearchCouponsResponseDataCouponsClaimDuration,
    "Promotion202406SearchCouponsResponseDataCouponsDiscount": SearchCouponsResponseDataCouponsDiscount_1.Promotion202406SearchCouponsResponseDataCouponsDiscount,
    "Promotion202406SearchCouponsResponseDataCouponsDiscountMaxDiscount": SearchCouponsResponseDataCouponsDiscountMaxDiscount_1.Promotion202406SearchCouponsResponseDataCouponsDiscountMaxDiscount,
    "Promotion202406SearchCouponsResponseDataCouponsDiscountReductionAmount": SearchCouponsResponseDataCouponsDiscountReductionAmount_1.Promotion202406SearchCouponsResponseDataCouponsDiscountReductionAmount,
    "Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration": SearchCouponsResponseDataCouponsRedemptionDuration_1.Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration,
    "Promotion202406SearchCouponsResponseDataCouponsThreshold": SearchCouponsResponseDataCouponsThreshold_1.Promotion202406SearchCouponsResponseDataCouponsThreshold,
    "Promotion202406SearchCouponsResponseDataCouponsThresholdMinSpend": SearchCouponsResponseDataCouponsThresholdMinSpend_1.Promotion202406SearchCouponsResponseDataCouponsThresholdMinSpend,
    "Promotion202406SearchCouponsResponseDataCouponsUsageLimits": SearchCouponsResponseDataCouponsUsageLimits_1.Promotion202406SearchCouponsResponseDataCouponsUsageLimits,
    "ReturnRefund202309ApproveCancellationResponse": ApproveCancellationResponse_1.ReturnRefund202309ApproveCancellationResponse,
    "ReturnRefund202309ApproveReturnRequestBody": ApproveReturnRequestBody_1.ReturnRefund202309ApproveReturnRequestBody,
    "ReturnRefund202309ApproveReturnRequestBodyPartialRefund": ApproveReturnRequestBodyPartialRefund_1.ReturnRefund202309ApproveReturnRequestBodyPartialRefund,
    "ReturnRefund202309ApproveReturnResponse": ApproveReturnResponse_1.ReturnRefund202309ApproveReturnResponse,
    "ReturnRefund202309CalculateRefundRequestBody": CalculateRefundRequestBody_1.ReturnRefund202309CalculateRefundRequestBody,
    "ReturnRefund202309CalculateRefundRequestBodySkus": CalculateRefundRequestBodySkus_1.ReturnRefund202309CalculateRefundRequestBodySkus,
    "ReturnRefund202309CalculateRefundResponse": CalculateRefundResponse_1.ReturnRefund202309CalculateRefundResponse,
    "ReturnRefund202309CalculateRefundResponseData": CalculateRefundResponseData_1.ReturnRefund202309CalculateRefundResponseData,
    "ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount": CalculateRefundResponseDataOrderRefundAmount_1.ReturnRefund202309CalculateRefundResponseDataOrderRefundAmount,
    "ReturnRefund202309CancelOrderRequestBody": CancelOrderRequestBody_1.ReturnRefund202309CancelOrderRequestBody,
    "ReturnRefund202309CancelOrderRequestBodySkus": CancelOrderRequestBodySkus_1.ReturnRefund202309CancelOrderRequestBodySkus,
    "ReturnRefund202309CancelOrderResponse": CancelOrderResponse_1.ReturnRefund202309CancelOrderResponse,
    "ReturnRefund202309CancelOrderResponseData": CancelOrderResponseData_1.ReturnRefund202309CancelOrderResponseData,
    "ReturnRefund202309CreateReturnRequestBody": CreateReturnRequestBody_1.ReturnRefund202309CreateReturnRequestBody,
    "ReturnRefund202309CreateReturnRequestBodySkus": CreateReturnRequestBodySkus_1.ReturnRefund202309CreateReturnRequestBodySkus,
    "ReturnRefund202309CreateReturnResponse": CreateReturnResponse_1.ReturnRefund202309CreateReturnResponse,
    "ReturnRefund202309CreateReturnResponseData": CreateReturnResponseData_1.ReturnRefund202309CreateReturnResponseData,
    "ReturnRefund202309GetAftersaleEligibilityResponse": GetAftersaleEligibilityResponse_1.ReturnRefund202309GetAftersaleEligibilityResponse,
    "ReturnRefund202309GetAftersaleEligibilityResponseData": GetAftersaleEligibilityResponseData_1.ReturnRefund202309GetAftersaleEligibilityResponseData,
    "ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility": GetAftersaleEligibilityResponseDataSkuEligibility_1.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility,
    "ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility": GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility_1.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility,
    "ReturnRefund202309GetRejectReasonsResponse": GetRejectReasonsResponse_1.ReturnRefund202309GetRejectReasonsResponse,
    "ReturnRefund202309GetRejectReasonsResponseData": GetRejectReasonsResponseData_1.ReturnRefund202309GetRejectReasonsResponseData,
    "ReturnRefund202309GetRejectReasonsResponseDataReasons": GetRejectReasonsResponseDataReasons_1.ReturnRefund202309GetRejectReasonsResponseDataReasons,
    "ReturnRefund202309GetReturnRecordsResponse": GetReturnRecordsResponse_1.ReturnRefund202309GetReturnRecordsResponse,
    "ReturnRefund202309GetReturnRecordsResponseData": GetReturnRecordsResponseData_1.ReturnRefund202309GetReturnRecordsResponseData,
    "ReturnRefund202309GetReturnRecordsResponseDataRecords": GetReturnRecordsResponseDataRecords_1.ReturnRefund202309GetReturnRecordsResponseDataRecords,
    "ReturnRefund202309GetReturnRecordsResponseDataRecordsImages": GetReturnRecordsResponseDataRecordsImages_1.ReturnRefund202309GetReturnRecordsResponseDataRecordsImages,
    "ReturnRefund202309GetReturnRecordsResponseDataRecordsVideos": GetReturnRecordsResponseDataRecordsVideos_1.ReturnRefund202309GetReturnRecordsResponseDataRecordsVideos,
    "ReturnRefund202309RejectCancellationRequestBody": RejectCancellationRequestBody_1.ReturnRefund202309RejectCancellationRequestBody,
    "ReturnRefund202309RejectCancellationRequestBodyImages": RejectCancellationRequestBodyImages_1.ReturnRefund202309RejectCancellationRequestBodyImages,
    "ReturnRefund202309RejectCancellationResponse": RejectCancellationResponse_1.ReturnRefund202309RejectCancellationResponse,
    "ReturnRefund202309RejectReturnRequestBody": RejectReturnRequestBody_1.ReturnRefund202309RejectReturnRequestBody,
    "ReturnRefund202309RejectReturnRequestBodyImages": RejectReturnRequestBodyImages_1.ReturnRefund202309RejectReturnRequestBodyImages,
    "ReturnRefund202309RejectReturnResponse": RejectReturnResponse_1.ReturnRefund202309RejectReturnResponse,
    "ReturnRefund202309SearchCancellationsRequestBody": SearchCancellationsRequestBody_1.ReturnRefund202309SearchCancellationsRequestBody,
    "ReturnRefund202309SearchCancellationsResponse": SearchCancellationsResponse_1.ReturnRefund202309SearchCancellationsResponse,
    "ReturnRefund202309SearchCancellationsResponseData": SearchCancellationsResponseData_1.ReturnRefund202309SearchCancellationsResponseData,
    "ReturnRefund202309SearchCancellationsResponseDataCancellations": SearchCancellationsResponseDataCancellations_1.ReturnRefund202309SearchCancellationsResponseDataCancellations,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems": SearchCancellationsResponseDataCancellationsCancelLineItems_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage": SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount": SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount": SearchCancellationsResponseDataCancellationsRefundAmount_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount,
    "ReturnRefund202309SearchCancellationsResponseDataCancellationsSellerNextActionResponse": SearchCancellationsResponseDataCancellationsSellerNextActionResponse_1.ReturnRefund202309SearchCancellationsResponseDataCancellationsSellerNextActionResponse,
    "ReturnRefund202309SearchReturnsRequestBody": SearchReturnsRequestBody_1.ReturnRefund202309SearchReturnsRequestBody,
    "ReturnRefund202309SearchReturnsResponse": SearchReturnsResponse_1.ReturnRefund202309SearchReturnsResponse,
    "ReturnRefund202309SearchReturnsResponseData": SearchReturnsResponseData_1.ReturnRefund202309SearchReturnsResponseData,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrders": SearchReturnsResponseDataReturnOrders_1.ReturnRefund202309SearchReturnsResponseDataReturnOrders,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount": SearchReturnsResponseDataReturnOrdersDiscountAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersPartialRefund": SearchReturnsResponseDataReturnOrdersPartialRefund_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersPartialRefund,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount": SearchReturnsResponseDataReturnOrdersRefundAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems": SearchReturnsResponseDataReturnOrdersReturnLineItems_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage": SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount": SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress": SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersSellerNextActionResponse": SearchReturnsResponseDataReturnOrdersSellerNextActionResponse_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersSellerNextActionResponse,
    "ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount": SearchReturnsResponseDataReturnOrdersShippingFeeAmount_1.ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount,
    "Seller202309GetActiveShopsResponse": GetActiveShopsResponse_1.Seller202309GetActiveShopsResponse,
    "Seller202309GetActiveShopsResponseData": GetActiveShopsResponseData_1.Seller202309GetActiveShopsResponseData,
    "Seller202309GetActiveShopsResponseDataShops": GetActiveShopsResponseDataShops_1.Seller202309GetActiveShopsResponseDataShops,
    "Seller202309GetSellerPermissionsResponse": GetSellerPermissionsResponse_1.Seller202309GetSellerPermissionsResponse,
    "Seller202309GetSellerPermissionsResponseData": GetSellerPermissionsResponseData_1.Seller202309GetSellerPermissionsResponseData,
    "SupplyChain202309ConfirmPackageShipmentRequestBody": ConfirmPackageShipmentRequestBody_1.SupplyChain202309ConfirmPackageShipmentRequestBody,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackages": ConfirmPackageShipmentRequestBodyPackages_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackages,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesDimension": ConfirmPackageShipmentRequestBodyPackagesDimension_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesDimension,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesSkus": ConfirmPackageShipmentRequestBodyPackagesSkus_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesSkus,
    "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesWeight": ConfirmPackageShipmentRequestBodyPackagesWeight_1.SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesWeight,
    "SupplyChain202309ConfirmPackageShipmentResponse": ConfirmPackageShipmentResponse_1.SupplyChain202309ConfirmPackageShipmentResponse,
    "SupplyChain202309ConfirmPackageShipmentResponseData": ConfirmPackageShipmentResponseData_1.SupplyChain202309ConfirmPackageShipmentResponseData,
    "SupplyChain202309ConfirmPackageShipmentResponseDataErrors": ConfirmPackageShipmentResponseDataErrors_1.SupplyChain202309ConfirmPackageShipmentResponseDataErrors,
    "SupplyChain202309ConfirmPackageShipmentResponseDataErrorsDetail": ConfirmPackageShipmentResponseDataErrorsDetail_1.SupplyChain202309ConfirmPackageShipmentResponseDataErrorsDetail
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
