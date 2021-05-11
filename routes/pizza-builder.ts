import express from 'express';

const routes = express.Router();

routes.get("/pizza-builder", (req, res) => {

    const toppings = ["Extra Cheese", "Mushroom", "Onion", "Peppers", "Green Olives", "Black Olives", "Tomato", "Jalepeno"]

    res.render("pizza-builder", {toppings});
});

routes.get("/built-pizza", (req, res) => {
    const size = req.query.size as string;
    const numberOfToppings:number = parseInt(req.query.numberOfToppings as string);
    const glutenFree:boolean = !!req.query.glutenFree;
    const instructions = req.query.instructions;
    let price = 0;
    if (size === "small"){
        price += 7 + (numberOfToppings * .50);
    } else if (size === "medium"){
        price += 10 + (numberOfToppings * 1);
    } else {
        price += 12 + (numberOfToppings * 1.25);
    }
    res.render("built-pizza", {size, numberOfToppings, glutenFree, price, instructions});
});

export default routes;