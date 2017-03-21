import {MyPluginOptions} from "./my-plugin-options";
import {isNullOrUndefined} from "./utils";

export class MyPlugin {

   public static NAME: string = "myPlugin";

   private rootElement: JQuery;
   private options: MyPluginOptions;

   constructor(rootElement: JQuery, options: MyPluginOptions) {
      if (isNullOrUndefined(options)) {
         throw new Error("options may not be empty!");
      }

      this.rootElement = rootElement;
      this.options = options;

      this.init();
   }

   private init() {
      this.rootElement.text(this.options.label);
   }
}