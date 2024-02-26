document.addEventListener('DOMContentLoaded', () => {
  // Function to convert HTML to escaped string
function innerHTMLToEscapedString(html) {
  const escapedHtml = html.replace(/</g, '&#x3C;').replace(/>/g, '&#x3E;');
  return escapedHtml;
}

// Function to remove leading tabs based on the first line
function removeLeadingTabs(text) {
  // Find the number of tabs on the first line
  const match = text.match(/[^\S\r\n]+/g);
  const tabCount = match ? match[0].length : 0;

  // Remove the same number of tabs from subsequent lines
  const lines = text.split('\n');
  let cleanedLines = lines.map((line) => line.substring(tabCount)).join('\n');

  // Remove the first empty line
  cleanedLines = cleanedLines.replace(/^\s*[\r\n]/, '');

  // Remove the last empty line
  cleanedLines = cleanedLines.replace(/\s*$/, '');

  return cleanedLines;
}

// Get all elements with the class "data-demo-pane"
const demoPanes = document.querySelectorAll('[data-demo-pane]');

// Loop through each data-demo-pane element
demoPanes.forEach((demoPane) => {
  // Get the content of the data-demo-pane and remove pre-formatted spaces
  let content = 'Not available';
  if (demoPane.getAttribute('data-demo-pane') === 'auto') {
    content = removeLeadingTabs(innerHTMLToEscapedString(demoPane.innerHTML));
  }

  // Create a new div element with the specified structure
  const newDiv = document.createElement('div');
  newDiv.className = 'w-full p-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex flex-col items-start gap-2';
  newDiv.innerHTML = `
    <button type="button" data-demo-code-button class="ghost">Show code</button>
    <div data-demo-code class="relative hidden w-full rounded-lg bg-gray-950 pr-12">
      <div class="tooltip absolute right-0 top-0" data-tooltip-content="Copy code">
        <button type="button" class=" btn icon-only large ghost" onclick="copyCode(this)" onmouseleave="resetCopyButton(this)">
          <i class="far fa-copy-01 h-4 w-4"></i>
        </button>
      </div>
      <pre><code class="language-html rounded-l-lg text-code-02 border-r border-gray-800">${content}</code></pre>
    </div>
  `;

  demoPane.parentNode.appendChild(newDiv);
});

const toggleButtons = document.querySelectorAll('[data-demo-code-button]');

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener('click', () => {
    const codeDiv = toggleButton.nextElementSibling;

    if (codeDiv && codeDiv.hasAttribute('data-demo-code')) {
      if (codeDiv.classList.contains('hidden')) {
        codeDiv.classList.remove('hidden');
        toggleButton.textContent = 'Hide code';
      } else {
        codeDiv.classList.add('hidden');
        toggleButton.textContent = 'Show code';
      }
    }
  });
});

hljs?.highlightAll();
})

function copyCode(btn) {
  const codeBlock = btn.parentNode.nextElementSibling.textContent;
  navigator.clipboard.writeText(codeBlock);
  btn.nextElementSibling.textContent = 'Copied';
}

function resetCopyButton(btn) {
  btn.nextElementSibling.textContent = 'Copy code';
}