const dbConnection = require("../../config/dbConnection");

module.exports = app => {
  app.get("/noticia", (req, res) => {
    const connection = app.config.dbConnection();
    const noticiasModel = app.app.models.noticiasModel;

    // Recuperando dados em NoticiasModal
    noticiasModel.getNoticia(connection, (error, result) => {
      res.render("noticias/noticia", { noticia: result });
    });
  });
};
