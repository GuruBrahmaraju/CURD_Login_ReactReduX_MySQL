import "./Footer.css";
import React from "react";

function template() {
  return (
    <div className="footer">
      &copy; { new Date().getFullYear() } Rights Belongs To Me. 
    </div>
  );
};

export default template;
