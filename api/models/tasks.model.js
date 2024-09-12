import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["to-do", "done"],
      default: "to-do",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
