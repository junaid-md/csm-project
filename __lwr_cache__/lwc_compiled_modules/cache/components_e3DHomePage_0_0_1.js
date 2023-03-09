import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./e3DHomePage.html";
import "@lwc/synthetic-shadow";
import invokeAPI from "@salesforce/invokeAPI";
class E3DHomePageComponent extends LightningElement {
  constructor(...args) {
    super(...args);
    this.data = [{
      "name": "Alisha",
      "age": 20
    }, {
      "name": "Deekshant",
      "age": 21
    }, {
      "name": "Jun",
      "age": 29
    }];
    this.csmData = [];
  }
  connectedCallback() {
    this.getCustomers();
  }
  getCustomers() {
    invokeAPI({
      jsonRequest: JSON.stringify(""),
      type: 'GET'
    }).then(result => {
      this.csmData = JSON.parse(result);
      console.log("csmData =>", JSON.stringify(this.csmData, null, 2));
    }).catch(err => {
      console.log(err);
    });
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(E3DHomePageComponent, {
  fields: ["data", "csmData"]
});
export default _registerComponent(E3DHomePageComponent, {
  tmpl: _tmpl
});