import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, resp) => {
  try {
    const postMessage = await PostMessage.find();
    resp.status(200).json(postMessage);
  } catch (error) {
    resp.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, resp) => {
  const body = req.body;
  const newPost = new PostMessage(body);
  try {
    await newPost.save();
    resp.status(201).json(newPost);
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
};
