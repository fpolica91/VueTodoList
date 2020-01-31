import Admin from "../models/grill.provider";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AdminController {
  async store(req, res) {
    const { email, password, delivery, latitude, longitude } = req.body;
    const takenEmail = await Admin.findOne({ email });
    if (takenEmail) return res.json({ error: "email taken" });

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const admin = await Admin.create({
      email,
      password: bcrypt.hashSync(password, 10),
      delivery,
      location
    });
    const token = await jwt.sign({ id: admin.id }, "CheesireCat", {
      expiresIn: "7d"
    });

    return res.json({
      admin,
      token: token
    });
  }
}

export default new AdminController();
