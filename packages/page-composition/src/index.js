const express = require('express');
const Tailor = require('tailorx');
const path = require("path");

const app = express();

const tailor = new Tailor({
  templatesPath: path.resolve(__dirname, "templates")
});

app.get('/*', tailor.requestHandler);

app.listen(3000, () => {
  console.log(`listening at http://localhost:3000`)
})
