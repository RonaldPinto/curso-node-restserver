

const usuariosGet = (req, res = response) => {
    res.json({
        message: 'get Api'
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    res.json({
        message: 'Post Api',
        body
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        message: 'Put Api',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        message: 'Delete Api'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}