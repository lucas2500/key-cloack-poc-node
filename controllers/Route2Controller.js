const { ValidatePermission } = require('../services/ValidatePermission');

module.exports = {
    async Route2(req, res) {

        const result = await ValidatePermission(req.User, 'test-group2', req.Token)

        if (!result) {
            return res.status(403).send({
                message: 'You dont have permission to access this route'
            })
        }

        return res.status(200).send({ Route: '2' })
    },
};