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
    <div className="cookie-banner">
      Este site utiliza cookies para melhorar sua experiência.
      <button type="button" onClick={handleAccept} className="cookie-btn-accept">Aceitar</button>
      <button type="button" onClick={handleDecline} className="cookie-btn-decline">Recusar</button>
    </div>
  );
};

export default CookieBanner;
