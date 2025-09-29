import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        &copy; {new Date().getFullYear()} Liverpool FC App - You'll Never Walk
        Alone 🔴
      </p>
    </footer>
  );
}

export default Footer;


