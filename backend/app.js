const Koa = require('koa')
const app = new Koa()
const mockData = require('./data.json')

app.use(allowCORS)
app.use(sendDelayedRandomResponse)

function allowCORS (ctx, next) {
  ctx.set('Access-Control-Allow-Origin', '*')
  return next()
}

function sendDelayedRandomResponse (ctx) {
  return getTimeoutPromise(() => {
    getRandomRequestHandler()(ctx)
  }, 1000)
}

function getTimeoutPromise (callback, timeoutInMS) {
  return new Promise(resolve => {
    setTimeout(() => {
      callback()
      resolve()
    }, timeoutInMS)
  })
}

function getRandomRequestHandler () {
  const shouldFail = Math.random() > 0.8
  if (shouldFail) return sendErrorResponse
  return sendStatesList
}

function sendErrorResponse (ctx) {
  ctx.status = 500
  ctx.body = 'The request failed, try again.'
}

function sendStatesList (ctx) {
  ctx.body = mockData
}

module.exports = app
