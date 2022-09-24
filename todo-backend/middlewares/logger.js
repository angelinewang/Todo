export default function logger(req, res, next) {
    console.log(`${Date()} Request recieved on: ${req.path}`);
    next();
  }
  