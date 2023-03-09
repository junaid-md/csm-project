function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) {display: inline-flex;}" : hostSelector + "[data-render-mode=\"shadow\"] {display: inline-flex;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='boundary']" + shadowSelector + " {padding-block-start: var(--sds-c-icon-spacing-block-start, var(--sds-c-icon-spacing));padding-block-end: var(--sds-c-icon-spacing-block-end, var(--sds-c-icon-spacing));padding-inline-start: var(--sds-c-icon-spacing-inline-start, var(--sds-c-icon-spacing));padding-inline-end: var(--sds-c-icon-spacing-inline-end, var(--sds-c-icon-spacing));border-radius: var(--sds-c-icon-radius-border);border-width: var(--sds-c-icon-sizing-border, 1px);border-style: solid;border-color: var(--sds-c-icon-color-border, transparent);background-color: var(--sds-c-icon-color-background);}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='boundary']" + shadowSelector + " {padding-block-start: var(--sds-c-icon-spacing-block-start, var(--sds-c-icon-spacing));padding-block-end: var(--sds-c-icon-spacing-block-end, var(--sds-c-icon-spacing));padding-inline-start: var(--sds-c-icon-spacing-inline-start, var(--sds-c-icon-spacing));padding-inline-end: var(--sds-c-icon-spacing-inline-end, var(--sds-c-icon-spacing));border-radius: var(--sds-c-icon-radius-border);border-width: var(--sds-c-icon-sizing-border, 1px);border-style: solid;border-color: var(--sds-c-icon-color-border, transparent);background-color: var(--sds-c-icon-color-background);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='icon']" + shadowSelector + " {display: flex;height: var(--sds-c-icon-sizing-height, var(--sds-c-icon-sizing));width: var(--sds-c-icon-sizing-width, var(--sds-c-icon-sizing));color: var(--sds-c-icon-color-foreground);}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='icon']" + shadowSelector + " {display: flex;height: var(--sds-c-icon-sizing-height, var(--sds-c-icon-sizing));width: var(--sds-c-icon-sizing-width, var(--sds-c-icon-sizing));color: var(--sds-c-icon-color-foreground);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) svg" + shadowSelector + " {width: 100%;height: 100%;}" : hostSelector + "[data-render-mode=\"shadow\"] svg" + shadowSelector + " {width: 100%;height: 100%;}")) + "@supports (--styling-hooks: '') {" + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][size~='xxx-small']) {--slds-c-icon-sizing: 0.5rem;}" : hostSelector + "[size~='xxx-small'][data-render-mode=\"shadow\"] {--slds-c-icon-sizing: 0.5rem;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][size~='xx-small']) {--slds-c-icon-sizing: 0.875rem;}" : hostSelector + "[size~='xx-small'][data-render-mode=\"shadow\"] {--slds-c-icon-sizing: 0.875rem;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][size~='x-small']) {--slds-c-icon-sizing: 1rem;}" : hostSelector + "[size~='x-small'][data-render-mode=\"shadow\"] {--slds-c-icon-sizing: 1rem;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][size~='small']) {--slds-c-icon-sizing: 1.5rem;}" : hostSelector + "[size~='small'][data-render-mode=\"shadow\"] {--slds-c-icon-sizing: 1.5rem;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][size~='large']) {--slds-c-icon-sizing: 3rem;}" : hostSelector + "[size~='large'][data-render-mode=\"shadow\"] {--slds-c-icon-sizing: 3rem;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant~='warning']) {--slds-c-icon-color-foreground: var(--sds-g-color-warning-base-4);}" : hostSelector + "[variant~='warning'][data-render-mode=\"shadow\"] {--slds-c-icon-color-foreground: var(--sds-g-color-warning-base-4);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant~='success']) {--slds-c-icon-color-foreground: var(--sds-g-color-success-base-contrast-1);}" : hostSelector + "[variant~='success'][data-render-mode=\"shadow\"] {--slds-c-icon-color-foreground: var(--sds-g-color-success-base-contrast-1);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant~='error']) {--slds-c-icon-color-foreground: var(--sds-g-color-error-base-contrast-1);}" : hostSelector + "[variant~='error'][data-render-mode=\"shadow\"] {--slds-c-icon-color-foreground: var(--sds-g-color-error-base-contrast-1);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant~='light']) {--slds-c-icon-color-foreground: var(--sds-g-color-neutral-base-contrast-1);}" : hostSelector + "[variant~='light'][data-render-mode=\"shadow\"] {--slds-c-icon-color-foreground: var(--sds-g-color-neutral-base-contrast-1);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='boundary']" + shadowSelector + " {--sds-c-icon-radius-border: var(--slds-c-icon-radius-border, var(--sds-g-radius-border-2, 0.25rem));--sds-c-icon-sizing-border: var(--slds-c-icon-sizing-border);--sds-c-icon-color-border: var(--slds-c-icon-color-border);--sds-c-icon-spacing-block-start: var(\n --slds-c-icon-spacing-block-start,\n var(--slds-c-icon-spacing-block)\n );--sds-c-icon-spacing-block-end: var(--slds-c-icon-spacing-block-end, var(--slds-c-icon-spacing-block));--sds-c-icon-spacing-inline-start: var(\n --slds-c-icon-spacing-inline-start,\n var(--slds-c-icon-spacing-inline)\n );--sds-c-icon-spacing-inline-end: var(--slds-c-icon-spacing-inline-end, var(--slds-c-icon-spacing-inline));display: inline-flex;}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='boundary']" + shadowSelector + " {--sds-c-icon-radius-border: var(--slds-c-icon-radius-border, var(--sds-g-radius-border-2, 0.25rem));--sds-c-icon-sizing-border: var(--slds-c-icon-sizing-border);--sds-c-icon-color-border: var(--slds-c-icon-color-border);--sds-c-icon-spacing-block-start: var(\n --slds-c-icon-spacing-block-start,\n var(--slds-c-icon-spacing-block)\n );--sds-c-icon-spacing-block-end: var(--slds-c-icon-spacing-block-end, var(--slds-c-icon-spacing-block));--sds-c-icon-spacing-inline-start: var(\n --slds-c-icon-spacing-inline-start,\n var(--slds-c-icon-spacing-inline)\n );--sds-c-icon-spacing-inline-end: var(--slds-c-icon-spacing-inline-end, var(--slds-c-icon-spacing-inline));display: inline-flex;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='icon']" + shadowSelector + " {--sds-c-icon-color-foreground: var(--slds-c-icon-color-foreground, var(--sds-g-color-neutral-base-1));--sds-c-icon-sizing-height: var(--slds-c-icon-sizing-height, var(--slds-c-icon-sizing, 2rem));--sds-c-icon-sizing-width: var(--slds-c-icon-sizing-width, var(--slds-c-icon-sizing, 2rem));}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='icon']" + shadowSelector + " {--sds-c-icon-color-foreground: var(--slds-c-icon-color-foreground, var(--sds-g-color-neutral-base-1));--sds-c-icon-sizing-height: var(--slds-c-icon-sizing-height, var(--slds-c-icon-sizing, 2rem));--sds-c-icon-sizing-width: var(--slds-c-icon-sizing-width, var(--slds-c-icon-sizing, 2rem));}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][icon-name*='action']) {--slds-c-icon-spacing-block: 0.5rem;--slds-c-icon-spacing-inline: 0.5rem;--slds-c-icon-radius-border: 50%;}" : hostSelector + "[icon-name*='action'][data-render-mode=\"shadow\"] {--slds-c-icon-spacing-block: 0.5rem;--slds-c-icon-spacing-inline: 0.5rem;--slds-c-icon-radius-border: 50%;}")) + "}" + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) .slds-icon-text-default" + shadowSelector + " {--slds-c-icon-color-foreground: var(\n --slds-c-icon-color-foreground-default,\n var(--sds-c-icon-color-foreground-default, #706e6b)\n );}" : hostSelector + "[data-render-mode=\"shadow\"] .slds-icon-text-default" + shadowSelector + " {--slds-c-icon-color-foreground: var(\n --slds-c-icon-color-foreground-default,\n var(--sds-c-icon-color-foreground-default, #706e6b)\n );}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) .slds-icon-text-default.slds-is-disabled" + shadowSelector + " {fill: #dddbda;}" : hostSelector + "[data-render-mode=\"shadow\"] .slds-icon-text-default.slds-is-disabled" + shadowSelector + " {fill: #dddbda;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) .slds-assistive-text" + shadowSelector + " {position: absolute !important;margin: -1px !important;border: 0 !important;padding: 0 !important;width: 1px !important;height: 1px !important;overflow: hidden !important;clip: rect(0 0 0 0) !important;text-transform: none !important;white-space: nowrap !important;}" : hostSelector + "[data-render-mode=\"shadow\"] .slds-assistive-text" + shadowSelector + " {position: absolute !important;margin: -1px !important;border: 0 !important;padding: 0 !important;width: 1px !important;height: 1px !important;overflow: hidden !important;clip: rect(0 0 0 0) !important;text-transform: none !important;white-space: nowrap !important;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) .slds-icon_disabled" + shadowSelector + " {background-color: currentColor;}" : hostSelector + "[data-render-mode=\"shadow\"] .slds-icon_disabled" + shadowSelector + " {background-color: currentColor;}"));
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];