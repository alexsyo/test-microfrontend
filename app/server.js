
const express = require('express');
const server = express();
const axios = require('axios');

server.set('view engine', 'ejs');

server.get('/_next/*', (req, res) => res.send(axios.get(req.path)));
server.get('/*', (req, res) =>
  Promise.all([
    getContents(process.env.HEADER_HOST),
    getContents(process.env.FOOTER_HOST),
    getContents(process.env.HOME_HOST + req.path),
    getContents(process.env.FOOD_HOST + req.path)
  ]).then(responses =>
    res.render('index', {
       header: responses[0].data,
       footer: responses[1].data,
       home: responses[2].data,
       food: responses[3].data
    })
  ).catch(error =>
    res.send(error.message)
  )
);

const getContents = async (url) => {
  try {
    return await axios.get(url)
  } catch(e) {
    return ''
  }
}

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Homepage listening on port ${port}`);
});