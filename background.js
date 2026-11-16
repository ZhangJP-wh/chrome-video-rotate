'use strict';
// Serialize clicks so rapid clicks cannot overwrite one another.
let pending = Promise.resolve();
chrome.action.onClicked.addListener(() => {
  pending = pending.catch(() => {}).then(async () => {
    const settings = await chrome.storage.local.get('controlsVisible');
    await chrome.storage.local.set({controlsVisible: settings.controlsVisible === false});
  });
});
