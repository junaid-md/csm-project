import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./e3DHomePage.css";

import _implicitScopedStylesheets from "./e3DHomePage.scoped.css?scoped=true";

import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment2 = parseFragment`<span class="slds-form-element__label slds-assistive-text${0}"${2}>Select All</span>`;
const $fragment3 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment4 = parseFragment`<span class="slds-truncate${0}" title="Name"${2}>Name</span>`;
const $fragment5 = parseFragment`<span class="slds-assistive-text${0}" aria-live="polite" aria-atomic="true"${2}>Sorted descending</span>`;
const $fragment6 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment7 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment8 = parseFragment`<span class="slds-truncate${0}" title="Account Name"${2}>Account Name</span>`;
const $fragment9 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment10 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment11 = parseFragment`<span class="slds-truncate${0}" title="Close Date"${2}>Close Date</span>`;
const $fragment12 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment13 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment14 = parseFragment`<span class="slds-truncate${0}" title="Stage"${2}>Stage</span>`;
const $fragment15 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment16 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment17 = parseFragment`<span class="slds-truncate${0}" title="Confidence"${2}>Confidence</span>`;
const $fragment18 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment19 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment20 = parseFragment`<span class="slds-truncate${0}" title="Amount"${2}>Amount</span>`;
const $fragment21 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment22 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sort by: </span>`;
const $fragment23 = parseFragment`<span class="slds-truncate${0}" title="Contact"${2}>Contact</span>`;
const $fragment24 = parseFragment`<span class="slds-resizable__handle${0}"${2}><span class="slds-resizable__divider${0}"${2}></span></span>`;
const $fragment25 = parseFragment`<th class="slds-cell_action-mode${0}" scope="col" style="width:3.25rem"${2}><div class="slds-truncate slds-assistive-text${0}" title="Actions"${2}>Actions</div></th>`;
const $fragment26 = parseFragment`<span class="slds-checkbox_faux${0}"${2}></span>`;
const $fragment27 = parseFragment`<span class="slds-form-element__label slds-assistive-text${0}"${2}>Select item 3</span>`;
const $fragment28 = parseFragment`<span class="slds-assistive-text${0}"${2}>More actions for Acme - 1,200 Widgets</span>`;
const stc0 = {
  classMap: {
    "name": true
  },
  key: 1
};
const stc1 = {
  key: 2
};
const stc2 = {
  classMap: {
    "slds-table": true,
    "slds-table_bordered": true,
    "slds-table_fixed-layout": true,
    "slds-table_resizable-cols": true
  },
  attrs: {
    "aria-multiselectable": "true",
    "role": "grid",
    "aria-label": "Example advanced table of Opportunities in actionable mode with descending column sorting"
  },
  key: 3
};
const stc3 = {
  key: 4
};
const stc4 = {
  classMap: {
    "slds-line-height_reset": true
  },
  key: 5
};
const stc5 = {
  classMap: {
    "slds-text-align_right": true,
    "slds-cell_action-mode": true
  },
  styleDecls: [["width", "3.25rem", false]],
  attrs: {
    "scope": "col"
  },
  key: 6
};
const stc6 = {
  "slds-assistive-text": true
};
const stc7 = {
  classMap: {
    "slds-th__action": true,
    "slds-th__action_form": true
  },
  key: 8
};
const stc8 = {
  classMap: {
    "slds-checkbox": true
  },
  key: 9
};
const stc9 = {
  "value": "checkbox-unique-id-293"
};
const stc10 = {
  "slds-checkbox__label": true
};
const stc11 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true,
    "slds-is-sorted": true,
    "slds-is-sorted_desc": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "aria-label": "Name",
    "aria-sort": "descending",
    "scope": "col"
  },
  key: 16
};
const stc12 = {
  "slds-th__action": true,
  "slds-text-link_reset": true
};
const stc13 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 20
};
const stc14 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 23
};
const stc15 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 24,
  svg: true
};
const stc16 = {
  classMap: {
    "slds-resizable": true
  },
  key: 28
};
const stc17 = {
  "slds-resizable__input": true,
  "slds-assistive-text": true
};
const stc18 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "aria-label": "Account Name",
    "aria-sort": "none",
    "scope": "col"
  },
  key: 32
};
const stc19 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 36
};
const stc20 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 39
};
const stc21 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 40,
  svg: true
};
const stc22 = {
  classMap: {
    "slds-resizable": true
  },
  key: 42
};
const stc23 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "aria-label": "Close Date",
    "aria-sort": "none",
    "scope": "col"
  },
  key: 46
};
const stc24 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 50
};
const stc25 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 53
};
const stc26 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 54,
  svg: true
};
const stc27 = {
  classMap: {
    "slds-resizable": true
  },
  key: 56
};
const stc28 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "aria-label": "Stage",
    "aria-sort": "none",
    "scope": "col"
  },
  key: 60
};
const stc29 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 64
};
const stc30 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 67
};
const stc31 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 68,
  svg: true
};
const stc32 = {
  classMap: {
    "slds-resizable": true
  },
  key: 70
};
const stc33 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "aria-label": "Confidence",
    "aria-sort": "none",
    "scope": "col"
  },
  key: 74
};
const stc34 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 78
};
const stc35 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 81
};
const stc36 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 82,
  svg: true
};
const stc37 = {
  classMap: {
    "slds-resizable": true
  },
  key: 84
};
const stc38 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "aria-label": "Amount",
    "aria-sort": "none",
    "scope": "col"
  },
  key: 88
};
const stc39 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 92
};
const stc40 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 95
};
const stc41 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 96,
  svg: true
};
const stc42 = {
  classMap: {
    "slds-resizable": true
  },
  key: 98
};
const stc43 = {
  classMap: {
    "slds-is-resizable": true,
    "slds-is-sortable": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "aria-label": "Contact",
    "aria-sort": "none",
    "scope": "col"
  },
  key: 102
};
const stc44 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 106
};
const stc45 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-arrowdown": true
  },
  key: 109
};
const stc46 = {
  classMap: {
    "slds-icon": true,
    "slds-icon-text-default": true,
    "slds-is-sortable__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 110,
  svg: true
};
const stc47 = {
  classMap: {
    "slds-resizable": true
  },
  key: 112
};
const stc48 = {
  key: 118
};
const stc49 = {
  "slds-hint-parent": true
};
const stc50 = {
  "aria-selected": "false"
};
const stc51 = {
  classMap: {
    "slds-text-align_right": true,
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 120
};
const stc52 = {
  classMap: {
    "slds-checkbox": true
  },
  key: 121
};
const stc53 = {
  "value": "checkbox-03"
};
const stc54 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "scope": "row"
  },
  key: 128
};
const stc55 = {
  "slds-truncate": true
};
const stc56 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 131
};
const stc57 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Acme"
  },
  key: 132
};
const stc58 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 133
};
const stc59 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "4/10/15"
  },
  key: 134
};
const stc60 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 135
};
const stc61 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "Value Proposition"
  },
  key: 136
};
const stc62 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 137
};
const stc63 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "30%"
  },
  key: 138
};
const stc64 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 139
};
const stc65 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "$25,000,000"
  },
  key: 140
};
const stc66 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 141
};
const stc67 = {
  classMap: {
    "slds-truncate": true
  },
  attrs: {
    "title": "jrogers@acme.com"
  },
  key: 142
};
const stc68 = {
  classMap: {
    "slds-cell_action-mode": true
  },
  attrs: {
    "role": "gridcell"
  },
  key: 144
};
const stc69 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true,
    "slds-button_icon-border-filled": true,
    "slds-button_icon-x-small": true
  },
  attrs: {
    "aria-haspopup": "true",
    "tabindex": "0",
    "title": "More actions for Acme - 1,200 Widgets"
  },
  key: 145
};
const stc70 = {
  classMap: {
    "slds-button__icon": true,
    "slds-button__icon_hint": true,
    "slds-button__icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 146,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, gid: api_scoped_id, st: api_static_fragment, fid: api_scoped_frag_id, f: api_flatten} = $api;
  return api_flatten([api_iterator($cmp.data, function (item) {
    return api_element("div", {
      key: api_key(0, item.age)
    }, [api_element("div", stc0, [api_text(api_dynamic_text(item.name))]), api_element("p", stc1, [api_text(api_dynamic_text(item.age))])]);
  }), api_element("table", stc2, [api_element("thead", stc3, [api_element("tr", stc4, [api_element("th", stc5, [api_element("span", {
    classMap: stc6,
    attrs: {
      "id": api_scoped_id("column-group-header")
    },
    key: 7
  }, [api_text("Choose a row")]), api_element("div", stc7, [api_element("div", stc8, [api_element("input", {
    attrs: {
      "type": "checkbox",
      "name": "options",
      "id": api_scoped_id("checkbox-unique-id-293"),
      "tabindex": "0",
      "aria-labelledby": api_scoped_id("check-select-all-label column-group-header")
    },
    props: stc9,
    key: 10
  }), api_element("label", {
    classMap: stc10,
    attrs: {
      "for": api_scoped_id("checkbox-unique-id-293"),
      "id": api_scoped_id("check-select-all-label")
    },
    key: 11
  }, [api_static_fragment($fragment1(), 13), api_static_fragment($fragment2(), 15)])])])]), api_element("th", stc11, [api_element("a", {
    classMap: stc12,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "0"
    },
    key: 17
  }, [api_static_fragment($fragment3(), 19), api_element("div", stc13, [api_static_fragment($fragment4(), 22), api_element("span", stc14, [api_element("svg", stc15, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 25,
    svg: true
  })])])])]), api_static_fragment($fragment5(), 27), api_element("div", stc16, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "range",
      "aria-label": "Name column width",
      "id": api_scoped_id("cell-resize-handle-533"),
      "max": "1000",
      "min": "20",
      "tabindex": "0"
    },
    key: 29
  }), api_static_fragment($fragment6(), 31)])]), api_element("th", stc18, [api_element("a", {
    classMap: stc12,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "0"
    },
    key: 33
  }, [api_static_fragment($fragment7(), 35), api_element("div", stc19, [api_static_fragment($fragment8(), 38), api_element("span", stc20, [api_element("svg", stc21, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 41,
    svg: true
  })])])])]), api_element("div", stc22, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "range",
      "aria-label": "Account Name column width",
      "id": api_scoped_id("cell-resize-handle-534"),
      "max": "1000",
      "min": "20",
      "tabindex": "0"
    },
    key: 43
  }), api_static_fragment($fragment9(), 45)])]), api_element("th", stc23, [api_element("a", {
    classMap: stc12,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "0"
    },
    key: 47
  }, [api_static_fragment($fragment10(), 49), api_element("div", stc24, [api_static_fragment($fragment11(), 52), api_element("span", stc25, [api_element("svg", stc26, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 55,
    svg: true
  })])])])]), api_element("div", stc27, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "range",
      "aria-label": "Close Date column width",
      "id": api_scoped_id("cell-resize-handle-535"),
      "max": "1000",
      "min": "20",
      "tabindex": "0"
    },
    key: 57
  }), api_static_fragment($fragment12(), 59)])]), api_element("th", stc28, [api_element("a", {
    classMap: stc12,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "0"
    },
    key: 61
  }, [api_static_fragment($fragment13(), 63), api_element("div", stc29, [api_static_fragment($fragment14(), 66), api_element("span", stc30, [api_element("svg", stc31, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 69,
    svg: true
  })])])])]), api_element("div", stc32, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "range",
      "aria-label": "Stage column width",
      "id": api_scoped_id("cell-resize-handle-536"),
      "max": "1000",
      "min": "20",
      "tabindex": "0"
    },
    key: 71
  }), api_static_fragment($fragment15(), 73)])]), api_element("th", stc33, [api_element("a", {
    classMap: stc12,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "0"
    },
    key: 75
  }, [api_static_fragment($fragment16(), 77), api_element("div", stc34, [api_static_fragment($fragment17(), 80), api_element("span", stc35, [api_element("svg", stc36, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 83,
    svg: true
  })])])])]), api_element("div", stc37, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "range",
      "aria-label": "Confidence column width",
      "id": api_scoped_id("cell-resize-handle-537"),
      "max": "1000",
      "min": "20",
      "tabindex": "0"
    },
    key: 85
  }), api_static_fragment($fragment18(), 87)])]), api_element("th", stc38, [api_element("a", {
    classMap: stc12,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "0"
    },
    key: 89
  }, [api_static_fragment($fragment19(), 91), api_element("div", stc39, [api_static_fragment($fragment20(), 94), api_element("span", stc40, [api_element("svg", stc41, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 97,
    svg: true
  })])])])]), api_element("div", stc42, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "range",
      "aria-label": "Amount column width",
      "id": api_scoped_id("cell-resize-handle-538"),
      "max": "1000",
      "min": "20",
      "tabindex": "0"
    },
    key: 99
  }), api_static_fragment($fragment21(), 101)])]), api_element("th", stc43, [api_element("a", {
    classMap: stc12,
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "button",
      "tabindex": "0"
    },
    key: 103
  }, [api_static_fragment($fragment22(), 105), api_element("div", stc44, [api_static_fragment($fragment23(), 108), api_element("span", stc45, [api_element("svg", stc46, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 111,
    svg: true
  })])])])]), api_element("div", stc47, [api_element("input", {
    classMap: stc17,
    attrs: {
      "type": "range",
      "aria-label": "Contact column width",
      "id": api_scoped_id("cell-resize-handle-539"),
      "max": "1000",
      "min": "20",
      "tabindex": "0"
    },
    key: 113
  }), api_static_fragment($fragment24(), 115)])]), api_static_fragment($fragment25(), 117)])]), api_element("tbody", stc48, api_iterator($cmp.csmData, function (item) {
    return api_element("tr", {
      classMap: stc49,
      attrs: stc50,
      key: api_key(119, item.id)
    }, [api_element("td", stc51, [api_element("div", stc52, [api_element("input", {
      attrs: {
        "type": "checkbox",
        "name": "options",
        "id": api_scoped_id("checkbox-03"),
        "tabindex": "0",
        "aria-labelledby": api_scoped_id("check-button-label-03 column-group-header")
      },
      props: stc53,
      key: 122
    }), api_element("label", {
      classMap: stc10,
      attrs: {
        "for": api_scoped_id("checkbox-03"),
        "id": api_scoped_id("check-button-label-03")
      },
      key: 123
    }, [api_static_fragment($fragment26(), 125), api_static_fragment($fragment27(), 127)])])]), api_element("th", stc54, [api_element("div", {
      classMap: stc55,
      attrs: {
        "title": item.name
      },
      key: 129
    }, [api_element("a", {
      attrs: {
        "href": api_scoped_frag_id("#"),
        "tabindex": "0"
      },
      key: 130
    }, [api_text(api_dynamic_text(item.customerName))])])]), api_element("td", stc56, [api_element("div", stc57, [api_text(api_dynamic_text(item.customerkey))])]), api_element("td", stc58, [api_element("div", stc59, [api_text(api_dynamic_text(item.createdDate))])]), api_element("td", stc60, [api_element("div", stc61, [api_text(api_dynamic_text(item.percentGoodRacks))])]), api_element("td", stc62, [api_element("div", stc63, [api_text(api_dynamic_text(item.handWashes))])]), api_element("td", stc64, [api_element("div", stc65, [api_text(api_dynamic_text(item.sinkSurfaceCompleted))])]), api_element("td", stc66, [api_element("div", stc67, [api_element("a", {
      attrs: {
        "href": api_scoped_frag_id("#"),
        "tabindex": "0"
      },
      key: 143
    }, [api_text("jrogers@acme.com")])])]), api_element("td", stc68, [api_element("button", stc69, [api_element("svg", stc70, [api_element("use", {
      attrs: {
        "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/assets/icons/utility-sprite/svg/symbols.svg#down")
      },
      key: 147,
      svg: true
    })]), api_static_fragment($fragment28(), 149)])])]);
  }))])]);
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
  tmpl.stylesheetToken = "components-e3DHomePage_e3DHomePage"
}
freezeTemplate(tmpl);
