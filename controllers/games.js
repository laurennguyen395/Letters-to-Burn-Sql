const db = require('../models');

const index = (req, res) => {
    db.game.findAll().then((foundGames) => {
        if(!foundGames) return res.json({
            message: 'No Games found in database.'
        })
      
        res.send("Incomplete games#index controller function")
    })
    .catch(err => console.log("Error at games#index", err))
}

const show = (req, res) => {
    db.game.findByPk(req.params.id).then((foundGame) => {
        if (!foundGame) return res.json({
            message: 'Game with provided ID not found.'
        })
        
        res.send('Incomplete games#show controller function')
    })
    .catch(err => console.log("Error at games#index", err))
}

const create = (req, res) => {
    db.game.create(req.body).then((savedGame) => {
        
        // validations?
        
        res.send('Incomplete games#create controller function')
    })
    .catch(err => console.log("Error at games#index", err))
}

const update = (req, res) => {
    // make the update route
    db.game.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then((updatedGame) => {
        // Validations and error handling here
        res.send('Incomplete games#update controller function')
    })
    .catch(err => console.log("Error at games#index", err))
}

//not sure
const destroy = (req, res) => {
    db.game.destroy({
      where: { id: req.params.id }
    }).then(() => {
      res.send('Incomplete games#delete controller function')
    })
    .catch(err => console.log("Error at games#index", err))
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
