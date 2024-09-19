import { Document, model, Schema } from "mongoose";

interface iProps {
  studentName: string;
  studentLocation: string;
  studentClass: string;
}

interface iPropsData extends iProps, Document {}

const userModel = new Schema(
  {
    StudentName: {
      type: String,
      //   required: true,
    },
    studentLocation: {
      type: String,
      //   required: true,
    },
    studentClass: {
      type: String,
      //   required: true,
    },

    grade: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("users", userModel);
