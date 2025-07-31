import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const rainDrops = [
    11, 12, 10, 14, 18, 16, 19, 20, 19, 10, 16, 14, 18, 11, 13, 15, 12, 17, 13,
    15,
  ];

  return (
    <main className="rainyCloudBox">
      <div className="message-404">
        <span>#</span>404
      </div>
      <div className="cloud"></div>
      <div className="rain">
        {rainDrops.map((i, index) => (
          <span key={index} style={{ "--i": i }}></span>
        ))}
      </div>
    </main>
  );
};

export default NotFoundPage;
