const asyncErrorWrapper = require('express-async-handler');
const { searchHelper, paginationHelper } = require('./queryMiddlewareHelpers');

const userQueryMiddleware = function (model, options) {
    return asyncErrorWrapper(async function (req, res, next) {
        let query = model.find();

        // Search
        query = searchHelper("name", query, req);

        // Pagination
        const total = await model.countDocuments();
        const paginationResult = await paginationHelper(model, query, req);

        query = paginationResult.query;
        const pagination = paginationResult.pagination;

        const queryResults = await query;

        res.queryResults = {
            success: true,
            count: queryResults.length,
            pagination,
            data: queryResults
        }

        next();
    })
}

module.exports = userQueryMiddleware;