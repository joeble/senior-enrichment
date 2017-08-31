const router = require('express').Router();
const Student  = require('../../db/models/student');

module.exports = router;

// GET
// - all students
router.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});
// - a student by id
router.get('/:studentId', function (req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

// POST
// - new student
router.post('/', function (req, res, next) {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// PUT
// - updated student info for one student
router.put('/:studentId', function (req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => student.update(req.body))
    .then(updatedStudent => res.send(updatedStudent))
    .catch(next);
});

// DELETE
// - a student
router.delete('/:studentId', function (req, res, next) {
  Student.destroy({where: { id: req.params.studentId }})
    .then(() => res.sendStatus(204))
    .catch(next);
});
