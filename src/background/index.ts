import browser from 'webextension-polyfill';

    browser.runtime.onInstalled.addListener((): void => {
      console.log('Extension installed');
    });

    // Example of using the extension's storage
    browser.storage.sync.set({ welcomeMessage: 'Hello from your extension!' });

    browser.storage.sync.get('welcomeMessage').then((result) => {
      console.log('Welcome message:', result.welcomeMessage);
    });

    // Listen for messages to retrieve API keys
    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'getApiKeys') {
        browser.storage.sync.get(['openAIApiKey', 'huggingFaceApiKey']).then((result) => {
          sendResponse({
            openAIApiKey: result.openAIApiKey,
            huggingFaceApiKey: result.huggingFaceApiKey,
          });
        });
        return true; // Indicates that the response is sent asynchronously
      }
    });
