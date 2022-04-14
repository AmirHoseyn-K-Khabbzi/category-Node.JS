const { body, check } = require('express-validator');

class Auth_validation {
    create() {
        return [
            body("title").not().isEmpty().withMessage("عنوان نمیتواند خالی باشد")
        ]
    }
}

module.exports = new Auth_validation()