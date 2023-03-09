import stylesheet0 from "lightning/sldsCommon";
import stylesheet1 from "./icon.slds.css";

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "_:-ms-lang(x)" + shadowSelector + ", svg" + shadowSelector + " {pointer-events: none;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet0, stylesheet1, stylesheet];