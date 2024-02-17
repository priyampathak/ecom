import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      first_name: String,
      last_name: String,
      email: String,
      password: String
});

let User;

try {
  // Check if the model exists
  User = mongoose.model("auths");
} catch (error) {
  // If the model doesn't exist, create it
  User = mongoose.model("auths", userSchema);
}

export { User };