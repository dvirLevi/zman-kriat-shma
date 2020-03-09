// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'שמע בזמנה',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/sw.js',
        // ...other Workbox options...
      }
    }
  }