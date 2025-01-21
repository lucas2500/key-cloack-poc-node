module.exports = {

    // Verify if the token is valid by accessing the userinfo route from Keycloak
    async ValidateToken(req, res, next) {

        try {

            if (req.headers.authorization == null) {
                return res.status(401).send({
                    message: 'Unauthorized'
                })
            }

            token = req.headers.authorization.split(' ')[1]

            const { data } = await axios.get('http://localhost:8080/realms/dev/protocol/openid-connect/userinfo', {
                headers: {
                    'Authorization': "Bearer " + token
                }
            })

            req.Token = token
            req.User = data.sub
            next()

        } catch (error) {

            // console.error(error)

            return res.status(401).send({
                message: 'Unauthorized'
            })
        }
    }
}