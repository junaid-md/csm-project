import _tmpl from "./shadowBaseClassPrivate.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class LightningShadowBaseClass extends LightningElement {
  connectedCallback() {
    if (!this.template.synthetic) {
      this.template.host.setAttribute('data-render-mode', 'shadow');
    }
  }
  /*LWC compiler v2.17.0*/
}
LightningShadowBaseClass.shadowSupportMode = 'any';
export default _registerComponent(LightningShadowBaseClass, {
  tmpl: _tmpl
});