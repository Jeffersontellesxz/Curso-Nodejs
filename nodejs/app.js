const app = require("./config/server");

// // Route Home
// const routeHome = require("./app/routes/home");
// routeHome(app);

// //  Route Formulario Noticias
// const routeFormularioNoticias = require("./app/routes/formulario_inclusao_noticias");
// routeFormularioNoticias(app);

// //  Route Noticias
// const routeNoticias = require("./app/routes/noticias");
// routeNoticias(app);

// Criando a porta do servidor
const port = process.connected.port || 3000;

// Carregar servidor na porta 3000
app.listen(port, () => {
  console.log(`Conectando servidor na porta ${port}`);
});
