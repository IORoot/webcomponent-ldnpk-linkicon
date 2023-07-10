import { twind, cssom, observe, install } from "@twind/core";
import "construct-style-sheets-polyfill";
import config from "../../twind.config.js";

// links
// https://css-tricks.com/a-complete-guide-to-links-and-buttons/


// ╭───────────────────────────────────────────────────────╮
// │                   Add the template                    │
// ╰───────────────────────────────────────────────────────╯
const template = document.createElement('template');

// ╭───────────────────────────────────────────────────────╮
// │              INCLUDES / LINKS / SCRIPTS               │
// ╰───────────────────────────────────────────────────────╯
let html = /* html */` 

`;

// ╭───────────────────────────────────────────────────────╮
// │                      STYLESHEET                       │
// ╰───────────────────────────────────────────────────────╯
html += /* html */` 
    <style>

        :host {
            /* Variables  */
            --glyphColour:      var(--color-black);
        }

        

        a {
            /* Position */
            position: relative;
            display: inline-block;

            /* Size  */

            /* Presentation  */
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
            fill: var(--glyphColour);
        }



    /*  ╭───────────────────────────────────╮
        │ HOVER STATE                       │
        ╰───────────────────────────────────╯ */
        a:hover {
            /* Presentation  */

        }

    /*  ╭───────────────────────────────────╮
        │ FOCUS STATE                       │
        ╰───────────────────────────────────╯ */
        a:focus {
            /* Presentation  */ 
            outline: 1px solid #333333;
        }
        

    </style>
`;


// ╭───────────────────────────────────────────────────────╮
// │                       TEMPLATE                        │
// ╰───────────────────────────────────────────────────────╯
html += /* html */`
    <a id="link" class="
        inline-flex
        flex-row
        hover:underline
        hover:underline-offset-4
        hover:decoration-blue-400
        hover:fill-blue-400
        gap-0           sm:gap-1
        text-xs         sm:text-sm      md:text-base
        leading-4       sm:leading-6
        ">

            <slot></slot>
            <div class="w-4 h-4 sm:h-6 m-auto flex">
                <slot name="icon">
                    <svg id="chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </slot>
            </div>

    </a>
`;

// ╭───────────────────────────────────────────────────────╮
// │                    ADD TO TEMPLATE                    │
// ╰───────────────────────────────────────────────────────╯
template.innerHTML = html

// ╭───────────────────────────────────────────────────────╮
// │                  DEFINE WEBCOMPONENT                  │
// ╰───────────────────────────────────────────────────────╯
class LinkIcon extends HTMLElement {

    constructor() {

        // SETUP 
        super();
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(clone);

        // TWIND Setup
        const sheet = cssom(new CSSStyleSheet());
        const tw = twind(config, sheet);
        const theshadowRoot = this.shadowRoot;
        theshadowRoot.adoptedStyleSheets = [sheet.target];
        observe(tw, theshadowRoot);

        const element = this.shadowRoot.querySelector("a");

        // Set classes on navbar
        element.classList.add(...this.classAttribute);

        // HREF
        element.href = this.hrefAttribute;

        // target
        element.target = this.targetAttribute;

        // rel
        element.rel = this.relAttribute;

        // title
        element.rel = this.titleAttribute;

    }

    // ╭───────────────────────────────────────────────────────╮
    // │                   GETTERS / SETTERS                   │
    // ╰───────────────────────────────────────────────────────╯
    get hrefAttribute() {
        return this.getAttribute("href");
    }

    get targetAttribute() {
        return this.getAttribute("target");
    }

    get relAttribute() {
        return this.getAttribute("rel");
    }

    get titleAttribute() {
        return this.getAttribute("title");
    }

    get classAttribute() {
        return this.classList;
    }

}

customElements.define("ldnpk-linkicon", LinkIcon);