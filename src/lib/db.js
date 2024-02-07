const {username, password} = process.env;
export const connectionSrt = "mongodb+srv://"+username+":"+password+"@cluster0.mhybt84.mongodb.net/productDB?retryWrites=true&w=majority"