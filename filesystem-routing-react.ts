import {SnowpackConfig,PluginTransformOptions} from "./types"
// my-snowpack-plugin.js
// Example: a basic Snowpack plugin file, customize the name of the file and the value of the name in the object
// snowpackConfig = The Snowpack configuration object
// pluginOptions = user-provided configuration options
module.exports = function (snowpackConfig:SnowpackConfig, pluginOptions:{}) {
  return {
    name: 'filesystem-routing-react',
    async transform({}:PluginTransformOptions){

    }
  };
};