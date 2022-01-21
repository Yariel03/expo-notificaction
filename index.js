const express = require("Express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./src/rutas/ruta"));

app.listen(process.env.PORT, () =>
  console.log(`Ready`, "port: " + process.env.PORT)
);
