import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (

      <button className="link-list-item" key={link.id} >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </a>

    </button>

  ));

  return <div className="link-list">{linkMarkup}</div>;
};

export default LinkList;