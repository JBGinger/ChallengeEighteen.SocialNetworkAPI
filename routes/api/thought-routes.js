const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts);

router.route('/:userId')
    .post(addThought);

router.route('/:thoughtId')
    .get(getThoughtById)
    .delete(removeThought)
    .put(updateThought);

router.route('/:userId/:thoughtId')
    .put(addReaction)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;