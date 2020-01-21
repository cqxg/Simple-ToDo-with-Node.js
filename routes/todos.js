const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Todos list'
    });
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create ToDo'
    });
});

module.exports = router;