const URL_CHECK_REGEX = /^(\/+|\.+|ftp|http(s?):\/\/)/i;
export function isAbsoluteUrl(url) {
  return URL_CHECK_REGEX.test(url);
}
export function makeAbsoluteUrl(url) {
  const protocol = window.location.protocol;
  return isAbsoluteUrl(url) ? url : `${protocol}//${url}`;
}
export const FALLBACK_URL = 'about:blank';
const IS_SCRIPT_OR_DATA = /^(?:\w+script|data):/i;

/**
 * Mark sure to preventDefault, when sanitized url matches FALLBACK_URL
 * W-12029667 - Making FALLBACK_URL as '#' causes click action to fail on tests
 * */
export function sanitizeURL(url) {
  if (url) {
    return url.match(IS_SCRIPT_OR_DATA) ? FALLBACK_URL : url;
  }
  return FALLBACK_URL;
}