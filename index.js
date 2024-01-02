const app = require("./app/server.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;


const main = () => {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en puerto ${PORT}.`);
    })
};

main();