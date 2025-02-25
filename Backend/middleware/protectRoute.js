import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if (!token) {
            return res.status(401).json({error: "Unauthorized - No token provided"})
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);

        if (!decode) {
            return res.status(401).json({error: "Unauthorized - Invalid token"})
        }

        const user = await User.findById(decode.userId).select("-password")

        if (!user) {
            return res.status(401).json({error: "User not found"})
        }
        req.user = user;
        next();
    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export default protectRoute