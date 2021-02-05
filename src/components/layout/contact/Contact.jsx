import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  window.localStorage.removeItem("email");

  return <ContactForm />;
}
