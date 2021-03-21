import React from "react";
import Card from "../card/card.component";
import ListOfCardsStyles from "./list-of-cards.module.css";

const listOfCards = (props) => {
    console.log('Inside list of cards');
  let items = props.children;
  return (
    <div className={ListOfCardsStyles.list_of_cards}>
      {items.map((item) => {
        return <Card key={item.id} item={item}></Card>;
      })}
    </div>
  );
};

export default listOfCards;
