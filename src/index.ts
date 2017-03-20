import {MyPluginOptions} from "./plugin/my-plugin-options";
import {MyPlugin} from "./plugin/my-plugin";

(function ($: JQueryStatic) {
   $.fn[MyPlugin.NAME] = function (options: MyPluginOptions) {
      return this.each(function () {
         new MyPlugin($(this), options);
      });
   };
})(jQuery);