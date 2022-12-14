const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const clientService = require('_service/clients/clients.service.ts');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/new', createSchema, create);
router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
  clientService.getAll()
    .then(clients => res.json(clients))
    .catch(next);
}

function getById(req, res, next) {
  clientService.getById(req.params.id)
    .then(clients => res.json(clients))
    .catch(next);
}

function create(req, res, next) {
  clientService.create(req.body)
    .then(() => res.json({ message: 'Client créer' }))
    .catch(next);
}

function update(req, res, next) {
  clientService.update(req.params.id, req.body)
    .then(() => res.json({ message: 'Client modifier' }))
    .catch(next);
}

function _delete(req, res, next) {
  clientService.delete(req.params.id)
    .then(() => res.json({ message: 'Client effacer' }))
    .catch(next);
}

// schema functions

function createSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    adresses: Joi.string().required(),
    zipcode: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    email: Joi.string().email().required(),
    phonenumber: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().empty(''),
    lastName: Joi.string().empty(''),
    adresses: Joi.string().empty(''),
    zipcode: Joi.string().empty(''),
    city: Joi.string().empty(''),
    country: Joi.string().empty(''),
    email: Joi.string().email().empty(''),
    phonenumber: Joi.number().empty(''),
  })
  validateRequest(req, next, schema);
}
