const User = require('../models/User');
const CustomError = require('../helpers/error/CustomError');
const asyncErrorWrapper = require('express-async-handler');

const blockUser = asyncErrorWrapper(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findById(id);

    user.blocked = !user.blocked;

    await user.save();

    res.status(200).json({
        success: true,
        message: "Block - Unblocked successfull"
    })
})

const deleteUser = asyncErrorWrapper(async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    await user.remove();

    res.status(200).json({
        success: true,
        message: "Delete operation successfull"
    })
})

module.exports = {
    blockUser,
    deleteUser,
}