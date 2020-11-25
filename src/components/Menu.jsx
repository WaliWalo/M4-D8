import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container, Alert } from "react-bootstrap";

const Menu = () => {
  //let dishes = [];
  return (
    <Container>
      {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
      {dishes.length === 0 && (
        <Alert variant="warning" className="mt-5 ">
          No dish!!!
        </Alert>
      )}
    </Container>
  );
};

export default Menu;
