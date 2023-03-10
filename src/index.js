import Express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

import indexRoutes from './routes/index.js'

const app = Express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(Express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || 3000)
console.log('Servidor escuchando en el puerto', process.env.PORT || 3000)

