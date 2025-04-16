import React from "react";

const TelegramButton = () => {
  return (
    <a
      href="https://t.me/Radiilab" // Replace with your Telegram link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all"
      aria-label="Contact us on Telegram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M9.993 16.2 9.8 20.2c.57 0 .82-.24 1.12-.53l2.68-2.5 5.56 3.97c1.02.57 1.75.27 2.02-.94l3.66-16.2c.34-1.56-.57-2.27-1.56-1.94L1.8 9.2c-1.5.57-1.47 1.38-.25 1.75l4.7 1.47 10.9-6.8c.51-.34.98-.15.59.2l-8.9 8.1Z" />
      </svg>
    </a>
  );
};

export default TelegramButton;