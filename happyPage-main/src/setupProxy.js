const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use('/api1', 
    createProxyMiddleware({
    target: 'http://chp.shadiao.app/',
    changeOrigin: true,
    pathRewrite: {
     '^/api1': ''
    }
  }));


    app.use('/api2', 
    createProxyMiddleware({
    target: 'https://api.muxiaoguo.cn/api/',
    changeOrigin: true,
    pathRewrite: {
    '^/api2': ''
    }
    }));

    app.use('/api3', 
    createProxyMiddleware({
    target: 'http://api.klizi.cn/API/other/',
    changeOrigin: true,
    pathRewrite: {
    '^/api3': ''
    }
    }));

};