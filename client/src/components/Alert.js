import React, { useEffect, useState } from "react";

const Alert = ({ message, duration = 3000, clear = () => {}, animate }) => {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(!!message);

  useEffect(() => {
    if (!message) return;

    setShouldRender(true);

    const showTimer = setTimeout(() => setVisible(true), 50);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      // give time for exit animation before unmount
      setTimeout(
        () => {
          setShouldRender(false);
          clear();
        },
        animate ? 500 : 0
      );
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [message, duration, clear, animate]);

  if (!shouldRender) return null;

  return (
    <div
      className={`animated-alert ${visible ? "show" : ""} ${
        animate ? "with-animation" : ""
      }`}
    >
      <div className={`alert alert-danger mb-0 `} role="alert">
        {message}
      </div>
    </div>
  );
};

export default Alert;
