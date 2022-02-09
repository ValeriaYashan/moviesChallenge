const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                if(req.url.includes('api'))
                return res.json({ meta: { status: 'ok', error: false } , data: genres }).status()
                else 
                res.render('genresList.ejs', {genres})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    },
    getGenresList: (req, res) => {
        return db.Genre.findAll()
            .then(genres => {
                return res.json({ meta: { status: 'ok', error: false } , data: genres }).status()
                //res.render('genresList.ejs', {genres})
            })
    },
    getGenreDetail: (req, res) => {
        return db.Genre.findByPk(req.params.id)
        .then(genre => {
            return res.
                json({ meta: { status: 'ok', error: false } , data: genre })
                .status()
        });
    },

}

module.exports = genresController;