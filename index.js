const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cors())
app.get('/', (req, res) => {
   res.send("nothing (:");
}) 

app.post('/send', (req, res) => {
  const data = req.body;
  console.log("Result:", data);
  res.send("ok thankyou!")
})

app.listen(port, () => console.log(`App is listening on port ${port}`))