import React, { Component } from 'react';
import ListItem from './ListItem';
import Summary from './Summary';
import Payment from './Payment';
import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    items: [
      {
        id: 1, name: "Margherita",
        ingredients: "sos pomidorowy, ser mozzarella, oregano",
        price: 16.9, quantity: 0, active: false
      },
      {
        id: 2, name: "Prosciutto",
        ingredients: "sos pomidorowy, ser mozzarella, szynka, pieczarki, oregano",
        price: 19.9, quantity: 0, active: false
      },
      {
        id: 3, name: "Salame",
        ingredients: "sos pomidorowy, ser mozzarella, salami pepperoni, pieczarki, papryka, kukurydza, oregano",
        price: 19.9, quantity: 0, active: false
      },
      {
        id: 4, name: "Pepe",
        ingredients: "sos pomidorowy, ser mozzarella, salami pepperoni, pieczarki, papryka pepperoni, oregano",
        price: 20.9, quantity: 0, active: false
      },
      {
        id: 5, name: "Vega",
        ingredients: "sos pomidorowy, ser mozzarella, pieczarki, papryka, kukurydza, cebula, oregano",
        price: 20.9, quantity: 0, active: false
      },
      {
        id: 6, name: "Dolcevita",
        ingredients: "sos pomidorowy, ser mozzarella, szynka, ananas, oregano",
        price: 22.9, quantity: 0, active: false
      },
      {
        id: 7, name: "Unico",
        ingredients: "sos pomidorowy, ser mozzarella, pieczarki, karczochy, czerwona cebula, oregano",
        price: 24.9, quantity: 0, active: false
      },
      {
        id: 8, name: "Greco",
        ingredients: "sos pomidorowy, ser mozzarella, gyros z kurczaka, pieczarki, cebula, oregano",
        price: 28.9, quantity: 0, active: false
      },
      {
        id: 9, name: "Tonno",
        ingredients: "sos pomidorowy, ser mozzarella, tuńczyk, kapary, cebula, oregano",
        price: 28.9, quantity: 0, active: false
      },
      {
        id: 10, name: "Olivo",
        ingredients: "sos pomidorowy, ser mozzarella, szynka, oliwki, kapary, oregano",
        price: 29.9, quantity: 0, active: false
      },
    ],
    view: "menu",
  }

  globalSettings = {
    deliveryCost: 8,
    freeDeliveryFrom: 100,
  }

  handleChangeState = id => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === id) {
        if (item.active)
          item.quantity = 0;
        else
          item.quantity = 1;

        item.active = !item.active;
      }

      return item;
    });

    this.setState({
      items: updatedItems
    });
  }

  handleChangeProductQuantity = (id, operation) => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === id) {
        switch (operation) {
          case "-": item.quantity = item.quantity - 1; break;
          case "+": item.quantity = item.quantity + 1; break;
        }

        if (!item.quantity)
          item.active = !item.active;
      }

      return item;
    });

    this.setState({
      items: updatedItems
    });
  }

  handleMenuView = () => {
    this.setState({
      view: "menu"
    });
  }

  handlePaymentView = () => {
    this.setState({
      view: "payment"
    });
  }

  render() {
    let currentViewRender;

    if (this.state.view === "menu") {
      currentViewRender = (
        <React.Fragment>
          <ListItem
            items={this.state.items}
            changeState={this.handleChangeState}
            changeProductQuantity={this.handleChangeProductQuantity}
          />
          <Summary
            items={this.state.items}
            settings={this.globalSettings}
            paymentView={this.handlePaymentView}
          />
        </React.Fragment>
      )
    } else if (this.state.view === "payment") {
      currentViewRender = (
        <React.Fragment>
          <Payment
            items={this.state.items}
            menuView={this.handleMenuView}
          />
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <Header
          items={this.state.items}
          settings={this.globalSettings}
          view={this.state.view}
        />
        {currentViewRender}
      </React.Fragment>
    );
  }
}

export default App;