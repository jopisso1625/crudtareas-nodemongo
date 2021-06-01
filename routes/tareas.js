const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('tareas', {
        tasks
    });
});

router.post('/agregar', async (req, res) => {

    if (req.body.title !== "") {
        const task = new Task(req.body);
        await task.save();

    }


    res.redirect('/');


});

router.get('/estado/:id', async (req, res) => {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});


router.get('/editar/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render('editar', { task });
});

router.post('/editar/:id', async (req, res) => {
    const { id } = req.params;
    await Task.updateOne({ _id: id }, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    let { id } = req.params;
    await Task.remove({ _id: id });
    res.redirect('/');
});


module.exports = router;
