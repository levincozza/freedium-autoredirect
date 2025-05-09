async function redirectTabToFreedium(tabId) {
  const tab = await chrome.tabs.get(tabId);
  if (!tab || !tab.url.match(/^https:\/\/medium\.com\/([^/]+\/[^/?#]+)/i)) return;

  const redirectUrl = `https://freedium.cfd/${tab.url}`;
  chrome.tabs.update(tabId, { url: redirectUrl });
}

// Extension icon clicked
chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    redirectTabToFreedium(tab.id);
  }
});

// Keyboard shortcut used
chrome.commands.onCommand.addListener((command) => {
  if (command === "redirect-to-freedium") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        redirectTabToFreedium(tabs[0].id);
      }
    });
  }
});
