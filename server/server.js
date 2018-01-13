const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const validator = require('validator');
const history = require('connect-history-api-fallback');

const cluster = require('cluster');
// Count the machine's CPUs
const cpuCount = require('os').cpus().length;
// Code to run if we're in the master process
if (cluster.isMaster) {
  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
  // Listen for terminating workers
  cluster.on('exit', (worker) => {
    // Replace the terminated workers
    console.log(`Worker: ${worker.id} died..`);
    cluster.fork();
  });
// Code to run if we're in a worker process
} else {
  const app = express();
  app.use(history({ index: '/' }));
  app.use(bodyParser.json());
  app.use('/search', bodyParser.urlencoded());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  app.get('/movie', (req, res) => {
    console.log('This is req query', req.query);
    axios.get(`https://api.themoviedb.org/3/movie/${req.query.id}?api_key=5b19221d20b929615d236692cea743e4&language=en-US`)
      .then(data => res.status(200).send(data.data))
      .catch(() => res.status(400).send('Couldn\'t get movie details...'));
  });

  app.get('/cast', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/${req.query.id}/credits?api_key=5b19221d20b929615d236692cea743e4`)
      .then(data => res.status(200).send(data.data))
      .catch(() => res.status(400).send('Couldn\'t get cast details...'));
  });

  app.get('/recommend', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/${req.query.id}/recommendations?api_key=5b19221d20b929615d236692cea743e4&language=en-US&page=1`)
      .then(data => res.status(200).send(data.data))
      .catch(() => res.status(400).send('Couldn\'t get recommendations...'));
  });

  app.get('/popular-movies', (req, res) => {
    let page = 1;
    if (req.query.page) page = req.query.page;
    axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&language=en-US&api_key=5b19221d20b929615d236692cea743e4`)
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch(() => {
        res.status(400).end('Oopsie daisy, movie is not found.');
      });
  });

  app.get('/search', (req, res) => {
    const query = req.query['movie-name'];
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5b19221d20b929615d236692cea743e4&language=en-US&query=${query}&page=1&include_adult=false`)
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch(() => {
        res.status(400).end('Oopsie daisy, movie is not found.');
      });
  });

  app.use('/dist', express.static(path.join(__dirname, '../dist')));

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`You are listening on ${port}`);
  });
}
