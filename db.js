import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.DB_URI}/user`
    );
    console.log(connectionDB.connection.host );
  } catch (error) {
    console.log("ERROR DB CONNECTION:", error);
    process.exit(1);
  }
};
export {connectDB}