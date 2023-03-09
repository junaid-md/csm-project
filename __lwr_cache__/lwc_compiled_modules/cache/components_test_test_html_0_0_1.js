import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./test.css";

import _implicitScopedStylesheets from "./test.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<p${3}>Hello World</p>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1)];
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
  tmpl.stylesheetToken = "components-test_test"
}
freezeTemplate(tmpl);
