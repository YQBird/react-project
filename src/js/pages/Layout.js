import React from "react";
import Header from "./Header";
import Ad from "./Ad";
import Content from "./Content";
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

require("sass/style");

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
        listTitie: [
            {
               name: "Apple",
               number: 7
            },
            {
               name: "Dell",
               number: 6
            },
            {
               name: "Lenovo",
               number: 0
            },
            {
               name: "Acer",
               number: 0
            }
        ],

      products : {
          Apple: [
              {
                  name: "MacBook Air",
                  url: "/img/apple/air.jpg",
                  price: "$899"
              },
              {
                  name: "MacBook Pro",
                  url: "/img/apple/pro.jpg",
                  price: "$1299"
              },
              {
                  name: "New MacBook ",
                  url: "/img/apple/pro.jpg",
                  price: "$1299"
              },
              {
                  name: "MacBook Pro",
                  url: "/img/apple/pro.jpg",
                  price: "$1299"
              },
              {
                  name: "MacBook Air",
                  url: "/img/apple/air.jpg",
                  price: "$899"
              },
              {
                  name: "MacBook Air",
                  url: "/img/apple/pro.jpg",
                  price: "$899"
              },
              {
                  name: "MacBook Air",
                  url: "/img/apple/air.jpg",
                  price: "$899"
              },

          ],
          Dell: [
              {
                  name: "Inspiron 11",
                  url: "/img/dell/Inspiron.jpg",
                  price: "$899"
              },
              {
                  name: "Inspiron 13",
                  url: "/img/dell/Inspiron.jpg",
                  price: "$999"
              },
              {
                  name: "Inspiron 15",
                  url: "/img/dell/Inspiron.jpg",
                  price: "$1099"
              },
              {
                  name: "Inspiron 11",
                  url: "/img/dell/Inspiron.jpg",
                  price: "$899"
              },
              {
                  name: "Inspiron 13",
                  url: "/img/dell/Inspiron.jpg",
                  price: "$999"
              },
              {
                  name: "Inspiron 15",
                  url: "/img/dell/Inspiron.jpg",
                  price: "$1099"
              }

            ],
          Lenovo: [],
          Acer: []
      
      },
      cart:[]
  }
}
  render(){
    return(
      <div>
        <Ad />
        <Header />
        <Content titles={this.state.listTitie} products={this.state.products} />
      </div>
    )
  }
}
