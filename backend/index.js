const PORT = process.env.BACKEND_PORT
const app = require('./app')
const chalk = require('chalk')

app.listen(PORT, () => {
  console.log(`${chalk.bgBlue.black(' I ')} The backend is running here: http://localhost:${PORT}`)
})
