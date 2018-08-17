const next = require('next')
const micro = require('micro')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// To modify the public path of the static assets a custom server needs to
// be set up as described in the Dynamic asset prefix chapter
// https://nextjs.org/docs#custom-server-and-routing
app.prepare().then(() => {
  const server = micro((req, res) => {
    app.setAssetPrefix(process.env.HOST)

    handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) {
      throw err
    }

    console.log(`> Ready on http://localhost:3000`)
  })
})