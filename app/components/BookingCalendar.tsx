"use client";

import { useEffect } from "react";

export default function BookingCalendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.leadconnectorhq.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="booking-calendar-wrapper" style={{ width: "100%", overflow: "hidden", padding: "40px 0" }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/imvE2dXeqosMsfYymEac"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
        scrolling="no"
        id="imvE2dXeqosMsfYymEac_1782060882140"
        title="Agendamento de Reunião"
      ></iframe>
    </div>
  );
}
