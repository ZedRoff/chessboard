const express = require("express")
const app = express()
const server = app.listen(3000, () => {console.log("app ready")})
const WebSocket = require("ws")
const wss = new WebSocket.Server({ server: server })
app.use(express.static('public'))

let users = []
wss.on("connection", (ws) => {

  users.push(ws)
  

  for(ws of users) {
    ws.send(JSON.stringify({message: "NEW USER"}))
  }
  
  ws.on("message", (ev) => {
    let message = ev.toString();
    console.log(message)
  for(ws of users) {
    ws.send(message)
  }
    
  })
  
})

app.get("/", (req, res) => {return res.sendFile(__dirname + "/index.html")})