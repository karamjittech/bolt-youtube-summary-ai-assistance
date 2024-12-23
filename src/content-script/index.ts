console.log('Content script loaded for YouTube page');

    // Example of sending a message to the background script
    browser.runtime.sendMessage({ message: 'Hello from content script!' }).then((response) => {
      console.log('Response from background script:', response);
    });
