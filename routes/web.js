const homeController = require("../app/http/controllers/homeController");
const aboutController = require("../app/http/controllers/aboutController");
const portfolioController = require("../app/http/controllers/portfolioController");
const contactController = require("../app/http/controllers/contactController");
const shopController = require("../app/http/controllers/shopController");

function initRoutes(app) {
  // Get Home Page would render the index function in homeController
  app.get("/", homeController().index);

  // Get About us Page
  app.get("/about", aboutController().index);

  // Get Portfolio Page
  app.get("/portfolio", portfolioController().index);

  // Get Contact Page
  app.get("/contact", contactController().index);

  // Get Shop now Page
  app.get("/shop", shopController().index);
  
}

module.exports = initRoutes;
