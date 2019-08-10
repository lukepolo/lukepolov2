const VarieBundler = require("varie-bundler");
const ENV = require("dotenv").config().parsed;

module.exports = function(env) {
  return new VarieBundler(env)
    .entry("app", ["resources/js/app/app.ts", "resources/sass/app.scss"])
    .aliases({
      "@app": "resources/js/app",
      "@views": "resources/js/views",
      "@store": "resources/js/store",
      "@config": "resources/js/config",
      "@routes": "resources/js/routes",
      "@models": "resources/js/app/models",
      "@resources": "resources/js/resources",
      "@components": "resources/js/app/components",
    })
      .dontClean([
          "svg",
          "vendor",
          ".htaccess",
          "favicon.ico",
          "index.php",
          "robots.txt",
      ])
      .chainWebpack((config, env) => {
          config.when(!env.isHot, () => {
              config.plugin("html").tap((opts) => {
                  opts[0].filename = "../resources/views/layouts/app.blade.php";
                  return opts;
              });
          });
      })
      .chainWebpack((config) => {
          config.devServer.disableHostCheck(true);
      })
      .proxy("/api", ENV.APP_URL)
    .build();
};
