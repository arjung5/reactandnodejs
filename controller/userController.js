const User = require('../models/user')

module.exports.register = async (req, res) => {
    try {
        console.log(req.body);
        if (req.body.password != req.body.confirm_password) {
            return res.json(401, ({
                message: `Password and Confirm Password Does not match`
            }))
        }
        else {
            const post = await User.findOne({ email: req.body.email });
            if (post) {
                return res.json(301, ({
                    message: `User already present please Sing In`
                }))
            }
            else {
                const post = await User.create(req.body);
                if (post) {
                    return res.json(301, ({
                        message: `User Created , Welcome`,
                        data: {
                            userName: post.name,
                            userEmail: post.email,
                            userPhone: post.phone
                        }
                    }))
                }
            }
        }

    }
    catch (err) {
        console.log(`Error in Register User`);
        return res.json(500, ({
            message: `Internal Server Error error is : ${err}`
        }));
    }
}


module.exports.login = async (req, res) => {
    try {
        const post = await User.findOne({ email: req.body.email , password:req.body.password });
        if (post) {
            return res.json(200, ({
                message: `Singed In Successfully`
            }))
        }
        else {
                return res.json(401, ({
                    message: `Email or Password Doesnot Match`
                }))
            
        }
    }
    catch (err) {
        console.log(`Error in Register User`);
        return res.json(500, ({
            message: `${err}`
        }));
    }
}