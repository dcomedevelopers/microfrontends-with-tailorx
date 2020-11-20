const express = require('express');
const favicon = require('serve-favicon');
const Tailor = require('tailorx');
const path = require("path");

const app = express();

const tailor = new Tailor({
  baseTemplatesCacheSize: 1,
  templatesPath: path.resolve(__dirname, "templates")
});

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.get('/*', tailor.requestHandler);


app.listen(3000, () => {
  console.log(`listening at http://localhost:3000`)
})
