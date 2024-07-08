import User from "../models/user.model.js";
import { errorHandler } from "../utils/Error.js";
import bcrypts from "bcryptjs";
export const test = (req, res) => {
  res.json({ message: "Api is working in a good way" });
};

export const updateUser = async (req, res, next) => {
  //  now we will check if the id will match or the
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(400, "you are not allowed to do that"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "password must be atleast 6 letters"));
    }
    req.body.password = bcrypts.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "username must not contain spaces."));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, "username must be in lowercase."));
    }
  }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
          },
        },
        { new: true }
      );

      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }

