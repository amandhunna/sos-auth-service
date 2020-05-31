const allowConsole = false;

const handler = {
    get: (obj, prop) => {
        const env = "development" //process.env.NODE_ENV;
        if (env === "development" || allowConsole) return obj[prop];
        return () => { }
    },
};

const logger = {
    logDebug: function (...params) {
        console.debug(...params);
    },
    logError: function (...params) {
        console.error(...params);
    },
    logInfo: function (...params) {
        console.info(...params);
    },
    logWarn: function (...params) {
        console.warn(...params);
    },
}
const proxyLogger = new Proxy(logger, handler);

module.exports = proxyLogger;
