/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/assets/scripts/opera-components/_global.js":
/*!********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/_global.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_instance */ "./lib/assets/scripts/opera-components/_instance.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast */ "./lib/assets/scripts/opera-components/toast.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip */ "./lib/assets/scripts/opera-components/tooltip.js");




// Define the Opera object in the window global scope.
// Can pass quick methods, constructors, etc to the window.
// For example, Opera.makeInstances(...)

window.Opera = {
  makeInstances: _instance__WEBPACK_IMPORTED_MODULE_0__.makeInstances,
  ..._instance__WEBPACK_IMPORTED_MODULE_0__.componentMap,
  createToast: _toast__WEBPACK_IMPORTED_MODULE_1__.createToast,
  createTooltip: _tooltip__WEBPACK_IMPORTED_MODULE_2__.createTooltip,
};


/***/ }),

/***/ "./lib/assets/scripts/opera-components/_instance.js":
/*!**********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/_instance.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   componentMap: () => (/* binding */ componentMap),
/* harmony export */   makeInstances: () => (/* binding */ makeInstances),
/* harmony export */   uiInstance: () => (/* binding */ uiInstance)
/* harmony export */ });
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "./lib/assets/scripts/opera-components/accordion.js");
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb */ "./lib/assets/scripts/opera-components/breadcrumb.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./lib/assets/scripts/opera-components/button.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox */ "./lib/assets/scripts/opera-components/checkbox.js");
/* harmony import */ var _content_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-navigation */ "./lib/assets/scripts/opera-components/content-navigation.js");
/* harmony import */ var _date_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-picker */ "./lib/assets/scripts/opera-components/date-picker.js");
/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chip */ "./lib/assets/scripts/opera-components/chip.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown */ "./lib/assets/scripts/opera-components/dropdown.js");
/* harmony import */ var _fieldset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fieldset */ "./lib/assets/scripts/opera-components/fieldset.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form */ "./lib/assets/scripts/opera-components/form.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal */ "./lib/assets/scripts/opera-components/modal.js");
/* harmony import */ var _number_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./number-input */ "./lib/assets/scripts/opera-components/number-input.js");
/* harmony import */ var _overflow_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overflow-menu */ "./lib/assets/scripts/opera-components/overflow-menu.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pagination */ "./lib/assets/scripts/opera-components/pagination.js");
/* harmony import */ var _password_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./password-input */ "./lib/assets/scripts/opera-components/password-input.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./radio */ "./lib/assets/scripts/opera-components/radio.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select */ "./lib/assets/scripts/opera-components/select.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./spinner */ "./lib/assets/scripts/opera-components/spinner.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tabs */ "./lib/assets/scripts/opera-components/tabs.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tag */ "./lib/assets/scripts/opera-components/tag.js");
/* harmony import */ var _text_area__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./text-area */ "./lib/assets/scripts/opera-components/text-area.js");
/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./text-field */ "./lib/assets/scripts/opera-components/text-field.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./toast */ "./lib/assets/scripts/opera-components/toast.js");
/* harmony import */ var _toggle_group__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./toggle-group */ "./lib/assets/scripts/opera-components/toggle-group.js");
/* harmony import */ var _toggle_switch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./toggle-switch */ "./lib/assets/scripts/opera-components/toggle-switch.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tooltip */ "./lib/assets/scripts/opera-components/tooltip.js");
/* harmony import */ var _tree_navigation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tree-navigation */ "./lib/assets/scripts/opera-components/tree-navigation.js");




























const componentMap = {
  accordion: _accordion__WEBPACK_IMPORTED_MODULE_0__["default"],
  breadcrumb: _breadcrumb__WEBPACK_IMPORTED_MODULE_1__["default"],
  button: _button__WEBPACK_IMPORTED_MODULE_2__["default"],
  checkbox: _checkbox__WEBPACK_IMPORTED_MODULE_3__["default"],
  'content-navigation': _content_navigation__WEBPACK_IMPORTED_MODULE_4__["default"],
  'date-picker': _date_picker__WEBPACK_IMPORTED_MODULE_5__["default"],
  chip: _chip__WEBPACK_IMPORTED_MODULE_6__["default"],
  dropdown: _dropdown__WEBPACK_IMPORTED_MODULE_7__["default"],
  fieldset: _fieldset__WEBPACK_IMPORTED_MODULE_8__["default"],
  form: _form__WEBPACK_IMPORTED_MODULE_9__["default"],
  modal: _modal__WEBPACK_IMPORTED_MODULE_10__["default"],
  'number-input': _number_input__WEBPACK_IMPORTED_MODULE_11__["default"],
  'overflow-menu': _overflow_menu__WEBPACK_IMPORTED_MODULE_12__["default"],
  pagination: _pagination__WEBPACK_IMPORTED_MODULE_13__["default"],
  'password-input': _password_input__WEBPACK_IMPORTED_MODULE_14__["default"],
  radio: _radio__WEBPACK_IMPORTED_MODULE_15__["default"],
  select: _select__WEBPACK_IMPORTED_MODULE_16__["default"],
  spinner: _spinner__WEBPACK_IMPORTED_MODULE_17__["default"],
  tabs: _tabs__WEBPACK_IMPORTED_MODULE_18__["default"],
  tag: _tag__WEBPACK_IMPORTED_MODULE_19__["default"],
  'text-area': _text_area__WEBPACK_IMPORTED_MODULE_20__["default"],
  'text-field': _text_field__WEBPACK_IMPORTED_MODULE_21__["default"],
  toast: _toast__WEBPACK_IMPORTED_MODULE_22__["default"],
  'toggle-group': _toggle_group__WEBPACK_IMPORTED_MODULE_23__["default"],
  'toggle-switch': _toggle_switch__WEBPACK_IMPORTED_MODULE_24__["default"],
  tooltip: _tooltip__WEBPACK_IMPORTED_MODULE_25__["default"],
  'tree-navigation': _tree_navigation__WEBPACK_IMPORTED_MODULE_26__["default"],
};

/**
 * Generates an array of instances of the given component based on a list of HTML elements.
 *
 * @param {NodeList} nodeList - The list of HTML elements to process.
 * @param {String} component - The name of the component  used to create instances.
 * @return {Array}  An array of instances of the component.
 */
function makeInstances(nodeList, component) {
  const nodes = Array.from(nodeList).filter(function (element) {
    return element instanceof HTMLElement;
  });
  let instances = [];

  nodes.forEach((node) => {
    if (!node) return;
    try {
      node._instance = uiInstance(node, component);
      instances.push(node._instance);
    } catch (error) {
      console.log(error);
    }
  });

  return instances.length === 1 ? instances[0] : instances;
}

// Return an Object according to name of component
function uiInstance(node, component) {
  const componentName = component.toLowerCase();
  if (componentMap.hasOwnProperty(componentName)) {
    return new componentMap[componentName](node);
  } else {
    throw new Error('Invalid component');
  }
}


/***/ }),

/***/ "./lib/assets/scripts/opera-components/accordion.js":
/*!**********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/accordion.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Accordion extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the accordion class.
   * @constructor
   * @param {Element} element - The accordion element to be passed to the constructor.
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.isSingleActive =
      this.element.getAttribute('data-accordion') === 'single-active';
    this.accordionItems = Array.from(this.element.children).filter((child) =>
      child.matches('.accordion-item')
    );
    this.activeItem = null;
    this.#_init();
  }

  #_init() {
    this.accordionItems.forEach((item) => {
      const button = item.querySelector('button');
      const isActive = item.classList.contains('active');
      if (isActive) {
        this.activeItem = item;
      }
      if (button.classList.contains('icon-left')) {
        const iconSpan = this.#_createIcons(isActive, 'left');
        button.prepend(iconSpan);
      } else if (button.classList.contains('icon-right')) {
        const iconSpan = this.#_createIcons(isActive, 'right');
        button.appendChild(iconSpan);
      }
      const content = item.querySelector('.accordion-item-content');
      button.addEventListener(
        'click',
        this.#_handleAccordionItemButtonClick.bind(this, item, button, content)
      );
    });
  }

  #_createIcons(isActive, position) {
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('icon-square', 'xlarge');
    const expandIcon = document.createElement('i');
    const collapseIcon = document.createElement('i');

    if (position === 'left') {
      expandIcon.classList.add('expand-icon', 'far', 'fa-plus');
      collapseIcon.classList.add('collapse-icon', 'far', 'fa-minus');
    } else if (position === 'right') {
      expandIcon.classList.add('expand-icon', 'far', 'fa-chevron-down');
      collapseIcon.classList.add('collapse-icon', 'far', 'fa-chevron-up');
    }

    if (isActive) {
      expandIcon.setAttribute('hidden', '');
    } else {
      collapseIcon.setAttribute('hidden', '');
    }

    iconSpan.appendChild(expandIcon);
    iconSpan.appendChild(collapseIcon);
    return iconSpan;
  }

  #_handleAccordionItemButtonClick(item, button, content) {
    if (this.isSingleActive && !content.classList.contains('hidden')) {
      this.activeItem = item;
    }
    const expandIcon = button.querySelector('.expand-icon');
    const collapseIcon = button.querySelector('.collapse-icon');
    const isActiveItem = this.activeItem === item;

    if (this.isSingleActive) {
      if (!isActiveItem && this.activeItem) {
        const activeContent = this.activeItem.querySelector(
          '.accordion-item-content'
        );
        const activeExpandIcon = this.activeItem.querySelector('.expand-icon');
        const activeCollapseIcon =
          this.activeItem.querySelector('.collapse-icon');
        activeContent.classList.add('hidden');
        this.activeItem.classList.remove('active');
        activeExpandIcon.toggleAttribute('hidden');
        activeCollapseIcon.toggleAttribute('hidden');
      }
      content.classList.toggle('hidden');
      item.classList.toggle('active', !isActiveItem);
      expandIcon.toggleAttribute('hidden');
      collapseIcon.toggleAttribute('hidden');
      this.activeItem = isActiveItem ? null : item;
    } else {
      content.classList.toggle('hidden');
      item.classList.toggle('active');
      expandIcon.toggleAttribute('hidden');
      collapseIcon.toggleAttribute('hidden');
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/base-component.js":
/*!***************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/base-component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class BaseComponent {
  constructor(element) {
    this.element = element;
  }

  debug() {
    console.log(this);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseComponent);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/breadcrumb.js":
/*!***********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/breadcrumb.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/convertDataToObject */ "./lib/assets/scripts/utils/convertDataToObject.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _overflow_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overflow-menu */ "./lib/assets/scripts/opera-components/overflow-menu.js");




class Breadcrumb extends _base_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Constructs a new instance of the Breadcrumb class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.dataBreadcrumb = (0,_utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__["default"])(this.element.getAttribute('data-breadcrumb'));
    this.maxShowItems = this.dataBreadcrumb.maxItem;
    this.items = Array.from(this.element.querySelectorAll('.breadcrumb-item'));
    this.update = this.#_handleMaxShowItems.bind(this);
    this.#_init();
  }

  /**
   * Initializes the component
   */
  #_init() {
    // Handle maximum show items
    this.#_handleMaxShowItems();
  }

  /**
   * Handle the maximum show items
   */
  #_handleMaxShowItems() {
    if (!this.maxShowItems || this.maxShowItems < 2 || this.maxShowItems >= this.items.length) {
      return;
    }

    // Remove all items except the first and last child
    this.#_removeItems();

    // Create a document fragment and append the first and last items to it
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.items[0]);
    fragment.appendChild(this.items[this.items.length - 1]);
    this.element.appendChild(fragment);

    // Add overflow menu
    const overflowItems = this.items.slice(1, this.items.length - 1);
    this.element.insertBefore(this.#_createOverflowMenu(overflowItems), this.element.firstChild.nextSibling);
  }

  /**
   * Create an overflow menu element with provided nodes
   * @param {Array} nodes - Array of nodes to be displayed in the overflow menu
   * @returns {HTMLElement} The created overflow menu element
   */
  #_createOverflowMenu(nodes = []) {
    const overflowMenu = document.createElement('li');
    overflowMenu.classList.add('overflow-menu', 'breadcrumb-item', 'p-0');

    overflowMenu.innerHTML = `
    <button class="px-1">...</button>
    <div class="overflow-menu-body bottom-right text-small min-w-fit">
    ${Array.from(nodes)
      .map((node) => node.innerHTML)
      .join(' ')}
    </div>
    `;

    const overflowMenuBody = overflowMenu.querySelector('.overflow-menu-body');
    Array.from(overflowMenuBody.children).forEach((item) => item.classList.add('overflow-menu-item'));

    new _overflow_menu__WEBPACK_IMPORTED_MODULE_2__["default"](overflowMenu);
    return overflowMenu;
  }

  /**
   * Remove all items from the element
   */
  #_removeItems() {
    this.element.innerHTML = '';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/button.js":
/*!*******************************************************!*\
  !*** ./lib/assets/scripts/opera-components/button.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Button extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the button class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
  }

  /**
   * Updates the innerHTML of the element with the provided text.
   *
   * @param {string} text - The text to update the innerHTML with.
   */
  update(text) {
    this.element.innerHTML = text;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/checkbox.js":
/*!*********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/checkbox.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Checkbox extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Checkbox class.
   * @constructor
   * @param {Element} element - The Checkbox element to be passed to the constructor.
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.changeHandler = this.#_handleChange.bind(this);
    this.initialState = {
      checked: this.element.checked,
      indeterminate: this.element.indeterminate,
      disabled: this.element.disabled,
      hidden: this.element.hidden,
    };
    this.#_init();
  }

  /**
   * Resets the state of the element to its initial values.
   */
  reset() {
    this.element.checked = this.initialState.checked;
    this.element.indeterminate = this.initialState.indeterminate;
    this.element.disabled = this.initialState.disabled;
    this.element.hidden = this.initialState.hidden;
    this.element.dispatchEvent(new Event('change'));
    this.#_handleChange();
  }

  /**
   * Create a initial event with callback function is change handler
   */
  #_init() {
    this.element.addEventListener('change', this.changeHandler);
  }

  /**
   * Handles the change event of the element. Including update state of child checkboxes and parent checkboxes
   */
  #_handleChange() {
    this.#_updateChildCheckboxes(this.element);
    this.#_updateParentCheckboxes(this.element);
  }

  #_updateChildCheckboxes(checkbox) {
    const checkboxName = checkbox.getAttribute('name');
    const childCheckboxes = document.querySelectorAll(
      `input[data-checkbox="parent:${checkboxName}"]`
    );

    if (checkbox.checked) {
      // Select all child groupCheckboxes
      childCheckboxes.forEach((childCheckbox) => {
        childCheckbox.checked = true;
        childCheckbox.indeterminate = false;
        // Recursively update children of current child checkbox
        this.#_updateChildCheckboxes(childCheckbox);
      });
    } else {
      // Unselect all child groupCheckboxes
      childCheckboxes.forEach((childCheckbox) => {
        childCheckbox.checked = false;
        childCheckbox.indeterminate = false;
        // Recursively update children of current child checkbox
        this.#_updateChildCheckboxes(childCheckbox);
      });
    }
  }

  #_updateParentCheckboxes(checkbox) {
    let parentCheckboxName;
    if (checkbox.getAttribute('data-checkbox').startsWith('parent:')) {
      parentCheckboxName = checkbox.getAttribute('data-checkbox').substring(7);
    }
    const parentCheckbox = document.querySelector(
      `input[data-checkbox][name="${parentCheckboxName}"]`
    );

    // Check if there is a parent checkbox
    if (parentCheckbox) {
      const siblingCheckboxes = document.querySelectorAll(
        `input[data-checkbox="parent:${parentCheckboxName}"]`
      );

      let allSiblingsChecked = true;
      let anySiblingsChecked = false;
      let anySiblingsIndeterminate = false;

      siblingCheckboxes.forEach((siblingCheckbox) => {
        if (siblingCheckbox.checked) {
          anySiblingsChecked = true;
        } else if (siblingCheckbox.indeterminate) {
          anySiblingsIndeterminate = true;
          allSiblingsChecked = false;
        } else {
          allSiblingsChecked = false;
        }
      });

      parentCheckbox.checked = allSiblingsChecked;
      parentCheckbox.indeterminate =
        !allSiblingsChecked && (anySiblingsChecked || anySiblingsIndeterminate);

      // Update the parent of parentCheckbox recursively
      this.#_updateParentCheckboxes(parentCheckbox);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/chip.js":
/*!*****************************************************!*\
  !*** ./lib/assets/scripts/opera-components/chip.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Chip extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Chip class.
   * @constructor
   * @param {Element} element - The Chip element to be passed to the constructor.
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.colors = ['orange', 'sky', 'violet', 'green', 'red', 'yellow', 'blue'];
    this.selectedColor = this.#_setChipSelectedColor();
    this.chipClickHandler = this.#_handleChipClick.bind(this);
    this.#_init();
  }

  #_init() {
    this.element.addEventListener('click', this.chipClickHandler);
  }

  #_handleChipClick() {
    this.element.classList.toggle(this.selectedColor);
    this.element.classList.toggle('selected');
  }

  #_setChipSelectedColor() {
    let selectedColor = 'orange';
    if (this.colors.includes(this.element.getAttribute('data-chip')))
      selectedColor = this.element.getAttribute('data-chip');
    return selectedColor;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chip);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/contained-label.js":
/*!****************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/contained-label.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContainedLabel)
/* harmony export */ });
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner */ "./lib/assets/scripts/opera-components/spinner.js");


class ContainedLabel {
  /**
   * Constructs a new instance of the ContainedLabel class.
   * @constructor
   * @param {element} element - the element to be assigned
   * @param {text} text - the text to be assigned
   * @param {wrapper} wrapper - the wrapper to be assigned
   */
  constructor(element, text, wrapper) {
    this.element = element;
    this.required = element.required;
    this.text = text;
    this.label = this.#_createLabel();
    this.spinner = null;
    this.wrapper = wrapper;
    this.focusHandler = this.#_handleFocus.bind(this);
    this.#_init();
  }

  #_init() {
    this.#wrapLabelAndElement();
    this.spinner = new _spinner__WEBPACK_IMPORTED_MODULE_0__["default"](this.label);

    if (this.element.value.length > 0) {
      this.label.classList.add('active');
    }
    this.element.addEventListener('focus', this.focusHandler);
  }

  #_createLabel() {
    const label = document.createElement('span');
    label.classList.add('contained-label');
    if (this.required) {
      label.classList.add('required');
    }
    label.textContent = this.text;
    return label;
  }

  #wrapLabelAndElement() {
    this.wrapper.prepend(this.label);
  }

  #_handleFocus() {
    this.label.classList.add('active');
  }

  handleEvent() {
    if (this.element.value.length !== 0) {
      this.label.classList.add('active');
    } else {
      this.label.classList.remove('active');
    }
  }

  activate() {
    this.label.classList.add('active');
  }
}


/***/ }),

/***/ "./lib/assets/scripts/opera-components/content-navigation.js":
/*!*******************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/content-navigation.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prettier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prettier */ "./node_modules/prettier/standalone.mjs");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");



class ContentNavigation extends _base_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(element) {
    super(element);
    this.element = element;
    this.anchors = document.querySelectorAll('[class~="anchor"]');
    this.main = document.querySelector('main');
    this.clickHandler = this.#_handleClick.bind(this);
    this.links = this.#_createLinks();
    this.#_init();
  }

  #_init() {
    this.#_createNavigation();
    this.#_createIntersectionObserver();
  }

  #_createLinks() {
    let links = [];
    this.anchors.forEach((anchor) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      const span = document.createElement('span');
      span.textContent = anchor.textContent;
      button.appendChild(span);
      li.setAttribute('aria-label', anchor.textContent);
      li.classList.add('anchor-link');
      if (anchor.classList.contains('heading')) {
        li.classList.add('heading');
      }
      button.addEventListener('click', this.clickHandler);
      li.appendChild(button);
      links.push(li);
    });
    return links;
  }

  #_createNavigation() {
    const ul = document.createElement('ul');
    this.links.forEach((link) => {
      ul.appendChild(link);
    });

    this.element.appendChild(ul);
  }

  #_handleClick(event) {
    this.anchors.forEach((anchor) => {
      if (anchor.textContent === event.target.textContent) {
        this.main.scrollTo({ top: anchor.offsetTop - this.main.offsetTop - 12, behavior: 'smooth' });
      }
    });
  }

  #_createIntersectionObserver() {
    const observer = new IntersectionObserver(this.#_handleIntersection, {
      root: this.main,
      rootMargin: '0px 0px -96% 0px',
      threshold: 0,
    });
    this.anchors.forEach((anchor) => {
      observer.observe(anchor);
    });
  }

  #_handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('[class~="anchor-link"]').forEach((link) => {
          link.classList.remove('active');
        });
        document
          .querySelector(`[class~="anchor-link"][aria-label="${entry.target.textContent}"]`)
          .classList.add('active');
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentNavigation);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/date-picker.js":
/*!************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/date-picker.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _contained_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contained-label */ "./lib/assets/scripts/opera-components/contained-label.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_plugins_rangePlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr/dist/plugins/rangePlugin */ "./node_modules/flatpickr/dist/plugins/rangePlugin.js");
/* harmony import */ var flatpickr_dist_plugins_rangePlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_plugins_rangePlugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flatpickr_dist_l10n_vn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/l10n/vn.js */ "./node_modules/flatpickr/dist/l10n/vn.js");
/* harmony import */ var flatpickr_dist_l10n_vn_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_vn_js__WEBPACK_IMPORTED_MODULE_4__);






class DatePicker extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the DatePicker class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.calendarButton = this.#_createCalendarButton();
    this.datePickerWrapper = this.#_createDatePickerWrapper();
    this.containedLabel = null;
    this.containedLabelText = this.element.getAttribute('data-label');
    this.secondRangeInput = null;
    this.hasDatePicker = this.element.getAttribute('data-date-picker') !== null;
    this.#_init();
  }

  #_init() {
    if (this.containedLabelText) {
      this.containedLabel = new _contained_label__WEBPACK_IMPORTED_MODULE_1__["default"](
        this.element,
        this.containedLabelText,
        this.datePickerWrapper
      );
    }
    if (this.hasDatePicker) {
      (0,flatpickr__WEBPACK_IMPORTED_MODULE_2__["default"])(
        '#' + this.element.id,
        this.#_setConfigOptions(this.#_parseConfigOptions())
      );
    }
  }

  #_createDatePickerWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('date-picker-wrapper');
    this.element.parentNode.insertBefore(wrapper, this.element);
    wrapper.appendChild(this.element);
    wrapper.appendChild(this.calendarButton);
    return wrapper;
  }

  #_createCalendarButton() {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    button.setAttribute('type', 'button');
    button.classList.add('date-picker-calendar-button');
    icon.classList.add('far', 'fa-calendar');
    button.appendChild(icon);

    return button;
  }

  #_parseConfigOptions() {
    const string = this.element.getAttribute('data-date-picker');
    const array = string.split(' ');
    return array;
  }

  #_setConfigOptions(array) {
    const config = {
      locale: flatpickr_dist_l10n_vn_js__WEBPACK_IMPORTED_MODULE_4__.Vietnamese,
      dateFormat: 'd/m/Y',
      closeOnSelect: false,
      disableMobile: true,
      allowInput: false,
      onValueUpdate: (selectedDates, dateStr, instance) => {
        this.secondRangeInput?._instance.containedLabelInstance?.handleEvent();
        this.containedLabel?.handleEvent();
      },
      onChange: (selectedDates, dateStr, instance) => {
        if (this.secondRangeInput && selectedDates.length < 2) {
          this.secondRangeInput.value = '';
        }
        this.secondRangeInput?._instance.containedLabelInstance?.handleEvent();
        this.containedLabel?.handleEvent();
      },
      onClose: (selectedDates, dateStr, instance) => {
        if (this.secondRangeInput && this.secondRangeInput.value.length === 0) {
          instance.clear(false, false);
        }
        this.secondRangeInput?._instance.containedLabelInstance?.handleEvent();
        this.containedLabel?.handleEvent();
      },
    };

    array.forEach((value) => {
      if (value === 'allowInput') {
        config.allowInput = true;
      } else if (value === 'enableMobile') {
        config.disableMobile = false;
      } else if (value === 'time') {
        config.enableTime = true;
        config.dateFormat = 'd/m/Y H:i';
      } else if (value === 'timeWithSeconds') {
        config.enableTime = true;
        config.enableSeconds = true;
        config.dateFormat = 'd/m/Y H:i:S';
      } else if (value === 'weekNumbers') {
        config.weekNumbers = true;
      } else if (value === 'closeOnSelect') {
        config.closeOnSelect = true;
      } else if (
        value.startsWith('range') &&
        document.querySelector(value.substring(5)) !== null
      ) {
        this.secondRangeInput = document.querySelector(value.substring(5));
        config.plugins = [new (flatpickr_dist_plugins_rangePlugin__WEBPACK_IMPORTED_MODULE_3___default())({ input: `${value.substring(5)}` })];
      } else if (value.startsWith('showMonths')) {
        if (parseInt(value.substring(10)) > 0) {
          config.showMonths = parseInt(value.substring(10));
        }
      }
    });

    return config;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/dropdown.js":
/*!*********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/dropdown.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_instance */ "./lib/assets/scripts/opera-components/_instance.js");



