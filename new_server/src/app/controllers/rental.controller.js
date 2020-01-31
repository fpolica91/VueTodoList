import Admin from "../models/grill.provider";
import Rental from "../models/order.model";

class RentalController {
  async store(req, res) {
    const admin = await Admin.findById(req.userId);
    const {
      rate,
      chairs,
      tables,
      turfs,
      totalChairs,
      totalTables,
      deliveryCost,
      totalTurfs
    } = req.body;

    const chair =
      chairs && totalChairs ? { price: chairs, available: totalChairs } : null;
    const table =
      tables && totalTables ? { price: tables, available: totalTables } : null;
    const turf =
      turfs && totalTurfs ? { price: turfs, available: totalTurfs } : null;

    const addOns = {
      chair,
      table,
      turf
    };

    const rental = await Rental.create({
      admin,
      grill: { rate, available: true },
      addOns,
      deliveryCost
    });

    return res.json(rental);
  }
}

export default new RentalController();
