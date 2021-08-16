const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
      target: 'http://127.0.0.1:7001',
      changeOrigin: false,
      autoRewrite: true,
      pathRewrite: {
        '^/api': '',
      },
      onProxyRes: function (proxyRes) {
        console.log(`proxy: ${proxyRes.req.path} succeed`)
      },
    }),
  );
};
