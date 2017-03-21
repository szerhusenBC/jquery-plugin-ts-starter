import {MyPlugin} from "./my-plugin";

describe("MyPlugin", () => {
   let rootElement;
   let myPlugin: MyPlugin;

   beforeEach(() => {
      rootElement = jQuery("<div>some content</div>");
      myPlugin = new MyPlugin(rootElement, {label: "My label"});
   });

   it("should initialize correctly", () => {
      expect(rootElement.text()).toBe("myPlugin has been activated");
   });
});