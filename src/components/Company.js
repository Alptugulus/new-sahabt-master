import React, { useState } from "react";

const Company = ({
  title,
  paragraph,
  imgUrl,
  buttonText = "More Than",
  url,
}) => {
  const [active, setActive] = useState("");
  console.log(active);

  return (
    <div
      className={`company-item ${title === active ? "active" : ""}`}
      onClick={() => (active === title ? setActive("") : setActive(title))}
    >
      <h1>{title}</h1>
      <p className="company-text text-p">{paragraph}</p>
      <a
        className="btn-link btn-item"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {buttonText}
      </a>
      <div className="content-images">
        <img src={imgUrl} alt={title}></img>
      </div>
    </div>
  );
};

export default Company;
