"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
const email = "toha.240113@s.pust.ac.bd";
export default function ContactActions() {
  const [message, setMessage] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Email copied to clipboard.");
    } catch {
      setMessage("Please select the email address to copy it.");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 4500);
  }
  return (
    <div className="contact-actions">
      <div className="email-line">
        <a href={`mailto:${email}`}>
          {email}
          <Icon name="arrowUpRight" />
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
          title="Copy email address"
        >
          <Icon name={message.startsWith("Email copied") ? "check" : "copy"} />
        </button>
      </div>
      <p className="copy-status" role="status">
        {message}
      </p>
    </div>
  );
}