class Dropdown extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  #_items = [];
  #_selectedItems = [];
  #_selectedIndexes = [];
  /**
   * Constructs a new instance of the Dropdown class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.isMultiSelect =
      this.element.getAttribute('data-dropdown') === 'multi-select';
    this.dropdownButton = this.element.querySelector('.dropdown-btn');
    this.tags = this.#_createTags();
    this.resizeObserverTrigger = false;
    this.buttonSpanScrollWidth = 0;
    this.clearButton = this.#_createClearButton();
    this.dropdownMenu = this.element.querySelector('.dropdown-menu');
    this.buttonClickHandler = this.#_handleDropdownButtonClick.bind(this);
    this.clearButtonClickHandler = this.#_handleClearButtonClick.bind(this);
    this.tagClearButtonClickHandler =
      this.#_handleTagClearButtonClick.bind(this);
    this.menuItemClickHandler = this.#_handleDropdownMenuItemClick.bind(this);
    this.blurHandler = this.#_handleBlur.bind(this);
    this.dropdownMenuItems = this.dropdownMenu.querySelectorAll('.menu-item');
    this.#_items = this.#_setItems(this.dropdownMenuItems);
    this.dropdownPlaceholderText = this.dropdownButton
      .querySelector('.dropdown-btn-text')
      .textContent.trim();
    this.dropdownButtonIcon =
      this.dropdownButton.querySelector('.dropdown-btn-icon');
    this.#_init();
  }

  getItems() {
    return this.#_items;
  }

  getSelectedItems() {
    return this.#_selectedItems;
  }

  getSelectedIndexes() {
    return this.#_selectedIndexes;
  }

  updateItems(items) {
    items = items.map((item) => item.toString());

    this.dropdownButton.removeEventListener('click', this.buttonClickHandler);
    this.dropdownMenuItems.forEach((item) => {
      item.removeEventListener('click', this.menuItemClickHandler);
    });
    if (this.dropdownButton.querySelector('img')) {
      this.dropdownButton.querySelector('img').remove();
    }
    this.dropdownButton.querySelector('.dropdown-btn-text').textContent =
      this.dropdownPlaceholderText;
    this.dropdownButton.classList.remove('item-selected');
    this.#_selectedItems = [];
    this.#_setSelectedIndexes();

    this.dropdownMenu.innerHTML = `
      ${items
        .map((item) => {
          return `
            <button type="button" class="menu-item" role="menuitem">
              <span class="menu-item-text">${item}</span>
            </button>
          `;
        })
        .join('')}
    `;
    this.dropdownButton = this.element.querySelector('.dropdown-btn');
    this.dropdownMenu = this.element.querySelector('.dropdown-menu');
    this.dropdownMenuItems = this.dropdownMenu.querySelectorAll('.menu-item');
    this.#_items = this.#_setItems(this.dropdownMenuItems);
    this.dropdownPlaceholderText = this.dropdownButton
      .querySelector('.dropdown-btn-text')
      .textContent.trim();
    this.dropdownButtonIcon =
      this.dropdownButton.querySelector('.btn.icon-only');
    this.dropdownButton.addEventListener('click', this.buttonClickHandler);
    this.dropdownMenuItems.forEach((item) => {
      item.addEventListener('click', this.menuItemClickHandler);
      item.appendChild(this.#_createSelectedIcon());
    });
  }

  #_setSelectedIndexes() {
    this.#_selectedIndexes = [];
    this.dropdownMenuItems.forEach((item, index) => {
      if (item.classList.contains('selected')) {
        this.#_selectedIndexes.push(index);
      }
    });
  }

  #_init() {
    this.dropdownButton.addEventListener('click', this.buttonClickHandler);
    this.dropdownMenuItems.forEach((item) => {
      item.addEventListener('click', this.menuItemClickHandler);
      item.appendChild(this.#_createSelectedIcon());
    });
    if (this.isMultiSelect) {
      this.dropdownButton
        .querySelector('.dropdown-btn-text')
        .after(this.clearButton);
      this.clearButton.addEventListener('click', this.clearButtonClickHandler);
      this.#_createResizeObserver();
    }
  }

  #_createSelectedIcon() {
    const iconSpan = document.createElement('span');
    const icon = document.createElement('i');
    iconSpan.classList.add('selected-icon');
    icon.classList.add('far', 'fa-check');
    iconSpan.appendChild(icon);
    return iconSpan;
  }

  #_createClearButton() {
    const clearButton = document.createElement('span');
    clearButton.classList.add('dropdown-clear-btn', 'hidden');
    clearButton.innerHTML = 'Clear';
    return clearButton;
  }

  #_handleClearButtonClick(event) {
    event.stopPropagation();
    this.#_selectedItems = [];
    this.#_selectedIndexes = [];
    this.dropdownMenuItems.forEach((item) => {
      item.classList.remove('selected');
    });
    this.dropdownButton.querySelector('.dropdown-btn-text').innerHTML = '';
    this.dropdownButton.querySelector('.dropdown-btn-text').textContent =
      this.dropdownPlaceholderText;
    this.dropdownButton.classList.remove('item-selected');
    this.dropdownButton
      .querySelector('.dropdown-btn-text')
      .classList.remove('multi-select');
    this.clearButton.classList.add('hidden');
  }

  #_handleDropdownButtonClick() {
    //if menu is already open, close it, and vice versa
    if (this.dropdownMenu.hasAttribute('hidden')) {
      this.#_openDropdownMenu();
    } else {
      this.#_closeDropdownMenu();
    }
  }

  #_setItems(items) {
    const array = [];
    items.forEach((item) => {
      array.push(item.textContent.trim());
    });
    return array;
  }

  #_handleTagClearButtonClick(event) {
    event.stopPropagation();
    const tag = event.target.closest('[data-tag]');
    const tagText = tag.textContent.trim();

    const matchingMenuItem = Array.from(
      this.dropdownMenu.querySelectorAll('.menu-item.selected span')
    ).find((span) => span.textContent.trim() === tagText);
    matchingMenuItem.parentNode.classList.remove('selected');

    tag.remove();
    const isHaveSelectItems = this.#_selectedItems.includes(tagText);
    if (isHaveSelectItems) {
      this.#_selectedItems = this.#_selectedItems.filter(
        (item) => item !== tagText
      );
    }

    if (this.#_selectedItems.length === 0) {
      this.clearButton.classList.add('hidden');
      this.dropdownButton.querySelector('.dropdown-btn-text').textContent =
        this.dropdownPlaceholderText;
      this.dropdownButton.classList.remove('item-selected');
      this.dropdownButton
        .querySelector('.dropdown-btn-text')
        .classList.remove('multi-select');
    }
    this.#_setSelectedIndexes();
  }

  #_handleDropdownMenuItemClick(event) {
    if (this.isMultiSelect) {
      if (event.target.matches('.menu-item')) {
        const menuItemText = event.target.textContent.trim();

        if (event.target.classList.contains('selected')) {
          event.target.classList.remove('selected');

          const index = this.#_selectedItems.indexOf(menuItemText);
          if (index > -1) {
            this.#_selectedItems.splice(index, 1);
          }
        } else {
          event.target.classList.add('selected');
          this.#_selectedItems.push(menuItemText);
        }

        if (this.#_selectedItems.length > 0) {
          this.resizeObserverTrigger = false;
          this.clearButton.classList.remove('hidden');
          const buttonSpan =
            this.dropdownButton.querySelector('.dropdown-btn-text');
          this.tags = this.#_createTags();
          buttonSpan.innerHTML = this.tags;
          this.#_instantiateTags();
          if (buttonSpan.scrollWidth > buttonSpan.offsetWidth) {
            this.resizeObserverTrigger = true;
            this.buttonSpanScrollWidth = buttonSpan.scrollWidth;
            buttonSpan.textContent = `${this.#_selectedItems.length} item(s) selected`;
          }

          this.dropdownButton.classList.add('item-selected');
          this.dropdownButton
            .querySelector('.dropdown-btn-text')
            .classList.add('multi-select');
        } else {
          this.clearButton.classList.add('hidden');
          this.dropdownButton.querySelector('.dropdown-btn-text').textContent =
            this.dropdownPlaceholderText;
          this.dropdownButton.classList.remove('item-selected');
          this.dropdownButton
            .querySelector('.dropdown-btn-text')
            .classList.remove('multi-select');
        }
        this.#_setSelectedIndexes();
      }
    } else {
      if (event.target.matches('.menu-item')) {
        const menuItemText = event.target.textContent.trim();
        if (this.dropdownButton.querySelector('img')) {
          this.dropdownButton.querySelector('img').remove();
        }

        this.#_closeDropdownMenu();
        this.dropdownButton.classList.add('item-selected');

        this.dropdownMenuItems.forEach((dropdownMenuItem) => {
          if (event.target === dropdownMenuItem) {
            if (dropdownMenuItem.classList.contains('selected')) {
              dropdownMenuItem.classList.remove('selected');
              this.#_selectedItems = [];
              this.dropdownButton.querySelector(
                '.dropdown-btn-text'
              ).textContent = this.dropdownPlaceholderText;
              this.dropdownButton.classList.remove('item-selected');
            } else {
              dropdownMenuItem.classList.add('selected');
              this.dropdownButton.querySelector(
                '.dropdown-btn-text'
              ).textContent = menuItemText;
              this.#_selectedItems = [menuItemText];
              if (event.target.closest('.menu-item').querySelector('img')) {
                this.dropdownButton.insertBefore(
                  event.target
                    .closest('.menu-item')
                    .querySelector('img')
                    .cloneNode(true),
                  this.dropdownButton.querySelector('.dropdown-btn-text')
                );
              }
            }
          } else {
            dropdownMenuItem.classList.remove('selected');
          }
        });
        this.#_setSelectedIndexes();
      }
    }
  }

  #_createResizeObserver() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const buttonSpan =
            this.dropdownButton.querySelector('.dropdown-btn-text');
          if (
            buttonSpan.scrollWidth > buttonSpan.offsetWidth &&
            !this.resizeObserverTrigger
          ) {
            this.resizeObserverTrigger = true;
            this.buttonSpanScrollWidth = buttonSpan.scrollWidth;
            buttonSpan.textContent = `${this.#_selectedItems.length} item(s) selected`;
          } else if (
            this.buttonSpanScrollWidth <= buttonSpan.offsetWidth &&
            this.resizeObserverTrigger
          ) {
            this.resizeObserverTrigger = false;
            this.tags = this.#_createTags();
            buttonSpan.innerHTML = this.tags;
            this.#_instantiateTags();
          }
        }
      }
    });
    resizeObserver.observe(this.dropdownButton);
  }

  #_createTags() {
    return this.#_selectedItems
      .map(
        (item) =>
          `<span data-tag="removable" class="tag small outlined"> ${item} </span>`
      )
      .join('');
  }

  #_instantiateTags() {
    //create tag with tag class and add event listener for removal
    const tags = this.element.querySelectorAll('[data-tag]');
    (0,_instance__WEBPACK_IMPORTED_MODULE_1__.makeInstances)(tags, 'tag');
    tags.forEach((tag) => {
      tag._instance.removeButton.addEventListener(
        'click',
        this.tagClearButtonClickHandler
      );
    });
  }

  #_openDropdownMenu() {
    this.dropdownMenu.removeAttribute('hidden');
    this.dropdownButton.classList.add('active');
    document.addEventListener('click', this.blurHandler);
  }

  #_closeDropdownMenu() {
    this.dropdownMenu.setAttribute('hidden', '');
    this.dropdownButton.classList.remove('active');
    document.removeEventListener('click', this.blurHandler);
  }

  #_handleBlur(event) {
    //if click outside dropdown, then close the dropdown
    if (
      !this.dropdownButton.contains(event.target) &&
      !this.dropdownMenu.contains(event.target)
    ) {
      this.#_closeDropdownMenu();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/fieldset.js":
/*!*********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/fieldset.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Fieldset extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Fieldset class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.initialState = {
      disabled: this.element.disabled,
      hidden: this.element.hidden,
    };
  }

  reset() {
    this.element.disabled = this.initialState.disabled;
    this.element.hidden = this.initialState.hidden;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fieldset);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/form.js":
/*!*****************************************************!*\
  !*** ./lib/assets/scripts/opera-components/form.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./lib/assets/scripts/opera-components/select.js");
/* harmony import */ var _text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-field */ "./lib/assets/scripts/opera-components/text-field.js");
/* harmony import */ var _text_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-area */ "./lib/assets/scripts/opera-components/text-area.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox */ "./lib/assets/scripts/opera-components/checkbox.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio */ "./lib/assets/scripts/opera-components/radio.js");
/* harmony import */ var _fieldset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fieldset */ "./lib/assets/scripts/opera-components/fieldset.js");








class Form extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Form class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.formResetHandler = this.#_handleFormReset.bind(this);
    this.#_init();
  }

  #_init() {
    this.element.addEventListener('reset', this.formResetHandler);
  }

  #_handleFormReset(event) {
    event.preventDefault();
    const array = Array.from(this.element.elements);
    array.forEach((input) => {
      if (input._flatpickr) {
        input._flatpickr.clear();
      }
      if (input._instance) {
        if (
          input._instance instanceof _select__WEBPACK_IMPORTED_MODULE_1__["default"] ||
          input._instance instanceof _text_field__WEBPACK_IMPORTED_MODULE_2__["default"] ||
          input._instance instanceof _text_area__WEBPACK_IMPORTED_MODULE_3__["default"] ||
          input._instance instanceof _checkbox__WEBPACK_IMPORTED_MODULE_4__["default"] ||
          input._instance instanceof _radio__WEBPACK_IMPORTED_MODULE_5__["default"] ||
          input._instance instanceof _fieldset__WEBPACK_IMPORTED_MODULE_6__["default"]
        ) {
          input._instance.reset();
        }
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/modal.js":
/*!******************************************************!*\
  !*** ./lib/assets/scripts/opera-components/modal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/convertDataToObject */ "./lib/assets/scripts/utils/convertDataToObject.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");



class Modal extends _base_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Constructs a new instance of the Modal class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.dataModal = (0,_utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__["default"])(this.element.getAttribute('data-modal'));
    this.modal = document.querySelector(`#${this.dataModal.target}`);
    this.#_init();
  }

  /**
   * Initialize the component
   */
  #_init() {
    if (!this.modal) {
      return;
    }
    document.body.appendChild(this.modal);

    // Add show and hide event for buttons
    this.element.addEventListener('click', () => this.show());

    // Use event delegation for close buttons
    const closeBtns = this.modal.querySelectorAll('.hide-modal-btn');
    Array.from(closeBtns).forEach((btn) => {
      btn.addEventListener('click', () => this.hide());
    });

    // Add show and hide event to the overlay
    this.modal.addEventListener('click', (e) => {
      const dialog = this.modal.querySelector('.modal-dialog');
      const isStatic = this.modal.classList.contains('modal-static');
      if (isStatic) {
        !dialog.contains(e.target) && dialog.classList.add('modal-static-animation');
        setTimeout(() => {
          dialog.classList.remove('modal-static-animation');
        }, 250);
      } else {
        !dialog.contains(e.target) && this.hide();
      }
    });
  }

  /**
   * Show the modal
   */
  show() {
    this.modal.style.display = 'block';
    setTimeout(() => {
      this.modal.classList.add('active');
    }, 100);
  }

  /**
   * Hide the modal.
   */
  hide() {
    this.modal.classList.remove('active');
    setTimeout(() => {
      this.modal.style.display = 'none';
    }, 100);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/number-input.js":
/*!*************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/number-input.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _contained_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contained-label */ "./lib/assets/scripts/opera-components/contained-label.js");



class NumberInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructor for a new NumberInput object
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */

  constructor(element) {
    super(element);
    this.element = element;
    this.hasUnits = this.element.hasAttribute('data-unit');
    this.hasClearButton = this.element.getAttribute('data-number-input') === 'clearable';
    this.clearButton = this.#_createClearButton();
    this.units = this.#_setUnits();
    this.isSelectable = this.units?.length > 1;
    this.numberInputUnit = this.#_createNumberInputUnit();
    this.numberInputUnitSelect = this.numberInputUnit?.querySelector('select');
    this.numberInputWrapper = this.#_createNumberInputWrapper();
    this.containedLabel = null;
    this.containedLabelText = this.element.getAttribute('data-label');
    this.numberInputHandler = this.#_handleNumberInput.bind(this);
    this.unitSelectHandler = this.#_handleUnitSelect.bind(this);
    this.clearButtonClickHandler = this.#_handleClearButtonClick.bind(this);
    this.focusOutHandler = this.#_handleFocusOut.bind(this);
    this.initialState = {
      value: this.element.value,
      disabled: this.element.disabled,
      hidden: this.element.hidden,
      readonly: this.element.readonly,
    };
    this.#_init();
  }

  #_init() {
    this.#_setUnitSelectWidth();
    if (this.containedLabelText) {
      this.containedLabel = new _contained_label__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, this.containedLabelText, this.numberInputWrapper);
    }
    if (this.hasClearButton) {
      if (this.hasUnits) {
        this.numberInputWrapper.insertBefore(this.clearButton, this.numberInputWrapper.lastChild);
      } else {
        this.numberInputWrapper.appendChild(this.clearButton);
      }
      this.element.addEventListener('input', this.passwordInputHandler);
      this.clearButton.addEventListener('click', this.clearButtonClickHandler);
    }
    if (this.initialState.hidden) {
      this.hide();
    } else {
      this.show();
    }
    this.element.addEventListener('input', this.numberInputHandler);
    this.element.addEventListener('focusout', this.focusOutHandler);
    this.numberInputUnitSelect?.addEventListener('change', this.unitSelectHandler);
  }

  hide() {
    this.numberInputWrapper.setAttribute('hidden', '');
    this.element.setAttribute('hidden', '');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  show() {
    this.numberInputWrapper.removeAttribute('hidden');
    this.element.removeAttribute('hidden');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  reset() {
    this.setValue(this.initialState.value);
    this.element.disabled = this.initialState.disabled;
    this.element.readonly = this.initialState.readonly;
    if (this.initialState.hidden) {
      this.hide();
    } else {
      this.show();
    }
  }

  #_checkIfParentOnlyHasHiddenChildren() {
    const parent = this.numberInputWrapper.parentElement;
    const children = parent.children;
    let allChildrenHidden = true;
    for (let i = 0; i < children.length; i++) {
      if (children[i].hidden === false) {
        allChildrenHidden = false;
      }
    }
    if (allChildrenHidden) {
      parent.classList.add('hidden');
    } else {
      parent.classList.remove('hidden');
    }
  }

  setValue(value) {
    this.element.value = value;
    this.containedLabel?.handleEvent();
  }

  #_createNumberInputWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('number-input-wrapper');
    this.element.parentNode.insertBefore(wrapper, this.element);
    wrapper.appendChild(this.element);
    if (this.hasUnits) {
      wrapper.appendChild(this.numberInputUnit);
    }
    return wrapper;
  }

  #_createNumberInputUnit() {
    const unitBox = document.createElement('div');
    unitBox.classList.add('number-input-unit');
    const unitSelect = document.createElement('select');
    if (this.isSelectable) {
      unitBox.classList.add('selectable');
    } else {
      unitSelect.tabIndex = -1;
    }
    this.units?.forEach((unit) => {
      unitSelect.add(new Option(unit, unit));
    });
    unitBox.appendChild(unitSelect);

    return unitBox;
  }

  #_createClearButton() {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    button.setAttribute('type', 'button');
    button.classList.add('number-input-clear-button', 'hidden');
    icon.classList.add('far', 'fa-x');
    button.appendChild(icon);

    return button;
  }

  #_handleNumberInput() {
    if (this.element.value.length > 0) {
      this.clearButton.classList.remove('hidden');
    } else {
      this.clearButton.classList.add('hidden');
    }
  }

  #_handleClearButtonClick() {
    this.element.value = '';
    this.clearButton.classList.add('hidden');
    this.containedLabel?.handleEvent();
  }

  #_handleFocusOut(event) {
    if (event.relatedTarget === this.numberInputUnitSelect) {
      return;
    }
    if (this.element.value.length === 0) {
      this.setValue('');
    }
    this.containedLabel?.handleEvent();
  }

  #_setUnits() {
    return this.element.getAttribute('data-unit')?.split('|');
  }

  getSelectedUnit() {
    return this.numberInputUnitSelect.options[this.numberInputUnitSelect.selectedIndex].value;
  }

  #_handleUnitSelect() {
    this.#_setUnitSelectWidth();
  }

  #_setUnitSelectWidth() {
    if (!this.hasUnits) return;

    const selectedOption = this.numberInputUnitSelect.options[this.numberInputUnitSelect.selectedIndex];

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('w-fit', 'text-body-compact-02', 'fixed', 'top-0');
    tempSpan.textContent = selectedOption.textContent;

    document.body.appendChild(tempSpan);

    const spanWidth = tempSpan.offsetWidth;
    const paddingRightOffset = this.isSelectable ? 40 : 24;
    const clearButtonOffset = this.isSelectable ? 28 : 12;

    this.numberInputUnitSelect.style.width = this.isSelectable
      ? tempSpan.offsetWidth + 28 + 'px'
      : tempSpan.offsetWidth + 'px';

    if (this.hasClearButton) {
      this.clearButton.style.right = spanWidth + clearButtonOffset + 'px';
      this.element.style.paddingRight = spanWidth + clearButtonOffset + 40 + 'px';
    } else {
      this.element.style.paddingRight = spanWidth + paddingRightOffset + 'px';
    }

    tempSpan.remove();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInput);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/overflow-menu.js":
/*!**************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/overflow-menu.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/convertDataToObject */ "./lib/assets/scripts/utils/convertDataToObject.js");



class OverflowMenu extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the OverflowMenu class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.body = this.element.querySelector('.overflow-menu-body');
    this.dataOverflowMenu = (0,_utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_1__["default"])(this.element.getAttribute('data-overflow-menu'));
    this.groupSelections = Array.from(this.element.querySelectorAll('.group-selection'));
    this.#_init();
  }

  /**
   * Initialize the component
   */
  #_init() {
    // Early return if there is no body
    if (!this.body) {
      return;
    }

    // Cache this.dataOverflowMenu.type
    const overflowMenuType = this.dataOverflowMenu.type || 'toggle';

    // Add click event listener for toggle type
    if (overflowMenuType === 'toggle') {
      this.element.addEventListener('click', (e) => {
        if (this.#_checkIsSelectionItem(e)) return;
        this.#_handleToggleMenu();
      });
    }

    // Add mouseenter and mouseleave event listeners for hover type
    if (overflowMenuType === 'hover') {
      this.element.addEventListener('mouseenter', () => this.#_handleToggleMenu());
      this.element.addEventListener('mouseleave', () => this.#_handleToggleMenu());
    }

    // Add click event listener for document
    document.addEventListener('click', (e) => this.#_handleDocumentClick(e));

    // Iterate through groupSelections and handle click for each item
    this.groupSelections.length &&
      this.groupSelections?.forEach((group) => {
        const Items = Array.from(group.children);
        Items.forEach((item) => {
          this.#_handleClickGroupSelecttionItem(item);
        });
      });
  }

  /**
   * Handle toggle menu
   */
  #_handleToggleMenu() {
    this.element.classList.toggle('active');
  }

  /**
   * Handle document click event
   * @param {Event} event - The event object
   */
  #_handleDocumentClick(event) {
    if (this.element.classList.contains('active') && !this.element.contains(event.target)) {
      this.element.classList.remove('active');
    }
  }

  /**
   * Create and returns a selected icon element.
   * @returns {HTMLElement} The selected icon element
   */
  #_createSelectedIcon() {
    const iconSpan = document.createElement('span');
    const icon = document.createElement('i');
    iconSpan.classList.add('selected-icon');
    icon.classList.add('far', 'fa-check');
    iconSpan.appendChild(icon);
    return iconSpan;
  }

  /**
   * Add click event listener to the given node for group selection items
   * @param {HTMLElement} node - The node to add the click event listener to
   */
  #_handleClickGroupSelecttionItem(node) {
    node.addEventListener('click', (event) => {
      if (node.classList.contains('selected')) {
        node.classList.remove('selected');
        node.querySelector('.selected-icon').remove();
      } else {
        node.classList.add('selected');
        node.appendChild(this.#_createSelectedIcon());
      }
    });
  }

  /**
   * Check if the target element is a selection item
   * @param {Event} event - The event object
   * @returns {boolean} True if the target element is a selection item, false otherwise
   */
  #_checkIsSelectionItem(event) {
    const targetElement = event.target;
    return this.groupSelections.length && this.groupSelections.some((element) => element.contains(targetElement));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverflowMenu);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/pagination.js":
/*!***********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/pagination.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/convertDataToObject */ "./lib/assets/scripts/utils/convertDataToObject.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _overflow_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overflow-menu */ "./lib/assets/scripts/opera-components/overflow-menu.js");




