"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Image from "next/image";
const links = [["Selected work", "#projects"], ["Experience", "#experience"], ["Credentials", "#credentials"], ["About", "#about"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (event) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header"><nav className="container nav-inner" aria-label="Main navigation"><a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Tijul Kabir Toha home"><span className="brand-avatar"><Image src="/tijul-kabir.jpeg" alt="" width={48} height={48} loading="eager" /></span><span>Tijul Kabir Toha<small>CSE student · Security & systems</small></span></a><div className="desktop-nav">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div><a className="nav-contact" href="#contact">Contact <Icon name="arrowUpRight" /></a><button className={`menu-toggle ${open ? "is-open" : ""}`} ref={toggle} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><span /><span /></button><div id="mobile-navigation" className="mobile-nav" hidden={!open}>{[...links, ["Contact", "#contact"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<Icon name="arrowUpRight" /></a>)}</div></nav></header>;
}
