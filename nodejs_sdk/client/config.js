"use strict";
exports.__esModule = true;
exports.ClientConfiguration = void 0;
var GlobalClientConfiguration = /** @class */ (function () {
    function GlobalClientConfiguration() {
    }
    return GlobalClientConfiguration;
}());
var ClientConfiguration = /** @class */ (function () {
    function ClientConfiguration(app_key, app_secret, basePath) {
        this.app_key = app_key;
        this.app_secret = app_secret;
        this.basePath = basePath;
    }
    ClientConfiguration.createConfig = function () {
        var client = new ClientConfiguration();
        var configObject = {
            setAppKey: function (app_key) {
                client.app_key = app_key;
                return configObject;
            },
            setAppSecret: function (app_secret) {
                client.app_secret = app_secret;
                return configObject;
            },
            setBasePath: function (basePath) {
                client.basePath = basePath;
                return configObject;
            },
            build: function () {
                return client;
            }
        };
        return configObject;
    };
    ClientConfiguration.globalConfig = GlobalClientConfiguration;
    return ClientConfiguration;
}());
exports.ClientConfiguration = ClientConfiguration;
