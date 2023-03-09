function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]:focus) {outline: 0;}" : hostSelector + ":focus[data-render-mode=\"shadow\"] {outline: 0;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='button']" + shadowSelector + " {display: inline-flex;position: relative;background: none;background-color: var(--sds-c-button-color-background, var(--sds-s-button-color-background, transparent));background-clip: border-box;color: var(--sds-c-button-text-color, var(--sds-s-button-text-color, inherit));padding-left: var(\n --sds-c-button-spacing-inline-start,\n var(--sds-c-button-spacing-inline, var(--sds-s-button-spacing-inline))\n );padding-right: var(\n --sds-c-button-spacing-inline-end,\n var(--sds-c-button-spacing-inline, var(--sds-s-button-spacing-inline))\n );padding-top: var(\n --sds-c-button-spacing-block-start,\n var(--sds-c-button-spacing-block, var(--sds-s-button-spacing-block))\n );padding-bottom: var(\n --sds-c-button-spacing-block-start,\n var(--sds-c-button-spacing-block, var(--sds-s-button-spacing-block))\n );border-width: var(--sds-c-button-sizing-border, var(--sds-s-button-sizing-border, 1px));border-style: solid;border-color: var(--sds-c-button-color-border, var(--sds-s-button-color-border, transparent));border-start-start-radius: var(\n --sds-c-button-radius-border-startstart,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-startstart,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );border-start-end-radius: var(\n --sds-c-button-radius-border-startend,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-startend,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );border-end-start-radius: var(\n --sds-c-button-radius-border-endstart,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-endstart,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );border-end-end-radius: var(\n --sds-c-button-radius-border-endend,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-endend,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );box-shadow: var(--sds-c-button-shadow, var(--sds-s-button-shadow));width: var(--sds-c-button-sizing-width);line-height: var(--sds-c-button-line-height);white-space: normal;user-select: none;align-items: center;text-decoration: var(--sds-c-button-font-decoration, none);appearance: none;}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='button']" + shadowSelector + " {display: inline-flex;position: relative;background: none;background-color: var(--sds-c-button-color-background, var(--sds-s-button-color-background, transparent));background-clip: border-box;color: var(--sds-c-button-text-color, var(--sds-s-button-text-color, inherit));padding-left: var(\n --sds-c-button-spacing-inline-start,\n var(--sds-c-button-spacing-inline, var(--sds-s-button-spacing-inline))\n );padding-right: var(\n --sds-c-button-spacing-inline-end,\n var(--sds-c-button-spacing-inline, var(--sds-s-button-spacing-inline))\n );padding-top: var(\n --sds-c-button-spacing-block-start,\n var(--sds-c-button-spacing-block, var(--sds-s-button-spacing-block))\n );padding-bottom: var(\n --sds-c-button-spacing-block-start,\n var(--sds-c-button-spacing-block, var(--sds-s-button-spacing-block))\n );border-width: var(--sds-c-button-sizing-border, var(--sds-s-button-sizing-border, 1px));border-style: solid;border-color: var(--sds-c-button-color-border, var(--sds-s-button-color-border, transparent));border-start-start-radius: var(\n --sds-c-button-radius-border-startstart,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-startstart,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );border-start-end-radius: var(\n --sds-c-button-radius-border-startend,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-startend,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );border-end-start-radius: var(\n --sds-c-button-radius-border-endstart,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-endstart,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );border-end-end-radius: var(\n --sds-c-button-radius-border-endend,\n var(\n --sds-c-button-radius-border,\n var(\n --sds-s-button-radius-border-endend,\n var(--sds-s-button-radius-border, var(--sds-g-radius-border-2, 0.25rem))\n )\n )\n );box-shadow: var(--sds-c-button-shadow, var(--sds-s-button-shadow));width: var(--sds-c-button-sizing-width);line-height: var(--sds-c-button-line-height);white-space: normal;user-select: none;align-items: center;text-decoration: var(--sds-c-button-font-decoration, none);appearance: none;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='button']:hover" + shadowSelector + " {--sds-c-button-text-color: var(\n --sds-c-button-text-color-hover,\n var(--sds-s-button-text-color-hover, #0176d3)\n );--sds-c-button-color-background: var(\n --sds-c-button-color-background-hover,\n var(--sds-s-button-color-background-hover)\n );--sds-c-button-color-border: var(--sds-c-button-color-border-hover, var(--sds-s-button-color-border-hover));cursor: pointer;}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='button']:hover" + shadowSelector + " {--sds-c-button-text-color: var(\n --sds-c-button-text-color-hover,\n var(--sds-s-button-text-color-hover, #0176d3)\n );--sds-c-button-color-background: var(\n --sds-c-button-color-background-hover,\n var(--sds-s-button-color-background-hover)\n );--sds-c-button-color-border: var(--sds-c-button-color-border-hover, var(--sds-s-button-color-border-hover));cursor: pointer;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='button']:focus" + shadowSelector + " {--sds-c-button-color-background: var(\n --sds-c-button-color-background-focus,\n var(--sds-s-button-color-background-focus)\n );--sds-c-button-color-border: var(\n --sds-c-button-color-border-focus,\n var(--sds-s-button-color-border-focus, #0176d3)\n );--sds-c-button-text-color: var(\n --sds-c-button-text-color-focus,\n var(--sds-s-button-text-color-focus, #0176d3)\n );--sds-c-button-shadow: var(--sds-c-button-shadow-focus, var(--sds-s-button-shadow-focus, #0176d3 0 0 3px));outline: 0;}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='button']:focus" + shadowSelector + " {--sds-c-button-color-background: var(\n --sds-c-button-color-background-focus,\n var(--sds-s-button-color-background-focus)\n );--sds-c-button-color-border: var(\n --sds-c-button-color-border-focus,\n var(--sds-s-button-color-border-focus, #0176d3)\n );--sds-c-button-text-color: var(\n --sds-c-button-text-color-focus,\n var(--sds-s-button-text-color-focus, #0176d3)\n );--sds-c-button-shadow: var(--sds-c-button-shadow-focus, var(--sds-s-button-shadow-focus, #0176d3 0 0 3px));outline: 0;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='button']:active" + shadowSelector + " {--sds-c-button-text-color: var(\n --sds-c-button-text-color-active,\n var(--sds-s-button-text-color-active, currentColor)\n );--sds-c-button-color-background: var(\n --sds-c-button-color-background-active,\n var(--sds-s-button-color-background-active)\n );--sds-c-button-color-border: var(\n --sds-c-button-color-border-active,\n var(--sds-s-button-color-border-active, #0176d3)\n );}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='button']:active" + shadowSelector + " {--sds-c-button-text-color: var(\n --sds-c-button-text-color-active,\n var(--sds-s-button-text-color-active, currentColor)\n );--sds-c-button-color-background: var(\n --sds-c-button-color-background-active,\n var(--sds-s-button-color-background-active)\n );--sds-c-button-color-border: var(\n --sds-c-button-color-border-active,\n var(--sds-s-button-color-border-active, #0176d3)\n );}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='button']:disabled" + shadowSelector + " {--sds-c-button-text-color: var(--sds-c-button-text-color-disabled, #939393);--sds-c-button-color-background: var(--sds-c-button-color-background-disabled);--sds-c-button-color-border: var(--sds-c-button-color-border-disabled);pointer-events: none;}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='button']:disabled" + shadowSelector + " {--sds-c-button-text-color: var(--sds-c-button-text-color-disabled, #939393);--sds-c-button-color-background: var(--sds-c-button-color-background-disabled);--sds-c-button-color-border: var(--sds-c-button-color-border-disabled);pointer-events: none;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part~='button']:disabled" + shadowSelector + " *" + shadowSelector + " {pointer-events: none;}" : hostSelector + "[data-render-mode=\"shadow\"] [part~='button']:disabled" + shadowSelector + " *" + shadowSelector + " {pointer-events: none;}")) + "@supports (--styling-hooks: '') {" + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"]) [part='button']" + shadowSelector + " {--slds-c-icon-sizing-border: 0;--slds-c-icon-sizing: 0.875rem;--slds-c-icon-color-foreground: var(--slds-c-button-icon-color-foreground, currentColor);--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-radius-border-startstart: var(\n --slds-c-button-neutral-radius-border-startstart,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-startstart, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-radius-border-endstart: var(\n --slds-c-button-radius-border-endstart,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-endstart, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-radius-border-startend: var(\n --slds-c-button-radius-border-startend,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-startend, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-radius-border-endend: var(\n --slds-c-button-radius-border-endend,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-endend, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-color-background: var(\n --slds-c-button-neutral-color-background,\n var(--sds-g-color-neutral-base-100, #ffffff)\n );--sds-c-button-color-background-hover: var(\n --slds-c-button-neutral-color-background-hover,\n var(--sds-g-color-neutral-base-95, #f3f3f3)\n );--sds-c-button-color-background-focus: var(\n --slds-c-button-neutral-color-background-focus,\n var(--sds-c-button-color-background-hover)\n );--sds-c-button-color-background-active: var(\n --slds-c-button-neutral-color-background-active,\n var(--sds-g-color-neutral-base-90, #e5e5e5)\n );--sds-c-button-color-border: var(\n --slds-c-button-neutral-color-border,\n var(--sds-g-color-neutral-base-80, #c9c9c9)\n );--sds-c-button-color-border-hover: var(\n --slds-c-button-neutral-color-border-hover,\n var(--sds-g-color-neutral-base-80, #c9c9c9)\n );--sds-c-button-color-border-focus: var(\n --slds-c-button-neutral-color-border-focus,\n var(--sds-c-button-color-border-hover)\n );--sds-c-button-color-border-active: var(--slds-c-button-neutral-color-border-active);--sds-c-button-text-color: var(--slds-c-button-neutral-text-color, var(--sds-g-color-brand-base-40, #0b5cab));--sds-c-button-text-color-hover: var(\n --slds-c-button-neutral-text-color-hover,\n var(--sds-g-color-brand-base-10, #001639)\n );--sds-c-button-text-color-focus: var(--slds-c-button-neutral-text-color-focus);--sds-c-button-text-color-active: var(\n --slds-c-button-neutral-text-color-active,\n var(--sds-g-color-brand-base-10, #001639)\n );--sds-c-button-shadow: var(--slds-c-button-neutral-shadow);--sds-c-button-shadow-focus: var(--slds-c-button-neutral-shadow-focus);--sds-c-button-color-border-disabled: var(\n --slds-c-button-neutral-color-border-disabled,\n var(--sds-g-color-neutral-base-90, #e5e5e5)\n );--sds-c-button-text-color-disabled: var(--slds-c-button-neutral-text-color-disabled);--sds-c-button-color-background-disabled: var(--slds-c-button-neutral-color-background-disabled);}" : hostSelector + "[data-render-mode=\"shadow\"] [part='button']" + shadowSelector + " {--slds-c-icon-sizing-border: 0;--slds-c-icon-sizing: 0.875rem;--slds-c-icon-color-foreground: var(--slds-c-button-icon-color-foreground, currentColor);--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-radius-border-startstart: var(\n --slds-c-button-neutral-radius-border-startstart,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-startstart, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-radius-border-endstart: var(\n --slds-c-button-radius-border-endstart,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-endstart, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-radius-border-startend: var(\n --slds-c-button-radius-border-startend,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-startend, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-radius-border-endend: var(\n --slds-c-button-radius-border-endend,\n var(\n --slds-c-button-neutral-radius-border,\n var(--slds-s-button-radius-border-endend, var(--slds-s-button-radius-border))\n )\n );--sds-c-button-color-background: var(\n --slds-c-button-neutral-color-background,\n var(--sds-g-color-neutral-base-100, #ffffff)\n );--sds-c-button-color-background-hover: var(\n --slds-c-button-neutral-color-background-hover,\n var(--sds-g-color-neutral-base-95, #f3f3f3)\n );--sds-c-button-color-background-focus: var(\n --slds-c-button-neutral-color-background-focus,\n var(--sds-c-button-color-background-hover)\n );--sds-c-button-color-background-active: var(\n --slds-c-button-neutral-color-background-active,\n var(--sds-g-color-neutral-base-90, #e5e5e5)\n );--sds-c-button-color-border: var(\n --slds-c-button-neutral-color-border,\n var(--sds-g-color-neutral-base-80, #c9c9c9)\n );--sds-c-button-color-border-hover: var(\n --slds-c-button-neutral-color-border-hover,\n var(--sds-g-color-neutral-base-80, #c9c9c9)\n );--sds-c-button-color-border-focus: var(\n --slds-c-button-neutral-color-border-focus,\n var(--sds-c-button-color-border-hover)\n );--sds-c-button-color-border-active: var(--slds-c-button-neutral-color-border-active);--sds-c-button-text-color: var(--slds-c-button-neutral-text-color, var(--sds-g-color-brand-base-40, #0b5cab));--sds-c-button-text-color-hover: var(\n --slds-c-button-neutral-text-color-hover,\n var(--sds-g-color-brand-base-10, #001639)\n );--sds-c-button-text-color-focus: var(--slds-c-button-neutral-text-color-focus);--sds-c-button-text-color-active: var(\n --slds-c-button-neutral-text-color-active,\n var(--sds-g-color-brand-base-10, #001639)\n );--sds-c-button-shadow: var(--slds-c-button-neutral-shadow);--sds-c-button-shadow-focus: var(--slds-c-button-neutral-shadow-focus);--sds-c-button-color-border-disabled: var(\n --slds-c-button-neutral-color-border-disabled,\n var(--sds-g-color-neutral-base-90, #e5e5e5)\n );--sds-c-button-text-color-disabled: var(--slds-c-button-neutral-text-color-disabled);--sds-c-button-color-background-disabled: var(--slds-c-button-neutral-color-background-disabled);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant='brand'])::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(\n --slds-c-button-brand-color-background,\n var(--sds-g-color-brand-base-50, #0176d3)\n );--sds-c-button-color-border: var(--slds-c-button-brand-color-border, var(--sds-g-color-brand-base-50, #0176d3));--sds-c-button-color-border-hover: var(\n --slds-c-button-brand-color-border-hover,\n var(--sds-g-color-brand-base-40, #0b5cab)\n );--sds-c-button-color-border-focus: var(\n --slds-c-button-brand-color-border-focus,\n var(--slds-c-button-brand-color-border-hover)\n );--sds-c-button-color-border-active: var(\n --slds-c-button-brand-color-border-active,\n var(--slds-c-button-brand-color-background-active)\n );--sds-c-button-text-color: var(--slds-c-button-brand-text-color, var(--sds-g-color-brand-base-100, #ffffff));--sds-c-button-color-background-hover: var(\n --slds-c-button-brand-color-background-hover,\n var(--sds-g-color-brand-base-40, #0b5cab)\n );--sds-c-button-color-background-focus: var(\n --slds-c-button-brand-color-background-focus,\n var(--sds-g-color-brand-base-40, #0b5cab)\n );--sds-c-button-color-background-active: var(\n --slds-c-button-brand-color-background-active,\n var(--sds-g-color-brand-base-10, #001639)\n );--sds-c-button-text-color-hover: var(\n --slds-c-button-brand-text-color-hover,\n var(--sds-g-color-brand-base-100, #ffffff)\n );--sds-c-button-text-color-active: var(\n --slds-c-button-brand-text-color-active,\n var(--sds-g-color-brand-base-100, #ffffff)\n );--sds-c-button-text-color-focus: var(\n --slds-c-button-brand-text-color-focus,\n var(--slds-c-button-brand-text-color-hover)\n );--sds-c-button-color-background-disabled: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-border-disabled: var(--sds-c-button-color-background-disabled);--sds-c-button-text-color-disabled: var(--sds-g-color-neutral-base-100, #ffffff);}" : hostSelector + "[variant='brand'][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(\n --slds-c-button-brand-color-background,\n var(--sds-g-color-brand-base-50, #0176d3)\n );--sds-c-button-color-border: var(--slds-c-button-brand-color-border, var(--sds-g-color-brand-base-50, #0176d3));--sds-c-button-color-border-hover: var(\n --slds-c-button-brand-color-border-hover,\n var(--sds-g-color-brand-base-40, #0b5cab)\n );--sds-c-button-color-border-focus: var(\n --slds-c-button-brand-color-border-focus,\n var(--slds-c-button-brand-color-border-hover)\n );--sds-c-button-color-border-active: var(\n --slds-c-button-brand-color-border-active,\n var(--slds-c-button-brand-color-background-active)\n );--sds-c-button-text-color: var(--slds-c-button-brand-text-color, var(--sds-g-color-brand-base-100, #ffffff));--sds-c-button-color-background-hover: var(\n --slds-c-button-brand-color-background-hover,\n var(--sds-g-color-brand-base-40, #0b5cab)\n );--sds-c-button-color-background-focus: var(\n --slds-c-button-brand-color-background-focus,\n var(--sds-g-color-brand-base-40, #0b5cab)\n );--sds-c-button-color-background-active: var(\n --slds-c-button-brand-color-background-active,\n var(--sds-g-color-brand-base-10, #001639)\n );--sds-c-button-text-color-hover: var(\n --slds-c-button-brand-text-color-hover,\n var(--sds-g-color-brand-base-100, #ffffff)\n );--sds-c-button-text-color-active: var(\n --slds-c-button-brand-text-color-active,\n var(--sds-g-color-brand-base-100, #ffffff)\n );--sds-c-button-text-color-focus: var(\n --slds-c-button-brand-text-color-focus,\n var(--slds-c-button-brand-text-color-hover)\n );--sds-c-button-color-background-disabled: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-border-disabled: var(--sds-c-button-color-background-disabled);--sds-c-button-text-color-disabled: var(--sds-g-color-neutral-base-100, #ffffff);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant='brand-outline'])::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-border: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-text-color: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-color-border-hover: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-color-background-hover: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-focus: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-active: var(--sds-g-color-neutral-base-90, #e5e5e5);--sds-c-button-text-color-hover: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-text-color-active: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-color-border-disabled: var(--sds-g-color-neutral-base-90, #e5e5e5);}" : hostSelector + "[variant='brand-outline'][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-border: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-text-color: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-color-border-hover: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-color-background-hover: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-focus: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-active: var(--sds-g-color-neutral-base-90, #e5e5e5);--sds-c-button-text-color-hover: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-text-color-active: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-color-border-disabled: var(--sds-g-color-neutral-base-90, #e5e5e5);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant='inverse'])::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: transparent;--sds-c-button-color-background-hover: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-background-focus: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-background-active: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-border: var(--sds-g-color-brand-base-100, #ffffff);--sds-c-button-text-color: var(--sds-g-color-brand-base-100, #ffffff);--sds-c-button-text-color-hover: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-text-color-active: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-color-border-hover: var(--sds-g-color-brand-base-100, #ffffff);--sds-c-button-color-border-disabled: var(--sds-g-color-neutral-base-60, #939393);}" : hostSelector + "[variant='inverse'][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: transparent;--sds-c-button-color-background-hover: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-background-focus: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-background-active: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-border: var(--sds-g-color-brand-base-100, #ffffff);--sds-c-button-text-color: var(--sds-g-color-brand-base-100, #ffffff);--sds-c-button-text-color-hover: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-text-color-active: var(--sds-g-color-brand-base-50, #0176d3);--sds-c-button-color-border-hover: var(--sds-g-color-brand-base-100, #ffffff);--sds-c-button-color-border-disabled: var(--sds-g-color-neutral-base-60, #939393);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant='destructive'])::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-color-border: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-color-border-hover: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-text-color: var(--sds-g-color-error-base-100, #ffffff);--sds-c-button-color-background-hover: var(--sds-g-color-error-base-30, #8e030f);--sds-c-button-color-background-focus: var(--sds-g-color-error-base-30, #8e030f);--sds-c-button-color-background-active: var(--sds-g-color-error-base-20, #640103);--sds-c-button-text-color-hover: var(--sds-g-color-error-base-100, #ffffff);--sds-c-button-text-color-active: var(--sds-g-color-error-base-100, #ffffff);--sds-c-button-color-background-disabled: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-border-disabled: var(--sds-c-button-color-background-disabled);--sds-c-button-text-color-disabled: var(--sds-g-color-neutral-base-100, #ffffff);}" : hostSelector + "[variant='destructive'][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-color-border: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-color-border-hover: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-text-color: var(--sds-g-color-error-base-100, #ffffff);--sds-c-button-color-background-hover: var(--sds-g-color-error-base-30, #8e030f);--sds-c-button-color-background-focus: var(--sds-g-color-error-base-30, #8e030f);--sds-c-button-color-background-active: var(--sds-g-color-error-base-20, #640103);--sds-c-button-text-color-hover: var(--sds-g-color-error-base-100, #ffffff);--sds-c-button-text-color-active: var(--sds-g-color-error-base-100, #ffffff);--sds-c-button-color-background-disabled: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-border-disabled: var(--sds-c-button-color-background-disabled);--sds-c-button-text-color-disabled: var(--sds-g-color-neutral-base-100, #ffffff);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant='success'])::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-success-base-50, #2e844a);--sds-c-button-color-border: var(--sds-g-color-success-base-50, #2e844a);--sds-c-button-color-border-hover: var(--sds-g-color-success-base-50, #2e844a);--sds-c-button-text-color: var(--sds-g-color-success-base-100, #ffffff);--sds-c-button-color-background-hover: var(--sds-g-color-success-base-40, #22683e);--sds-c-button-color-background-focus: var(--sds-g-color-success-base-40, #22683e);--sds-c-button-color-background-active: var(--sds-g-color-success-base-30, #194e31);--sds-c-button-text-color-hover: var(--sds-g-color-success-base-100, #ffffff);--sds-c-button-text-color-active: var(--sds-g-color-success-base-100, #ffffff);--sds-c-button-color-background-disabled: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-border-disabled: var(--sds-c-button-color-background-disabled);--sds-c-button-text-color-disabled: var(--sds-g-color-neutral-base-100, #ffffff);}" : hostSelector + "[variant='success'][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-success-base-50, #2e844a);--sds-c-button-color-border: var(--sds-g-color-success-base-50, #2e844a);--sds-c-button-color-border-hover: var(--sds-g-color-success-base-50, #2e844a);--sds-c-button-text-color: var(--sds-g-color-success-base-100, #ffffff);--sds-c-button-color-background-hover: var(--sds-g-color-success-base-40, #22683e);--sds-c-button-color-background-focus: var(--sds-g-color-success-base-40, #22683e);--sds-c-button-color-background-active: var(--sds-g-color-success-base-30, #194e31);--sds-c-button-text-color-hover: var(--sds-g-color-success-base-100, #ffffff);--sds-c-button-text-color-active: var(--sds-g-color-success-base-100, #ffffff);--sds-c-button-color-background-disabled: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-border-disabled: var(--sds-c-button-color-background-disabled);--sds-c-button-text-color-disabled: var(--sds-g-color-neutral-base-100, #ffffff);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant='destructive-text'])::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-border: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-text-color: var(--sds-g-color-error-base-50, #ea001e);--sds-c-button-color-border-hover: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-background-hover: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-focus: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-active: var(--sds-g-color-neutral-base-90, #e5e5e5);--sds-c-button-text-color-hover: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-text-color-active: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-color-border-disabled: var(--sds-g-color-neutral-base-90, #e5e5e5);}" : hostSelector + "[variant='destructive-text'][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-line-height: var(--slds-s-button-font-lineheight, 1.875rem);--sds-c-button-spacing-inline: var(--slds-s-button-spacing-inline, 1rem);--sds-c-button-color-background: var(--sds-g-color-neutral-base-100, #ffffff);--sds-c-button-color-border: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-text-color: var(--sds-g-color-error-base-50, #ea001e);--sds-c-button-color-border-hover: var(--sds-g-color-neutral-base-80, #c9c9c9);--sds-c-button-color-background-hover: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-focus: var(--sds-g-color-neutral-base-95, #f3f3f3);--sds-c-button-color-background-active: var(--sds-g-color-neutral-base-90, #e5e5e5);--sds-c-button-text-color-hover: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-text-color-active: var(--sds-g-color-error-base-40, #ba0517);--sds-c-button-color-border-disabled: var(--sds-g-color-neutral-base-90, #e5e5e5);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][variant='base'])::part(button),:host([data-render-mode=\"shadow\"][variant='text'])::part(button) {--sds-c-button-spacing-inline: 0.25rem;--sds-c-button-text-color: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-color-border: transparent;--sds-c-button-color-border-hover: transparent;--sds-c-button-color-border-focus: transparent;--sds-c-button-color-background-hover: transparent;--sds-c-button-color-background-active: transparent;}" : hostSelector + "[variant='base'][data-render-mode=\"shadow\"]::part(button)," + hostSelector + "[variant='text'][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-spacing-inline: 0.25rem;--sds-c-button-text-color: var(--sds-g-color-brand-base-40, #0b5cab);--sds-c-button-color-border: transparent;--sds-c-button-color-border-hover: transparent;--sds-c-button-color-border-focus: transparent;--sds-c-button-color-background-hover: transparent;--sds-c-button-color-background-active: transparent;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"][stretch])::part(button) {--sds-c-button-width: 100%;}" : hostSelector + "[stretch][data-render-mode=\"shadow\"]::part(button) {--sds-c-button-width: 100%;}")) + ((useActualHostSelector ? ":host(:not([variant='base'], [variant='text']))::part(button) {justify-content: center;}" : hostSelector + ":not([variant='base'], [variant='text'])::part(button) {justify-content: center;}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"])::part(start) {display: inline-flex;padding-inline-end: var(--sds-g-spacing-2, 0.5rem);}" : hostSelector + "[data-render-mode=\"shadow\"]::part(start) {display: inline-flex;padding-inline-end: var(--sds-g-spacing-2, 0.5rem);}")) + ((useActualHostSelector ? ":host([data-render-mode=\"shadow\"])::part(end) {display: inline-flex;padding-inline-start: var(--sds-g-spacing-2, 0.5rem);}" : hostSelector + "[data-render-mode=\"shadow\"]::part(end) {display: inline-flex;padding-inline-start: var(--sds-g-spacing-2, 0.5rem);}")) + "}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];