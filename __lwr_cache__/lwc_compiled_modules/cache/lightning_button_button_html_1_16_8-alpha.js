import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./button.css";

import _implicitScopedStylesheets from "./button.scoped.css?scoped=true";

import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "aria-disabled": $cmp.disabled,
      "name": $cmp.name,
      "accesskey": $cmp.accessKey,
      "title": $cmp.title,
      "type": $cmp.normalizedType,
      "value": $cmp.value,
      "aria-atomic": $cmp.computedAriaAtomic,
      "aria-busy": $cmp.computedAriaBusy,
      "aria-label": $cmp.ariaLabel,
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-haspopup": $cmp.computedAriaHasPopup,
      "aria-live": $cmp.computedAriaLive,
      "aria-pressed": $cmp.computedAriaPressed,
      "aria-relevant": $cmp.computedAriaRelevant,
      "part": $cmp.computedPart
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleButtonBlur)),
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleButtonClick))
    }
  }, [$cmp.showIconLeft ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "part": "start",
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
    },
    key: 1
  }) : null, api_text(api_dynamic_text($cmp.label)), $cmp.showIconRight ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "part": "end",
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
    },
    key: 2
  }) : null])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-button_button"
}
freezeTemplate(tmpl);
