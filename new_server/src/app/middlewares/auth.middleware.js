import { promisify } from "util";
import jwt from "jsonwebtoken";

// THIS IS THE MIDDLWARE
export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.json({ err: "no token provided" });
  const [, token] = authHeader.split(" ");
  try {
    const decoded = await promisify(jwt.verify)(token, "CheesireCat");
    req.userId = decoded.id;
    return next();
  } catch (err) {
    res.json({ err });
  }
};
