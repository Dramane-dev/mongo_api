const movieController = require('../controllers/movieController');
const userController = require('../controllers/userController');

// MES ROUTES 
UserController = require('../controllers/userController');
MovieController = require('../controllers/movieController');

module.exports = (server) => {

    // HomePage
    server.get('/', (req, res) => {
        console.log('Hello welcom to my Mongo API 😊 !');
        res.send({ result: 'Hello welcom to my Mongo API 😊 !'});
    });
  
    // Routes for userController
    server.get('/users', UserController.findAll);

    server.get('/user/:id', UserController.findById);

    server.post('/user', UserController.createUser);

    server.delete('/user/:id', UserController.removeUser);

    // Routes for movieController
    server.get('/movies', MovieController.findAll);

    server.get('/movie/:id', MovieController.findById);

    server.post('/movie', MovieController.createMovie);
}


