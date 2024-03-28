import express from "express";
import authRouter from "../routes/authRoutes.js";
import userRouter from "../routes/userRoutes.js";
import doctorRouter from "../routes/doctorRoutes.js";
import reviewRouter from "../routes/reviewRoutes.js";
import notificationRouter from "../routes/notificationRoute.js";
import bookingRouter from "../routes/bookingRoutes.js";

export const mountedRoutes = function (app) {
  app.use(express.json());
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/doctors", doctorRouter);
  app.use("/api/v1/reviews", reviewRouter);
  app.use("/api/v1/notifications", notificationRouter);
  app.use("/api/v1/bookings", bookingRouter);
};
