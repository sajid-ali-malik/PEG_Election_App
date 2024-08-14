import React from "react";
import { WebView } from "react-native-webview";

const WebViewExample = () => {
  return (
    <WebView
      source={{
        uri: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScrxuEdf0JAPZwyCdKE-5OXKtQZM50hiy-UdupO5O6pYPQLjg/formResponse",
      }}
      style={{ marginTop: 20 }}
    />
  );
};

export default WebViewExample;
