import { PostModel } from "../models/PostModel.js";

export const getPosts = async (request, response) => {
  try {
    const posts = await PostModel.find();
    console.log("We got em", posts);
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json({ error: error });
  }
};

export const createPost = async (request, response) => {
  try {
    const newPost = request.body;

    const post = new PostModel(newPost);

    await post.save();

    response.status(200).json(post);
  } catch (error) {
    response.status(500).json({ error: error });
  }
};

export const updatePost = async (request, response) => {
  try {
    const updatePost = request.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );

    response.status(200).json(post);
  } catch (error) {
    response.status(500).json({ error: error });
  }
};
