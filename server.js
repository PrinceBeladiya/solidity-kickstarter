const { createServer } = require('http');
const next = require('next');

const app = next({
    dev : process.env.NODE_ENV !== "production"
});

const Routes = require('./routes');
const handler = Routes.getRequestHandler(app);

app.prepare().then( () => {
    createServer(handler).listen(3000, error => {
        if(error) throw error;

        console.log('Ready on https://localhost:3000');
    })
})