import React, { useState } from "react";
import style from "./Card.module.scss";
import Card from "./Card";
import data from "../../data/data.json";
import ModalFavorites from "./ModalFavorites";

const Catalog = ({ isLoading }) => {
  const itemsPerPage = 12;

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.includes(item)) {
      setFavorites([...favorites, item]);
    }
  };

  const renderItems = () => {
    return isLoading ? (
      [...Array(8)]
    ) : (
      <Card
        data={data}
        itemsPerPage={itemsPerPage}
        loading={isLoading}
        addFavorite={addFavorite}
      />
    );
  };

  return (
    <div className={style.div1}>
      <ModalFavorites favorites={favorites} />
      {renderItems()}
    </div>
  );
};

export default Catalog;
