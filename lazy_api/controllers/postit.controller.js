const sequelize = require("../config/db");

const PostitController = {
  getPostit: async (req, res) => {
    try {
      const postit = await sequelize.models.Postit.findOne({
        where: {
          title: req.params.id,
        },
      });

      if (!postit) {
        res
          .status(404)
          .json({ success: false, message: "O Postit-it não foi encontrado!" });
      } else {
        res.status(200).json({ success: true, data: postit });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "O servidor quebrou" });
    }
  },
  getAllPostits: async (req, res) => {
    try {
      const postits = await sequelize.models.Postit.findAll();
      res.status(200).json({ success: true, data: postits });
    } catch (error) {
      res.status(500).json({ success: false, message: "O servidor quebrou" });
    }
  },
  createPostit: async (req, res) => {
    try {
      const postit = await sequelize.models.Postit.create(req.body);
      res.status(200).json({
        success: true,
        message: "Postit-it criado com sucesso.",
        data: postit,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Erro! Insira valores válidos.",
      });
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
          message: "Erro! Postit-it não encontrado!",
        });
      } else {
        res.status(200).json({
          success: true,
          message: `O Postit-it foi deletado!`,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erro! O servidor quebrou",
      });
    }
  },
  updatePostit: async (req, res) => {
    try {
      const updatedPostit = await sequelize.models.Postit.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (!updatedPostit) {
        res.status(404).json({
          success: true,
          data: updatedPostit[0],
          message: "Erro! Postit-it não encontrado!",
        });
      } else {
        res.status(200).json({
          success: true,
          data: updatedPostit[0],
          message: "O Postit-it foi atualizado!",
        });
      }
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "Erro! O Postit-it não foi atualizado!",
      });
    }
  },
};

module.exports = PostitController;
