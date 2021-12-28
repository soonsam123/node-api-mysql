const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const produtosRoutes = require("./api/routes/produtos");

app.listen(8000);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/produtos", produtosRoutes);
app.use("/pedidos", produtosRoutes);
