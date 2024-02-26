# Component JS Template

```js
import BaseComponent from "./base-component";

/**
 * A custom component that extends the base component.
 * @extends BaseComponent
 */
class Component extends BaseComponent {
  /**
   * Creates an instance of Component.
   * @param {HTMLElement} element - The DOM element to which the component is attached.
   * @param {Object} [options={}] - Options for configuring the component.
   */
  constructor(element, options = {}) {
    super(element);

    this.element = element;

    /**
     * Default configs for the component.
     */
    this.defaultConfigs = {};

    /**
     * Used configs for the component after merging/overriding defaults with custom options.
     */
    this.usedConfigs = { ...this.defaultConfigs, ...options };

    /**
     * The initial state of the component.
     */
    this.initialState = {
      /*  Example:
          checked: this.element.checked,
          disabled: this.element.disabled
      */
    };

    /**
     * The current state of the component, initialized with the initial state.
     */
    this.currentState = { ...this.initialState };

    this.parts = {
      /*  Example:
	      wrapper: this.#_createWrapper(),
          clearButton: this.#_createClearButton()
      */
    };

    /**
     * Custom events associated with the component.
     */
    this.customEvents = {
      /*  Example:
          initialize: new CustomEvent('custom:initialize', {
            bubbles: true,
            cancelable: true,
            detail: {
              message: 'Component initialized.'
            }
          }),
          
          loadSuccess: new CustomEvent('custom:load', {
            bubbles: true,
            cancelable: true,
            detail: {
              message: 'Data load successful.'
            }
          }),
          
          loadError: new CustomEvent('custom:load', {
            bubbles: true,
            cancelable: true,
            detail: {
              message: 'Error while loading data.'
            }
          })
      */
    };

    this.handlers = {
      /*  Example:
          clearButtonClick: this.#_handleClearButtonClick.bind(this),
          initialize: (event) => {
            console.log(event.detail.message);
          }
      */
    };

    this.#_init();
  }

  /**
   * Private method to initialize the component.
   * @private
   */
  #_init() {
    /*  Example:
    	this.element.addEventListener('click', this.handlers.clearButtonClick);
	    this.element.addEventListener('custom:initialize', this.handlers.initialize);
	    
	    this.element.dispatchEvent(this.customEvents.initialize);
    */
  }

  /**
   * Sets a new state for the component and re-renders the component if needed.
   * @param {Object} state - The new state to set.
   */
  setState(state) {
    /*  Example:
        this.currentState = { ...this.currentState, ...state };
    */
  }

  /**
   * Gets the input value of the component.
   * @returns {*} - The value to get.
   */
  getValue() {}

  /**
   * Sets an input value to the component.
   * @param {*} value - The value to set.
   */
  setValue(value) {}

  /**
   * Resets the component to its initial state.
   */
  reset() {}

  /**
   * Shows the component.
   */
  show() {}

  /**
   * Hides the component.
   */
  hide() {}

  /**
   * Destroys the component and performs cleanup.
   */
  destroy() {}
}

export default Component;
```
