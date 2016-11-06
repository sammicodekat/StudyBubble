// const express = require('express');
//
// const router = express.Router();
//
// const Deck = require('../models/Deck');
// const Resource = require('../models/Resource');
//
// router.route('/')
//   .get((req, res) => {
//     Deck.find({})
//     .populate('cards')
//     .then((deck) => res.send(deck))
//     .catch((err) => res.status(400).send(err));
//   })
//   .post((req, res) => {
//     Deck.create(req.body)
//     .then((deck) => res.send(deck))
//     .catch(console.error);
//   });
//
// router.route('/:id')
//   .get((req, res) => {
//     Deck.findById(req.params.id)
//     .populate('cards')
//     .then((deck) => res.send(deck))
//     .catch((err) => res.status(400).send(err));
//   })
//   .put((req, res) => {
//     Deck.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//     .then((deck) => {
//       deck.lastUpdated = Date.now();
//       return deck.save();
//     })
//     .then((deck) => res.send(deck))
//     .catch((err) => res.status(400).send(err));
//   })
//   .delete((req, res) => {
//     Deck.findByIdAndRemove(req.params.id)
//     .then((deck) => res.send(deck))
//     .catch((err) => res.status(400).send(err));
//   });
//
// router.route('/:id/cards/:resourceId')
//   .put((req, res) => {
//     Deck.findById(req.params.id)
//     .populate('cards')
//     .then((deck) => {
//       let rId = req.params.resourceId;
//       console.log('deck: ', deck);
//       let newResources = { cards: deck.cards };
//       if (deck.cards.every((r) => r._id.toString() !== rId.toString())) {
//         newResources = {
//           cards: [...deck.cards, rId],
//           lastUpdated: Date.now()
//         };
//       }
//       return Deck.findByIdAndUpdate(req.params.id, { $set: newResources }, { new: true }).populate('cards');
//     })
//     .then((deck) => res.send(deck))
//     .catch((err) => res.status(400).send(err));
//   })
//   .delete((req, res) => {
//     Resource.findByIdAndRemove(req.params.resourceId)
//       .then(() => Deck.findById(req.params.id).populate('cards'))
//       .then(deck => {
//         deck.cards = deck.cards.filter(r => r != req.params.resourceId);
//         deck.lastUpdated = Date.now();
//         return deck.save();
//       })
//       .then((deck) => res.send(deck))
//       .catch((err) => res.status(400).send(err));
//   });
//
// module.exports = router;
