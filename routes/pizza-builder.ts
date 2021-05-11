import express from 'express';

const routes = express.Router();

routes.get("/pizza-builder", (req, res) => {

    const toppings = ["Extra Cheese", "Mushroom", "Onion", "Peppers", "Green Olives", "Black Olives", "Tomato", "Jalepeno"]

    res.render("pizza-builder", {toppings});
});


routes.get("/built-pizza", (req, res) => {
    const size = req.query.size as string;
    const toppingsNum:number = parseInt(req.query.toppingsNum as string);
    const glutenFree:boolean = !!req.query.glutenFree;
    const instructions = req.query.instructions;
    console.log(size);
    console.log(toppingsNum);
    console.log(glutenFree);
    console.log(instructions);
    let price = 0;
    if (size === "Small"){
        price = 7 + (toppingsNum * .5);
    } else if (size === "Medium"){
        price = 10 + (toppingsNum * 1);
    } else {
        price = 12 + (toppingsNum * 1.25);
    }
    let formattedPrice = price.toFixed(2);
    res.render("built-pizza", {size, toppingsNum, glutenFree, formattedPrice, instructions});
});


export default routes;