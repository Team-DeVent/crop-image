import express from 'express';


async function startExpressServer() {
    const app = express();
  
    app.use('/dist', express.static('dist'));
    app.use('/', express.static('example'));

  
    return app.listen(9032, err => {
        console.log(`[ + ] The server is running.`);
    });
}
  
let server = await startExpressServer();
export { server }