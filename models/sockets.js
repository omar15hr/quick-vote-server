const PersonList = require("./personList");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.personList = new PersonList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
        
            console.log('Cliente conectado');

            // Emitir todos los usuarios conectados
            socket.emit('current-people', this.personList.getPeople() );
            
        
        });
    }


}


module.exports = Sockets;