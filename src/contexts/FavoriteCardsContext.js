import React, { createContext, useState } from "react";

export const FavoriteCardsContext = createContext();

const FavoriteCardsContextProvider = ({ children }) => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const addCard = (card) => {
    setFavoriteCards((prevCards) => [...prevCards, card]);
  };

  const removeCard = (card) => {
    setFavoriteCards((prevCards) =>
      prevCards.filter((c) => c !== card)
    );
  };

  return (
    <FavoriteCardsContext.Provider
      value={{ favoriteCards, addCard, removeCard }}
    >
      {children}
    </FavoriteCardsContext.Provider>
  );
};

export default FavoriteCardsContextProvider;
