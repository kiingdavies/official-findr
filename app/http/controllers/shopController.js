function shopController() {
    return {
      index(req, res) {
        res.render("shop");
      },
    };
  }
  
  module.exports = shopController;
  