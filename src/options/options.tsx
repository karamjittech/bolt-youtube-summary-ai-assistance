import React, { useState } from 'react';
    import ReactDOM from 'react-dom/client';
    import browser from 'webextension-polyfill';

    const Options: React.FC = () => {
      const [openAIApiKey, setOpenAIApiKey] = useState('');
      const [huggingFaceApiKey, setHuggingFaceApiKey] = useState('');

      const handleOpenAIApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpenAIApiKey(event.target.value);
      };

      const handleHuggingFaceApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHuggingFaceApiKey(event.target.value);
      };

      const handleSave = () => {
        browser.storage.sync.set({ openAIApiKey, huggingFaceApiKey }).then(() => {
          console.log('API keys saved');
        });
      };

      return (
        <div>
          <div>
            <label htmlFor="openai-api-key">OpenAI API Key:</label>
            <input
              type="text"
              id="openai-api-key"
              value={openAIApiKey}
              onChange={handleOpenAIApiKeyChange}
            />
          </div>
          <div>
            <label htmlFor="huggingface-api-key">Hugging Face API Key:</label>
            <input
              type="text"
              id="huggingface-api-key"
              value={huggingFaceApiKey}
              onChange={handleHuggingFaceApiKeyChange}
            />
          </div>
          <button onClick={handleSave}>Save API Keys</button>
        </div>
      );
    };

    const root = document.getElementById('options-root');
    if (root) {
      ReactDOM.createRoot(root).render(<Options />);
    }
