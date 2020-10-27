const User = require('../models/users');
const Movie = require('../models/movies');
const faker = require('faker');
const { success } = require('../functions');
//const { success } = require('../functions');

module.exports = {
    async createFakeDataUser(req, res) {
        const fakeUsers = [];
        console.log('*** 0 ***')
        for (let i = 0; i < 1; i ++) {
            const fakeUser = new User({
                name: faker.name.findName(),
                age: faker.random.number({ min: 5, max: 100}),
                movies: faker.name.jobTitle()
            });
            fakeUsers.push(fakeUser);
        }
        console.log(fakeUsers)
        try {
            for await (const user of fakeUsers) {
                await user.save();
                console.log('*** 1 ***');
            }
            res.send(success({error: false}));
            res.send(success());
        } 
        catch (error) {
            console.log('*** 2 ***')
            res.status(500)
            res.send({error: true}) 
            //next(error);
        }
    },
    async createFakeDataMovie(req, res) {
        const fakeMovies = [];
        console.log('*** 0 ***')
        for (let i = 0; i < 1; i ++) {
            const fakeMovie = new Movie({
                title: faker.name.findName(),
                duration: faker.random.number({ min: 5, max: 100})
            });
            fakeMovies.push(fakeMovie);
        }
        console.log(fakeMovies)
        try {
            for await (const movie of fakeMovies) {
                await movie.save();
                console.log('*** 1 ***');
            }
            res.send(success({error: false}));
            res.send(success());
        } 
        catch (error) {
            console.log('*** 2 ***')
            res.status(500)
            res.send({error: true}) 
            //next(error);
        }
    }
}
