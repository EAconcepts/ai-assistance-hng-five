import React, { createContext, useCallback, useContext, useState } from "react";
const AssistantContext = createContext(null);

export const AssistantProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const [position, setPosition] = useState({ x: "0vw", y: "80vh" });
  const triggerPopup = useCallback((content, position) => {
    setContent(content);
    setPosition(position);
  }, []);
  const clearAssistant = useCallback(() => {
    setContent(null), setPosition({ x: "0vw", y: "80vh" });
  }, []);
  return (
    <AssistantContext.Provider
      value={{ content, position, triggerPopup, clearAssistant }}
    >
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistant = () => useContext(AssistantContext);
