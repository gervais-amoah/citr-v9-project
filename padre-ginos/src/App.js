const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni",
      description: "The best pizza ever",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "This one is so good!",
    }),
    React.createElement(Pizza, {
      name: "The Margherita",
      description: "Made with love",
    }),
    React.createElement(Pizza, {
      name: "The Meat Lovers",
      description: "The favorite for Americans",
    }),
    React.createElement(Pizza, {
      name: "The Vegetarian",
      description: "The best vegetarian pizza",
    }),
    React.createElement(Pizza, {
      name: "The Chicken Pizza",
      description: "Chicken nuggets on a pizza, wtf UK",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App, null));