class Pagination extends _base_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Constructs a new instance of the Tag class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.dataPagination = (0,_utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__["default"])(this.element.getAttribute('data-pagination'));
    this.paginationItems = Array.from(this.element.querySelectorAll('[data-page]'));
    this.isScrollable = this.element.classList.contains('scrollable');
    this.maxShowItems = +this.dataPagination.maxItem || 5; //less than 5 will not need overflow menu
    this.currentPage = +this.dataPagination.currentPage;
    this.totalPage =
      +this.paginationItems[this.paginationItems.length - 1].getAttribute('data-page') || this.paginationItems.length;
    this.startPage = +this.paginationItems[0].getAttribute('data-page') || 1;
    this.endPage = this.totalPage;
    this.btnPre = this.element.querySelector('.btn-pre');
    this.btnNext = this.element.querySelector('.btn-next');
    this.btnStart = this.element.querySelector('.btn-start');
    this.btnEnd = this.element.querySelector('.btn-end');
    this.#_init();
  }

  /**
   * Get the current page.
   *
   * @return {Number} page - The page number.
   */
  getCurrentPage() {
    return this.currentPage;
  }

  /**
   * Set the current page.
   *
   * @param {number} page - The page number.
   */
  setCurrentPage(page) {
    if (!page || isNaN(page)) return;

    if (page < this.startPage) {
      page = this.startPage;
    }
    if (page > this.endPage) {
      page = this.endPage;
    }

    this.currentPage = +page;
    this.element.dispatchEvent(new CustomEvent('change', { detail: { currentPage: +this.currentPage } }));
    this.#_updateUI();
    this.#_handleFocusATag();
  }

  /**
   * Append a page node to the pagination.
   * @param {Element} node - The Li node with data-page to append.
   */
  appendPage(node) {
    this.paginationItems[this.paginationItems.length - 1].insertAdjacentElement('afterend', node);
    this.paginationItems.push(node);
    this.totalPage++;
    this.endPage = this.totalPage;
    node.addEventListener('click', () => this.#_handleItemClick(node));
    this.#_updateUI();
  }

  /**
   * Initialize the component
   */
  #_init() {
    // Add event listener for scrollable pagination
    if (this.isScrollable) {
      this.element.addEventListener('wheel', this.#_handleScrollablePagination.bind(this));
    }

    // Add event listeners for pagination items
    this.paginationItems.forEach((item) => {
      item.addEventListener('click', () => this.#_handleItemClick(item));
    });

    // Add event listeners for navigation buttons
    this.btnNext?.addEventListener('click', this.#_handleNextButtonClick.bind(this));
    this.btnPre?.addEventListener('click', this.#_handlePreviousButtonClick.bind(this));
    this.btnStart?.addEventListener('click', this.#_handleStartButtonClick.bind(this));
    this.btnEnd?.addEventListener('click', this.#_handleEndButtonClick.bind(this));

    // Update UI
    this.#_updateUI();
  }

  /**
   * Handle scrollable pagination
   * @param {Event} event - The scroll event
   */
  #_handleScrollablePagination(event) {
    event.preventDefault();
    this.element.scrollLeft += event.deltaY - 50;
  }

  /**
   * Handle item click event
   * @param {HTMLElement} item - The clicked item
   */
  #_handleItemClick(item) {
    const clickedPage = +item.getAttribute('data-page');
    if (this.currentPage === clickedPage) return;
    this.setCurrentPage(clickedPage);
  }

  /**
   * Handle the click event for the previous button
   */
  #_handlePreviousButtonClick() {
    if (this.currentPage > this.startPage) {
      this.setCurrentPage(this.currentPage - 1);
    }
  }

  /**
   * Handle the next button click
   */
  #_handleNextButtonClick() {
    if (this.currentPage < this.endPage) {
      this.setCurrentPage(this.currentPage + 1);
    }
  }

  /**
   * Handle the start button click
   */
  #_handleStartButtonClick() {
    if (this.currentPage > this.startPage) {
      this.setCurrentPage(this.startPage);
    }
  }

  /**
   * Handle the click event for the end button
   */
  #_handleEndButtonClick() {
    if (this.currentPage < this.endPage) {
      this.setCurrentPage(this.endPage);
    }
  }

  /**
   * Handles the focus on a tag
   */
  #_handleFocusATag() {
    const currentPageElement = this.element.querySelector(`[data-page="${this.currentPage}"]`);
    if (currentPageElement && currentPageElement.tagName.toLowerCase() === 'a') {
      currentPageElement.click(); // Click on the current page element if it is an 'a' tag
    } else {
      const aTag = currentPageElement?.querySelector('a');
      const href = aTag?.getAttribute('href');
      if (aTag && href) {
        aTag.click(); // Click on the 'a' tag if it exists and has a valid href attribute
      }
    }
  }

  /**
   * Handle the maximum show item
   * @param {number} currentPage - The current page number
   */
  #_handleMaxShowItem(currentPage = 0) {
    if (this.maxShowItems > this.totalPage || this.maxShowItems <= 5 || this.isScrollable) return;

    const activeItemIndex = this.#_caculateActiveItemIndex(currentPage);
    this.#_clearAndAddButtons();
    this.#_addActiveItemAndAdjacentItems(activeItemIndex);
    this.#_addOverflowMenu(activeItemIndex);
  }

  /**
   * Update the UI by calling the necessary helper functions
   */
  #_updateUI() {
    this.#_updateCurrentPageStatus(); // Update the current page status
    this.#_updateButtonsStatus(); // Update the buttons status
    this.maxShowItems && this.#_handleMaxShowItem(this.currentPage); // Handle maximum show item based on the current page
  }

  /**
   * Update the status of the current page by adding or removing the 'active' class from pagination items.
   */
  #_updateCurrentPageStatus() {
    this.paginationItems.forEach((item) => {
      if (this.currentPage === +item.getAttribute('data-page')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  /**
   * Update the status of buttons based on the current page
   */
  #_updateButtonsStatus() {
    /**
     * Disable an array of buttons
     * @param {Array} btns - Array of buttons to be disabled
     */
    const disableBtns = (btns) => btns.forEach((btn) => btn?.setAttribute('disabled', ''));

    /**
     * Enable an array of buttons
     * @param {Array} btns - Array of buttons to be enabled
     */
    const enableBtns = (btns) => btns.forEach((btn) => btn?.removeAttribute('disabled'));

    if (this.currentPage == this.startPage) {
      disableBtns([this.btnPre, this.btnStart]);
      enableBtns([this.btnNext, this.btnEnd]);
    } else if (this.currentPage == this.endPage) {
      disableBtns([this.btnNext, this.btnEnd]);
      enableBtns([this.btnPre, this.btnStart]);
    } else {
      enableBtns([this.btnPre, this.btnStart, this.btnNext, this.btnEnd]);
    }
  }

  /**
   * Calculate the active item index based on the current page
   * @param {number} currentPage - The current page number
   * @returns {number} - The active item index
   */
  #_caculateActiveItemIndex(currentPage) {
    if (currentPage && currentPage > 3 && currentPage < this.endPage - 2) {
      return currentPage - 1; //Because index less than currentpage 1 unit, we need -1
    } else if (currentPage <= 3) {
      return 2; //3-1
    } else if (currentPage >= this.endPage - 2) {
      return this.endPage - 3; //-2-1
    } else {
      return Math.floor(this.totalPage / 2) - 1;
    }
  }

  /**
   * Clears the element and adds pagination buttons.
   */
  #_clearAndAddButtons() {
    this.element.innerHTML = ''; //clear all
    this.element.prepend(this.paginationItems[0]); //add first page
    this.element.append(this.paginationItems[this.totalPage - 1]); // add last page

    /**
     * Creates a list item and wraps the button inside it.
     * @param {Element} button - The button to wrap
     * @returns {Element} The list item containing the button
     */
    const createLiAndWrapButton = (button) => {
      if (!button) return null;
      const li = document.createElement('li');
      li.classList.add('pagination-item');
      li.appendChild(button);
      return li;
    };

    this.element.prepend(createLiAndWrapButton(this.btnStart), createLiAndWrapButton(this.btnPre));
    this.element.append(createLiAndWrapButton(this.btnNext), createLiAndWrapButton(this.btnEnd));
  }

  /**
   * Add the active item and its adjacent items to the DOM
   * @param {number} activeItemIndex - The index of the active item
   */
  #_addActiveItemAndAdjacentItems(activeItemIndex) {
    const termItems = this.element.querySelectorAll('[data-page]');
    termItems[0].insertAdjacentElement('afterend', this.paginationItems[activeItemIndex]); // [active]
    termItems[0].insertAdjacentElement('afterend', this.paginationItems[activeItemIndex - 1]); // [active - 1 ,active]
    termItems[termItems.length - 1].insertAdjacentElement('beforebegin', this.paginationItems[activeItemIndex + 1]); // [active - 1 ,active, acive + 1]
  }

  /**
   * Create an overflow menu element with the given nodes
   * @param {Array} nodes - The nodes to be added to the overflow menu
   * @returns {HTMLElement} - The created overflow menu element
   */
  #_createOverflowMenu(nodes = []) {
    const overflowMenu = document.createElement('li');
    overflowMenu.classList.add('overflow-menu', 'pagination-item');
    overflowMenu.innerHTML = `
    <button class="px-1">...</button>
    <div class="overflow-menu-body">
    </div>
    `;
    nodes.forEach((item) => overflowMenu.querySelector('.overflow-menu-body').append(item));
    const overflowMenuBody = overflowMenu.querySelector('.overflow-menu-body');
    Array.from(overflowMenuBody.children).forEach((item) => {
      item.classList.add('overflow-menu-item');
      // add click event again because it was removed in when cloneNode
      item.addEventListener('click', () => {
        this.#_handleItemClick(item);
      });
    });

    new _overflow_menu__WEBPACK_IMPORTED_MODULE_2__["default"](overflowMenu);
    return overflowMenu;
  }

  /**
   * Adds an overflow menu to the pagination items based on the active item index
   * @param {number} activeItemIndex - The index of the active item
   */
  #_addOverflowMenu(activeItemIndex) {
    const termItems = this.element.querySelectorAll('[data-page]');
    const preOverflowItems = this.paginationItems.slice(1, activeItemIndex - 1).map((item) => item.cloneNode(true));
    const nextOverflowItems = this.paginationItems
      .slice(activeItemIndex + 2, this.paginationItems.length - 1)
      .map((item) => item.cloneNode(true));

    if (preOverflowItems.length > 1) {
      termItems[0].insertAdjacentElement('afterend', this.#_createOverflowMenu(preOverflowItems));
    } else if (preOverflowItems.length == 1) {
      //if only one item, don't need to create overflow menu
      preOverflowItems[0].addEventListener('click', () => this.#_handleItemClick(preOverflowItems[0]));
      termItems[0].insertAdjacentElement('afterend', preOverflowItems[0]);
    }

    if (nextOverflowItems.length > 1) {
      termItems[termItems.length - 1].insertAdjacentElement(
        'beforebegin',
        this.#_createOverflowMenu(nextOverflowItems),
      );
    } else if (nextOverflowItems.length == 1) {
      //if only one item, don't need to create overflow menu
      nextOverflowItems[0].addEventListener('click', () => this.#_handleItemClick(nextOverflowItems[0]));
      termItems[termItems.length - 1].insertAdjacentElement('beforebegin', nextOverflowItems[0]);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/password-input.js":
/*!***************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/password-input.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _contained_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contained-label */ "./lib/assets/scripts/opera-components/contained-label.js");



class PasswordInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructor for a new PasswordInput object
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */

  constructor(element) {
    super(element);
    this.element = element;
    this.hasClearButton = this.element.getAttribute('data-password-input') === 'clearable';
    this.clearButton = this.#_createClearButton();
    this.passwordInputEyeButtonClickHandler = this.#_handleEyeButtonClick.bind(this);
    this.passwordInputEyeButton = this.#_createEyeButton();
    this.passwordInputWrapper = this.#_createPasswordInputWrapper();
    this.containedLabel = null;
    this.containedLabelText = this.element.getAttribute('data-label');
    this.passwordInputHandler = this.#_handlePasswordInput.bind(this);
    this.clearButtonClickHandler = this.#_handleClearButtonClick.bind(this);
    this.focusOutHandler = this.#_handleFocusOut.bind(this);
    this.initialState = {
      value: this.element.value,
      disabled: this.element.disabled,
      hidden: this.element.hidden,
      readonly: this.element.readonly,
    };
    this.#_init();
  }

  #_init() {
    if (this.containedLabelText) {
      this.containedLabel = new _contained_label__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, this.containedLabelText, this.passwordInputWrapper);
    }
    if (this.hasClearButton) {
      this.passwordInputWrapper.insertBefore(this.clearButton, this.passwordInputWrapper.lastChild);
      this.element.addEventListener('input', this.passwordInputHandler);
      this.clearButton.addEventListener('click', this.clearButtonClickHandler);
    }

    if (this.initialState.hidden) {
      this.hide();
    } else {
      this.show();
    }
    this.element.addEventListener('focusout', this.focusOutHandler);
  }

  hide() {
    this.passwordInputWrapper.setAttribute('hidden', '');
    this.element.setAttribute('hidden', '');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  show() {
    this.passwordInputWrapper.removeAttribute('hidden');
    this.element.removeAttribute('hidden');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  reset() {
    this.setValue(this.initialState.value);
    this.element.disabled = this.initialState.disabled;
    this.element.readonly = this.initialState.readonly;
    if (this.initialState.hidden) {
      this.hide();
    } else {
      this.show();
    }
  }

  #_checkIfParentOnlyHasHiddenChildren() {
    const parent = this.passwordInputWrapper.parentElement;
    const children = parent.children;
    let allChildrenHidden = true;
    for (let i = 0; i < children.length; i++) {
      if (children[i].hidden === false) {
        allChildrenHidden = false;
      }
    }
    if (allChildrenHidden) {
      parent.classList.add('hidden');
    } else {
      parent.classList.remove('hidden');
    }
  }

  setValue(value) {
    this.element.value = value;
    this.containedLabel?.handleEvent();
  }

  #_createPasswordInputWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('password-input-wrapper');
    this.element.parentNode.insertBefore(wrapper, this.element);
    wrapper.appendChild(this.element);
    wrapper.appendChild(this.passwordInputEyeButton);
    return wrapper;
  }

  #_createEyeButton() {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    button.setAttribute('type', 'button');
    button.classList.add('password-input-eye-button', 'password');
    icon.classList.add('far', 'fa-eye');
    button.appendChild(icon);
    button.addEventListener('click', this.passwordInputEyeButtonClickHandler);

    return button;
  }

  #_createClearButton() {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    button.setAttribute('type', 'button');
    button.classList.add('password-input-clear-button', 'hidden');
    icon.classList.add('far', 'fa-x');
    button.appendChild(icon);

    return button;
  }

  #_handlePasswordInput() {
    if (this.element.value.length > 0) {
      this.clearButton.classList.remove('hidden');
    } else {
      this.clearButton.classList.add('hidden');
    }
  }

  #_handleClearButtonClick() {
    this.element.value = '';
    this.clearButton.classList.add('hidden');
    this.containedLabel?.handleEvent();
  }

  #_handleEyeButtonClick() {
    if (this.element.getAttribute('type') === 'password') {
      this.element.setAttribute('type', 'text');
      this.passwordInputEyeButton.classList.remove('password');
      this.passwordInputEyeButton.classList.add('plaintext');
    } else if (this.element.getAttribute('type') === 'text') {
      this.element.setAttribute('type', 'password');
      this.passwordInputEyeButton.classList.remove('plaintext');
      this.passwordInputEyeButton.classList.add('password');
    }
  }

  #_handleFocusOut(event) {
    if (event.relatedTarget === this.passwordInputEyeButton) {
      return;
    }
    this.containedLabel?.handleEvent();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordInput);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/radio.js":
/*!******************************************************!*\
  !*** ./lib/assets/scripts/opera-components/radio.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Radio extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Radio class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.initialState = {
      checked: this.element.checked,
      disabled: this.element.disabled,
      hidden: this.element.hidden,
    };
  }

  reset() {
    this.element.checked = this.initialState.checked;
    this.element.disabled = this.initialState.disabled;
    this.element.hidden = this.initialState.hidden;
    this.element.dispatchEvent(new Event('change'));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radio);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/select.js":
/*!*******************************************************!*\
  !*** ./lib/assets/scripts/opera-components/select.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _contained_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contained-label */ "./lib/assets/scripts/opera-components/contained-label.js");



class Select extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Select class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.selectWrapper = this.#_createSelectWrapper();
    this.containedLabel = null;
    this.containedLabelText = this.element.getAttribute('data-label');
    this.addActiveClassHandler = this.#_addActiveClass.bind(this);
    this.removeActiveClassHandler = this.#_removeActiveClass.bind(this);
    this.selectChangeHandler = this.#_handleSelectChange.bind(this);
    this.initialState = {
      value: this.element.value,
      disabled: this.element.disabled,
      hidden: this.element.hidden,
    };

    this.#_init();
  }

  reset() {
    this.element.value = this.initialState.value;
    this.#_updateValue();
    this.element.disabled = this.initialState.disabled;
    this.element.readonly = this.initialState.readonly;
    if (this.initialState.hidden) {
      this.hide();
    } else {
      this.show();
    }
  }

  #_checkIfParentOnlyHasHiddenChildren() {
    const parent = this.selectWrapper.parentElement;
    const children = parent.children;
    let allChildrenHidden = true;
    for (let i = 0; i < children.length; i++) {
      if (children[i].hidden === false) {
        allChildrenHidden = false;
      }
    }
    if (allChildrenHidden) {
      parent.classList.add('hidden');
    } else {
      parent.classList.remove('hidden');
    }
  }

  hide() {
    this.selectWrapper.setAttribute('hidden', '');
    this.element.setAttribute('hidden', '');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  show() {
    this.selectWrapper.removeAttribute('hidden');
    this.element.removeAttribute('hidden');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  #_init() {
    if (this.containedLabelText) {
      this.containedLabel = new _contained_label__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, this.containedLabelText, this.selectWrapper);
    }
    this.#_updateValue();
    this.element.addEventListener('focusin', this.addActiveClassHandler);
    this.element.addEventListener('focusout', this.removeActiveClassHandler);
    this.element.addEventListener('change', this.selectChangeHandler);
    if (this.element.getAttribute('hidden') !== null) {
      this.hide();
    } else {
      this.show();
    }
  }

  #_createSelectWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('select-wrapper');
    this.element.parentNode.insertBefore(wrapper, this.element);
    wrapper.appendChild(this.element);
    return wrapper;
  }

  #_addActiveClass() {
    this.selectWrapper.classList.add('active');
    this.containedLabel?.activate();
    this.element.addEventListener('mousedown', this.removeActiveClassHandler);
  }

  #_removeActiveClass() {
    this.selectWrapper.classList.remove('active');
    this.containedLabel?.handleEvent();
    this.element.removeEventListener('mousedown', this.removeActiveClassHandler);
  }

  #_handleSelectChange() {
    this.selectWrapper.classList.remove('active');
    this.#_updateValue();
  }

  #_updateValue() {
    if (this.element.value.length === 0) {
      this.selectWrapper.classList.remove('selected');
      if (this.containedLabel) {
        this.element.classList.add('text-transparent');
      }
    } else {
      this.selectWrapper.classList.add('selected');
      if (this.containedLabel) {
        this.element.classList.remove('text-transparent');
      }
    }

    this.containedLabel?.handleEvent();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/spinner.js":
/*!********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/spinner.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Spinner extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Spinner class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.originalInnerHTML = this.element.innerHTML;
  }

  /**
   * Start the animation with the given message.
   *
   * @param {string} message - The message to be displayed during the animation.
   */
  startAnimation(message) {
    this.element.classList.add('loading');
    this.#_clearInnerHTML();
    this.element.append(this.#_createSpinner());
    message && this.element.append(this.#_createMessage(message));
  }
  /**
   * Stops the animation and updates the element with the provided status and message
   *
   * @param {string} status - the status of the animation (success or error)
   * @param {string} message - the message to be displayed during the animation
   * @param {number} delay - the delay in milliseconds before stopping the animation
   */
  stopAnimation(status, message, delay = 1500) {
    this.#_clearInnerHTML();
    if (!status) {
      this.element.classList.remove('loading');
      this.element.innerHTML = this.originalInnerHTML;
      return;
    }

    switch (status) {
      case 'success':
        this.element.append(this.#_createCheckmark());
        break;
      case 'error':
        this.element.append(this.#_createError());
        break;
      default:
        break;
    }
    this.element.classList.add(status);
    message && this.element.append(this.#_createMessage(message));

    setTimeout(() => {
      this.element.classList.remove('loading', status);
      this.element.innerHTML = this.originalInnerHTML;
    }, delay);
  }

  /**
   * Creates a message element with the given message
   * @param {string} message - The message to be displayed
   * @returns {HTMLElement} - The created message element
   */
  #_createMessage(message) {
    const messageElement = document.createElement('span');
    messageElement.textContent = message;
    return messageElement;
  }

  /**
   * Clear the inner HTML of the element
   */
  #_clearInnerHTML() {
    this.element.innerHTML = '';
  }

  /**
   * Create and return a spinner SVG element
   * @returns {HTMLElement} - The created spinner SVG element
   */
  #_createSpinner() {
    const spinner = document.createElement('svg');
    spinner.classList.add('spinner-svg', 'spinner-circle-01');
    return spinner;
  }

  /**
   * Create and return a checkmark SVG object
   * @returns {object} - The created checkmark SVG object
   */
  #_createCheckmark() {
    const checkmark = document.createElement('object');
    checkmark.setAttribute('type', 'image/svg+xml');
    checkmark.classList.add('checkmark-svg', 'h-4', 'w-4');
    checkmark.setAttribute(
      'data',
      'data:image/svg+xml,%3Csvg height="16" width="16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="none" d="M20 6L9 17L4 12" stroke="%232F8E47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="60" stroke-dashoffset="-60"%3E%3Canimate attributeName="stroke-dashoffset" from="-60" to="0" dur="0.3s" begin="0s" fill="freeze" /%3E%3C/path%3E%3C/svg%3E',
    );
    return checkmark;
  }

  /**
   * Creates an error icon element
   * @returns {HTMLElement} - The error icon element
   */
  #_createError() {
    const error = document.createElement('i');
    error.classList.add('far', 'fa-alert-triangle', 'text-red-600');
    return error;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/tabs.js":
/*!*****************************************************!*\
  !*** ./lib/assets/scripts/opera-components/tabs.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Tabs extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Tab class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.tabsNav = this.element.querySelector('.tabs-nav');
    this.tabsBody = this.element.querySelector('.tabs-body');
    this.tabButtons = Array.from(this.tabsNav.querySelectorAll('.tab-button'));
    this.tabButtonClickHandler = this.#_handleTabButtonClick.bind(this);
    this.tabContents = Array.from(this.tabsBody.children).filter((child) => child.matches('.tab-content'));
    this.activeTabIndex = 0;
    this.#_init();
  }

  activateTab(index) {
    this.#_handleTabChange(index);
  }

  #_init() {
    this.tabContents[this.activeTabIndex].classList.remove('hidden');
    this.tabButtons[this.activeTabIndex].classList.add('active', 'from-left');

    this.tabButtons.forEach((tabButton) => {
      tabButton.addEventListener('click', this.tabButtonClickHandler);
    });
  }

  #_handleTabChange(nextIndex) {
    const currentIndex = this.activeTabIndex;
    this.tabContents.forEach((content) => {
      content.classList.add('hidden');
    });

    for (let i = 0; i < this.tabButtons.length; i++) {
      if (i < nextIndex) {
        this.tabButtons[i].classList.remove('active', 'from-left');
        this.tabButtons[i].classList.add('from-right');
      } else if (i > nextIndex) {
        this.tabButtons[i].classList.remove('active', 'from-right');
        this.tabButtons[i].classList.add('from-left');
      }
    }

    if (currentIndex < nextIndex) {
      this.tabButtons[nextIndex].classList.add('active', 'from-left');
    } else if (currentIndex > nextIndex) {
      this.tabButtons[nextIndex].classList.add('active', 'from-right');
    }

    this.activeTabIndex = nextIndex;
    this.tabContents[nextIndex].classList.remove('hidden');
  }

  #_handleTabButtonClick(event) {
    this.#_handleTabChange(this.tabButtons.indexOf(event.target));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/tag.js":
/*!****************************************************!*\
  !*** ./lib/assets/scripts/opera-components/tag.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class Tag extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Tag class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.removeButton = this.#_createRemoveButton();
    this.colors = ['orange', 'sky', 'violet', 'green', 'red', 'yellow', 'blue'];
    this.#_init();
  }

  #_init() {
    this.#_setConfigOptions();
  }

  #_setConfigOptions() {
    const string = this.element.getAttribute('data-tag');
    const array = string.split(' ');
    array.forEach((value) => {
      if (value === 'removable') {
        this.element.appendChild(this.removeButton);
      } else if (this.colors.includes(value)) {
        this.element.classList.add(value);
      }
    });
  }

  #_createRemoveButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerHTML = '<i class="far fa-x-close"></i>';
    return button;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/text-area.js":
/*!**********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/text-area.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class TextArea extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the TextArea class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.maxLength = this.element.getAttribute('maxlength') || -1;
    this.charCount = this.#_createCharCount();
    this.textAreaInputHandler = this.#_handleTextAreaInput.bind(this);
    this.clearButton = this.#_createClearButton();
    this.clearButtonClickHandler = this.#_handleClearButtonClick.bind(this);
    this.#_init();
  }

  #_init() {
    this.#_createTextAreaWrapper();
    this.element.addEventListener('input', this.textAreaInputHandler);
    this.clearButton.addEventListener('click', this.clearButtonClickHandler);
  }

  //TEMP
  reset() {
    this.element.value = '';
    this.#_handleTextAreaInput();
  }

  #_handleTextAreaInput() {
    this.element.scrollTop = this.element.scrollHeight;
    this.charCount.textContent = this.element.value.length + '/' + this.maxLength;
    if (this.element.value.length > 0) {
      this.clearButton.classList.remove('hidden');
    } else {
      this.clearButton.classList.add('hidden');
    }
  }

  #_handleClearButtonClick() {
    this.element.value = '';
    this.charCount.textContent = this.element.value.length + '/' + this.maxLength;
    this.clearButton.classList.add('hidden');
  }

  #_createCharCount() {
    const charCount = document.createElement('span');
    charCount.textContent = this.element.value.length + '/' + this.maxLength;
    return charCount;
  }

  #_createClearButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('hidden');
    button.textContent = 'Clear';
    return button;
  }

  #_createTextAreaWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('text-area-wrapper');
    this.element.parentNode.insertBefore(wrapper, this.element);
    const footer = document.createElement('div');
    footer.classList.add('text-area-footer');
    wrapper.appendChild(this.element);
    wrapper.appendChild(footer);
    if (this.maxLength !== -1) {
      footer.appendChild(this.charCount);
    } else {
      footer.classList.add('reverse');
    }
    footer.appendChild(this.clearButton);
    return wrapper;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/text-field.js":
/*!***********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/text-field.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _contained_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contained-label */ "./lib/assets/scripts/opera-components/contained-label.js");



