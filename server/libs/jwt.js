import jwt from "jsonwebtoken";

export const createSendToken = (res, status, user) => {
  const { JWT_EXP, JWT_SECRET, COOKIE_EXP } = process.env;

  //! Sign jwt token
  const jwtToken = jwt.sign({ id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXP,
  });

  //! Set cookie option
  const cookieOptions = {
    expires: new Date(Date.now() + COOKIE_EXP * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  //! Send token using cookie
  res.cookie("jwtToken", jwtToken, cookieOptions);

  user.password = undefined;

  res.status(status).json({ success: true, status, user });
};
