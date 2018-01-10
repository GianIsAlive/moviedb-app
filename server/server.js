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
  // app.use(history({
  //   index: '/',
  // }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  app.get('/movies', (req, res) => {
    axios.get('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=5b19221d20b929615d236692cea743e4')
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
