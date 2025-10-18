// ToastContext.jsx
import React, { createContext, useState } from "react";

export const ToastContext = createContext(0);

export default function ToastContextProvider({ children }) {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [show, setShow] = useState(false);

  function showToast(msg, toastType) {
    setShow(true);
    setType(toastType);
    setMessage(msg);

    // optional: auto hide after 3s
    setTimeout(() => setShow(false), 3000);
  }

  function hideToast() {
    setShow(false);
  }

  return (
    <ToastContext.Provider
      value={{ message, type, show, showToast, hideToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}
