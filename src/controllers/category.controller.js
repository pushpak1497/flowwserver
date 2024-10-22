import { Category } from "../models/category.model.js";

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Invalid category data" });
  }
};
