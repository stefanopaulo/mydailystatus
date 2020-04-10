import auth0 from '../../lib/auth0'

const login = async (req, res) => {
    await auth0.handleLogin(req, res)
    res.send({
        name: 'Stefano Paulo'
    })
}

export default login