import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECERET, {
        expiresIn: "7d",
    });

    res.cookie("token", token, {
        httpOnly: true, // cookie cannot be accessed by client sidejs || only accessible by server || prevent attack like xss
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", // prevent attack csrf
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return token;
}