class TextField extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the TextField class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.textFieldWrapper = this.#_createTextFieldWrapper();
    this.hasClearButton = this.element.getAttribute('data-text-field') === 'clearable';
    this.containedLabel = null;
    this.containedLabelText = this.element.getAttribute('data-label');
    this.clearButton = this.#_createClearButton();
    this.textFieldInputHandler = this.#_handleTextFieldInput.bind(this);
    this.clearButtonClickHandler = this.#_handleClearButtonClick.bind(this);
    this.focusOutHandler = this.#_handleFocusOut.bind(this);
    this.initialState = {
      value: this.element.value,
      disabled: this.element.disabled,
      hidden: this.element.hidden,
      readonly: this.element.readonly,
    };

    this.#_init();
  }

  #_init() {
    if (this.containedLabelText) {
      this.containedLabel = new _contained_label__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, this.containedLabelText, this.textFieldWrapper);
    }
    if (this.hasClearButton) {
      this.textFieldWrapper.appendChild(this.clearButton);
      this.element.addEventListener('input', this.textFieldInputHandler);
      this.clearButton.addEventListener('click', this.clearButtonClickHandler);
    }
    if (this.initialState.hidden) {
      this.hide();
    } else {
      this.show();
    }
    this.element.addEventListener('focusout', this.focusOutHandler);
  }

  reset() {
    this.setValue(this.initialState.value);
    this.element.disabled = this.initialState.disabled;
    this.element.readonly = this.initialState.readonly;
    if (this.initialState.hidden) {
      this.hide();
    } else {
      this.show();
    }
  }

  #_checkIfParentOnlyHasHiddenChildren() {
    const parent = this.textFieldWrapper.parentElement;
    const children = parent.children;
    let allChildrenHidden = true;
    for (let i = 0; i < children.length; i++) {
      if (children[i].hidden === false) {
        allChildrenHidden = false;
      }
    }
    if (allChildrenHidden) {
      parent.classList.add('hidden');
    } else {
      parent.classList.remove('hidden');
    }
  }

  hide() {
    this.textFieldWrapper.setAttribute('hidden', '');
    this.element.setAttribute('hidden', '');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  show() {
    this.textFieldWrapper.removeAttribute('hidden');
    this.element.removeAttribute('hidden');
    this.#_checkIfParentOnlyHasHiddenChildren();
  }

  setValue(value) {
    this.element.value = value;
    this.containedLabel?.handleEvent();
  }

  #_createTextFieldWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('text-field-wrapper');
    this.element.parentNode.insertBefore(wrapper, this.element);
    wrapper.appendChild(this.element);
    return wrapper;
  }

  #_createClearButton() {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    button.setAttribute('type', 'button');
    button.classList.add('text-field-clear-button', 'hidden');
    icon.classList.add('far', 'fa-x');
    button.appendChild(icon);

    return button;
  }

  #_handleTextFieldInput() {
    if (this.element.value.length > 0) {
      this.clearButton.classList.remove('hidden');
    } else {
      this.clearButton.classList.add('hidden');
    }
  }

  #_handleClearButtonClick() {
    this.element.value = '';
    this.clearButton.classList.add('hidden');
    this.containedLabel?.handleEvent();
  }

  #_handleFocusOut() {
    this.containedLabel?.handleEvent();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextField);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/toast.js":
/*!******************************************************!*\
  !*** ./lib/assets/scripts/opera-components/toast.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createToast: () => (/* binding */ createToast),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/convertDataToObject */ "./lib/assets/scripts/utils/convertDataToObject.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");



class Toast extends _base_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Constructs a new instance of the Modal class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.container = document.querySelector('.toast-container.top-right');
    this.bottomCenterContainer = document.querySelector('.toast-container.bottom-center');
    this.closeButton = this.element.querySelector('.toast-close');
    this.dataToast = (0,_utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__["default"])(this.element.getAttribute('data-toast'));
    this.dataRemove = this.dataToast.isRemove === 'true' ? true : false; // remove toast from DOM or not
    this._timeId = null;
    this.#_init();
  }

  /**
   * Initialize the component
   */
  #_init() {
    this.#_createContainer();
    this.closeButton.addEventListener('click', this.hide.bind(this));
  }

  /**
   * Initialize the container
   */
  #_createContainer() {
    /**
     * Create a container element at the specified position.
     *
     * @param {string} position - the position of the container
     * @return {HTMLElement} the newly created container element
     */
    const createContainer = (position) => {
      const container = document.createElement('div');
      container.classList.add('toast-container', position);
      document.body.appendChild(container);
      return container;
    };
    //create container if not exist
    if (!this.container) this.container = createContainer('top-right');
    if (!this.bottomCenterContainer) this.bottomCenterContainer = createContainer('bottom-center');
  }

  /**
   * Show the toast element, dispatch a custom event, and execute a callback function if provided.
   *
   * @param {Function} callback - The callback function to be executed after the toast is shown.
   * @return {void}
   */
  show(callback) {
    this.#_createContainer();

    const isBottomCenter = this.element.classList.contains('bottom-center');
    const container = isBottomCenter ? this.bottomCenterContainer : this.container;

    isBottomCenter ? container?.prepend(this.element) : container?.appendChild(this.element);
    this.element.classList.add('active');

    if (this.dataToast.duration) {
      if (this._timeId) clearTimeout(this._timeId);
      this._timeId = setTimeout(() => this.hide(), +this.dataToast.duration);
    }

    const customEvent = new CustomEvent('toastShown');
    this.element.dispatchEvent(customEvent);

    if (typeof callback === 'function') {
      callback();
    }
  }

  /**
   * Hides the element with a closing animation and triggers a custom event, and execute a callback function if provided.
   *
   * @param {Function} callback - Optional callback function to be executed after hiding the element
   * @return {void}
   */
  hide(callback) {
    this.element.classList.add('closing'); //time for animation is 300ms
    setTimeout(() => {
      this.element.classList.remove('closing', 'active');
      this.dataRemove && this.element.remove();
    }, 400); //delay 100ms for animation to finish before removing

    const customEvent = new CustomEvent('toastHidden');
    this.element.dispatchEvent(customEvent);

    if (typeof callback === 'function') {
      callback();
    }
  }
}

/**
 * Creates a toast notification with customizable options.
 *
 * @param {Object} config - Configuration options for the toast.
 * @param {string|null} config.type - The type of toast.
 * @param {string} config.title - The title text of the toast.
 * @param {string} config.message - The message text of the toast.
 * @param {string} config.details - Additional details as small text.
 * @param {number|null} config.duration - The display duration in ms.
 * @param {string} config.position - The toast's position on screen.
 * @param {boolean} config.isRemove - Whether to remove toast on timeout.
 * @param {string} config.icon - HTML string for the toast's icon.
 * @return {Toast} The created toast instance.
 */
const createToast = (config) => {
  const {
    type = null,
    title = '',
    message = '',
    details = '',
    duration = null,
    position = 'top-right',
    isRemove = true,
    icon = '',
  } = config;

  // Create data toast string
  const dataToast = `duration:${duration} isRemove:${isRemove}`;

  // Create toast element
  const toastElement = document.createElement('div');
  toastElement.classList.add('toast');
  type && toastElement.classList.add(type);
  position && toastElement.classList.add(position);
  dataToast && toastElement.setAttribute('data-toast', dataToast);
  toastElement.innerHTML = `
              ${icon ? icon : `<div class="toast-icon"></div>`}
              <div class="toast-body">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
                <small class="mt-2">${details}</small>
              </div>
              <button class="toast-close"><i class="far fa-x-close"></i></button>
              `;
  // Create toast instance
  const toast = new Toast(toastElement);
  toastElement._instance = toast;
  return toast;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toast);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/toggle-group.js":
/*!*************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/toggle-group.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/convertDataToObject */ "./lib/assets/scripts/utils/convertDataToObject.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");



class ToggleGroup extends _base_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Constructs a new instance of the ToggleGroup class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.toggleGroupItems = this.element.querySelectorAll('.toggle-group-item');
    this.dataToggleGroup = null;
    this.#_init();
  }

  /**
   * Initialize the component
   */
  #_init = () => {
    this.#_initDataToggleGroup();
    this.#_initActiveItem();
    this.#_initClickEvent();
  };

  /**
   * Initialize the data toggle group based on the element's data-toggle-group attribute
   */
  #_initDataToggleGroup() {
    // Get the data-toggle-group attribute from the element
    const dataToggleGroup = this.element.getAttribute('data-toggle-group') || '';
    // Destructure the values from the converted data object, with default values
    let { currentValue = '', selectType = 'single' } = (0,_utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_0__["default"])(dataToggleGroup);
    // If selectType is multiple, convert the currentValue from a string to an array
    if (selectType === 'multiple') {
      //Convert string to array
      currentValue = currentValue
        .slice(1, -1)
        .split(',')
        .filter((item) => item !== '');
    }
    // Set the dataToggleGroup property with currentValue and selectType
    this.dataToggleGroup = { currentValue, selectType };
  }

  /**
   * Initialize the active item based on the current value and select type of the data toggle group.
   */
  #_initActiveItem() {
    const { currentValue, selectType } = this.dataToggleGroup;

    this.toggleGroupItems.forEach((item) => {
      const itemValue = item.getAttribute('value');

      switch (selectType) {
        case 'multiple':
          currentValue.includes(itemValue) && this.#_addActiveClass(item);
          break;
        default:
          itemValue === currentValue && this.#_addActiveClass(item);
          break;
      }
    });
  }

  /**
   * Initialize click event for toggle group items
   */
  #_initClickEvent() {
    this.toggleGroupItems.forEach((item) => {
      item.addEventListener('click', () => {
        this.#_handleClick(item);
      });
    });
  }
  /**
   *  Handle click event
   *  @param {Element} item - The item that was clicked
   */
  #_handleClick(item) {
    const value = item.getAttribute('value');

    switch (this.dataToggleGroup.selectType) {
      case 'multiple':
        this.#_handleMultiTypeClick(item, value);
        break;
      default:
        this.#_handleSingleTypeClick(item, value);
        break;
    }

    // Dispatch change event
    const event = new CustomEvent('change', { detail: { value: this.dataToggleGroup.currentValue } });
    this.element.dispatchEvent(event);
  }

  /**
   * Handles the click event for multiple types.
   * @param {object} item - The item clicked.
   * @param {string} value - The value associated with the clicked item.
   */
  #_handleMultiTypeClick(item, value) {
    if (this.dataToggleGroup.currentValue.includes(value)) {
      // Remove active class and update current value
      this.#_removeActiveClass(item);
      this.dataToggleGroup.currentValue = this.dataToggleGroup.currentValue.filter((item) => item !== value);
      return;
    }
    // Add active class and update current value
    this.#_addActiveClass(item);
    this.dataToggleGroup.currentValue.push(value);
  }

  /**
   * Handles the click event for a single type.
   * @param {Object} item - The item being clicked.
   * @param {string} value - The value associated with the clicked item.
   */
  #_handleSingleTypeClick(item, value) {
    if (this.dataToggleGroup.currentValue === value) return;
    this.#_removeAllActiveClasses();
    this.#_addActiveClass(item);
    this.dataToggleGroup.currentValue = value;
  }

  /**
   * Remove all active classes from the group items
   */
  #_removeAllActiveClasses() {
    this.toggleGroupItems.forEach((item) => {
      this.#_removeActiveClass(item);
    });
  }

  /**
   * Remove the active class from the specified item
   * @param {HTMLElement} item - The item to remove the active class from
   */
  #_removeActiveClass(item) {
    item.classList.remove('active');
    item.previousElementSibling?.classList.remove('after:hidden');
  }

  /**
   * Add the active class to the specified item
   * @param {HTMLElement} item - The item to add the active class to
   */
  #_addActiveClass(item) {
    item.classList.add('active');
    item.previousElementSibling?.classList.add('after:hidden');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleGroup);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/toggle-switch.js":
/*!**************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/toggle-switch.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class ToggleSwitch extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the ToggleSwitch class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element) {
    super(element);
    this.element = element;
    this.toggleSpan = this.#_createToggleSpan();
    this.clickHandler = this.#_handleClick.bind(this);
    this.#_init();
  }

  #_init() {
    this.element.appendChild(this.toggleSpan);
    this.element.addEventListener('click', this.clickHandler);
  }

  #_createToggleSpan() {
    const span = document.createElement('span');
    return span;
  }

  #_handleClick() {
    const isChecked = this.element.getAttribute('aria-checked') === 'true';

    if (isChecked) {
      this.element.setAttribute('aria-checked', 'false');
      this.element.classList.remove('on');
    } else {
      this.element.setAttribute('aria-checked', 'true');
      this.element.classList.add('on');
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSwitch);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/tooltip.js":
/*!********************************************************!*\
  !*** ./lib/assets/scripts/opera-components/tooltip.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTooltip: () => (/* binding */ createTooltip),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/debounce */ "./lib/assets/scripts/utils/debounce.js");
/* harmony import */ var _utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/convertDataToObject */ "./lib/assets/scripts/utils/convertDataToObject.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ "./lib/assets/scripts/utils/helpers.js");





const positions = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
class Tooltip extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Constructs a new instance of the Tooltip class.
   * @constructor
   * @param {Element} element - the element to be passed to the constructor
   */
  constructor(element, config = {}) {
    super(element);
    this.element = element;
    this.content = null;
    this.isPositionAlreadySet = false;
    this.isActive = false;
    this.dataTooltip = {};
    this.config = config;
    this.delayId = null;
    this.#_init();
  }

  /**
   * Method to show the tooltip
   */
  show() {
    if (!this.content) return;

    /**
     * Function to handle showing the tooltip
     */
    const handleShowTooltip = () => {
      this.element.appendChild(this.content);
      this.#_active();
      this.#_setPosition();
    };

    // Check if there is a delay set for showing the tooltip
    if (this.dataTooltip.delay) {
      this.#_clearDelay();
      this.delayId = setTimeout(() => {
        handleShowTooltip();
      }, this.dataTooltip.delay);
    } else {
      // If no delay is set, show the tooltip immediately
      handleShowTooltip();
    }
  }

  /**
   * Method to hide the tooltip
   */
  hide() {
    // If there's no content to hide, exit early
    if (!this.content) return;

    // Clear any existing delays that might show or hide the content
    this.#_clearDelay();

    // If the content is currently a child of the element, remove it.
    if (this.element.contains(this.content)) {
      this.element.removeChild(this.content);
    }

    this.#_deactive();
    this.#_removePosition();
  }

  /**
   * Initialize the component
   */
  #_init() {
    this.#_initValues();
    this.#_initTooltipContent();
    this.#_initEvents();
    this.#_initUI();
  }

  /**
   * Initialize tooltip content
   */
  #_initTooltipContent() {
    // Check if the content is already set to prevent unnecessary work
    if (this.content !== null) return;
    // Create a new div element that will hold the tooltip content
    const tooltipContent = document.createElement('div');
    tooltipContent.classList.add('tooltip-content');

    // If there's content specified in the config, use it for createTooltip method
    if (this.config.processedContent) {
      const content = this.config.processedContent;
      tooltipContent.appendChild(content);
    } else {
      // If there's no content specified in the config, use the tooltip content from the data-tooltip-content attribute
      const content = this.#_createTooltipByTooltipContent();
      tooltipContent.innerHTML = content ? content : '';
    }

    // Assign the prepared tooltip content to the instance's content property
    tooltipContent.innerHTML && (this.content = tooltipContent);
  }

  /**
   * Initialize tooltip Values
   */
  #_initValues() {
    const currentElementClasses = this.element.classList.value.split(' ');
    this.isPositionAlreadySet = currentElementClasses.some((element) => positions.includes(element));
    this.isActive = this.element.classList.contains('active');
    this.dataTooltip = (0,_utils_convertDataToObject__WEBPACK_IMPORTED_MODULE_2__["default"])(this.element.getAttribute('data-tooltip'));
  }

  /**
   * Initialize tooltip Events
   */
  #_initEvents() {
    // Attach event listeners based on tooltip type
    if (this.dataTooltip.type === 'toggle') {
      this.element.addEventListener('click', () => this.#_handleToggleClick());
    } else {
      this.element.addEventListener('mouseenter', () => this.show());
      this.element.addEventListener('mouseleave', () => this.hide());
    }

    // Debounce the setPosition function to improve performance
    const debounceSetPosition = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
      this.#_removePosition();
      this.#_setPosition();
    }, 100);
    window.addEventListener('scroll', debounceSetPosition);
    window.addEventListener('resize', debounceSetPosition);
  }

  /**
   * Initialize UI
   */
  #_initUI() {
    this.dataTooltip.theme === 'light' && this.element.classList.add('light');
    this.isActive && this.show();
  }

  /**
   * Create a tooltip based on the tooltip content
   * @returns {string} - The tooltip content
   */
  #_createTooltipByTooltipContent() {
    // Get the content from the 'data-tooltip-content' attribute
    const content = this.element.getAttribute('data-tooltip-content');

    // If the content is HTML, return without setting the tooltip content
    if ((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.isHTML)(content)) {
      return;
    }

    return content;
  }

  /**
   * Active the element
   */
  #_active() {
    this.element.classList.add('active');
    this.isActive = true;
  }

  /**
   * Deactivate the element
   */
  #_deactive() {
    this.element.classList.remove('active');
    this.isActive = false;
  }

  /**
   * Clears the delay timer if it is active
   */
  #_clearDelay() {
    if (this.delayId) {
      clearTimeout(this.delayId);
    }
  }

  /**
   * Handle the toggle click event
   */
  #_handleToggleClick() {
    if (!this.isActive) {
      this.show();
      /**
       * Event handler for document click.
       *
       * @param {Object} event - The click event object
       * @return {void}
       */
      const documentClickHandler = (event) => {
        if (!this.element.contains(event.target)) {
          this.hide();
          document.removeEventListener('click', documentClickHandler);
        }
      };
      document.addEventListener('click', documentClickHandler);
    }
  }

  /**
   * Set the position
   */
  #_setPosition() {
    if (this.isPositionAlreadySet || !this.isActive) {
      return;
    }
    const newposition = this.#_determinePosition(this.content);
    this.element.classList.add(newposition);
  }

  /**
   * Remove the position classes from the element
   */
  #_removePosition() {
    if (this.isPositionAlreadySet) {
      return;
    }
    // Remove each position class from the element
    positions.forEach((position) => this.element.classList.remove(position));
  }

  /**
   * Determine the position of the target element relative to the viewport
   * @param {Element} target - The target element
   * @returns {string} - The position relative to the viewport
   */
  #_determinePosition(target) {
    // Get the position and dimensions of the target element
    const { left, top, height, width } = target.getBoundingClientRect();

    // Get the dimensions of the viewport
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calculate margins from edges of the viewport
    const marginLeft = left + width / 2;
    const marginRight = viewportWidth - left - width / 2;
    const marginTop = top + height / 2;
    const marginBottom = viewportHeight - top - height / 2;
    const baseMargin = 108; // 108px

    // Determine the position based on margins
    if (marginLeft < baseMargin || marginRight < baseMargin) {
      if (marginLeft > marginRight) {
        if (marginTop > baseMargin) {
          return 'top-left';
        } else if (marginBottom > baseMargin) {
          return 'bottom-left';
        } else {
          return 'left';
        }
      } else {
        if (marginTop > baseMargin) {
          return 'top-right';
        } else if (marginBottom > baseMargin) {
          return 'bottom-right';
        } else {
          return 'right';
        }
      }
    }

    if (marginTop < 108 || marginBottom < 108) {
      return marginTop > marginBottom ? 'top' : 'bottom';
    }

    return 'top';
  }
}

/**
 * Initializes a tooltip for a specified DOM element with optional configuration.
 *
 * @param {Element} element - The target element for the tooltip.
 * @param {Object} config - An object containing optional properties:
 *   @param {string} config.content - The text content of the tooltip.
 *   @param {string} config.position - The position of the tooltip relative to the element.
 *   @param {string} config.type - The type of tooltip.
 *   @param {string} config.theme - The theme of the tooltip.
 *   @param {number} config.delay - The delay in milliseconds before showing the tooltip.
 *   @param {Object} config.btnLeft - An object containing properties for the left button:
 *     @param {string} config.btnLeft.content - The text content of the left button.
 *     @param {string} config.btnLeft.action - The action associated with the left button.
 *     @param {string} config.btnLeft.scrollTarget - The target for scrolling when left button is clicked.
 *     @param {string} config.btnLeft.href - The URL for opening in a new tab when left button is clicked.
 *   @param {Object} config.btnRight - An object containing properties for the right button:
 *     @param {string} config.btnRight.content - The text content of the right button.
 *     @param {string} config.btnRight.action - The action associated with the right button.
 *     @param {string} config.btnRight.scrollTarget - The target for scrolling when right button is clicked.
 *     @param {string} config.btnRight.href - The URL for opening in a new tab when right button is clicked.
 * @return {Tooltip|null} The Tooltip instance or null if element is not provided.
 */
const createTooltip = (
  element,
  config = {
    type: '',
    theme: '',
    position: '',
    delay: 0,
    content: '',
    btnLeft: {
      content: '',
      action: 'dismiss',
      scrollTarget: '',
      href: '',
    },
    btnRight: {
      content: '',
      action: 'dismiss',
      scrollTarget: '',
      href: '',
    },
  },
) => {
  if ( !config.content || (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.isHTML)(config.content)) return null;

const makeTooltip = () => {
  if (!element) return
      // Add 'tooltip' class to the element
      element.classList.add('tooltip');
      config.theme && element.classList.add(config.theme);
      config.position && element.classList.add(config.position);
  
      // Prepare data-tooltip attributes
      let dataTooltip = [];
      config.type && dataTooltip.push(`type:${config.type}`);
      config.delay && dataTooltip.push(`delay:${config.delay}`);
      element.setAttribute('data-tooltip', dataTooltip.join(' '));
  
      // Create new content element and set its innerHTML
      const newContent = document.createElement('div');
      config.content && (newContent.innerHTML += config.content);
  
      /**
       * Runs the specified action based on the input parameter.
       *
       * @param {string} action - The action to be executed.
       */
      const executeAction = (action) => {
        if (!action) return;
  
        // Dismiss action
        if (action === 'dismiss') element._instance.hide();
  
        // Scroll to action
        if (action === 'scrollTo') {
          const target = config.btnLeft?.scrollTarget || config.btnRight?.scrollTarget;
          target && document.querySelector(`#${target}`).scrollIntoView({ behavior: 'smooth' });
          element._instance.hide();
        }
  
        // Open new tab action
        if (action === 'openNewTab') {
          const href = config.btnLeft?.href || config.btnRight?.href;
          href && window.open(href, '_blank');
          element._instance.hide();
        }
      };
  
      /**
       * Adds a button to the specified container with the given configuration.
       *
       * @param {Object} btnConfig - The configuration for the button
       * @param {string} className - The class name for the button
       * @param {HTMLElement} container - The container to which the button will be added
       */
      const addButton = (btnConfig, className, container) => {
        if (btnConfig?.content && !(0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.isHTML)(btnConfig.content)) {
          const button = document.createElement('button');
          button.classList.add(className);
          button.innerHTML = btnConfig.content;
          button.addEventListener('click', (e) => {
            e.stopPropagation();
            executeAction(btnConfig.action);
          });
          container.appendChild(button);
        }
      };
  
      // Add left and right buttons if provided in the configuration
      if (config.btnLeft || config.btnRight) {
        newContent.innerHTML += '<span class="breakline"></span>';
        const actions = document.createElement('div');
        actions.classList.add('actions');
  
        // Add left and right buttons to the actions container
        addButton(config.btnLeft, 'btn-left', actions);
        addButton(config.btnRight, 'btn-right', actions);
  
        // Add the actions container to the new content
        newContent.appendChild(actions);
      }
  
      // Set the content of the configuration to the new content element
      config.processedContent = newContent;
  
      // Create a new Tooltip instance and attach it to the element
      element._instance = new Tooltip(element, config);
}

  if (element){
    makeTooltip()
   
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      makeTooltip()
    });
  }



};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);


/***/ }),

