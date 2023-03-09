import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveButton.html";
import { isIE11, normalizeBoolean, normalizeString, buttonGroupOrderClass } from 'lightning/utilsPrivate';
import { classSet } from 'lightning/utils';
import AriaObserver from 'lightning/ariaObserver';
const BUTTON = 'button';
const ROLE = 'role';

/**
 * Primitive for button, buttonIcon and buttonIconStateful
 * We try to have those components to set their aria attributes on their template as much as possible
 * to avoid setting those manually, however there are a few instances
 * in which manual setting is still required:
 *
 *  - aria-disabled: Since it dependes on the disabled state, which is controlled by primitive button.
 *  - aria-controls: Abstracts the logic of setting the id-reference on the host element
 *  - aria-cetails: Role that depeneds on AriaObserver for native shadow.
 *  - aria-describedBy: Role that depeneds on AriaObserver for native shadow.
 *  - aria-flowTo: Abstracts the logic of setting the id-reference on the host element.
 *  - aria-labelledby: Role that depeneds on AriaObserver for native shadow.
 *  - aria-owns: Abstracts the logic of setting the id-reference on the host element.
 */
class LightningPrimitiveButton extends LightningElement {
  /**** COMPONENT PRIVATE PROPERTIES ****/

  /**** COMPONENT PUBLIC APIS ****/
  /**
   * Specifies whether this button should be displayed in a disabled state.
   * Disabled buttons can't be clicked. This value defaults to false.
   *
   * @type {boolean}
   * @default false
   */
  set disabled(value) {
    this.originalDisabledValue = value;
    this.state.disabled = normalizeBoolean(value);
  }
  get disabled() {
    return this.state.disabled;
  }

  /**
   * Specifies a shortcut key to activate or focus an element.
   *
   * @type {string}
   */

  /**
   * Specifies the ID or list of IDs of the element or elements that
   * contain visible descriptive text to describe the button.
   */
  set ariaLabelledBy(value) {
    this.originalAriaLabelledBy = value;
    this.ariaObserver.connect({
      targetSelector: 'button',
      attribute: 'aria-labelledby',
      id: value
    });
  }
  get ariaLabelledBy() {
    return this.originalAriaLabelledBy;
  }

  /**
   * A space-separated list of element IDs that provide descriptive labels for the button.
   *
   * @type {string}
   */
  set ariaDescribedBy(value) {
    this.originalAriaDescribedBy = value;
    this.ariaObserver.connect({
      targetSelector: 'button',
      attribute: 'aria-describedby',
      id: value
    });
  }
  get ariaDescribedBy() {
    return this.originalAriaDescribedBy;
  }

  /**
   * A space-separated list of element IDs whose presence or content is controlled by this button.
   *
   * @type {string}
   */
  set ariaControls(value) {
    this.originalAriaControls = value;
    this.template.host.setAttribute('aria-controls', value);
    this.setHostRoleAttribute(BUTTON);
  }
  get ariaControls() {
    return this.originalAriaControls;
  }

  /**
   * A space-separated list of element IDs whose presence or content is controlled by this button.
   *
   * @type {string}
   */
  set ariaOwns(value) {
    this.originalAriaOwns = value;
    this.template.host.setAttribute('aria-owns', value);
    this.setHostRoleAttribute(BUTTON);
  }
  get ariaOwns() {
    return this.originalAriaOwns;
  }

  /**
   * A space-separated list of element IDs whose presence or content is controlled by this button.
   *
   * @type {string}
   */
  set ariaDetails(value) {
    this.originalAriaDetails = value;
    this.template.host.setAttribute('aria-details', value);
    this.setHostRoleAttribute(BUTTON);
  }
  get ariaDetails() {
    return this.originalAriaDetails;
  }

  /**
   * A space-separated list of element IDs whose presence or content is controlled by this button.
   *
   * @type {string}
   */
  set ariaFlowTo(value) {
    this.originalAriaFlowTo = value;
    this.template.host.setAttribute('aria-flowto', value);
    this.setHostRoleAttribute(BUTTON);
  }
  get ariaFlowTo() {
    return this.originalAriaFlowTo;
  }

  /**
   * Indicates whether an element that the button controls is expanded or collapsed.
   * Valid values are 'true' or 'false'. The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */
  get ariaExpanded() {
    return this.originalAriaExpanded;
  }
  set ariaExpanded(value) {
    this.originalAriaExpanded = value;
    this.state.ariaExpanded = normalizeString(value, {
      fallbackValue: null,
      validValues: ['true', 'false']
    });
  }
  get computedAriaExpanded() {
    return this.state.ariaExpanded;
  }

