const PostitRouter = require("express").Router();
const PostitController = require("../controllers/postit.controller");

PostitRouter.route("/")
  .get(PostitController.getAllPostits)
  .post(PostitController.createPostit);
PostitRouter.route("/:id")
  .get(PostitController.getPostit)
  .patch(PostitController.updatePostit)
  .delete(PostitController.deletePostit);

module.exports = PostitRouter;
