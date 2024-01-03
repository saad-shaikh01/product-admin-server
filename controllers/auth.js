import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import shortid from "shortid";


const  JWT_SECRET = "JWT_SECRET"

const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, JWT_SECRET, {
        expiresIn: "1d",
    });
};

export const signup = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({
                error: "User already registered",
            });
        }

        const { firstName, lastName, email, password } = req.body;
        console.log(req.body)
        // const hash_password = await bcrypt.hash(password, 10);
        const _user = new User({
            firstName,
            lastName,
            email,
            //   hash_password,
            password,
            username: shortid.generate(),
        });

        const user = await _user.save();
        if (user) {
            const token = generateJwtToken(user._id, user.role);
            const { _id, firstName, lastName, email, role, fullName } = user;
            return res.status(201).json({
                token,
                user: { _id, firstName, lastName, email, role, fullName },
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: "Something went wrong",
        });
    }
};

// export const signin = async (req, res) => {
//     try {
//         console.log(req.body)
//         const user = await User.findOne({ email: req.body.email });
//         if (!user) {
//             return res.status(400).json({ message: "User not found" });
//         }

//         const isPasswordValid = await user.authenticate(req.body.password);
//         if (isPasswordValid && user.role === "user") {
//             const token = generateJwtToken(user._id, user.role);
//             const { _id, firstName, lastName, email, role, fullName } = user;
//             return res.status(200).json({
//                 token,
//                 user: { _id, firstName, lastName, email, role, fullName },
//             });
//         } else {
//             return res.status(400).json({
//                 message: "Invalid credentials",
//             });
//         }
//     } catch (error) {
//         console.log(error)
//         // return res.status(400).json({
//         //     message: "Something went wrong",
//         // });
//     }
// };


export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare the entered password with the stored password
        if (password === user.password && user.role === "user") {
            const token = generateJwtToken(user._id, user.role);
            const { _id, firstName, lastName, email, role, fullName } = user;
            return res.status(200).json({
                token,
                user: { _id, firstName, lastName, email, role, fullName },
            });
        } else {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
};


export const signout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "Signout successfully...!",
    });
};