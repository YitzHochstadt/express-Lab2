import express from 'express';

const routes = express.Router();

routes.get("/review", (req, res) => {
    res.render("review");
});

routes.get("/review-result", (req, res) => {
    const name = req.query.name;
    const comment = req.query.comment;
    const rating:number = Number(req.query.rating as string);
    res.render("review-result", {name, comment, rating});
});

export default routes;