import {MyPlugin} from "./my-plugin";

describe("MyPlugin", () => {
   let rootElement;
   let myPlugin: MyPlugin;

   beforeEach(() => {
      rootElement = jQuery("<div>some content</div>");
      myPlugin = new MyPlugin(rootElement, {label: "My label"});
   });

   it("should initialize correctly", () => {
      chai.assert.strictEqual(rootElement.text(), "myPlugin has been activated");
   });
});