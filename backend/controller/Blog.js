const express = require("express");
const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {
  try {
    const { title, blog, tags } = req.body;
    const _blog = await Blog.create({
      author: req.user._id,
      title,
      description: blog,
      tags,
    });
    console.log("hey mahi");

    req.user.blogs.push(_blog._id);
    req.user.save();

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.readBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        error: "Blog not found",
      });
    }

    if (!req.user.blogs.includes(id)) {
      return res.status(400).json({
        success: false,
        error: "You cannot delete this blog",
      });
    }

    const index = req.user.blogs.indexOf(id);
    req.user.blogs.splice(index, 1);
    req.user.save();

    await Blog.deleteOne(blog._id);

    return res.status(200).json({
      success: true,
      message: "Blog deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().limit(10).populate("author");

    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.searchAblog = async (req, res) => {
  try {
    console.log("search Me");
    let blog = await Blog.find({
      title: { $regex: `.*${req.body.search}.*`, $options: "i" },
    });
    const blog2 = await Blog.find({
      tags: { $regex: `.*${req.body.search}.*`, $options: "i" },
    });
    console.log(blog);
    console.log(blog2);

    const combinedResults = [...new Set([...blog, ...blog2])];

    res.status(200).json({
      success: true,
      blog: combinedResults,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
