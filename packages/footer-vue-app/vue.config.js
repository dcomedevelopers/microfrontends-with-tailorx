// vue.config.js
const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config
      .plugin('html')
      .tap(args => {
        args[0].inject = false;
        args[0].template = resolveApp('public/index.ejs');
        args[0].templateParameters = function(compilation, assets, options) {
          return {
            title: 'Document title',
            files: assets,
            options: options,
            webpackConfig: compilation.options,
            webpack: compilation.getStats().toJson()
          }
        }
        return args
      });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? 'http://localhost:3003'
    : '/'
}
