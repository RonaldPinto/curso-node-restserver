const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacines
        this.routes();

    }

    middlewares() {

        // CORS
        this.app.use(cors());
        
        // Directorio publico
        this.app.use(express.static('public'));

        // Body Parser
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/User'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

module.exports = Server;