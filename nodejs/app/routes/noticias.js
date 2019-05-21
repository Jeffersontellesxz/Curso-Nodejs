const dbConnection = require("../../config/dbConnection");

module.exports = app => {
  app.get("/noticias", (req, res) => {
    const connection = app.config.dbConnection();
    const noticiasModel = app.app.models.noticiasModel;

    // Recuperando dados em NoticiasModal
    noticiasModel.getNoticias(connection, (error, result) => {
      res.render("noticias/noticias", { noticias: result });
    });
  });
};
