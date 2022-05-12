import React from "react";

export default function Footer() {
  const socialLinks = [
    {
      url: "https://www.facebook.com/SahaBilgiTeknolojileri",
      src: "..//facebook.png",
    },
    {
      url: "https://www.linkedin.com/saha-bilgi-teknolojileri",
      src: "..//linkedin.png",
    },
    {
      url: "https://www.instagram.com/sahabtyazilim",
      src: "..//instagram.png",
    },
  ];
  const contact = [
    {
      url: "mailto:bilgi@sahabt.com",
      src: "..//letter.png",
      title: "bilgi@sahabt.com",
    },
    {
      url: "tel:+902165045655",
      src: "..//phone.png",
      title: "+ 90 (216) 504 56 55",
    },
  ];
  return (
    <footer>
      <div className="grid">
        <div className="col-12 lg:col-3 flex-order-1 lg:col-offset-1">
          <img
            className=" logo-footer"
            src="/testinium-web.svg"
            alt="footer-img"
          />
          <ul className="social-media">
            {socialLinks.map((social) => {
              return (
                <li className="footer-link">
                  <a href={social.url} target="_blank" rel="noreferrer">
                    <img src={social.src} alt={social.title} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 sm:col-6 lg:col-4 flex-order-1 col-offset-0">
          <h3 className="footer-title">Adres</h3>
          <div className="footer-link">
            <img className="heart-img" src="..//pin.png" alt="little-logo" />
            <span>
              Soğanlık Yeni, Pamukkale Sk. No:39, 34880 Kartal/İstanbul
            </span>
          </div>
        </div>
        <div className="col-12 sm:col-6 lg:col-3 flex-order-1 col-offset-0">
          <h3 className="footer-title">İletişim</h3>
          <ul>
            {contact.map((item) => {
              return (
                <li className="footer-link">
                  <a href={item.url}>
                    <img
                      className="heart-img"
                      src={item.src}
                      alt={item.title}
                    />
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 lg:col-10 flex-order-1 lg:col-offset-1">
          <hr className="custom-grid" />
          <span className="alt-info">
            Copyright © 2022 SAHABT. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
