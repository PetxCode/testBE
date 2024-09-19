import { Request, Response } from "express";
import csv from "csvtojson";
import { streamUpload } from "./streamifier";
import cloudinary from "./cloudinary";
import userModel from "./model";

export const bulkPost = async (req: any, res: Response) => {
  try {
    const data = await csv().fromFile(req.file.path);

    for (let i of data) {
      // console.log(i);

      await userModel.create({ ...i, grade: "Awesome" });
    }

    // const createData = await userModel.insertMany(data);

    res.status(201).json({
      message: "Done",
      // read: createData,
    });
  } catch (error: any) {
    res.status(404).send(error.message);
  }
};

export const bulkRead = async (req: any, res: Response) => {
  try {
    const data = await userModel.find();
    res.status(201).json({
      message: "Done",
      data,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
