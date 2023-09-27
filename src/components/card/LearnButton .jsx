import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.scss";
import Forward from "../forward/Forward";

const LearnButton = ({ item }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <button
    className={style.but_learn}
      onClick={() => handleItemClick(item)}
    >
      <Link to={`/forward?items=${JSON.stringify([item])}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={style.icon}
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
        >
          <path d="M17.768,10.232,13.475,5.939,11.354,8.061,13.793,10.5H5v3h8.793l-2.439,2.439,2.121,2.122,4.293-4.293A2.5,2.5,0,0,0,17.768,10.232Z" />
        </svg>
      </Link>
      {selectedItem && <Forward items={[selectedItem]} />}
    </button>
  );

};

export default LearnButton;