/***/ "./lib/assets/scripts/opera-components/tree-navigation.js":
/*!****************************************************************!*\
  !*** ./lib/assets/scripts/opera-components/tree-navigation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./lib/assets/scripts/opera-components/base-component.js");


class TreeNavigation extends _base_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super(element);
    this.element = element;
    this.buttonClickHandler = this.#_handleButtonClick.bind(this);
    this.#_init();
  }

  #_init() {
    this.#_appendButtons();
    this.element.querySelectorAll('.tree-navigation-item:not(.expanded)').forEach((treeItem) => {
      const button = treeItem.firstElementChild;
      if (!button.classList.contains('terminal')) {
        treeItem.classList.add('expanded');
      }
    });
  }

  #_appendButtons() {
    const treeItems = this.element.querySelectorAll('.tree-navigation-item');
    treeItems.forEach((treeItem) => {
      const hasChildren = treeItem.querySelector('.tree-navigation-item') !== null;
      const treeItemContent = treeItem.querySelector('span');
      const button = this.#_createButton(hasChildren);
      button.appendChild(treeItemContent);
      treeItem.insertBefore(button, treeItem.firstChild);
    });
  }

  #_createButton(hasChildren) {
    const button = document.createElement('button');
    const icon = document.createElement('i');

    button.classList.add('tree-navigation-item-button');
    button.setAttribute('type', 'button');
    button.appendChild(icon);

    if (hasChildren) {
      icon.classList.add('far', 'fa-chevron-right');
    } else {
      icon.classList.add('far', 'fa-minus');
      button.classList.add('terminal');
    }

    button.addEventListener('click', this.buttonClickHandler);

    return button;
  }

  #_handleButtonClick(event) {
    const button = event.target.closest('.tree-navigation-item-button');
    if (
      (event.target.nodeName === 'svg' || event.target.tagName === 'path') &&
      !button.classList.contains('terminal')
    ) {
      button.parentNode.classList.toggle('expanded');
      button.parentNode.querySelectorAll('.tree-navigation-item').forEach((child) => {
        child.classList.toggle('hidden');
        return;
      });
    }
    this.element.querySelectorAll('.tree-navigation-item-button').forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeNavigation);


/***/ }),

/***/ "./lib/assets/scripts/utils/convertDataToObject.js":
/*!*********************************************************!*\
  !*** ./lib/assets/scripts/utils/convertDataToObject.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertDataToObject)
/* harmony export */ });
/**
 * Convert a data attribute string into a key-value object.
 *
 * @param {string} dataAttribute - the data attribute string to be converted
 * @return {Object} the key-value object created from the data attribute
 */ function convertDataToObject(dataAttribute) {
  const keyValueArray = dataAttribute?.split(' ');
  const dataObject = {};

  keyValueArray?.forEach((element) => {
    const [key, value] = element.split(':');
    if (key) dataObject[key] = value;
  });
  return dataObject;
}
// example: data-components="key1:value1 key2:value2" -> {key1: value1, key2: value2}


/***/ }),

/***/ "./lib/assets/scripts/utils/debounce.js":
/*!**********************************************!*\
  !*** ./lib/assets/scripts/utils/debounce.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Return a debounced version of the given function that delays its execution until after `delay` milliseconds have elapsed since the last time it was invoked.
 *
 * @param {function} func - The function to be debounced
 * @param {number} delay - The number of milliseconds to delay
 * @return {function} The debounced function
 */
const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);


/***/ }),

/***/ "./lib/assets/scripts/utils/helpers.js":
/*!*********************************************!*\
  !*** ./lib/assets/scripts/utils/helpers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHTML: () => (/* binding */ isHTML)
/* harmony export */ });
/**
 * Check if the input string contains HTML content.
 *
 * @param {string} str - The input string to be checked for HTML content.
 * @return {boolean} Whether the input string contains HTML content or not.
 */
const isHTML = (str) => {
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(str, 'text/html');
  const isHTML = Array.from(htmlDocument.body.childNodes).some((node) => node.nodeType === 1);

  return isHTML;
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/flatpickr/dist/esm/utils/dom.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "./node_modules/flatpickr/dist/esm/utils/dates.js");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "./node_modules/flatpickr/dist/esm/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
        l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"],
    };
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self.onMouseOver = onMouseOver;
    self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
            .activeElement || document.activeElement);
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    var daysWidth = (self.days.offsetWidth) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) + parseInt(window.getComputedStyle(self.innerContainer).paddingLeft) + parseInt(window.getComputedStyle(self.innerContainer).paddingRight) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined ||
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        var limitMinHours = self.config.minTime !== undefined ||
            (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) ===
                    0);
        var limitMaxHours = self.config.maxTime !== undefined ||
            (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) ===
                    0);
        if (self.config.maxTime !== undefined &&
            self.config.minTime !== undefined &&
            self.config.minTime > self.config.maxTime) {
            var minBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.parseSeconds)(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        }
        else {
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0)
            : hours);
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
    }
    function onYearInput(event) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler, options); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler, options); });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function () { return element.removeEventListener(event, handler, options); },
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
        self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", function (e) {
                if (self.config.mode === "range")
                    onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
            });
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
        }
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
            };
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", function (e) {
                    updateTime(e);
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            i % 7 === 6) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
            onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            var numMonthDays = month.children.length;
            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined
            ? current
            : dayFocused
                ? activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
        if (self.weekNumbers)
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        var shouldBuildMonth = function (month) {
            if (self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i))
                continue;
            var month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
        }
        else {
            self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function (e) {
                var target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        var yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", { tabindex: "-1" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement,
        };
    }
    function buildMonths() {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
        self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
        var hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");
        else
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);
        for (var i = self.config.showMonths; i--;) {
            var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
        }
        for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, isOffset) {
        if (isOffset === void 0) { isOffset = true; }
        var delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        if (toInitial === void 0) { toInitial = true; }
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _a = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
                self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.composedPath && (~e.composedPath().indexOf(self.input) || (self.altInput && ~e.composedPath().indexOf(self.altInput))));
            var lostFocus = !isInput &&
                !isCalendarElement &&
                !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1)
                    self.clear(false);
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless) {
        var _a;
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput &&
            valueChanged &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                self.close();
                return eventTarget.blur();
            }
            else {
                self.open();
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (activeElement && isInView(activeElement)))) {
                            var delta_1 = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta_1);
                            else {
                                e.stopPropagation();
                                changeMonth(delta_1);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        var elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM,
                        ]
                            .concat(self.pluginElements)
                            .filter(function (x) { return x; });
                        var i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            var target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    }
                    else if (!self.config.noCalendar &&
                        self.daysContainer &&
                        self.daysContainer.contains(eventTarget) &&
                        e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) { cellClass = "flatpickr-day"; }
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains(cellClass) ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        var hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
        hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = (minRange > 0 && timestamp < minRange) ||
                (maxRange > 0 && timestamp > maxRange);
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return;
            }
            else if (containsDisabled && !outOfRange)
                return;
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                    ? "startRange"
                    : "endRange");
                if (initialDate < hoverDate && timestamp === initialDate)
                    dayElem.classList.add("startRange");
                else if (initialDate > hoverDate && timestamp === initialDate)
                    dayElem.classList.add("endRange");
                if (timestamp >= minRange &&
                    (maxRange === 0 || timestamp <= maxRange) &&
                    (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate))
                    dayElem.classList.add("inRange");
            }
        });
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(function () { return self.hourElement.select(); }, 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        var minMaxTimeSetter = function (type) { return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        }; };
        Object.defineProperty(self.config, "minTime", {
            get: function () { return self.config._minTime; },
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function () { return self.config._maxTime; },
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
            self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
                    self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
        self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
        else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules)
                continue;
            try {
                sheet.cssRules;
            }
            catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1)
            focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined &&
            self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        positionElement: [updatePositionElement],
        clickOpens: [
            function () {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (var key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach(function (x) { return x(); });
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach(function (x) { return x(); });
            else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1)
                self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        else
            self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
        if (self.config.mode === "range")
            self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = self.config.dateFormat; }
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        updatePositionElement();
    }
    function updatePositionElement() {
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", function (e) {
            self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true)
            return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined)
            return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent =
                    (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            }
            else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(specificFormat) {
        var format = specificFormat ||
            (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        return self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, format); })
            .filter(function (d, i, arr) {
            return self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i;
        })
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) +
                        ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice
        .call(nodeList)
        .filter(function (x) { return x instanceof HTMLElement; });
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
    default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   english: () => (/* binding */ english)
/* harmony export */ });
var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/types/options.js":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOKS: () => (/* binding */ HOOKS),
/* harmony export */   defaults: () => (/* binding */ defaults)
/* harmony export */ });
var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition",
];
var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" &&
        window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return (1 +
            Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                3 +
                ((week1.getDay() + 6) % 7)) /
                7));
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dates.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateSecondsSinceMidnight: () => (/* binding */ calculateSecondsSinceMidnight),
/* harmony export */   compareDates: () => (/* binding */ compareDates),
/* harmony export */   compareTimes: () => (/* binding */ compareTimes),
/* harmony export */   createDateFormatter: () => (/* binding */ createDateFormatter),
/* harmony export */   createDateParser: () => (/* binding */ createDateParser),
/* harmony export */   duration: () => (/* binding */ duration),
/* harmony export */   getDefaultHours: () => (/* binding */ getDefaultHours),
/* harmony export */   isBetween: () => (/* binding */ isBetween),
/* harmony export */   parseSeconds: () => (/* binding */ parseSeconds)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");



var createDateFormatter = function (_a) {
    var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
    return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\"
                ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config)
                : c !== "\\"
                    ? c
                    : "";
        })
            .join("");
    };
};
var createDateParser = function (_a) {
    var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c;
    return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date)
            return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var dateOrig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (config && config.parseDate) {
                parsedDate = config.parseDate(date, format);
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr)) {
                parsedDate = new Date(date);
            }
            else {
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
                        regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                }
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function (_a) {
                    var fn = _a.fn, val = _a.val;
                    return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                });
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
function compareDates(date1, date2, timeless) {
    if (timeless === void 0) { timeless = true; }
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return (3600 * (date1.getHours() - date2.getHours()) +
        60 * (date1.getMinutes() - date2.getMinutes()) +
        date1.getSeconds() -
        date2.getSeconds());
}
var isBetween = function (ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearNode: () => (/* binding */ clearNode),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createNumberInput: () => (/* binding */ createNumberInput),
/* harmony export */   findParent: () => (/* binding */ findParent),
/* harmony export */   getEventTarget: () => (/* binding */ getEventTarget),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    }
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined)
        for (var key in opts)
            numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }
    catch (error) {
        return event.target;
    }
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/formatting.js":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formats: () => (/* binding */ formats),
/* harmony export */   monthToStr: () => (/* binding */ monthToStr),
/* harmony export */   revFormat: () => (/* binding */ revFormat),
/* harmony export */   tokenRegex: () => (/* binding */ tokenRegex)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");

var doNothing = function () { return undefined; };
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM, locale) {
        dateObj.setHours((dateObj.getHours() % 12) +
            12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: function (_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
    },
    H: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date, locale) { return locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)]; },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4); },
    d: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    u: function (date) { return date.getTime(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayify: () => (/* binding */ arrayify),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   int: () => (/* binding */ int),
/* harmony export */   pad: () => (/* binding */ pad)
/* harmony export */ });
var pad = function (number, length) {
    if (length === void 0) { length = 2; }
    return ("000" + number).slice(length * -1);
};
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(fn, wait) {
    var t;
    return function () {
        var _this = this;
        var args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { return fn.apply(_this, args); }, wait);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/polyfills.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {

"use strict";

if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        var _loop_1 = function (source) {
            if (source) {
                Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
            }
        };
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var source = args_1[_a];
            _loop_1(source);
        }
        return target;
    };
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/l10n/vn.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/vn.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var Vietnamese = {
      weekdays: {
          shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
          longhand: [
              "Chủ nhật",
              "Thứ hai",
              "Thứ ba",
              "Thứ tư",
              "Thứ năm",
              "Thứ sáu",
              "Thứ bảy",
          ],
      },
      months: {
          shorthand: [
              "Th1",
              "Th2",
              "Th3",
              "Th4",
              "Th5",
              "Th6",
              "Th7",
              "Th8",
              "Th9",
              "Th10",
              "Th11",
              "Th12",
          ],
          longhand: [
              "Tháng 1",
              "Tháng 2",
              "Tháng 3",
              "Tháng 4",
              "Tháng 5",
              "Tháng 6",
              "Tháng 7",
              "Tháng 8",
              "Tháng 9",
              "Tháng 10",
              "Tháng 11",
              "Tháng 12",
          ],
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "Tuần",
      amPM: ["SA", "CH"],
      toggleTitle: "Nhấp chuột để chuyển đổi",
      rangeSeparator: " đến ",
  };
  fp.l10ns.vn = Vietnamese;
  var vn = fp.l10ns;

  exports.Vietnamese = Vietnamese;
  exports.default = vn;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/flatpickr/dist/plugins/rangePlugin.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/plugins/rangePlugin.js ***!
  \************************************************************/
/***/ (function(module) {

(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    function rangePlugin(config) {
        if (config === void 0) { config = {}; }
        return function (fp) {
            var dateFormat = "", secondInput, _secondInputFocused, _prevDates;
            var createSecondInput = function () {
                if (config.input) {
                    secondInput =
                        config.input instanceof Element
                            ? config.input
                            : window.document.querySelector(config.input);
                    if (!secondInput) {
                        fp.config.errorHandler(new Error("Invalid input element specified"));
                        return;
                    }
                    if (fp.config.wrap) {
                        secondInput = secondInput.querySelector("[data-input]");
                    }
                }
                else {
                    secondInput = fp._input.cloneNode();
                    secondInput.removeAttribute("id");
                    secondInput._flatpickr = undefined;
                }
                if (secondInput.value) {
                    var parsedDate = fp.parseDate(secondInput.value);
                    if (parsedDate)
                        fp.selectedDates.push(parsedDate);
                }
                secondInput.setAttribute("data-fp-omit", "");
                if (fp.config.clickOpens) {
                    fp._bind(secondInput, ["focus", "click"], function () {
                        if (fp.selectedDates[1]) {
                            fp.latestSelectedDateObj = fp.selectedDates[1];
                            fp._setHoursFromDate(fp.selectedDates[1]);
                            fp.jumpToDate(fp.selectedDates[1]);
                        }
                        _secondInputFocused = true;
                        fp.isOpen = false;
                        fp.open(undefined, config.position === "left" ? fp._input : secondInput);
                    });
                    fp._bind(fp._input, ["focus", "click"], function (e) {
                        e.preventDefault();
                        fp.isOpen = false;
                        fp.open();
                    });
                }
                if (fp.config.allowInput)
                    fp._bind(secondInput, "keydown", function (e) {
                        if (e.key === "Enter") {
                            fp.setDate([fp.selectedDates[0], secondInput.value], true, dateFormat);
                            secondInput.click();
                        }
                    });
                if (!config.input)
                    fp._input.parentNode &&
                        fp._input.parentNode.insertBefore(secondInput, fp._input.nextSibling);
            };
            var plugin = {
                onParseConfig: function () {
                    fp.config.mode = "range";
                    dateFormat = fp.config.altInput
                        ? fp.config.altFormat
                        : fp.config.dateFormat;
                },
                onReady: function () {
                    createSecondInput();
                    fp.config.ignoredFocusElements.push(secondInput);
                    if (fp.config.allowInput) {
                        fp._input.removeAttribute("readonly");
                        secondInput.removeAttribute("readonly");
                    }
                    else {
                        secondInput.setAttribute("readonly", "readonly");
                    }
                    fp._bind(fp._input, "focus", function () {
                        fp.latestSelectedDateObj = fp.selectedDates[0];
                        fp._setHoursFromDate(fp.selectedDates[0]);
                        _secondInputFocused = false;
                        fp.jumpToDate(fp.selectedDates[0]);
                    });
                    if (fp.config.allowInput)
                        fp._bind(fp._input, "keydown", function (e) {
                            if (e.key === "Enter")
                                fp.setDate([fp._input.value, fp.selectedDates[1]], true, dateFormat);
                        });
                    fp.setDate(fp.selectedDates, false);
                    plugin.onValueUpdate(fp.selectedDates);
                    fp.loadedPlugins.push("range");
                },
                onPreCalendarPosition: function () {
                    if (_secondInputFocused) {
                        fp._positionElement = secondInput;
                        setTimeout(function () {
                            fp._positionElement = fp._input;
                        }, 0);
                    }
                },
                onChange: function () {
                    if (!fp.selectedDates.length) {
                        setTimeout(function () {
                            if (fp.selectedDates.length)
                                return;
                            secondInput.value = "";
                            _prevDates = [];
                        }, 10);
                    }
                    if (_secondInputFocused) {
                        setTimeout(function () {
                            secondInput.focus();
                        }, 0);
                    }
                },
                onDestroy: function () {
                    if (!config.input)
                        secondInput.parentNode &&
                            secondInput.parentNode.removeChild(secondInput);
                },
                onValueUpdate: function (selDates) {
                    var _a, _b, _c;
                    if (!secondInput)
                        return;
                    _prevDates =
                        !_prevDates || selDates.length >= _prevDates.length
                            ? __spreadArrays(selDates) : _prevDates;
                    if (_prevDates.length > selDates.length) {
                        var newSelectedDate = selDates[0];
                        var newDates = _secondInputFocused
                            ? [_prevDates[0], newSelectedDate]
                            : [newSelectedDate, _prevDates[1]];
                        if (newDates[0].getTime() > newDates[1].getTime()) {
                            if (_secondInputFocused) {
                                newDates[0] = newDates[1];
                            }
                            else {
                                newDates[1] = newDates[0];
                            }
                        }
                        fp.setDate(newDates, false);
                        _prevDates = __spreadArrays(newDates);
                    }
                    _a = fp.selectedDates.map(function (d) { return fp.formatDate(d, dateFormat); }), _b = _a[0], fp._input.value = _b === void 0 ? "" : _b, _c = _a[1], secondInput.value = _c === void 0 ? "" : _c;
                },
            };
            return plugin;
        };
    }

    return rangePlugin;

})));


/***/ }),

/***/ "./node_modules/prettier/standalone.mjs":
/*!**********************************************!*\
  !*** ./node_modules/prettier/standalone.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __debug: () => (/* binding */ ri),
