import React, { useEffect } from "react";
function PricingCard({ color }) {
  useEffect(() => {
    console.log(color);
  }, []);

  return (
    <div
      className={`border-radius-12 p-4 ${
        color == "soft" ? "bg-soft-blue" : "bg-hard-blue"
      }`}
    >
      <div className="flex items-center justify-between color-white">
        <div className={`color-white`}>Merketing</div>
        <div className="color-white">$899/ mo</div>
      </div>
    </div>
  );
}

export default PricingCard;