  /**
   * Indicates the current "pressed" state of toggle buttons.
   * Valid values are 'true' or 'false'. The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */
  set ariaPressed(value) {
    this.originalAriaPressed = value;
    this.state.ariaPressed = normalizeString(value, {
      fallbackValue: null,
      validValues: ['true', 'false']
    });
  }
  get ariaPressed() {
    return this.originalAriaPressed;
  }
  get computedAriaPressed() {
    return this.state.ariaPressed;
  }

  /**
   * Indicates whether an element that the button controls is expanded or collapsed.
   * Valid values are 'true' or 'false'. The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */
  set ariaHidden(value) {
    this.originalAriaHidden = value;
    this.state.ariaHidden = normalizeString(value, {
      fallbackValue: null,
      validValues: ['true', 'false']
    });
  }
  get ariaHidden() {
    return this.originalAriaHidden;
  }
  get computedAriaHidden() {
    return this.state.ariaHidden;
  }

  /**
   * Indicates the element that represents the current item within a container or set of related elements.
   * For example:
   *   - A page token used to indicate a link within a set of pagination links, where the link is visually styled to
   *   represent the currently-displayed page.
   *   - A step token used to indicate a link within a step indicator for a step-based process, where
   *   the link is visually styled to represent the current step.
   *   - A location token used to indicate the image that is visually highlighted as the current component
   *   of a flow chart.
   *   - A date token used to indicate the current date within a calendar.
   *   - A time token used to indicate the current time within a timetable.
   *
   * @type {string}
   * @default undefined
   */

  /**
   * Indicates that the button has an interactive popup element.
   * Valid values are 'true', 'dialog', 'menu', 'listbox', 'tree', and 'grid' based on ARIA 1.1 specifications.
   * The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */
  set ariaHasPopup(value) {
    this.originalAriaHasPopup = value;
    this.state.ariaHasPopup = normalizeString(value, {
      fallbackValue: null,
      validValues: ['true', 'dialog', 'menu', 'listbox', 'tree', 'grid']
    });
  }
  get ariaHasPopup() {
    return this.originalAriaHasPopup;
  }
  get computedAriaHasPopup() {
    return this.state.ariaHasPopup;
  }

  /**
   * Indicates that the button has an interactive popup element.
   * Valid values are 'true', 'dialog', 'menu', 'listbox', 'tree', and 'grid' based on ARIA 1.1 specifications.
   * The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */
  set ariaRelevant(value) {
    this.originalAriaRelevant = value;
    this.state.ariaRelevant = normalizeString(value, {
      fallbackValue: null,
      validValues: ['additions', 'removals', 'text', 'all']
    });
  }
  get ariaRelevant() {
    return this.originalAriaRelevant;
  }
  get computedAriaRelevant() {
    return this.state.ariaRelevant;
  }

  /**
   * Indicates that the button can be updated when it doesn't have focus.
   * Valid values are 'polite', 'assertive', or 'off'. The polite value causes assistive
   * technologies to notify users of updates at a low priority, generally without interrupting.
   * The assertive value causes assistive technologies to notify users immediately,
   * potentially clearing queued speech updates.
   *
   * @type {string}
   */
  set ariaLive(value) {
    this.originalAriaLive = value;
    this.state.ariaLive = normalizeString(value, {
      fallbackValue: null,
      validValues: ['polite', 'assertive', 'off']
    });
  }
  get ariaLive() {
    return this.originalAriaLive;
  }
  get computedAriaLive() {
    return this.state.ariaLive;
  }

  /**
   * Indicates whether assistive technologies present all, or only parts of,
   * the changed region. Valid values are 'true' or 'false'.
   *
   * @type {string}
   */
  set ariaAtomic(value) {
    this.originalAriaAtomic = value;
    this.state.ariaAtomic = normalizeString(value, {
      fallbackValue: null,
      validValues: ['true', 'false']
    });
  }
  get ariaAtomic() {
    return this.originalAriaAtomic;
  }
  get computedAriaAtomic() {
    return this.state.ariaAtomic;
  }

  /**
   * Indicates an element is being modified and that assistive technologies MAY want to wait
   * until the modifications are complete before exposing them to the user.
   * Refer to W3C aria-busy for more
   *
   * @type {string}
   */
  set ariaBusy(value) {
    this.originalAriaBusy = value;
    this.state.ariaBusy = normalizeString(value, {
      fallbackValue: null,
      validValues: ['true', 'false']
    });
  }
  get ariaBusy() {
    return this.originalAriaBusy;
  }
  get computedAriaBusy() {
    return this.state.ariaBusy;
  }
  get computedButtonClass() {
    const classes = classSet('slds-button');
    classes.add(buttonGroupOrderClass(this.groupOrder));
    return classes.toString();
  }

  /**
   * Sets focus on the element.
   */
  focus() {}

