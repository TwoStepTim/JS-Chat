const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.get(
      "https://api.chatengine.io/users/me/session/",
      {username: username, secret: username, first_name: username},
      {headers: {"Private-Key":"14fc5036-4cb3-42a1-8708-3007e5fa6877"}}
    )
    return res.status(r.status).json(r.data)
  } catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
 
  return res.json({ username: username, secret: username });
});

app.listen(3001);