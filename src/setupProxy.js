const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api/blog', {
    "target": "http://127.0.0.1:8086/api/hello-blog-service",
    "changeOrigin": true,
    "pathRewrite": {
      "^/api/blog": "/"
    }
  }));
};