import {MyPluginOptions} from "./options";

export class MyPlugin {

   public static NAME: string = 'myPlugin';

   private rootElement: JQuery;
   private options: MyPluginOptions;

   constructor(rootElement: JQuery, options: MyPluginOptions) {
      this.rootElement = rootElement;
      this.options = options;

      this.init();
   }

   private init() {
      this.rootElement.text("myPlugin has been activated");
   }
}