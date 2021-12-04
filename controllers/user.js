const User = require('../models/User');
const CustomError = require('../helpers/error/CustomError');
const asyncErrorWrapper = require('express-async-handler');

const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
    res.status(200).json(res.queryResults);
})

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.status(200).json({
        success: true,
        data: user
    })
});

module.exports = {
    getSingleUser,
    getAllUsers,
}