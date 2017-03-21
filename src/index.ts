import {MyPluginOptions} from "./plugin/my-plugin-options";
import {MyPlugin} from "./plugin/my-plugin";

(function ($: JQueryStatic) {
   // you have to extend jQuery with the fn['pluginName'] notation because in Typescript you can't extend
   // the existing typing interface with fn.pluginName!
   $.fn[MyPlugin.NAME] = function (options: MyPluginOptions) {
      return this.each(function () {
         new MyPlugin($(this), options);
      });
   };
})(jQuery);