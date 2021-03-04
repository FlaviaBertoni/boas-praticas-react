require('dotenv').config();
var axios = require('axios');
var express = require('express');
var app = express();

app.get('/github-oauth', function (req, res) {
  const url = 'https://github.com/login/oauth/access_token';
  const client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const client_secret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  const code = req.query.code;
  const state = req.query.state;

  axios({
    method: 'post',
    url,
    data: {
      client_id,
      client_secret,
      code,
      state,
    },
  })
    .then(function (response) {
      res.redirect('http://localhost:3000/sign-in?' + response.data);
      console.log('Success');
    })
    .catch(function (error) {
      console.error('Error ' + error.message);
    });
});

app.listen(4444, function () {
  console.log('github-oauth listening on port 4444!');
});
