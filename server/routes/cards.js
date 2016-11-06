// const express = require('express');
//
// const router = express.Router();
//
// const Card = require('../models/Card');
// const Resource = require('../models/Resource');
//
// router.route('/')
//   .get((req, res) => {
//     Card.find({})
//     .populate('cards')
//     .then((card) => res.send(card))
//     .catch((err) => res.status(400).send(err));
//   })
//   .post((req, res) => {
//     Card.create(req.body)
//     .then((card) => res.send(card))
//     .catch(console.error);
//   });
//
// router.route('/addToDeck/:deckId')
//   .post((req, res) => {
//     let cardRef;
//     Card.create(req.body)
//     .then(card => {
//       cardRef = card;
//       return Resource.findById(req.params.deckId)
//     })
//     .then(resource => {
//       resource.cards.push(cardRef._id);
//       return resource.save();
//     })
//     .then(() => res.send(cardRef))
//     .catch(err => res.status(400).send(err));
//   });
//
//
// router.route('/:id')
//   .get((req, res) => {
//     Card.findById(req.params.id)
//     .populate('cards')
//     .then((card) => res.send(card))
//     .catch((err) => res.status(400).send(err));
//   })
//   .put((req, res) => {
//     Card.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//     .then((card) => res.send(card))
//     .catch((err) => res.status(400).send(err));
//   })
//   .delete((req, res) => {
//     Card.findByIdAndRemove(req.params.id)
//     .then((card) => res.send(card))
//     .catch((err) => res.status(400).send(err));
//   });
//
// module.exports = router;
