const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:name/:lang", (req, res) => {
    var name = req.params.name;
    var lang = req.params.lang;

    var products = [
        {name: 'iPhone', price: 399},
        {name: 'Coke', price: 1.99},
        {name: 'Milk', price: 2.99},
    ];

    res.render("index", {
        name: name,
        lang: lang,
        showHello: true,
        products,
    });
});

app.listen(8080, () => {
    console.log("App running!");
});