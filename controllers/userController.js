const User = require('../models/users');
const { success, error } = require('../node_modules/functions');
// Controllers
module.exports = {

    findAll(req, res) {
        User.find()
            .then(users => res.send(success(users)))
            .catch(error => console.log(error.message))
    },
    findById(req, res) {
        const id = req.params.id;
        User.findById(id)
            .then(user => res.send(success(user)))
            .catch(err => {
                if (err) {
                    return res.status(404).send(error({
                        message: `User with id ${id} not found`
                    }));
                }
            });
    },
    createUser(req, res) {
        const body = req.body
        if (body.name === '' || body.age === '' || body.movie === '')
            res.status(400).send(error({ 
                message: 'This value cannot be empty'
            }));
        
        const user = new User({
            name: body.name,
            age: body.age,
            movie: body.movie
        });

        //Save my user 
        user.save()
            .then(data => res.send(success(data)) && console.log(`User ${user.name} created successfuly ✅`))
            .catch(err => res.status(500).send(error({
                message: `The user ${user.name} cannot be created ❌ !`
            })));
    },
    removeUser(req, res) {
        const id = req.params.id;
        User.findByIdAndDelete(id)
            .then(userDeleted => {
                res.send(success(userDeleted)) && console.log(`User ${req.params.id} deleted successfuly ✅`)
            })
            .catch(err => res.status(403).send(error({
                message: `The user with id ${id} is not deleted ❌ !`
            })));
    }
    
}