/* harmony export */   check: () => (/* binding */ ei),
/* harmony export */   "default": () => (/* binding */ qc),
/* harmony export */   doc: () => (/* binding */ er),
/* harmony export */   format: () => (/* binding */ cu),
/* harmony export */   formatWithCursor: () => (/* binding */ au),
/* harmony export */   getSupportInfo: () => (/* binding */ ti),
/* harmony export */   util: () => (/* binding */ Qt),
/* harmony export */   version: () => (/* binding */ Du)
/* harmony export */ });
var lu=Object.create;var $e=Object.defineProperty;var fu=Object.getOwnPropertyDescriptor;var Fu=Object.getOwnPropertyNames;var pu=Object.getPrototypeOf,du=Object.prototype.hasOwnProperty;var mu=(e,t)=>()=>(e&&(t=e(e=0)),t);var Me=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),We=(e,t)=>{for(var r in t)$e(e,r,{get:t[r],enumerable:!0})},nr=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Fu(t))!du.call(e,o)&&o!==r&&$e(e,o,{get:()=>t[o],enumerable:!(n=fu(t,o))||n.enumerable});return e};var he=(e,t,r)=>(r=e!=null?lu(pu(e)):{},nr(t||!e||!e.__esModule?$e(r,"default",{value:e,enumerable:!0}):r,e)),Eu=e=>nr($e({},"__esModule",{value:!0}),e);var Cu=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var ht=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)};var ce=(e,t,r)=>(Cu(e,t,"access private method"),r);var or=Me(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.default=ur;function ur(){}ur.prototype={diff:function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.callback;typeof n=="function"&&(o=n,n={}),this.options=n;var u=this;function i(F){return o?(setTimeout(function(){o(void 0,F)},0),!0):F}t=this.castInput(t),r=this.castInput(r),t=this.removeEmpty(this.tokenize(t)),r=this.removeEmpty(this.tokenize(r));var s=r.length,D=t.length,a=1,c=s+D;n.maxEditLength&&(c=Math.min(c,n.maxEditLength));var d=[{newPos:-1,components:[]}],f=this.extractCommon(d[0],r,t,0);if(d[0].newPos+1>=s&&f+1>=D)return i([{value:this.join(r),count:r.length}]);function p(){for(var F=-1*a;F<=a;F+=2){var m=void 0,E=d[F-1],C=d[F+1],g=(C?C.newPos:0)-F;E&&(d[F-1]=void 0);var h=E&&E.newPos+1<s,B=C&&0<=g&&g<D;if(!h&&!B){d[F]=void 0;continue}if(!h||B&&E.newPos<C.newPos?(m=yu(C),u.pushComponent(m.components,void 0,!0)):(m=E,m.newPos++,u.pushComponent(m.components,!0,void 0)),g=u.extractCommon(m,r,t,F),m.newPos+1>=s&&g+1>=D)return i(gu(u,m.components,r,t,u.useLongestToken));d[F]=m}a++}if(o)(function F(){setTimeout(function(){if(a>c)return o();p()||F()},0)})();else for(;a<=c;){var l=p();if(l)return l}},pushComponent:function(t,r,n){var o=t[t.length-1];o&&o.added===r&&o.removed===n?t[t.length-1]={count:o.count+1,added:r,removed:n}:t.push({count:1,added:r,removed:n})},extractCommon:function(t,r,n,o){for(var u=r.length,i=n.length,s=t.newPos,D=s-o,a=0;s+1<u&&D+1<i&&this.equals(r[s+1],n[D+1]);)s++,D++,a++;return a&&t.components.push({count:a}),t.newPos=s,D},equals:function(t,r){return this.options.comparator?this.options.comparator(t,r):t===r||this.options.ignoreCase&&t.toLowerCase()===r.toLowerCase()},removeEmpty:function(t){for(var r=[],n=0;n<t.length;n++)t[n]&&r.push(t[n]);return r},castInput:function(t){return t},tokenize:function(t){return t.split("")},join:function(t){return t.join("")}};function gu(e,t,r,n,o){for(var u=0,i=t.length,s=0,D=0;u<i;u++){var a=t[u];if(a.removed){if(a.value=e.join(n.slice(D,D+a.count)),D+=a.count,u&&t[u-1].added){var d=t[u-1];t[u-1]=t[u],t[u]=d}}else{if(!a.added&&o){var c=r.slice(s,s+a.count);c=c.map(function(p,l){var F=n[D+l];return F.length>p.length?F:p}),a.value=e.join(c)}else a.value=e.join(r.slice(s,s+a.count));s+=a.count,a.added||(D+=a.count)}}var f=t[i-1];return i>1&&typeof f.value=="string"&&(f.added||f.removed)&&e.equals("",f.value)&&(t[i-2].value+=f.value,t.pop()),t}function yu(e){return{newPos:e.newPos,components:e.components.slice(0)}}});var ir=Me(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.diffArrays=_u;ye.arrayDiff=void 0;var Au=Bu(or());function Bu(e){return e&&e.__esModule?e:{default:e}}var ge=new Au.default;ye.arrayDiff=ge;ge.tokenize=function(e){return e.slice()};ge.join=ge.removeEmpty=function(e){return e};function _u(e,t,r){return ge.diff(e,t,r)}});var Pe=Me((ps,jr)=>{"use strict";var Yr=new Proxy(String,{get:()=>Yr});jr.exports=Yr});var Fn={};We(Fn,{default:()=>uo,shouldHighlight:()=>no});var no,uo,pn=mu(()=>{no=()=>!1,uo=String});var yn=Me(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.codeFrameColumns=gn;Ft.default=ao;var dn=(pn(),Eu(Fn)),mn=oo(Pe(),!0);function hn(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(hn=function(n){return n?r:t})(e)}function oo(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=hn(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}var jt;function io(e){if(e){var t;return(t=jt)!=null||(jt=new mn.default.constructor({enabled:!0,level:1})),jt}return mn.default}var En=!1;function so(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}var Cn=/\r\n|[\n\r\u2028\u2029]/;function Do(e,t,r){let n=Object.assign({column:0,line:-1},e.start),o=Object.assign({},n,e.end),{linesAbove:u=2,linesBelow:i=3}=r||{},s=n.line,D=n.column,a=o.line,c=o.column,d=Math.max(s-(u+1),0),f=Math.min(t.length,a+i);s===-1&&(d=0),a===-1&&(f=t.length);let p=a-s,l={};if(p)for(let F=0;F<=p;F++){let m=F+s;if(!D)l[m]=!0;else if(F===0){let E=t[m-1].length;l[m]=[D,E-D+1]}else if(F===p)l[m]=[0,c];else{let E=t[m-F].length;l[m]=[0,E]}}else D===c?D?l[s]=[D,0]:l[s]=!0:l[s]=[D,c-D];return{start:d,end:f,markerLines:l}}function gn(e,t,r={}){let n=(r.highlightCode||r.forceColor)&&(0,dn.shouldHighlight)(r),o=io(r.forceColor),u=so(o),i=(F,m)=>n?F(m):m,s=e.split(Cn),{start:D,end:a,markerLines:c}=Do(t,s,r),d=t.start&&typeof t.start.column=="number",f=String(a).length,l=(n?(0,dn.default)(e,r):e).split(Cn,a).slice(D,a).map((F,m)=>{let E=D+1+m,g=` ${` ${E}`.slice(-f)} |`,h=c[E],B=!c[E+1];if(h){let Z="";if(Array.isArray(h)){let $=F.slice(0,Math.max(h[0]-1,0)).replace(/[^\t]/g," "),Q=h[1]||1;Z=[`
 `,i(u.gutter,g.replace(/\d/g," "))," ",$,i(u.marker,"^").repeat(Q)].join(""),B&&r.message&&(Z+=" "+i(u.message,r.message))}return[i(u.marker,">"),i(u.gutter,g),F.length>0?` ${F}`:"",Z].join("")}else return` ${i(u.gutter,g)}${F.length>0?` ${F}`:""}`}).join(`
`);return r.message&&!d&&(l=`${" ".repeat(f+1)}${r.message}
${l}`),n?o.reset(l):l}function ao(e,t,r,n={}){if(!En){En=!0;let u="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";{let i=new Error(u);i.name="DeprecationWarning",console.warn(new Error(u))}}return r=Math.max(r,0),gn(e,{start:{column:r,line:t}},n)}});var tr={};We(tr,{__debug:()=>ri,check:()=>ei,doc:()=>er,format:()=>cu,formatWithCursor:()=>au,getSupportInfo:()=>ti,util:()=>Qt,version:()=>Du});var hu=(e,t,r,n)=>{if(!(e&&t==null))return t.replaceAll?t.replaceAll(r,n):r.global?t.replace(r,n):t.split(r).join(n)},ee=hu;var Kn=he(ir(),1);var M="string",j="array",W="cursor",T="indent",S="align",v="trim",_="group",w="fill",x="if-break",P="indent-if-break",L="line-suffix",I="line-suffix-boundary",A="line",O="label",k="break-parent",Ue=new Set([W,T,S,v,_,w,x,P,L,I,A,O,k]);function xu(e){if(typeof e=="string")return M;if(Array.isArray(e))return j;if(!e)return;let{type:t}=e;if(Ue.has(t))return t}var U=xu;var wu=e=>new Intl.ListFormat("en-US",{type:"disjunction"}).format(e);function ku(e){let t=e===null?"null":typeof e;if(t!=="string"&&t!=="object")return`Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;if(U(e))throw new Error("doc is valid.");let r=Object.prototype.toString.call(e);if(r!=="[object Object]")return`Unexpected doc '${r}'.`;let n=wu([...Ue].map(o=>`'${o}'`));return`Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`}var yt=class extends Error{name="InvalidDocError";constructor(t){super(ku(t)),this.doc=t}},q=yt;var sr={};function bu(e,t,r,n){let o=[e];for(;o.length>0;){let u=o.pop();if(u===sr){r(o.pop());continue}r&&o.push(u,sr);let i=U(u);if(!i)throw new q(u);if((t==null?void 0:t(u))!==!1)switch(i){case j:case w:{let s=i===j?u:u.parts;for(let D=s.length,a=D-1;a>=0;--a)o.push(s[a]);break}case x:o.push(u.flatContents,u.breakContents);break;case _:if(n&&u.expandedStates)for(let s=u.expandedStates.length,D=s-1;D>=0;--D)o.push(u.expandedStates[D]);else o.push(u.contents);break;case S:case T:case P:case O:case L:o.push(u.contents);break;case M:case W:case v:case I:case A:case k:break;default:throw new q(u)}}}var Ae=bu;var Dr=()=>{},z=Dr,ze=Dr;function ie(e){return z(e),{type:T,contents:e}}function oe(e,t){return z(t),{type:S,contents:t,n:e}}function At(e,t={}){return z(e),ze(t.expandedStates,!0),{type:_,id:t.id,contents:e,break:!!t.shouldBreak,expandedStates:t.expandedStates}}function ar(e){return oe(Number.NEGATIVE_INFINITY,e)}function cr(e){return oe({type:"root"},e)}function lr(e){return oe(-1,e)}function fr(e,t){return At(e[0],{...t,expandedStates:e})}function Ge(e){return ze(e),{type:w,parts:e}}function Fr(e,t="",r={}){return z(e),t!==""&&z(t),{type:x,breakContents:e,flatContents:t,groupId:r.groupId}}function pr(e,t){return z(e),{type:P,contents:e,groupId:t.groupId,negate:t.negate}}function Be(e){return z(e),{type:L,contents:e}}var dr={type:I},le={type:k},mr={type:v},_e={type:A,hard:!0},Bt={type:A,hard:!0,literal:!0},Ke={type:A},Er={type:A,soft:!0},G=[_e,le],He=[Bt,le],xe={type:W};function we(e,t){z(e),ze(t);let r=[];for(let n=0;n<t.length;n++)n!==0&&r.push(e),r.push(t[n]);return r}function qe(e,t,r){z(e);let n=e;if(t>0){for(let o=0;o<Math.floor(t/r);++o)n=ie(n);n=oe(t%r,n),n=oe(Number.NEGATIVE_INFINITY,n)}return n}function Cr(e,t){return z(t),e?{type:O,label:e,contents:t}:t}var Ou=(e,t,r)=>{if(!(e&&t==null))return Array.isArray(t)||typeof t=="string"?t[r<0?t.length+r:r]:t.at(r)},y=Ou;function hr(e){let t=e.indexOf("\r");return t>=0?e.charAt(t+1)===`
`?"crlf":"cr":"lf"}function ke(e){switch(e){case"cr":return"\r";case"crlf":return`\r
`;default:return`
`}}function _t(e,t){let r;switch(t){case`
`:r=/\n/g;break;case"\r":r=/\r/g;break;case`\r
`:r=/\r\n/g;break;default:throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`)}let n=e.match(r);return n?n.length:0}function gr(e){return ee(!1,e,/\r\n?/g,`
`)}var yr=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;function Ar(e){return e===12288||e>=65281&&e<=65376||e>=65504&&e<=65510}function Br(e){return e>=4352&&e<=4447||e===8986||e===8987||e===9001||e===9002||e>=9193&&e<=9196||e===9200||e===9203||e===9725||e===9726||e===9748||e===9749||e>=9800&&e<=9811||e===9855||e===9875||e===9889||e===9898||e===9899||e===9917||e===9918||e===9924||e===9925||e===9934||e===9940||e===9962||e===9970||e===9971||e===9973||e===9978||e===9981||e===9989||e===9994||e===9995||e===10024||e===10060||e===10062||e>=10067&&e<=10069||e===10071||e>=10133&&e<=10135||e===10160||e===10175||e===11035||e===11036||e===11088||e===11093||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||e===94192||e===94193||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||e===110589||e===110590||e>=110592&&e<=110882||e===110898||e>=110928&&e<=110930||e===110933||e>=110948&&e<=110951||e>=110960&&e<=111355||e===126980||e===127183||e===127374||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||e===127568||e===127569||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||e===127988||e>=127992&&e<=128062||e===128064||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||e===128378||e===128405||e===128406||e===128420||e>=128507&&e<=128591||e>=128640&&e<=128709||e===128716||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||e===128747||e===128748||e>=128756&&e<=128764||e>=128992&&e<=129003||e===129008||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}var _r=e=>!(Ar(e)||Br(e));var Nu=/[^\x20-\x7F]/;function Tu(e){if(!e)return 0;if(!Nu.test(e))return e.length;e=e.replace(yr(),"  ");let t=0;for(let r of e){let n=r.codePointAt(0);n<=31||n>=127&&n<=159||n>=768&&n<=879||(t+=_r(n)?1:2)}return t}var be=Tu;var kr=e=>{if(Array.isArray(e))return e;if(e.type!==w)throw new Error(`Expect doc to be 'array' or '${w}'.`);return e.parts};function Ne(e,t){if(typeof e=="string")return t(e);let r=new Map;return n(e);function n(u){if(r.has(u))return r.get(u);let i=o(u);return r.set(u,i),i}function o(u){switch(U(u)){case j:return t(u.map(n));case w:return t({...u,parts:u.parts.map(n)});case x:return t({...u,breakContents:n(u.breakContents),flatContents:n(u.flatContents)});case _:{let{expandedStates:i,contents:s}=u;return i?(i=i.map(n),s=i[0]):s=n(s),t({...u,contents:s,expandedStates:i})}case S:case T:case P:case O:case L:return t({...u,contents:n(u.contents)});case M:case W:case v:case I:case A:case k:return t(u);default:throw new q(u)}}}function Je(e,t,r){let n=r,o=!1;function u(i){if(o)return!1;let s=t(i);s!==void 0&&(o=!0,n=s)}return Ae(e,u),n}function Su(e){if(e.type===_&&e.break||e.type===A&&e.hard||e.type===k)return!0}function br(e){return Je(e,Su,!1)}function xr(e){if(e.length>0){let t=y(!1,e,-1);!t.expandedStates&&!t.break&&(t.break="propagated")}return null}function Or(e){let t=new Set,r=[];function n(u){if(u.type===k&&xr(r),u.type===_){if(r.push(u),t.has(u))return!1;t.add(u)}}function o(u){u.type===_&&r.pop().break&&xr(r)}Ae(e,n,o,!0)}function vu(e){return e.type===A&&!e.hard?e.soft?"":" ":e.type===x?e.flatContents:e}function Nr(e){return Ne(e,vu)}function wr(e){for(e=[...e];e.length>=2&&y(!1,e,-2).type===A&&y(!1,e,-1).type===k;)e.length-=2;if(e.length>0){let t=Oe(y(!1,e,-1));e[e.length-1]=t}return e}function Oe(e){switch(U(e)){case S:case T:case P:case _:case L:case O:{let t=Oe(e.contents);return{...e,contents:t}}case x:return{...e,breakContents:Oe(e.breakContents),flatContents:Oe(e.flatContents)};case w:return{...e,parts:wr(e.parts)};case j:return wr(e);case M:return e.replace(/[\n\r]*$/,"");case W:case v:case I:case A:case k:break;default:throw new q(e)}return e}function Xe(e){return Oe(Lu(e))}function Pu(e){switch(U(e)){case w:if(e.parts.every(t=>t===""))return"";break;case _:if(!e.contents&&!e.id&&!e.break&&!e.expandedStates)return"";if(e.contents.type===_&&e.contents.id===e.id&&e.contents.break===e.break&&e.contents.expandedStates===e.expandedStates)return e.contents;break;case S:case T:case P:case L:if(!e.contents)return"";break;case x:if(!e.flatContents&&!e.breakContents)return"";break;case j:{let t=[];for(let r of e){if(!r)continue;let[n,...o]=Array.isArray(r)?r:[r];typeof n=="string"&&typeof y(!1,t,-1)=="string"?t[t.length-1]+=n:t.push(n),t.push(...o)}return t.length===0?"":t.length===1?t[0]:t}case M:case W:case v:case I:case A:case O:case k:break;default:throw new q(e)}return e}function Lu(e){return Ne(e,t=>Pu(t))}function Tr(e,t=He){return Ne(e,r=>typeof r=="string"?we(t,r.split(`
`)):r)}function Iu(e){if(e.type===A)return!0}function Sr(e){return Je(e,Iu,!1)}function Ze(e,t){return e.type===O?{...e,contents:t(e.contents)}:t(e)}var R=Symbol("MODE_BREAK"),K=Symbol("MODE_FLAT"),Te=Symbol("cursor");function vr(){return{value:"",length:0,queue:[]}}function Ru(e,t){return xt(e,{type:"indent"},t)}function Yu(e,t,r){return t===Number.NEGATIVE_INFINITY?e.root||vr():t<0?xt(e,{type:"dedent"},r):t?t.type==="root"?{...e,root:e}:xt(e,{type:typeof t=="string"?"stringAlign":"numberAlign",n:t},r):e}function xt(e,t,r){let n=t.type==="dedent"?e.queue.slice(0,-1):[...e.queue,t],o="",u=0,i=0,s=0;for(let l of n)switch(l.type){case"indent":c(),r.useTabs?D(1):a(r.tabWidth);break;case"stringAlign":c(),o+=l.n,u+=l.n.length;break;case"numberAlign":i+=1,s+=l.n;break;default:throw new Error(`Unexpected type '${l.type}'`)}return f(),{...e,value:o,length:u,queue:n};function D(l){o+="	".repeat(l),u+=r.tabWidth*l}function a(l){o+=" ".repeat(l),u+=l}function c(){r.useTabs?d():f()}function d(){i>0&&D(i),p()}function f(){s>0&&a(s),p()}function p(){i=0,s=0}}function wt(e){let t=0,r=0,n=e.length;e:for(;n--;){let o=e[n];if(o===Te){r++;continue}for(let u=o.length-1;u>=0;u--){let i=o[u];if(i===" "||i==="	")t++;else{e[n]=o.slice(0,u+1);break e}}}if(t>0||r>0)for(e.length=n+1;r-- >0;)e.push(Te);return t}function Qe(e,t,r,n,o,u){if(r===Number.POSITIVE_INFINITY)return!0;let i=t.length,s=[e],D=[];for(;r>=0;){if(s.length===0){if(i===0)return!0;s.push(t[--i]);continue}let{mode:a,doc:c}=s.pop();switch(U(c)){case M:D.push(c),r-=be(c);break;case j:case w:{let d=kr(c);for(let f=d.length-1;f>=0;f--)s.push({mode:a,doc:d[f]});break}case T:case S:case P:case O:s.push({mode:a,doc:c.contents});break;case v:r+=wt(D);break;case _:{if(u&&c.break)return!1;let d=c.break?R:a,f=c.expandedStates&&d===R?y(!1,c.expandedStates,-1):c.contents;s.push({mode:d,doc:f});break}case x:{let f=(c.groupId?o[c.groupId]||K:a)===R?c.breakContents:c.flatContents;f&&s.push({mode:a,doc:f});break}case A:if(a===R||c.hard)return!0;c.soft||(D.push(" "),r--);break;case L:n=!0;break;case I:if(n)return!1;break}}return!1}function fe(e,t){let r={},n=t.printWidth,o=ke(t.endOfLine),u=0,i=[{ind:vr(),mode:R,doc:e}],s=[],D=!1,a=[],c=0;for(Or(e);i.length>0;){let{ind:f,mode:p,doc:l}=i.pop();switch(U(l)){case M:{let F=o!==`
`?ee(!1,l,`
`,o):l;s.push(F),i.length>0&&(u+=be(F));break}case j:for(let F=l.length-1;F>=0;F--)i.push({ind:f,mode:p,doc:l[F]});break;case W:if(c>=2)throw new Error("There are too many 'cursor' in doc.");s.push(Te),c++;break;case T:i.push({ind:Ru(f,t),mode:p,doc:l.contents});break;case S:i.push({ind:Yu(f,l.n,t),mode:p,doc:l.contents});break;case v:u-=wt(s);break;case _:switch(p){case K:if(!D){i.push({ind:f,mode:l.break?R:K,doc:l.contents});break}case R:{D=!1;let F={ind:f,mode:K,doc:l.contents},m=n-u,E=a.length>0;if(!l.break&&Qe(F,i,m,E,r))i.push(F);else if(l.expandedStates){let C=y(!1,l.expandedStates,-1);if(l.break){i.push({ind:f,mode:R,doc:C});break}else for(let g=1;g<l.expandedStates.length+1;g++)if(g>=l.expandedStates.length){i.push({ind:f,mode:R,doc:C});break}else{let h=l.expandedStates[g],B={ind:f,mode:K,doc:h};if(Qe(B,i,m,E,r)){i.push(B);break}}}else i.push({ind:f,mode:R,doc:l.contents});break}}l.id&&(r[l.id]=y(!1,i,-1).mode);break;case w:{let F=n-u,{parts:m}=l;if(m.length===0)break;let[E,C]=m,g={ind:f,mode:K,doc:E},h={ind:f,mode:R,doc:E},B=Qe(g,[],F,a.length>0,r,!0);if(m.length===1){B?i.push(g):i.push(h);break}let Z={ind:f,mode:K,doc:C},$={ind:f,mode:R,doc:C};if(m.length===2){B?i.push(Z,g):i.push($,h);break}m.splice(0,2);let Q={ind:f,mode:p,doc:Ge(m)},rr=m[0];Qe({ind:f,mode:K,doc:[E,C,rr]},[],F,a.length>0,r,!0)?i.push(Q,Z,g):B?i.push(Q,$,g):i.push(Q,$,h);break}case x:case P:{let F=l.groupId?r[l.groupId]:p;if(F===R){let m=l.type===x?l.breakContents:l.negate?l.contents:ie(l.contents);m&&i.push({ind:f,mode:p,doc:m})}if(F===K){let m=l.type===x?l.flatContents:l.negate?ie(l.contents):l.contents;m&&i.push({ind:f,mode:p,doc:m})}break}case L:a.push({ind:f,mode:p,doc:l.contents});break;case I:a.length>0&&i.push({ind:f,mode:p,doc:_e});break;case A:switch(p){case K:if(l.hard)D=!0;else{l.soft||(s.push(" "),u+=1);break}case R:if(a.length>0){i.push({ind:f,mode:p,doc:l},...a.reverse()),a.length=0;break}l.literal?f.root?(s.push(o,f.root.value),u=f.root.length):(s.push(o),u=0):(u-=wt(s),s.push(o+f.value),u=f.length);break}break;case O:i.push({ind:f,mode:p,doc:l.contents});break;case k:break;default:throw new q(l)}i.length===0&&a.length>0&&(i.push(...a.reverse()),a.length=0)}let d=s.indexOf(Te);if(d!==-1){let f=s.indexOf(Te,d+1),p=s.slice(0,d).join(""),l=s.slice(d+1,f).join(""),F=s.slice(f+1).join("");return{formatted:p+l+F,cursorNodeStart:p.length,cursorNodeText:l}}return{formatted:s.join("")}}function J(e){var t;if(!e)return"";if(Array.isArray(e)){let r=[];for(let n of e)if(Array.isArray(n))r.push(...J(n));else{let o=J(n);o!==""&&r.push(o)}return r}return e.type===x?{...e,breakContents:J(e.breakContents),flatContents:J(e.flatContents)}:e.type===_?{...e,contents:J(e.contents),expandedStates:(t=e.expandedStates)==null?void 0:t.map(J)}:e.type===w?{type:"fill",parts:e.parts.map(J)}:e.contents?{...e,contents:J(e.contents)}:e}function Pr(e){let t=Object.create(null),r=new Set;return n(J(e));function n(u,i,s){var D,a;if(typeof u=="string")return JSON.stringify(u);if(Array.isArray(u)){let c=u.map(n).filter(Boolean);return c.length===1?c[0]:`[${c.join(", ")}]`}if(u.type===A){let c=((D=s==null?void 0:s[i+1])==null?void 0:D.type)===k;return u.literal?c?"literalline":"literallineWithoutBreakParent":u.hard?c?"hardline":"hardlineWithoutBreakParent":u.soft?"softline":"line"}if(u.type===k)return((a=s==null?void 0:s[i-1])==null?void 0:a.type)===A&&s[i-1].hard?void 0:"breakParent";if(u.type===v)return"trim";if(u.type===T)return"indent("+n(u.contents)+")";if(u.type===S)return u.n===Number.NEGATIVE_INFINITY?"dedentToRoot("+n(u.contents)+")":u.n<0?"dedent("+n(u.contents)+")":u.n.type==="root"?"markAsRoot("+n(u.contents)+")":"align("+JSON.stringify(u.n)+", "+n(u.contents)+")";if(u.type===x)return"ifBreak("+n(u.breakContents)+(u.flatContents?", "+n(u.flatContents):"")+(u.groupId?(u.flatContents?"":', ""')+`, { groupId: ${o(u.groupId)} }`:"")+")";if(u.type===P){let c=[];u.negate&&c.push("negate: true"),u.groupId&&c.push(`groupId: ${o(u.groupId)}`);let d=c.length>0?`, { ${c.join(", ")} }`:"";return`indentIfBreak(${n(u.contents)}${d})`}if(u.type===_){let c=[];u.break&&u.break!=="propagated"&&c.push("shouldBreak: true"),u.id&&c.push(`id: ${o(u.id)}`);let d=c.length>0?`, { ${c.join(", ")} }`:"";return u.expandedStates?`conditionalGroup([${u.expandedStates.map(f=>n(f)).join(",")}]${d})`:`group(${n(u.contents)}${d})`}if(u.type===w)return`fill([${u.parts.map(c=>n(c)).join(", ")}])`;if(u.type===L)return"lineSuffix("+n(u.contents)+")";if(u.type===I)return"lineSuffixBoundary";if(u.type===O)return`label(${JSON.stringify(u.label)}, ${n(u.contents)})`;throw new Error("Unknown doc type "+u.type)}function o(u){if(typeof u!="symbol")return JSON.stringify(String(u));if(u in t)return t[u];let i=u.description||"symbol";for(let s=0;;s++){let D=i+(s>0?` #${s}`:"");if(!r.has(D))return r.add(D),t[u]=`Symbol.for(${JSON.stringify(D)})`}}}function ju(e,t,r=0){let n=0;for(let o=r;o<e.length;++o)e[o]==="	"?n=n+t-n%t:n++;return n}var Fe=ju;var Se=class extends Error{name="ConfigError"},ve=class extends Error{name="UndefinedParserError"};var Lr={cursorOffset:{category:"Special",type:"int",default:-1,range:{start:-1,end:1/0,step:1},description:`Print (to stderr) where a cursor at the given position would move to after formatting.
This option cannot be used with --range-start and --range-end.`,cliCategory:"Editor"},endOfLine:{category:"Global",type:"choice",default:"lf",description:"Which end of line characters to apply.",choices:[{value:"lf",description:"Line Feed only (\\n), common on Linux and macOS as well as inside git repos"},{value:"crlf",description:"Carriage Return + Line Feed characters (\\r\\n), common on Windows"},{value:"cr",description:"Carriage Return character only (\\r), used very rarely"},{value:"auto",description:`Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)`}]},filepath:{category:"Special",type:"path",description:"Specify the input filepath. This will be used to do parser inference.",cliName:"stdin-filepath",cliCategory:"Other",cliDescription:"Path to the file to pretend that stdin comes from."},insertPragma:{category:"Special",type:"boolean",default:!1,description:"Insert @format pragma into file's first docblock comment.",cliCategory:"Other"},parser:{category:"Global",type:"choice",default:void 0,description:"Which parser to use.",exception:e=>typeof e=="string"||typeof e=="function",choices:[{value:"flow",description:"Flow"},{value:"babel",description:"JavaScript"},{value:"babel-flow",description:"Flow"},{value:"babel-ts",description:"TypeScript"},{value:"typescript",description:"TypeScript"},{value:"acorn",description:"JavaScript"},{value:"espree",description:"JavaScript"},{value:"meriyah",description:"JavaScript"},{value:"css",description:"CSS"},{value:"less",description:"Less"},{value:"scss",description:"SCSS"},{value:"json",description:"JSON"},{value:"json5",description:"JSON5"},{value:"json-stringify",description:"JSON.stringify"},{value:"graphql",description:"GraphQL"},{value:"markdown",description:"Markdown"},{value:"mdx",description:"MDX"},{value:"vue",description:"Vue"},{value:"yaml",description:"YAML"},{value:"glimmer",description:"Ember / Handlebars"},{value:"html",description:"HTML"},{value:"angular",description:"Angular"},{value:"lwc",description:"Lightning Web Components"}]},plugins:{type:"path",array:!0,default:[{value:[]}],category:"Global",description:"Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",exception:e=>typeof e=="string"||typeof e=="object",cliName:"plugin",cliCategory:"Config"},printWidth:{category:"Global",type:"int",default:80,description:"The line length where Prettier will try wrap.",range:{start:0,end:1/0,step:1}},rangeEnd:{category:"Special",type:"int",default:1/0,range:{start:0,end:1/0,step:1},description:`Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.
This option cannot be used with --cursor-offset.`,cliCategory:"Editor"},rangeStart:{category:"Special",type:"int",default:0,range:{start:0,end:1/0,step:1},description:`Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.
This option cannot be used with --cursor-offset.`,cliCategory:"Editor"},requirePragma:{category:"Special",type:"boolean",default:!1,description:`Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,cliCategory:"Other"},tabWidth:{type:"int",category:"Global",default:2,description:"Number of spaces per indentation level.",range:{start:0,end:1/0,step:1}},useTabs:{category:"Global",type:"boolean",default:!1,description:"Indent with tabs instead of spaces."},embeddedLanguageFormatting:{category:"Global",type:"choice",default:"auto",description:"Control how Prettier formats quoted code embedded in the file.",choices:[{value:"auto",description:"Format embedded code if Prettier can automatically identify it."},{value:"off",description:"Never automatically format embedded code."}]}};function et({plugins:e=[],showDeprecated:t=!1}={}){let r=e.flatMap(o=>o.languages??[]),n=[];for(let o of $u(Object.assign({},...e.map(({options:u})=>u),Lr)))!t&&o.deprecated||(Array.isArray(o.choices)&&(t||(o.choices=o.choices.filter(u=>!u.deprecated)),o.name==="parser"&&(o.choices=[...o.choices,...Vu(o.choices,r,e)])),o.pluginDefaults=Object.fromEntries(e.filter(u=>{var i;return((i=u.defaultOptions)==null?void 0:i[o.name])!==void 0}).map(u=>[u.name,u.defaultOptions[o.name]])),n.push(o));return{languages:r,options:n}}function*Vu(e,t,r){let n=new Set(e.map(o=>o.value));for(let o of t)if(o.parsers){for(let u of o.parsers)if(!n.has(u)){n.add(u);let i=r.find(D=>D.parsers&&Object.prototype.hasOwnProperty.call(D.parsers,u)),s=o.name;i!=null&&i.name&&(s+=` (plugin: ${i.name})`),yield{value:u,description:s}}}}function $u(e){let t=[];for(let[r,n]of Object.entries(e)){let o={name:r,...n};Array.isArray(o.default)&&(o.default=y(!1,o.default,-1).value),t.push(o)}return t}var Mu=e=>String(e).split(/[/\\]/).pop();function Ir(e,t){if(!t)return;let r=Mu(t).toLowerCase();return e.find(n=>{var o,u;return((o=n.extensions)==null?void 0:o.some(i=>r.endsWith(i)))||((u=n.filenames)==null?void 0:u.some(i=>i.toLowerCase()===r))})}function Wu(e,t){if(t)return e.find(({name:r})=>r.toLowerCase()===t)??e.find(({aliases:r})=>r==null?void 0:r.includes(t))??e.find(({extensions:r})=>r==null?void 0:r.includes(`.${t}`))}function Uu(e,t){let r=e.plugins.flatMap(o=>o.languages??[]),n=Wu(r,t.language)??Ir(r,t.physicalFile)??Ir(r,t.file)??(t.physicalFile,void 0);return n==null?void 0:n.parsers[0]}var Rr=Uu;var te={key:e=>/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e)?e:JSON.stringify(e),value(e){if(e===null||typeof e!="object")return JSON.stringify(e);if(Array.isArray(e))return`[${e.map(r=>te.value(r)).join(", ")}]`;let t=Object.keys(e);return t.length===0?"{}":`{ ${t.map(r=>`${te.key(r)}: ${te.value(e[r])}`).join(", ")} }`},pair:({key:e,value:t})=>te.value({[e]:t})};var kt=he(Pe(),1),Vr=(e,t,{descriptor:r})=>{let n=[`${kt.default.yellow(typeof e=="string"?r.key(e):r.pair(e))} is deprecated`];return t&&n.push(`we now treat it as ${kt.default.blue(typeof t=="string"?r.key(t):r.pair(t))}`),n.join("; ")+"."};var se=he(Pe(),1);var tt=Symbol.for("vnopts.VALUE_NOT_EXIST"),pe=Symbol.for("vnopts.VALUE_UNCHANGED");var $r=" ".repeat(2),Wr=(e,t,r)=>{let{text:n,list:o}=r.normalizeExpectedResult(r.schemas[e].expected(r)),u=[];return n&&u.push(Mr(e,t,n,r.descriptor)),o&&u.push([Mr(e,t,o.title,r.descriptor)].concat(o.values.map(i=>Ur(i,r.loggerPrintWidth))).join(`
`)),zr(u,r.loggerPrintWidth)};function Mr(e,t,r,n){return[`Invalid ${se.default.red(n.key(e))} value.`,`Expected ${se.default.blue(r)},`,`but received ${t===tt?se.default.gray("nothing"):se.default.red(n.value(t))}.`].join(" ")}function Ur({text:e,list:t},r){let n=[];return e&&n.push(`- ${se.default.blue(e)}`),t&&n.push([`- ${se.default.blue(t.title)}:`].concat(t.values.map(o=>Ur(o,r-$r.length).replace(/^|\n/g,`$&${$r}`))).join(`
`)),zr(n,r)}function zr(e,t){if(e.length===1)return e[0];let[r,n]=e,[o,u]=e.map(i=>i.split(`
`,1)[0].length);return o>t&&o>u?n:r}var Nt=he(Pe(),1);var bt=[],Gr=[];function Ot(e,t){if(e===t)return 0;let r=e;e.length>t.length&&(e=t,t=r);let n=e.length,o=t.length;for(;n>0&&e.charCodeAt(~-n)===t.charCodeAt(~-o);)n--,o--;let u=0;for(;u<n&&e.charCodeAt(u)===t.charCodeAt(u);)u++;if(n-=u,o-=u,n===0)return o;let i,s,D,a,c=0,d=0;for(;c<n;)Gr[c]=e.charCodeAt(u+c),bt[c]=++c;for(;d<o;)for(i=t.charCodeAt(u+d),D=d++,s=d,c=0;c<n;c++)a=i===Gr[c]?D:D+1,D=bt[c],s=bt[c]=D>s?a>s?s+1:a:a>D?D+1:a;return s}var rt=(e,t,{descriptor:r,logger:n,schemas:o})=>{let u=[`Ignored unknown option ${Nt.default.yellow(r.pair({key:e,value:t}))}.`],i=Object.keys(o).sort().find(s=>Ot(e,s)<3);i&&u.push(`Did you mean ${Nt.default.blue(r.key(i))}?`),n.warn(u.join(" "))};var zu=["default","expected","validate","deprecated","forward","redirect","overlap","preprocess","postprocess"];function Gu(e,t){let r=new e(t),n=Object.create(r);for(let o of zu)o in t&&(n[o]=Ku(t[o],r,b.prototype[o].length));return n}var b=class{static create(t){return Gu(this,t)}constructor(t){this.name=t.name}default(t){}expected(t){return"nothing"}validate(t,r){return!1}deprecated(t,r){return!1}forward(t,r){}redirect(t,r){}overlap(t,r,n){return t}preprocess(t,r){return t}postprocess(t,r){return pe}};function Ku(e,t,r){return typeof e=="function"?(...n)=>e(...n.slice(0,r-1),t,...n.slice(r-1)):()=>e}var nt=class extends b{constructor(t){super(t),this._sourceName=t.sourceName}expected(t){return t.schemas[this._sourceName].expected(t)}validate(t,r){return r.schemas[this._sourceName].validate(t,r)}redirect(t,r){return this._sourceName}};var ut=class extends b{expected(){return"anything"}validate(){return!0}};var ot=class extends b{constructor({valueSchema:t,name:r=t.name,...n}){super({...n,name:r}),this._valueSchema=t}expected(t){let{text:r,list:n}=t.normalizeExpectedResult(this._valueSchema.expected(t));return{text:r&&`an array of ${r}`,list:n&&{title:"an array of the following values",values:[{list:n}]}}}validate(t,r){if(!Array.isArray(t))return!1;let n=[];for(let o of t){let u=r.normalizeValidateResult(this._valueSchema.validate(o,r),o);u!==!0&&n.push(u.value)}return n.length===0?!0:{value:n}}deprecated(t,r){let n=[];for(let o of t){let u=r.normalizeDeprecatedResult(this._valueSchema.deprecated(o,r),o);u!==!1&&n.push(...u.map(({value:i})=>({value:[i]})))}return n}forward(t,r){let n=[];for(let o of t){let u=r.normalizeForwardResult(this._valueSchema.forward(o,r),o);n.push(...u.map(Kr))}return n}redirect(t,r){let n=[],o=[];for(let u of t){let i=r.normalizeRedirectResult(this._valueSchema.redirect(u,r),u);"remain"in i&&n.push(i.remain),o.push(...i.redirect.map(Kr))}return n.length===0?{redirect:o}:{redirect:o,remain:n}}overlap(t,r){return t.concat(r)}};function Kr({from:e,to:t}){return{from:[e],to:t}}var it=class extends b{expected(){return"true or false"}validate(t){return typeof t=="boolean"}};function qr(e,t){let r=Object.create(null);for(let n of e){let o=n[t];if(r[o])throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);r[o]=n}return r}function Jr(e,t){let r=new Map;for(let n of e){let o=n[t];if(r.has(o))throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);r.set(o,n)}return r}function Xr(){let e=Object.create(null);return t=>{let r=JSON.stringify(t);return e[r]?!0:(e[r]=!0,!1)}}function Zr(e,t){let r=[],n=[];for(let o of e)t(o)?r.push(o):n.push(o);return[r,n]}function Qr(e){return e===Math.floor(e)}function en(e,t){if(e===t)return 0;let r=typeof e,n=typeof t,o=["undefined","object","boolean","number","string"];return r!==n?o.indexOf(r)-o.indexOf(n):r!=="string"?Number(e)-Number(t):e.localeCompare(t)}function tn(e){return(...t)=>{let r=e(...t);return typeof r=="string"?new Error(r):r}}function Tt(e){return e===void 0?{}:e}function St(e){if(typeof e=="string")return{text:e};let{text:t,list:r}=e;return Hu((t||r)!==void 0,"Unexpected `expected` result, there should be at least one field."),r?{text:t,list:{title:r.title,values:r.values.map(St)}}:{text:t}}function vt(e,t){return e===!0?!0:e===!1?{value:t}:e}function Pt(e,t,r=!1){return e===!1?!1:e===!0?r?!0:[{value:t}]:"value"in e?[e]:e.length===0?!1:e}function Hr(e,t){return typeof e=="string"||"key"in e?{from:t,to:e}:"from"in e?{from:e.from,to:e.to}:{from:t,to:e.to}}function st(e,t){return e===void 0?[]:Array.isArray(e)?e.map(r=>Hr(r,t)):[Hr(e,t)]}function Lt(e,t){let r=st(typeof e=="object"&&"redirect"in e?e.redirect:e,t);return r.length===0?{remain:t,redirect:r}:typeof e=="object"&&"remain"in e?{remain:e.remain,redirect:r}:{redirect:r}}function Hu(e,t){if(!e)throw new Error(t)}var Dt=class extends b{constructor(t){super(t),this._choices=Jr(t.choices.map(r=>r&&typeof r=="object"?r:{value:r}),"value")}expected({descriptor:t}){let r=Array.from(this._choices.keys()).map(i=>this._choices.get(i)).filter(({hidden:i})=>!i).map(i=>i.value).sort(en).map(t.value),n=r.slice(0,-2),o=r.slice(-2);return{text:n.concat(o.join(" or ")).join(", "),list:{title:"one of the following values",values:r}}}validate(t){return this._choices.has(t)}deprecated(t){let r=this._choices.get(t);return r&&r.deprecated?{value:t}:!1}forward(t){let r=this._choices.get(t);return r?r.forward:void 0}redirect(t){let r=this._choices.get(t);return r?r.redirect:void 0}};var at=class extends b{expected(){return"a number"}validate(t,r){return typeof t=="number"}};var ct=class extends at{expected(){return"an integer"}validate(t,r){return r.normalizeValidateResult(super.validate(t,r),t)===!0&&Qr(t)}};var Le=class extends b{expected(){return"a string"}validate(t){return typeof t=="string"}};var rn=te,nn=rt,un=Wr,on=Vr;var lt=class{constructor(t,r){let{logger:n=console,loggerPrintWidth:o=80,descriptor:u=rn,unknown:i=nn,invalid:s=un,deprecated:D=on,missing:a=()=>!1,required:c=()=>!1,preprocess:d=p=>p,postprocess:f=()=>pe}=r||{};this._utils={descriptor:u,logger:n||{warn:()=>{}},loggerPrintWidth:o,schemas:qr(t,"name"),normalizeDefaultResult:Tt,normalizeExpectedResult:St,normalizeDeprecatedResult:Pt,normalizeForwardResult:st,normalizeRedirectResult:Lt,normalizeValidateResult:vt},this._unknownHandler=i,this._invalidHandler=tn(s),this._deprecatedHandler=D,this._identifyMissing=(p,l)=>!(p in l)||a(p,l),this._identifyRequired=c,this._preprocess=d,this._postprocess=f,this.cleanHistory()}cleanHistory(){this._hasDeprecationWarned=Xr()}normalize(t){let r={},o=[this._preprocess(t,this._utils)],u=()=>{for(;o.length!==0;){let i=o.shift(),s=this._applyNormalization(i,r);o.push(...s)}};u();for(let i of Object.keys(this._utils.schemas)){let s=this._utils.schemas[i];if(!(i in r)){let D=Tt(s.default(this._utils));"value"in D&&o.push({[i]:D.value})}}u();for(let i of Object.keys(this._utils.schemas)){if(!(i in r))continue;let s=this._utils.schemas[i],D=r[i],a=s.postprocess(D,this._utils);a!==pe&&(this._applyValidation(a,i,s),r[i]=a)}return this._applyPostprocess(r),this._applyRequiredCheck(r),r}_applyNormalization(t,r){let n=[],{knownKeys:o,unknownKeys:u}=this._partitionOptionKeys(t);for(let i of o){let s=this._utils.schemas[i],D=s.preprocess(t[i],this._utils);this._applyValidation(D,i,s);let a=({from:p,to:l})=>{n.push(typeof l=="string"?{[l]:p}:{[l.key]:l.value})},c=({value:p,redirectTo:l})=>{let F=Pt(s.deprecated(p,this._utils),D,!0);if(F!==!1)if(F===!0)this._hasDeprecationWarned(i)||this._utils.logger.warn(this._deprecatedHandler(i,l,this._utils));else for(let{value:m}of F){let E={key:i,value:m};if(!this._hasDeprecationWarned(E)){let C=typeof l=="string"?{key:l,value:m}:l;this._utils.logger.warn(this._deprecatedHandler(E,C,this._utils))}}};st(s.forward(D,this._utils),D).forEach(a);let f=Lt(s.redirect(D,this._utils),D);if(f.redirect.forEach(a),"remain"in f){let p=f.remain;r[i]=i in r?s.overlap(r[i],p,this._utils):p,c({value:p})}for(let{from:p,to:l}of f.redirect)c({value:p,redirectTo:l})}for(let i of u){let s=t[i];this._applyUnknownHandler(i,s,r,(D,a)=>{n.push({[D]:a})})}return n}_applyRequiredCheck(t){for(let r of Object.keys(this._utils.schemas))if(this._identifyMissing(r,t)&&this._identifyRequired(r))throw this._invalidHandler(r,tt,this._utils)}_partitionOptionKeys(t){let[r,n]=Zr(Object.keys(t).filter(o=>!this._identifyMissing(o,t)),o=>o in this._utils.schemas);return{knownKeys:r,unknownKeys:n}}_applyValidation(t,r,n){let o=vt(n.validate(t,this._utils),t);if(o!==!0)throw this._invalidHandler(r,o.value,this._utils)}_applyUnknownHandler(t,r,n,o){let u=this._unknownHandler(t,r,this._utils);if(u)for(let i of Object.keys(u)){if(this._identifyMissing(i,u))continue;let s=u[i];i in this._utils.schemas?o(i,s):n[i]=s}}_applyPostprocess(t){let r=this._postprocess(t,this._utils);if(r!==pe){if(r.delete)for(let n of r.delete)delete t[n];if(r.override){let{knownKeys:n,unknownKeys:o}=this._partitionOptionKeys(r.override);for(let u of n){let i=r.override[u];this._applyValidation(i,u,this._utils.schemas[u]),t[u]=i}for(let u of o){let i=r.override[u];this._applyUnknownHandler(u,i,t,(s,D)=>{let a=this._utils.schemas[s];this._applyValidation(D,s,a),t[s]=D})}}}}};var It;function Ju(e,t,{logger:r=!1,isCLI:n=!1,passThrough:o=!1,FlagSchema:u,descriptor:i}={}){if(n){if(!u)throw new Error("'FlagSchema' option is required.");if(!i)throw new Error("'descriptor' option is required.")}else i=te;let s=o?Array.isArray(o)?(f,p)=>o.includes(f)?{[f]:p}:void 0:(f,p)=>({[f]:p}):(f,p,l)=>{let{_:F,...m}=l.schemas;return rt(f,p,{...l,schemas:m})},D=Xu(t,{isCLI:n,FlagSchema:u}),a=new lt(D,{logger:r,unknown:s,descriptor:i}),c=r!==!1;c&&It&&(a._hasDeprecationWarned=It);let d=a.normalize(e);return c&&(It=a._hasDeprecationWarned),d}function Xu(e,{isCLI:t,FlagSchema:r}){let n=[];t&&n.push(ut.create({name:"_"}));for(let o of e)n.push(Zu(o,{isCLI:t,optionInfos:e,FlagSchema:r})),o.alias&&t&&n.push(nt.create({name:o.alias,sourceName:o.name}));return n}function Zu(e,{isCLI:t,optionInfos:r,FlagSchema:n}){let{name:o}=e,u={name:o},i,s={};switch(e.type){case"int":i=ct,t&&(u.preprocess=Number);break;case"string":i=Le;break;case"choice":i=Dt,u.choices=e.choices.map(D=>D!=null&&D.redirect?{...D,redirect:{to:{key:e.name,value:D.redirect}}}:D);break;case"boolean":i=it;break;case"flag":i=n,u.flags=r.flatMap(D=>[D.alias,D.description&&D.name,D.oppositeDescription&&`no-${D.name}`].filter(Boolean));break;case"path":i=Le;break;default:throw new Error(`Unexpected type ${e.type}`)}if(e.exception?u.validate=(D,a,c)=>e.exception(D)||a.validate(D,c):u.validate=(D,a,c)=>D===void 0||a.validate(D,c),e.redirect&&(s.redirect=D=>D?{to:{key:e.redirect.option,value:e.redirect.value}}:void 0),e.deprecated&&(s.deprecated=!0),t&&!e.array){let D=u.preprocess||(a=>a);u.preprocess=(a,c,d)=>c.preprocess(D(Array.isArray(a)?y(!1,a,-1):a),d)}return e.array?ot.create({...t?{preprocess:D=>Array.isArray(D)?D:[D]}:{},...s,valueSchema:i.create(u)}):i.create({...u,...s})}var sn=Ju;function Rt(e,t){if(!t)throw new Error("parserName is required.");for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.parsers&&Object.prototype.hasOwnProperty.call(o.parsers,t))return o}let r=`Couldn't resolve parser "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new Se(r)}function Dn(e,t){if(!t)throw new Error("astFormat is required.");for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.printers&&Object.prototype.hasOwnProperty.call(o.printers,t))return o}let r=`Couldn't find plugin for AST format "${t}".`;throw r+=" Plugins must be explicitly added to the standalone bundle.",new Se(r)}function ft({plugins:e,parser:t}){let r=Rt(e,t);return Yt(r,t)}function Yt(e,t){let r=e.parsers[t];return typeof r=="function"?r():r}function an(e,t){let r=e.printers[t];return typeof r=="function"?r():r}var cn={astFormat:"estree",printer:{},originalText:void 0,locStart:null,locEnd:null};async function Qu(e,t={}){var d;let r={...e};if(!r.parser)if(r.filepath){if(r.parser=Rr(r,{physicalFile:r.filepath}),!r.parser)throw new ve(`No parser could be inferred for file "${r.filepath}".`)}else throw new ve("No parser and no file path given, couldn't infer a parser.");let n=et({plugins:e.plugins,showDeprecated:!0}).options,o={...cn,...Object.fromEntries(n.filter(f=>f.default!==void 0).map(f=>[f.name,f.default]))},u=Rt(r.plugins,r.parser),i=await Yt(u,r.parser);r.astFormat=i.astFormat,r.locEnd=i.locEnd,r.locStart=i.locStart;let s=(d=u.printers)!=null&&d[i.astFormat]?u:Dn(r.plugins,i.astFormat),D=await an(s,i.astFormat);r.printer=D;let a=s.defaultOptions?Object.fromEntries(Object.entries(s.defaultOptions).filter(([,f])=>f!==void 0)):{},c={...o,...a};for(let[f,p]of Object.entries(c))(r[f]===null||r[f]===void 0)&&(r[f]=p);return r.parser==="json"&&(r.trailingComma="none"),sn(r,n,{passThrough:Object.keys(cn),...t})}var re=Qu;var ln=new Set(["tokens","comments","parent","enclosingNode","precedingNode","followingNode"]),eo=e=>Object.keys(e).filter(t=>!ln.has(t));function to(e){return e?t=>e(t,ln):eo}var H=to;function ro(e,t){let{printer:{massageAstNode:r,getVisitorKeys:n}}=t;if(!r)return e;let o=H(n),u=r.ignoredProperties??new Set;return i(e);function i(s,D){if(!(s!==null&&typeof s=="object"))return s;if(Array.isArray(s))return s.map(f=>i(f,D)).filter(Boolean);let a={},c=new Set(o(s));for(let f in s)!Object.prototype.hasOwnProperty.call(s,f)||u.has(f)||(c.has(f)?a[f]=i(s[f],s):a[f]=s[f]);let d=r(s,a,D);if(d!==null)return d??a}}var fn=ro;var An=he(yn(),1);async function co(e,t){let r=await ft(t),n=r.preprocess?r.preprocess(e,t):e;t.originalText=n;let o;try{o=await r.parse(n,t,t)}catch(u){lo(u,e)}return{text:n,ast:o}}function lo(e,t){let{loc:r}=e;if(r){let n=(0,An.codeFrameColumns)(t,r,{highlightCode:!0});throw e.message+=`
`+n,e.codeFrame=n,e}throw e}var De=co;var Ie,$t,de,pt,Vt=class{constructor(t){ht(this,Ie);ht(this,de);this.stack=[t]}get key(){let{stack:t,siblings:r}=this;return y(!1,t,r===null?-2:-4)??null}get index(){return this.siblings===null?null:y(!1,this.stack,-2)}get node(){return y(!1,this.stack,-1)}get parent(){return this.getNode(1)}get grandparent(){return this.getNode(2)}get isInArray(){return this.siblings!==null}get siblings(){let{stack:t}=this,r=y(!1,t,-3);return Array.isArray(r)?r:null}get next(){let{siblings:t}=this;return t===null?null:t[this.index+1]}get previous(){let{siblings:t}=this;return t===null?null:t[this.index-1]}get isFirst(){return this.index===0}get isLast(){let{siblings:t,index:r}=this;return t!==null&&r===t.length-1}get isRoot(){return this.stack.length===1}get root(){return this.stack[0]}get ancestors(){return[...ce(this,de,pt).call(this)]}getName(){let{stack:t}=this,{length:r}=t;return r>1?y(!1,t,-2):null}getValue(){return y(!1,this.stack,-1)}getNode(t=0){let r=ce(this,Ie,$t).call(this,t);return r===-1?null:this.stack[r]}getParentNode(t=0){return this.getNode(t+1)}call(t,...r){let{stack:n}=this,{length:o}=n,u=y(!1,n,-1);for(let i of r)u=u[i],n.push(i,u);try{return t(this)}finally{n.length=o}}callParent(t,r=0){let n=ce(this,Ie,$t).call(this,r+1),o=this.stack.splice(n+1);try{return t(this)}finally{this.stack.push(...o)}}each(t,...r){let{stack:n}=this,{length:o}=n,u=y(!1,n,-1);for(let i of r)u=u[i],n.push(i,u);try{for(let i=0;i<u.length;++i)n.push(i,u[i]),t(this,i,u),n.length-=2}finally{n.length=o}}map(t,...r){let n=[];return this.each((o,u,i)=>{n[u]=t(o,u,i)},...r),n}match(...t){let r=this.stack.length-1,n=null,o=this.stack[r--];for(let u of t){if(o===void 0)return!1;let i=null;if(typeof n=="number"&&(i=n,n=this.stack[r--],o=this.stack[r--]),u&&!u(o,n,i))return!1;n=this.stack[r--],o=this.stack[r--]}return!0}findAncestor(t){for(let r of ce(this,de,pt).call(this))if(t(r))return r}hasAncestor(t){for(let r of ce(this,de,pt).call(this))if(t(r))return!0;return!1}};Ie=new WeakSet,$t=function(t){let{stack:r}=this;for(let n=r.length-1;n>=0;n-=2)if(!Array.isArray(r[n])&&--t<0)return n;return-1},de=new WeakSet,pt=function*(){let{stack:t}=this;for(let r=t.length-3;r>=0;r-=2){let n=t[r];Array.isArray(n)||(yield n)}};var Bn=Vt;var _n=new Proxy(()=>{},{get:()=>_n}),Re=_n;function me(e){return(t,r,n)=>{let o=!!(n!=null&&n.backwards);if(r===!1)return!1;let{length:u}=t,i=r;for(;i>=0&&i<u;){let s=t.charAt(i);if(e instanceof RegExp){if(!e.test(s))return i}else if(!e.includes(s))return i;o?i--:i++}return i===-1||i===u?i:!1}}var xn=me(/\s/),N=me(" 	"),dt=me(",; 	"),mt=me(/[^\n\r]/);function fo(e,t,r){let n=!!(r!=null&&r.backwards);if(t===!1)return!1;let o=e.charAt(t);if(n){if(e.charAt(t-1)==="\r"&&o===`
`)return t-2;if(o===`
`||o==="\r"||o==="\u2028"||o==="\u2029")return t-1}else{if(o==="\r"&&e.charAt(t+1)===`
`)return t+2;if(o===`
`||o==="\r"||o==="\u2028"||o==="\u2029")return t+1}return t}var Y=fo;function Fo(e,t,r={}){let n=N(e,r.backwards?t-1:t,r),o=Y(e,n,r);return n!==o}var V=Fo;function po(e){return Array.isArray(e)&&e.length>0}var Mt=po;function mo(e){return e!==null&&typeof e=="object"}var wn=mo;function*Wt(e,t){let{getVisitorKeys:r,filter:n=()=>!0}=t,o=u=>wn(u)&&n(u);for(let u of r(e)){let i=e[u];if(Array.isArray(i))for(let s of i)o(s)&&(yield s);else o(i)&&(yield i)}}function*kn(e,t){let r=[e];for(let n=0;n<r.length;n++){let o=r[n];for(let u of Wt(o,t))yield u,r.push(u)}}function Eo(e){let t=e.type||e.kind||"(unknown type)",r=String(e.name||e.id&&(typeof e.id=="object"?e.id.name:e.id)||e.key&&(typeof e.key=="object"?e.key.name:e.key)||e.value&&(typeof e.value=="object"?"":String(e.value))||e.operator||"");return r.length>20&&(r=r.slice(0,19)+"\u2026"),t+(r?" "+r:"")}function Ut(e,t){(e.comments??(e.comments=[])).push(t),t.printed=!1,t.nodeDescription=Eo(e)}function ne(e,t){t.leading=!0,t.trailing=!1,Ut(e,t)}function X(e,t,r){t.leading=!1,t.trailing=!1,r&&(t.marker=r),Ut(e,t)}function ue(e,t){t.leading=!1,t.trailing=!0,Ut(e,t)}var zt=new WeakMap;function Et(e,t){if(zt.has(e))return zt.get(e);let{printer:{getCommentChildNodes:r,canAttachComment:n,getVisitorKeys:o},locStart:u,locEnd:i}=t;if(!n)return[];let s=((r==null?void 0:r(e,t))??[...Wt(e,{getVisitorKeys:H(o)})]).flatMap(D=>n(D)?[D]:Et(D,t));return s.sort((D,a)=>u(D)-u(a)||i(D)-i(a)),zt.set(e,s),s}function On(e,t,r,n){let{locStart:o,locEnd:u}=r,i=o(t),s=u(t),D=Et(e,r),a,c,d=0,f=D.length;for(;d<f;){let p=d+f>>1,l=D[p],F=o(l),m=u(l);if(F<=i&&s<=m)return On(l,t,r,l);if(m<=i){a=l,d=p+1;continue}if(s<=F){c=l,f=p;continue}throw new Error("Comment location overlaps with node location")}if((n==null?void 0:n.type)==="TemplateLiteral"){let{quasis:p}=n,l=Kt(p,t,r);a&&Kt(p,a,r)!==l&&(a=null),c&&Kt(p,c,r)!==l&&(c=null)}return{enclosingNode:n,precedingNode:a,followingNode:c}}var Gt=()=>!1;function Nn(e,t){let{comments:r}=e;if(delete e.comments,!Mt(r)||!t.printer.canAttachComment)return;let n=[],{locStart:o,locEnd:u,printer:{experimentalFeatures:{avoidAstMutation:i=!1}={},handleComments:s={}},originalText:D}=t,{ownLine:a=Gt,endOfLine:c=Gt,remaining:d=Gt}=s,f=r.map((p,l)=>({...On(e,p,t),comment:p,text:D,options:t,ast:e,isLastComment:r.length-1===l}));for(let[p,l]of f.entries()){let{comment:F,precedingNode:m,enclosingNode:E,followingNode:C,text:g,options:h,ast:B,isLastComment:Z}=l;if(h.parser==="json"||h.parser==="json5"||h.parser==="__js_expression"||h.parser==="__ts_expression"||h.parser==="__vue_expression"||h.parser==="__vue_ts_expression"){if(o(F)-o(B)<=0){ne(B,F);continue}if(u(F)-u(B)>=0){ue(B,F);continue}}let $;if(i?$=[l]:(F.enclosingNode=E,F.precedingNode=m,F.followingNode=C,$=[F,g,h,B,Z]),Co(g,h,f,p))F.placement="ownLine",a(...$)||(C?ne(C,F):m?ue(m,F):E?X(E,F):X(B,F));else if(ho(g,h,f,p))F.placement="endOfLine",c(...$)||(m?ue(m,F):C?ne(C,F):E?X(E,F):X(B,F));else if(F.placement="remaining",!d(...$))if(m&&C){let Q=n.length;Q>0&&n[Q-1].followingNode!==C&&bn(n,h),n.push(l)}else m?ue(m,F):C?ne(C,F):E?X(E,F):X(B,F)}if(bn(n,t),!i)for(let p of r)delete p.precedingNode,delete p.enclosingNode,delete p.followingNode}var Tn=e=>!/[\S\n\u2028\u2029]/.test(e);function Co(e,t,r,n){let{comment:o,precedingNode:u}=r[n],{locStart:i,locEnd:s}=t,D=i(o);if(u)for(let a=n-1;a>=0;a--){let{comment:c,precedingNode:d}=r[a];if(d!==u||!Tn(e.slice(s(c),D)))break;D=i(c)}return V(e,D,{backwards:!0})}function ho(e,t,r,n){let{comment:o,followingNode:u}=r[n],{locStart:i,locEnd:s}=t,D=s(o);if(u)for(let a=n+1;a<r.length;a++){let{comment:c,followingNode:d}=r[a];if(d!==u||!Tn(e.slice(D,i(c))))break;D=s(c)}return V(e,D)}function bn(e,t){var s,D;let r=e.length;if(r===0)return;let{precedingNode:n,followingNode:o}=e[0],u=t.locStart(o),i;for(i=r;i>0;--i){let{comment:a,precedingNode:c,followingNode:d}=e[i-1];Re.strictEqual(c,n),Re.strictEqual(d,o);let f=t.originalText.slice(t.locEnd(a),u);if(((D=(s=t.printer).isGap)==null?void 0:D.call(s,f,t))??/^[\s(]*$/.test(f))u=t.locStart(a);else break}for(let[a,{comment:c}]of e.entries())a<i?ue(n,c):ne(o,c);for(let a of[n,o])a.comments&&a.comments.length>1&&a.comments.sort((c,d)=>t.locStart(c)-t.locStart(d));e.length=0}function Kt(e,t,r){let n=r.locStart(t)-1;for(let o=1;o<e.length;++o)if(n<r.locStart(e[o]))return o-1;return 0}function go(e,t){let r=t-1;r=N(e,r,{backwards:!0}),r=Y(e,r,{backwards:!0}),r=N(e,r,{backwards:!0});let n=Y(e,r,{backwards:!0});return r!==n}var Ye=go;function Sn(e,t){let r=e.node;return r.printed=!0,t.printer.printComment(e,t)}function yo(e,t){var c;let r=e.node,n=[Sn(e,t)],{printer:o,originalText:u,locStart:i,locEnd:s}=t;if((c=o.isBlockComment)==null?void 0:c.call(o,r)){let d=V(u,s(r))?V(u,i(r),{backwards:!0})?G:Ke:" ";n.push(d)}else n.push(G);let a=Y(u,N(u,s(r)));return a!==!1&&V(u,a)&&n.push(G),n}function Ao(e,t,r){var a;let n=e.node,o=Sn(e,t),{printer:u,originalText:i,locStart:s}=t,D=(a=u.isBlockComment)==null?void 0:a.call(u,n);if(r!=null&&r.hasLineSuffix&&!(r!=null&&r.isBlock)||V(i,s(n),{backwards:!0})){let c=Ye(i,s(n));return{doc:Be([G,c?G:"",o]),isBlock:D,hasLineSuffix:!0}}return!D||r!=null&&r.hasLineSuffix?{doc:[Be([" ",o]),le],isBlock:D,hasLineSuffix:!0}:{doc:[" ",o],isBlock:D,hasLineSuffix:!1}}function Bo(e,t){let r=e.node;if(!r)return{};let n=t[Symbol.for("printedComments")];if((r.comments||[]).filter(D=>!n.has(D)).length===0)return{leading:"",trailing:""};let u=[],i=[],s;return e.each(()=>{let D=e.node;if(n!=null&&n.has(D))return;let{leading:a,trailing:c}=D;a?u.push(yo(e,t)):c&&(s=Ao(e,t,s),i.push(s.doc))},"comments"),{leading:u,trailing:i}}function vn(e,t,r){let{leading:n,trailing:o}=Bo(e,r);return!n&&!o?t:Ze(t,u=>[n,u,o])}function Pn(e){let{[Symbol.for("comments")]:t,[Symbol.for("printedComments")]:r}=e;for(let n of t){if(!n.printed&&!r.has(n))throw new Error('Comment "'+n.value.trim()+'" was not printed. Please report this error!');delete n.printed}}async function Ln(e,t,r,n,o){let{embeddedLanguageFormatting:u,printer:{embed:i,hasPrettierIgnore:s=()=>!1,getVisitorKeys:D}}=r;if(!i||u!=="auto")return;if(i.length>2)throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");let a=H(i.getVisitorKeys??D),c=[];p();let d=e.stack;for(let{print:l,node:F,pathStack:m}of c)try{e.stack=m;let E=await l(f,t,e,r);E&&o.set(F,E)}catch(E){if(globalThis.PRETTIER_DEBUG)throw E}e.stack=d;function f(l,F){return _o(l,F,r,n)}function p(){let{node:l}=e;if(l===null||typeof l!="object"||s(e))return;for(let m of a(l))Array.isArray(l[m])?e.each(p,m):e.call(p,m);let F=i(e,r);if(F){if(typeof F=="function"){c.push({print:F,node:l,pathStack:[...e.stack]});return}o.set(l,F)}}}async function _o(e,t,r,n){let o=await re({...r,...t,parentParser:r.parser,originalText:e},{passThrough:!0}),{ast:u}=await De(e,o),i=await n(u,o);return Xe(i)}function xo(e){return()=>{}}var In=xo;function wo(e,t){let{originalText:r,[Symbol.for("comments")]:n,locStart:o,locEnd:u,[Symbol.for("printedComments")]:i}=t,{node:s}=e,D=o(s),a=u(s);for(let c of n)o(c)>=D&&u(c)<=a&&i.add(c);return r.slice(D,a)}var Rn=wo;async function je(e,t){({ast:e}=await Ht(e,t));let r=new Map,n=new Bn(e),o=In(t),u=new Map;await Ln(n,s,t,je,u);let i=await Yn(n,t,s,void 0,u);return Pn(t),i;function s(a,c){return a===void 0||a===n?D(c):Array.isArray(a)?n.call(()=>D(c),...a):n.call(()=>D(c),a)}function D(a){o(n);let c=n.node;if(c==null)return"";let d=c&&typeof c=="object"&&a===void 0;if(d&&r.has(c))return r.get(c);let f=Yn(n,t,s,a,u);return d&&r.set(c,f),f}}function Yn(e,t,r,n,o){var D;let{node:u}=e,{printer:i}=t,s;return(D=i.hasPrettierIgnore)!=null&&D.call(i,e)?s=Rn(e,t):o.has(u)?s=o.get(u):s=i.print(e,t,r,n),u===t.cursorNode&&(s=Ze(s,a=>[xe,a,xe])),i.printComment&&(!i.willPrintOwnComments||!i.willPrintOwnComments(e,t))&&(s=vn(e,s,t)),s}async function Ht(e,t){let r=e.comments??[];t[Symbol.for("comments")]=r,t[Symbol.for("tokens")]=e.tokens??[],t[Symbol.for("printedComments")]=new Set,Nn(e,t);let{printer:{preprocess:n}}=t;return e=n?await n(e,t):e,{ast:e,comments:r}}var ko=({parser:e})=>e==="json"||e==="json5"||e==="json-stringify";function bo(e,t){let r=[e.node,...e.parentNodes],n=new Set([t.node,...t.parentNodes]);return r.find(o=>$n.has(o.type)&&n.has(o))}function jn(e){let t=e.length-1;for(;;){let r=e[t];if((r==null?void 0:r.type)==="Program"||(r==null?void 0:r.type)==="File")t--;else break}return e.slice(0,t+1)}function Oo(e,t,{locStart:r,locEnd:n}){let o=e.node,u=t.node;if(o===u)return{startNode:o,endNode:u};let i=r(e.node);for(let D of jn(t.parentNodes))if(r(D)>=i)u=D;else break;let s=n(t.node);for(let D of jn(e.parentNodes)){if(n(D)<=s)o=D;else break;if(o===u)break}return{startNode:o,endNode:u}}function qt(e,t,r,n,o=[],u){let{locStart:i,locEnd:s}=r,D=i(e),a=s(e);if(!(t>a||t<D||u==="rangeEnd"&&t===D||u==="rangeStart"&&t===a)){for(let c of Et(e,r)){let d=qt(c,t,r,n,[e,...o],u);if(d)return d}if(!n||n(e,o[0]))return{node:e,parentNodes:o}}}function No(e,t){return t!=="DeclareExportDeclaration"&&e!=="TypeParameterDeclaration"&&(e==="Directive"||e==="TypeAlias"||e==="TSExportAssignment"||e.startsWith("Declare")||e.startsWith("TSDeclare")||e.endsWith("Statement")||e.endsWith("Declaration"))}var $n=new Set(["JsonRoot","ObjectExpression","ArrayExpression","StringLiteral","NumericLiteral","BooleanLiteral","NullLiteral","UnaryExpression","TemplateLiteral"]),To=new Set(["OperationDefinition","FragmentDefinition","VariableDefinition","TypeExtensionDefinition","ObjectTypeDefinition","FieldDefinition","DirectiveDefinition","EnumTypeDefinition","EnumValueDefinition","InputValueDefinition","InputObjectTypeDefinition","SchemaDefinition","OperationTypeDefinition","InterfaceTypeDefinition","UnionTypeDefinition","ScalarTypeDefinition"]);function Vn(e,t,r){if(!t)return!1;switch(e.parser){case"flow":case"babel":case"babel-flow":case"babel-ts":case"typescript":case"acorn":case"espree":case"meriyah":case"__babel_estree":return No(t.type,r==null?void 0:r.type);case"json":case"json5":case"json-stringify":return $n.has(t.type);case"graphql":return To.has(t.kind);case"vue":return t.tag!=="root"}return!1}function Mn(e,t,r){let{rangeStart:n,rangeEnd:o,locStart:u,locEnd:i}=t;Re.ok(o>n);let s=e.slice(n,o).search(/\S/),D=s===-1;if(!D)for(n+=s;o>n&&!/\S/.test(e[o-1]);--o);let a=qt(r,n,t,(p,l)=>Vn(t,p,l),[],"rangeStart"),c=D?a:qt(r,o,t,p=>Vn(t,p),[],"rangeEnd");if(!a||!c)return{rangeStart:0,rangeEnd:0};let d,f;if(ko(t)){let p=bo(a,c);d=p,f=p}else({startNode:d,endNode:f}=Oo(a,c,t));return{rangeStart:Math.min(u(d),u(f)),rangeEnd:Math.max(i(d),i(f))}}function So(e,t){let{cursorOffset:r,locStart:n,locEnd:o}=t,u=H(t.printer.getVisitorKeys),i=D=>n(D)<=r&&o(D)>=r,s=e;for(let D of kn(e,{getVisitorKeys:u,filter:i}))s=D;return s}var Wn=So;var Hn="\uFEFF",Un=Symbol("cursor");async function qn(e,t,r=0){if(!e||e.trim().length===0)return{formatted:"",cursorOffset:-1,comments:[]};let{ast:n,text:o}=await De(e,t);t.cursorOffset>=0&&(t.cursorNode=Wn(n,t));let u=await je(n,t,r);r>0&&(u=qe([G,u],r,t.tabWidth));let i=fe(u,t);if(r>0){let D=i.formatted.trim();i.cursorNodeStart!==void 0&&(i.cursorNodeStart-=i.formatted.indexOf(D)),i.formatted=D+ke(t.endOfLine)}let s=t[Symbol.for("comments")];if(t.cursorOffset>=0){let D,a,c,d,f;if(t.cursorNode&&i.cursorNodeText?(D=t.locStart(t.cursorNode),a=o.slice(D,t.locEnd(t.cursorNode)),c=t.cursorOffset-D,d=i.cursorNodeStart,f=i.cursorNodeText):(D=0,a=o,c=t.cursorOffset,d=0,f=i.formatted),a===f)return{formatted:i.formatted,cursorOffset:d+c,comments:s};let p=a.split("");p.splice(c,0,Un);let l=f.split(""),F=(0,Kn.diffArrays)(p,l),m=d;for(let E of F)if(E.removed){if(E.value.includes(Un))break}else m+=E.count;return{formatted:i.formatted,cursorOffset:m,comments:s}}return{formatted:i.formatted,cursorOffset:-1,comments:s}}async function vo(e,t){let{ast:r,text:n}=await De(e,t),{rangeStart:o,rangeEnd:u}=Mn(n,t,r),i=n.slice(o,u),s=Math.min(o,n.lastIndexOf(`
`,o)+1),D=n.slice(s,o).match(/^\s*/)[0],a=Fe(D,t.tabWidth),c=await qn(i,{...t,rangeStart:0,rangeEnd:Number.POSITIVE_INFINITY,cursorOffset:t.cursorOffset>o&&t.cursorOffset<=u?t.cursorOffset-o:-1,endOfLine:"lf"},a),d=c.formatted.trimEnd(),{cursorOffset:f}=t;f>u?f+=d.length-i.length:c.cursorOffset>=0&&(f=c.cursorOffset+o);let p=n.slice(0,o)+d+n.slice(u);if(t.endOfLine!=="lf"){let l=ke(t.endOfLine);f>=0&&l===`\r
`&&(f+=_t(p.slice(0,f),`
`)),p=ee(!1,p,`
`,l)}return{formatted:p,cursorOffset:f,comments:c.comments}}function Jt(e,t,r){return typeof t!="number"||Number.isNaN(t)||t<0||t>e.length?r:t}function zn(e,t){let{cursorOffset:r,rangeStart:n,rangeEnd:o}=t;return r=Jt(e,r,-1),n=Jt(e,n,0),o=Jt(e,o,e.length),{...t,cursorOffset:r,rangeStart:n,rangeEnd:o}}function Jn(e,t){let{cursorOffset:r,rangeStart:n,rangeEnd:o,endOfLine:u}=zn(e,t),i=e.charAt(0)===Hn;if(i&&(e=e.slice(1),r--,n--,o--),u==="auto"&&(u=hr(e)),e.includes("\r")){let s=D=>_t(e.slice(0,Math.max(D,0)),`\r
`);r-=s(r),n-=s(n),o-=s(o),e=gr(e)}return{hasBOM:i,text:e,options:zn(e,{...t,cursorOffset:r,rangeStart:n,rangeEnd:o,endOfLine:u})}}async function Gn(e,t){let r=await ft(t);return!r.hasPragma||r.hasPragma(e)}async function Xt(e,t){let{hasBOM:r,text:n,options:o}=Jn(e,await re(t));if(o.rangeStart>=o.rangeEnd&&n!==""||o.requirePragma&&!await Gn(n,o))return{formatted:e,cursorOffset:t.cursorOffset,comments:[]};let u;return o.rangeStart>0||o.rangeEnd<n.length?u=await vo(n,o):(!o.requirePragma&&o.insertPragma&&o.printer.insertPragma&&!await Gn(n,o)&&(n=o.printer.insertPragma(n)),u=await qn(n,o)),r&&(u.formatted=Hn+u.formatted,u.cursorOffset>=0&&u.cursorOffset++),u}async function Xn(e,t,r){let{text:n,options:o}=Jn(e,await re(t)),u=await De(n,o);return r&&(r.preprocessForPrint&&(u.ast=await Ht(u.ast,o)),r.massage&&(u.ast=fn(u.ast,o))),u}async function Zn(e,t){t=await re(t);let r=await je(e,t);return fe(r,t)}async function Qn(e,t){let r=Pr(e),{formatted:n}=await Xt(r,{...t,parser:"__js_expression"});return n}async function eu(e,t){t=await re(t);let{ast:r}=await De(e,t);return je(r,t)}async function tu(e,t){return fe(e,await re(t))}var Qt={};We(Qt,{addDanglingComment:()=>X,addLeadingComment:()=>ne,addTrailingComment:()=>ue,getAlignmentSize:()=>Fe,getIndentSize:()=>nu,getMaxContinuousCount:()=>ru,getNextNonSpaceNonCommentCharacter:()=>iu,getNextNonSpaceNonCommentCharacterIndex:()=>Go,getStringWidth:()=>be,hasNewline:()=>V,hasNewlineInRange:()=>uu,hasSpaces:()=>ou,isNextLineEmpty:()=>Jo,isNextLineEmptyAfterIndex:()=>Ct,isPreviousLineEmpty:()=>Ho,makeString:()=>su,skip:()=>me,skipEverythingButNewLine:()=>mt,skipInlineComment:()=>Ee,skipNewline:()=>Y,skipSpaces:()=>N,skipToLineEnd:()=>dt,skipTrailingComment:()=>Ce,skipWhitespace:()=>xn});function Lo(e,t){if(t===!1)return!1;if(e.charAt(t)==="/"&&e.charAt(t+1)==="*"){for(let r=t+2;r<e.length;++r)if(e.charAt(r)==="*"&&e.charAt(r+1)==="/")return r+2}return t}var Ee=Lo;function Io(e,t){return t===!1?!1:e.charAt(t)==="/"&&e.charAt(t+1)==="/"?mt(e,t):t}var Ce=Io;function Ro(e,t){let r=null,n=t;for(;n!==r;)r=n,n=N(e,n),n=Ee(e,n),n=Ce(e,n),n=Y(e,n);return n}var Ve=Ro;function Yo(e,t){let r=null,n=t;for(;n!==r;)r=n,n=dt(e,n),n=Ee(e,n),n=N(e,n);return n=Ce(e,n),n=Y(e,n),n!==!1&&V(e,n)}var Ct=Yo;function Zt(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function jo(e,t){let r=e.match(new RegExp(`(${Zt(t)})+`,"g"));return r===null?0:r.reduce((n,o)=>Math.max(n,o.length/t.length),0)}var ru=jo;function Vo(e,t){let r=e.lastIndexOf(`
`);return r===-1?0:Fe(e.slice(r+1).match(/^[\t ]*/)[0],t)}var nu=Vo;function $o(e,t,r){for(let n=t;n<r;++n)if(e.charAt(n)===`
`)return!0;return!1}var uu=$o;function Mo(e,t,r={}){return N(e,r.backwards?t-1:t,r)!==t}var ou=Mo;function Wo(e,t){let r=Ve(e,t);return r===!1?"":e.charAt(r)}var iu=Wo;function Uo(e,t,r){let n=t==='"'?"'":'"',u=ee(!1,e,/\\(.)|(["'])/gs,(i,s,D)=>s===n?s:D===t?"\\"+D:D||(r&&/^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(s)?s:"\\"+s));return t+u+t}var su=Uo;function zo(e,t,r){return Ve(e,r(t))}function Go(e,t){return arguments.length===2||typeof t=="number"?Ve(e,t):zo(...arguments)}function Ko(e,t,r){return Ye(e,r(t))}function Ho(e,t){return arguments.length===2||typeof t=="number"?Ye(e,t):Ko(...arguments)}function qo(e,t,r){return Ct(e,r(t))}function Jo(e,t){return arguments.length===2||typeof t=="number"?Ct(e,t):qo(...arguments)}var er={};We(er,{builders:()=>Xo,printer:()=>Zo,utils:()=>Qo});var Xo={join:we,line:Ke,softline:Er,hardline:G,literalline:He,group:At,conditionalGroup:fr,fill:Ge,lineSuffix:Be,lineSuffixBoundary:dr,cursor:xe,breakParent:le,ifBreak:Fr,trim:mr,indent:ie,indentIfBreak:pr,align:oe,addAlignmentToDoc:qe,markAsRoot:cr,dedentToRoot:ar,dedent:lr,hardlineWithoutBreakParent:_e,literallineWithoutBreakParent:Bt,label:Cr,concat:e=>e},Zo={printDocToString:fe},Qo={willBreak:br,traverseDoc:Ae,findInDoc:Je,mapDoc:Ne,removeLines:Nr,stripTrailingHardline:Xe,replaceEndOfLine:Tr,canBreak:Sr};var Du="3.1.0";function ae(e,t=1){return async(...r)=>{let n=r[t]??{},o=n.plugins??[];return r[t]={...n,plugins:Array.isArray(o)?o:Object.values(o)},e(...r)}}var au=ae(Xt);async function cu(e,t){let{formatted:r}=await au(e,{...t,cursorOffset:-1});return r}async function ei(e,t){return await cu(e,t)===e}var ti=ae(et,0),ri={parse:ae(Xn),formatAST:ae(Zn),formatDoc:ae(Qn),printToDoc:ae(eu),printDocToString:ae(tu)};var qc=tr;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************!*\
  !*** ./lib/assets/scripts/opera-components/index.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_global.js */ "./lib/assets/scripts/opera-components/_global.js");
/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_instance */ "./lib/assets/scripts/opera-components/_instance.js");



// Define the components to be made instances with their type and selector
const components = [
  { type: 'accordion', selector: '[data-accordion]' },
  { type: 'breadcrumb', selector: '.breadcrumb' },
  { type: 'button', selector: 'button' },
  { type: 'checkbox', selector: '[data-checkbox]' },
  { type: 'chip', selector: '[data-chip]' },
  { type: 'content-navigation', selector: '[data-content-navigation]' },
  { type: 'date-picker', selector: 'input.date-picker' },
  { type: 'dropdown', selector: '[data-dropdown]' },
  { type: 'form', selector: 'form' },
  { type: 'modal', selector: '[data-modal]' },
  { type: 'number-input', selector: '[data-number-input]' },
  { type: 'overflow-menu', selector: '.overflow-menu' },
  { type: 'pagination', selector: '.pagination' },
  { type: 'password-input', selector: '[data-password-input]' },
  { type: 'radio', selector: '[data-radio]' },
  { type: 'fieldset', selector: 'fieldset' },
  { type: 'select', selector: 'select' },
  { type: 'spinner', selector: '[data-spinner]' },
  { type: 'tabs', selector: '[data-tabs]' },
  { type: 'tag', selector: '[data-tag]' },
  { type: 'text-area', selector: 'textarea.text-area' },
  { type: 'text-field', selector: '[data-text-field]' },
  { type: 'toast', selector: '.toast' },
  { type: 'toggle-group', selector: '.toggle-group' },
  { type: 'toggle-switch', selector: '.toggle-switch' },
  { type: 'tooltip', selector: '.tooltip' },
  { type: 'tree-navigation', selector: '[data-tree-navigation]' },
];

// Make instances for all components when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Assign makeInstances function to document
  document.makeInstances = _instance__WEBPACK_IMPORTED_MODULE_1__.makeInstances;

  // Initialize an empty list to store the components and their node lists
  let listOfComponents = [];

  // Loop through the components and retrieve their node lists
  components.forEach(({ type, selector }) => {
    const nodeList = document.querySelectorAll(selector);
    // Add the component, node list, type, and selector to the list of components
    listOfComponents = listOfComponents.concat({ nodeList, type, selector });
  });

  // Loop through the list of components and make instances for each component
  listOfComponents.forEach(({ nodeList, type }) => {
    if (nodeList) {
      (0,_instance__WEBPACK_IMPORTED_MODULE_1__.makeInstances)(nodeList, type);
    }
  });
});

})();

/******/ })()
;