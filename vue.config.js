// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: "ק''ש בזמנה",
        themeColor: '#aad1d1',
        msTileColor: '#aad1d1',
        workboxOptions: {
            skipWaiting: true
        }
    }
}