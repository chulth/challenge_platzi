const mongoose = require('mongoose');

// conection

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/crud-mongo', {
        useNewUrlParser: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 500,
        poolSize: 10,
    });
};

mongoose.connection.on('error', (e) => {
    console.log('[MongoDB] Something went super wrong!', e);
    setTimeout(() => {
        connect();
    }, 10000);
});

/*
mondoose.connect('mongodb://localhost/crud-mongo').then(() => { console.log('Db connected');
}).catch(err=>{
    console.log("Not connected to Database ERROR!", err);
}); 

*/