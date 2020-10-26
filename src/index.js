const express = require('express')
require('./db/mongoosedb')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


// 17-Oct-2020 : Create instance of express and port
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})