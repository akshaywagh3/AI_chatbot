import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const signupValidator = [
    body("name").notEmpty().withMessage('name is required'),
    body("email").trim().isEmail().withMessage('email is required'),
    body("password").trim().isLength({ min: 6 }).withMessage('password should contain atleast 6 characters'),
];
//# sourceMappingURL=validators.js.map