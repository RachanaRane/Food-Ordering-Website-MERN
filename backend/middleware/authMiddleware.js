import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || authHeader.startWith('Bearer')) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        console.error("Token verification error:",e.message);
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

export {auth};
