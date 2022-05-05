
import app from './app';
import './database'
import{PORT} from './config'

//babel-node src/index.js
console.log('ejecutar: babel-node src/index.js')
app.listen(PORT);
console.log(`Escuchandoi en el puerto ${PORT}`)

