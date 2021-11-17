const register = (req, res, next) => {
    res.status(200).json({
        succcess: true
    })
}

module.exports = {
    register
}