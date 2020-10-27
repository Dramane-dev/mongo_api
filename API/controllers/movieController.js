const Movie = require('../models/movies');
const { success, error } = require('../functions');
// Controllers
module.exports = {

    findAll(req, res) {
        Movie.find()
            .then(movie => res.send(success(movie)))
            .catch(error => console.log(error.message))
    },
    findById(req, res) {
        const id = req.params.id;
        Movie.findById(id)
            .then(movie => res.send(success(movie)))
            .catch(err => {
                if (err) {
                    return res.status(404).send(error({
                        message: `Movie with id ${id} not found`
                    }));
                }
            });
    },
    createMovie(req, res) {
        const body = req.body
        if (body.title === '' || body.duration === '')
            res.status(400).send(error({ 
                message: 'This value cannot be empty'
            }));
        
        const movie = new Movie({
            title: body.title,
            duration: body.duration
        });

        //Save my user 
        movie.save()
            .then(data => res.send(success(data)) && console.log(`Movie ${movie.title} created successfuly ✅`))
            .catch(err => res.status(500).send(error({
                message: `The movie ${movie.title} cannot be created ❌ !`
            })));
    }
    
}
