import express from 'express';
import indexRoutes from './routes/index.routes'
// import router from './routes/index.routes'
// import exphbs from 'express-handlebars'
import {create} from "express-handlebars";
import path from 'path'
const app= express();
import morgan from 'morgan'

app.set("view engine", ".hbs");
app.set('views', path.join(__dirname,'views'))


const exphbs = create({
  extname: '.hbs',
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout:'main',
  helpers: {
    inc: function (value, options) {
      return parseInt(value) + 1;
    }},
});

app.engine(".hbs", exphbs.engine);

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

//rutas
app.use(indexRoutes)

//archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

export default app