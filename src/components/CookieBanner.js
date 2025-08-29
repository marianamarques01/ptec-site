import React, { useState } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    return localStorage.getItem("cookieConsent") !== "accepted";
  });

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      background: "#222",
      color: "#fff",
      padding: 16,
      zIndex: 9999,
      textAlign: "center"
    }}>
      Este site utiliza cookies para melhorar sua experiência. 
      <button onClick={handleAccept} style={{ margin: "0 8px" }}>Aceitar</button>
      <button onClick={handleDecline}>Recusar</button>
    </div>
  );
};

export default CookieBanner;
