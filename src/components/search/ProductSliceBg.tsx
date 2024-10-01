import React from "react";

const ProductSliceBg = () => {
  return (
    <>
      <div className="absolute inset-0 -z-50 bg-gradient-to-br from-blue-400/5 to-blue-500/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 -z-50 bg-gradient-to-br from-transparent via-transparent to-blue-300/10"></div>
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200/10 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 -z-50 rounded-xl border border-blue-300/10"></div>
      <div className="absolute inset-0 -z-50 bg-blue-500/5 mix-blend-overlay"></div>
    </>
  );
};

export default ProductSliceBg;
