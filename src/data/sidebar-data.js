const release = `
<span class="badge green small">
Release
</span>
`;

const beta = `
<span class="badge blue small">
Beta
</span>
`;

const unstable = `
<span class="badge gray small">
Unstable
</span>
`;

/**
 * Generates a custom HTML span element with a given status name.
 *
 * @param {string} statusName - The name of the status.
 * @return {string} The HTML span element with the status name.
 */
const custom = (statusName) => {
  return `
    <span class="badge gray small">
    ${statusName}
    </span>
    `;
};

const sidebarItems = [
  {
    category: '',
    items: [
      {
        title: 'Overview',
        link: 'overview',
        status: '',
      },
      {
        title: 'Quick Start',
        link: 'quick-start',
        status: '',
      },
    ],
  },
  {
    category: 'Foundations',
    items: [
      {
        title: 'Color',
        link: 'color',
        status: release,
      },
      {
        title: 'Typography',
        link: 'typography',
        status: release,
      },
      {
        title: 'Icons',
        link: 'icons',
        status: custom('1212+'),
      },
    ],
  },
  {
    category: 'Components',
    items: [
      {
        title: 'Accordion',
        link: 'accordion',
        status: beta,
      },
      {
        title: 'Badge',
        link: 'badge',
        status: beta,
      },
      {
        title: 'Breadcrumb',
        link: 'breadcrumb',
        status: beta,
      },
      {
        title: 'Button',
        link: 'button',
        status: beta,
      },
      {
        title: 'Checkbox',
        link: 'checkbox',
        status: beta,
      },
      {
        title: 'Chip',
        link: 'chip',
        status: beta,
      },
      {
        title: 'Content navigation',
        link: 'content-navigation',
        status: beta,
      },
      {
        title: 'Date picker',
        link: 'date-picker',
        status: beta,
      },
      {
        title: 'Dropdown',
        link: 'dropdown',
        status: beta,
      },
      {
        title: 'Form',
        link: 'form',
        status: beta,
      },

      {
        title: 'Modal',
        link: 'modal',
        status: beta,
      },
      {
        title: 'Number input',
        link: 'number-input',
        status: beta,
      },
      {
        title: 'Overflow menu',
        link: 'overflow-menu',
        status: beta,
      },
      {
        title: 'Pagination',
        link: 'pagination',
        status: beta,
      },
      {
        title: 'Password input',
        link: 'password-input',
        status: beta,
      },
      {
        title: 'Radio',
        link: 'radio',
        status: beta,
      },
      {
        title: 'Search input',
        link: 'search-input',
        status: unstable,
      },
      {
        title: 'Select',
        link: 'select',
        status: beta,
      },
      {
        title: 'Spinner',
        link: 'spinner',
        status: beta,
      },
      {
        title: 'Table',
        link: 'table',
        status: unstable,
      },
      {
        title: 'Tabs',
        link: 'tabs',
        status: beta,
      },
      {
        title: 'Tag',
        link: 'tag',
        status: beta,
      },
      {
        title: 'Text input',
        link: 'text-input',
        status: beta,
      },
      {
        title: 'Toast',
        link: 'toast',
        status: beta,
      },
      {
        title: 'Toggle group',
        link: 'toggle-group',
        status: beta,
      },
      {
        title: 'Toggle switch',
        link: 'toggle-switch',
        status: beta,
      },
      {
        title: 'Tooltip',
        link: 'tooltip',
        status: beta,
      },
      {
        title: 'Tree navigation',
        link: 'tree-navigation',
        status: beta,
      },
    ],
  },
];
export default sidebarItems;
