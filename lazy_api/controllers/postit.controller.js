const sequelize = require("../config/db");

const PostitController = {
  getPostit: async (req, res) => {
    try {
      const postit = await sequelize.models.Postit.findByPk(req.params.id);

      if (!postit) {
        res.status(404).json({
          success: false,
          message: `Postit not found with id of ${req.params.id}`,
        });
      }
      res.status(200).json({ success: true, data: postit });
    } catch (error) {
      res.status(404).json({ success: true, message: error.message });
    }
  },
  getAllPostits: async (req, res) => {
    try {
      const postits = await sequelize.models.Postit.findAll();
      res.status(200).json({ success: true, data: postits });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  },
  createPostit: async (req, res) => {
    try {
      const postit = await sequelize.models.Postit.create(req.body);
      res.status(200).json({ success: true, data: postit });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },
  deletePostit: async (req, res) => {
    try {
      const deletedPostit = await sequelize.models.Postit.destroy({
        where: { id: req.params.id },
      });

      if (!deletedPostit) {
        res.status(404).json({
          success: false,
          message: `Postit not found with id of ${req.params.id}`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Postit with id of ${req.params.id} was deleted!`,
        });
      }
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },
  updatePostit: async (req, res) => {
    try {
      const updatedPostit = await sequelize.models.Postit.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ success: true, data: updatedPostit[0] });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  },
};

module.exports = PostitController;
