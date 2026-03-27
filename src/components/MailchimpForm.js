import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const annectEmail = "whatsapp@annect.dev";

  const handleValidated = ({ EMAIL }) => {
    const subject = encodeURIComponent("Quero receber novidades da ANNECT");
    const body = encodeURIComponent(`Olá, gostaria de receber novidades da ANNECT! Meu e-mail: ${EMAIL}`);
    window.location.href = `mailto:${annectEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <Newsletter
      status={null}
      message={null}
      onValidated={handleValidated}
    />
  );
}
