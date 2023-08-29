const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://pickleball-o3oe.onrender.com',
      changeOrigin: true,
    })
  );
};
