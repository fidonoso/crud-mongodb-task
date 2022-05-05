
import app from './app';
import './database'
import{PORT} from './config'

//babel-node src/index.js
console.log('ejecutar: npm run dev')
app.listen(PORT);
console.log(`Escuchandoi en el puerto ${PORT}`)

