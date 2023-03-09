function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".name" + shadowSelector + " {color:aquamarine;font-size: 24px;font-weight: bold;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];