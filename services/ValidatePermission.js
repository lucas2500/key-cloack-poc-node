module.exports = {

    // Check if the user has permission to acess the route by veryfing if he belongs to the group
    async ValidatePermission(user, group, token) {

        try {

            const { data } = await axios.get('http://localhost:8080/admin/realms/dev/users/' + user + '/groups', {
                headers: { 'Authorization': "Bearer " + token }
            })

            if (data.some(item => item.name === group)) {
                return true
            }

            return false

        } catch (error) {

            // console.error(error)

            return false
        }
    }
}