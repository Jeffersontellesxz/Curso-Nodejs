module.exports = () => {
  // Get Noticias
  this.getNoticias = (connection, callback) => {
    connection.query("select * from noticias", callback);
  };

  // Get Noticia
  this.getNoticia = (connection, callback) => {
    connection.query("select * from noticias where id_noticias = 2", callback);
  };
  return this;
};
