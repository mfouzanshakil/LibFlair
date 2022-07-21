import { response } from "express";
import libraryApplicationModel from "../models/libraryApplication.js";

export const getUser = async (req, res) => {
  try {
    const libraryUsers = await       libraryApplicationModel.find();
    res.json(libraryUsers);
  } catch (error) {
    console.log("Data not found.");
  }
};

export const createUser = async (req, res) => {
  //   const result = req.body;
  //   console.log(result);
  const userName = req.body.userName;
  const userNameInStringFormat = userName.toString();

  const password = req.body.password;
  const passwordInString = password.toString();

  const newUser = new libraryApplicationModel({
    userName: userNameInStringFormat,
    password: passwordInString,
  });

  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.log("Data not saved.");
  }
};
