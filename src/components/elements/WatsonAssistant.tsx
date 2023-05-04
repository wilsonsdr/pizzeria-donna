import React, { useEffect } from "react";

interface WatsonAssistantChatOptions {
  integrationID: string;
  region: string;
  serviceInstanceID: string;
  clientVersion?: string;
  onLoad?: (instance: any) => void;
}

declare global {
  interface Window {
    watsonAssistantChatOptions: WatsonAssistantChatOptions;
  }
}

const WatsonAssistant: React.FC = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "e8cc4174-7c74-4592-b2d0-0e9ad1f0b948",
      region: "us-south",
      serviceInstanceID: "c0836a95-5090-48b4-81e9-3883edf774ea",
      onLoad: function (instance) {
        instance.render();
      },
    };

    const script = document.createElement("script");
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      window.watsonAssistantChatOptions.clientVersion || "latest"
    }/WatsonAssistantChatEntry.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="WatsonAssistantChat" />;
};

export default WatsonAssistant;
