import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import fetch from 'node-fetch'
import * as url from 'url'
import * as parser from 'xml2json'

const app = new Koa()
const router = new Router()

const token = process.env.TOKEN

const parseXml = (xml: any) => {
  try {
    return parser.toJson(xml, {object: true})
  }
  catch (e) {
    console.error('Failed to convert from XML', e)
  }
}

const fetchApplications = async (ctx: any, next: any) => {
  const applicationsUrl = url.format({
    protocol: 'http',
    hostname: 'provider-admin.example.com.lvh.me',
    port: 3000,
    pathname: 'admin/api/accounts/3/applications.xml',
    query: {
      access_token: token
    }
  })

  const res = await fetch(applicationsUrl)
  if (!res.ok) {
    throw new Error("Bad response")
  }
  const xml = await res.text()
  ctx.body = parseXml(xml)
}

// Applications
router.get('/applications', async (ctx, next) => {
  await fetchApplications(ctx, next)
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
