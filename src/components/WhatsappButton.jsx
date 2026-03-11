import "./whatsapp.css";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918629063007"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
      <span className="whatsapp-text">Chat with us</span>
    </a>
  );
}

export default WhatsappButton;