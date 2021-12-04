const express = require('express');
const answer = require('./answer');
const {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion,
    deleteQuestion,
    likeQuestion,
    undoLikeQuestion
} = require('../controllers/question');
const { getAccessToRoute, getQuestionOwnerAccess } = require('../middlewares/auth/auth');
const { checkQuestionExist } = require('../middlewares/database/databaseErrorHelpers');
const questionQueryMiddleware = require('../middlewares/query/questionQueryMiddleware');
const answerQueryMiddleware = require('../middlewares/query/answerQueryMiddleware');
const Question = require('../models/Question');
const router = express.Router();


router.get("/",
    questionQueryMiddleware(
        Question,
        {
            population: {
                path: "user",
                select: "name profileImage"
            }
        }
    ),
    getAllQuestions
);
router.get("/:id/like", [getAccessToRoute, checkQuestionExist], likeQuestion);
router.get("/:id/undo_like", [getAccessToRoute, checkQuestionExist], undoLikeQuestion)
router.get("/:id",
    checkQuestionExist,
    answerQueryMiddleware(Question, {
        population: [
            {
                path: "user",
                select: "name profileImage"
            },
            {
                path: "answers",
                select: "content"
            }
        ]
    }),
    getSingleQuestion
);
router.post("/ask", getAccessToRoute, askNewQuestion);
router.put("/:id/edit", [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], editQuestion);
router.delete("/:id/delete", [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess], deleteQuestion);

router.use("/:question_id/answers", checkQuestionExist, answer);

module.exports = router;