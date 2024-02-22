import { HttpError } from "../helpers/HttpError";
import { ctrlWrapper } from "../helpers/ctrlWrapper";
import User from "../models/User";

// READ
const getUser = ctrlWrapper(async (req, res) => {
  const {id} = req.params;
  const user = await User.findById(id);
  if (user === null){
    throw HttpError(404);
  }
  res.status(200).json(user);
});

const getUserFriends = ctrlWrapper(async (req, res) => {
const {id} = req.params;
const user = await User.findById(id);
if (user === null){
  throw HttpError(404);
}
const friends = await Promise.all(
  user.friends.map((id) => User.findById(id))
);
if (user.friends.length === 0){
  throw HttpError(404);
}
const formattedFriends = friends.map(
  ({_id, firstName, lastName, occupation, location, picturePath}) => {
    return {_id, firstName, lastName, occupation, location, picturePath};
  }
);
res.status(200).json(formattedFriends);
})

export {getUser, getUserFriends};