chrome.commands.onCommand.addListener((command) => {
  if (command === "open-youtube") {
    chrome.tabs.create({ url: "https://www.youtube.com" });
  } else if (command === "open-github") {
    chrome.tabs.create({ url: "https://github.com" });
  }
});
