import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const ptecEmail = "whatsapp@ptec.dev";

  const handleValidated = ({ EMAIL }) => {
    const subject = encodeURIComponent("Quero receber novidades da PTEC");
    const body = encodeURIComponent(`Olá, gostaria de receber novidades da PTEC! Meu e-mail: ${EMAIL}`);
    window.location.href = `mailto:${ptecEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <Newsletter
      status={null}
      message={null}
      onValidated={handleValidated}
    />
  );
}
