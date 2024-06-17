const DEFAULT_TAB_BOX_OPTIONS = {
    activeClassName: "active",
    menuItemClassName: "tab__menu-item",
    menuItemDataKeyName: "key",
    bodyItemClassName: "tab__body-item",
    bodyItemDataIdName: "id",
    wrapperClassName: "tab"
}

const DEFAULT_CSS = `
.%__WRAPPER_CLASS_NAME__% {
    width: 90%;
    display: flex;
    flex-direction: column;
}

.%__WRAPPER_CLASS_NAME__% .tab__menu {
    width: 100%;
    display: flex;
}

.%__WRAPPER_CLASS_NAME__% .tab__menu .%__TAB_MENU_ITEM_CLASS__% {
    padding: 8px 12px;
    text-align: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
}

.%__WRAPPER_CLASS_NAME__% .tab__menu .%__TAB_MENU_ITEM_CLASS__%:hover {
    border-bottom: 2px solid orange;
}

.%__WRAPPER_CLASS_NAME__% .tab__menu .%__TAB_MENU_ITEM_CLASS__%.%__ACTIVE_CLASS__% {
    border-bottom: 2px solid orange;
}

.%__WRAPPER_CLASS_NAME__% .tab__body {
    padding: 20px;
    border: 1px solid lightgray;
}

.%__WRAPPER_CLASS_NAME__% .tab__body .%__TAB_BODY_ITEM_CLASS__%:not(.%__ACTIVE_CLASS__%) {
    display: none;
}

.%__WRAPPER_CLASS_NAME__% .tab__body .%__TAB_BODY_ITEM_CLASS__%.%__ACTIVE_CLASS__% {
    display: block;
}
`;

class TabBox {
    #root;
    
    constructor(root, options = { ...DEFAULT_TAB_BOX_OPTIONS }) {
        if (typeof root !== "string") throw new Error("Root must be a valid string");
        
        this.options = { ...DEFAULT_TAB_BOX_OPTIONS, ...options };
        
        const root_selector = root.startsWith("#") ? root : `#${root}`;
        
        this.#root = document.querySelector(root_selector);
    }

    #compileCSS = () => {
        let css = DEFAULT_CSS.replaceAll(/%__WRAPPER_CLASS_NAME__%/ig, this.options.wrapperClassName);
        css = css.replaceAll(/%__ACTIVE_CLASS__%/ig, this.options.activeClassName);
        css = css.replaceAll(/%__TAB_MENU_ITEM_CLASS__%/ig, this.options.menuItemClassName);
        css = css.replaceAll(/%__TAB_BODY_ITEM_CLASS__%/ig, this.options.bodyItemClassName);
        css = css.replaceAll(/\n/ig, "")
        
        const $style = document.createElement("style");
        $style.innerHTML = css;
        document.head.appendChild($style);
    }

    #setEventListeners = () => {
        this.#root.addEventListener("click", (event) => {
            // event.preventDefault();

            if (event.target.classList.contains(this.options.menuItemClassName)) {
                // Click on menu item trigger
                // Get data key value from clicked dataset
                const dataKey = event.target.dataset[this.options.menuItemDataKeyName];

                // Remove class active from active item menu btn
                // this.#root.querySelectorAll(`.${this.options.menuItemClassName}`).forEach($el => {
                //     $el.classList.remove(this.options.activeClassName);
                // });
                this.#root.querySelector(`.${this.options.menuItemClassName}.${this.options.activeClassName}`).classList.remove(this.options.activeClassName); // .tab__menu-item.active

                // Add class active on clicked menu item btn
                event.target.classList.add(this.options.activeClassName);

                // Remove active class from active body item
                this.#root.querySelector(`.${this.options.bodyItemClassName}.${this.options.activeClassName}`).classList.remove(this.options.activeClassName); // .tab__body-item.active

                // Add class active on related body item
                this.#root.querySelector(`[data-${this.options.bodyItemDataIdName}="${dataKey}"]`).classList.add(this.options.activeClassName); // [data-id="1"] | [data-id="2"] | ...
            }
        });
    }
    
    init = () => {
        this.#compileCSS();
        this.#setEventListeners();
    }
}

export default TabBox;