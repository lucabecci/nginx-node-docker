const express = require('express');
const morgan = require('morgan')

class Server {
    _app
    constructor() {
        this._app = express()

        this.configure()
        this.routes()
    }
    configure(){
        this._app.use(morgan('dev'))
    }

    routes(){
        this._app.get('/', (req, res) => {
            console.log(req.hostname)
            res.send('Hello world from Nginx-Node')
        })
    }

    run(){
        this._app.listen(5000, (err) => {
            if (err) {
                console.log('Error to initialize the server')
                return
            }
            console.log('Server on port: ', 5000)
        })
    }
}

const server = new Server;

server.run()

