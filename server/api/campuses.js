const router = require('express').Router();
const Campus  = require('../../db/models/campus');

module.exports = router;

// GET
// - all campuses
router.get('/', function (req, res, next) {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});
// - a campus by id
router.get('/:campusId', function (req, res, next) {
  Campus.findbyId(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

// POST
// - new campus
router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// PUT
// - updated campus info for one campus
router.put('/:campusId', function (req, res, next) {
  Campus.findbyId(req.params.campusId)
    .then(campus => campus.update(req.body))
    .then(updatedCampus => res.json(updatedCampus))
    .catch(next);
});

// DELETE
// - a campus
router.delete('/:campusId', function (req, res, next) {
  Campus.destroy({ where: { id: req.params.campusId } })
    .then(() => res.sendStatus(204))
    .catch(next);
});
