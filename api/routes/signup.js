const router = require("express").Router();
let User = require("../models/user.model");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.use(bodyParser.json());

router
    .route("/")
    .get((req, res) => {
        User.find()
            .then((user) => res.json({ result: user}))
            .catch((err) => req.statusCode(400).json("Error: " + err));
    })
    .post(async (req, res) => {
        const userName = req.body.userName;
        const email = req.body.email;
        const password = req.body.password;
        if(!email || !password) {
            return res.status(400).json({message: "Please fill all required fields."});
        }

        try{
            const user = await User.findOne({email: email});
            if (user) {
                return res.status(400).json({message: "User already exists."});
            }
            bcrypt.hash(password, 10, async (err, hashedPassword) => {
                if (err) {
                  return res.status(500).json({ message: "Error hashing password" });
                }
                const user = new User({
                    userName,
                    email,
                    password: hashedPassword,
                });

                try{
                    await user.save();
                    res.status(201).json({message: "User created sucessfully", user: { ...user._doc, password}});
                } catch (err) {
                    return res.status(500).json({message: err.message || "error while signup"});
                }
            });
        } catch (err) {
            return res.status(500).json({message: err.message || "error while signup"});
        }
    });

    module.exports = router;