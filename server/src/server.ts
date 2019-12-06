import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import * as json from 'koa-json'

const app = new Koa()
const router = new Router()

// Hello World
router.get('/', async (ctx, next) => {
  ctx.body = {msg: 'Hello Mofos!'}

  await next()
})

// Middlewares
app.use(json())
app.use(logger())

// Routes
app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () =>{
  console.log('Koa started')
})