  /**
   * Reserved for internal use only.
   * Describes the order of this element (first, middle or last) inside lightning-button-group.
   * @type {string}
   */

  /**** COMPONENT LIFECYCLE EVENTS ****/

  constructor() {
    super();
    this._initialized = false;
    this.state = {
      ariaAtomic: null,
      ariaBusy: null,
      ariaControls: null,
      ariaDetails: null,
      ariaDescribedBy: null,
      ariaExpanded: null,
      ariaFlowTo: null,
      ariaHasPopup: null,
      ariaHidden: null,
      ariaLabelledBy: null,
      ariaLive: null,
      ariaOwns: null,
      ariaPressed: null,
      ariaRelevant: null,
      disabled: false
    };
    this.originalAriaAtomic = void 0;
    this.originalAriaBusy = void 0;
    this.originalAriaControls = void 0;
    this.originalAriaDetails = void 0;
    this.originalAriaDescribedBy = void 0;
    this.originalAriaExpanded = void 0;
    this.originalAriaFlowTo = void 0;
    this.originalAriaHasPopup = void 0;
    this.originalAriaHidden = void 0;
    this.originalAriaLabelledBy = void 0;
    this.originalAriaLive = void 0;
    this.originalAriaOwns = void 0;
    this.originalAriaPressed = void 0;
    this.originalAriaRelevant = void 0;
    this.originalDisabledValue = void 0;
    this.accessKey = void 0;
    /**
     * Displays tooltip text when the mouse cursor moves over the element.
     *
     * @type {string}
     */
    this.title = void 0;
    /**
     * Label describing the button to assistive technologies.
     *
     * @type {string}
     */
    this.ariaLabel = void 0;
    this.ariaCurrent = void 0;
    /**
     * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
     *
     * @type {string}
     * @default undefined
     */
    this.ariaKeyShortcuts = void 0;
    this.groupOrder = '';
    this.ariaObserver = new AriaObserver(this);

    // Workaround for an IE11 bug where click handlers on button ancestors
    // receive the click event even if the button element has the `disabled`
    // attribute set.
    if (isIE11) {
      this.template.addEventListener('click', event => {
        if (this.disabled) {
          event.stopImmediatePropagation();
        }
      });
    }
  }
  renderedCallback() {
    if (this.isConnected) {
      this.ariaObserver.sync();
    }
  }
  disconnectedCallback() {
    if (this.ariaObserver) {
      this.ariaObserver.disconnect();
      this.ariaObserver = undefined;
    }
  }

  /**
   * Utility function to set aria roles on the host element.
   * This is used mainly for native-shadow use cases for aria attributes that
   * depenend on ID references.
   *
   * If the role attribute is present we will respect that, otherwise it will be set to
   * an specific role, in this case button.
   *
   * @type {string}
   * @default undefined
   */
  setHostRoleAttribute(value) {
    const hostElement = this.template.host;
    let ariaRoleValue = hostElement.getAttribute(ROLE) || value;
    hostElement.setAttribute(ROLE, ariaRoleValue);
  }
  /*LWC compiler v2.17.0*/
}
_registerDecorators(LightningPrimitiveButton, {
  publicProps: {
    disabled: {
      config: 3
    },
    accessKey: {
      config: 0
    },
    title: {
      config: 0
    },
    ariaLabel: {
      config: 0
    },
    ariaLabelledBy: {
      config: 3
    },
    ariaDescribedBy: {
      config: 3
    },
    ariaControls: {
      config: 3
    },
    ariaOwns: {
      config: 3
    },
    ariaDetails: {
      config: 3
    },
    ariaFlowTo: {
      config: 3
    },
    ariaExpanded: {
      config: 3
    },
    ariaPressed: {
      config: 3
    },
    ariaHidden: {
      config: 3
    },
    ariaCurrent: {
      config: 0
    },
    ariaKeyShortcuts: {
      config: 0
    },
    ariaHasPopup: {
      config: 3
    },
    ariaRelevant: {
      config: 3
    },
    ariaLive: {
      config: 3
    },
    ariaAtomic: {
      config: 3
    },
    ariaBusy: {
      config: 3
    },
    groupOrder: {
      config: 0
    }
  },
  publicMethods: ["focus"],
  track: {
    state: 1
  },
  fields: ["_initialized", "originalAriaAtomic", "originalAriaBusy", "originalAriaControls", "originalAriaDetails", "originalAriaDescribedBy", "originalAriaExpanded", "originalAriaFlowTo", "originalAriaHasPopup", "originalAriaHidden", "originalAriaLabelledBy", "originalAriaLive", "originalAriaOwns", "originalAriaPressed", "originalAriaRelevant", "originalDisabledValue"]
});
export default _registerComponent(LightningPrimitiveButton, {
  tmpl: _tmpl
});