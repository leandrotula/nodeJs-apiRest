const userService = new(require('../../domain/userdomain/user.service'));

exports.get = async (req, res, next) => {

    let id = req.params.id;

    let user = await userService.findById(id)

    res.json(user)

}

exports.delete = async (req, res, next) => {

    let id = req.params.id;

    userService.deleteById(id).then(user => res.json(user))
        .catch(err => res.json(err))
}

exports.getAll = async (req, res, next) => {

    userService.findAll().then(user => res.json(user))
        .catch(err => res.json(err));

}

exports.saveUser = async (req, res, next) => {

    let body = req.body
    try {
          userService.save(body)
            .then(user => res.json(user))
            .catch(err => res.json(err));
    } catch (e) {
        res.json(e)
    }
}

exports.update = async (req, res, next) => {

    let id = req.params.id;
    let body = req.body;

    userService.update(id, body)
        .then(user => res.json(user))
        .catch(err => res.json(err))

}