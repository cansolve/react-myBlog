import Koa from 'koa'
import Router from 'koa-router'
import parser from 'koa-bodyparser';
import cors from 'koa2-cors'
import api from './routes/api'
import routes from './routes/index'
import mongoConnection from './db/connection';

const app = new Koa();

app
    .use(cors())
    .use(parser())
    .use(api(Router))
    .use(routes(Router));


(async() => {
    try {
        await mongoConnection();
    } catch (e) {
        console.error('ERROR:', e);
        return;
    }
    // 服务器部署需要写上服务器ip，不能localhost
    app.listen(8088, '127.0.0.1', () => {
        console.log('server listen');
    });
})();