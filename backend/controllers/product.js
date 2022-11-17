const ReasonPhrases = require('http-status-codes').ReasonPhrases;
const StatusCodes = require('http-status-codes').StatusCodes;
const Product = require('../models/product');

// Handle index actions
exports.index = function (req, res) {
  Product.find(function (err, products) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    } else {
      res.status(StatusCodes.OK).json(products.map(product => {
        return product;
      }));
    }
  });
};

// Handle create product actions
exports.new = function (req, res) {
  if (req.user.type !== 'PRODUCER') {
    res.status(StatusCodes.FORBIDDEN).json({
      message: ReasonPhrases.FORBIDDEN,
    });
  } else {
    const product = new Product(
        {
          name: req.body.name,
          seller_id: req.body.seller_id,
          quantity: req.body.quantity,
          price: {
            amount_in_euros: req.body.price.amount_in_euros,
            metric: req.body.price.metric
          },
          type: req.body.type,
          weight_in_g: req.body.weight_in_g,
          sustainability_score: {
            packaging: req.body.sustainability_score.packaging,
            transportation_type: req.body.sustainability_score.transportation_type
          },
          nutrition_per_100g: {
            energy: req.body.nutrition_per_100g.energy,
            fat: {
              total: req.body.nutrition_per_100g.fat.total,
              saturates: req.body.nutrition_per_100g.fat.saturates
            },
            carbohydrate: {
              total: req.body.nutrition_per_100g.carbohydrate.total,
              sugar: req.body.nutrition_per_100g.carbohydrate.sugar
            },
            protein: req.body.nutrition_per_100g.protein,
            salt: req.body.nutrition_per_100g.salt
          },
          description: req.body.description
        }
    );

    product.save(function (err, product) {
      if (err) {
        console.log(err);
        res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
        });
      } else {
        res.status(StatusCodes.CREATED).json(product.toJSON());
      }
    });
  }
};

// Handle view product info
exports.view = function (req, res) {
  Product.findById(req.params.product_id, function (err, product) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
      });
    } else {
      res.status(StatusCodes.OK).json(product.toJSON());
    }
  });
};

// Handle update product info
exports.update = function (req, res) {
  Product.findById(req.params.product_id, function (err, product) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
      });
    } else {
      product.name = req.body.name ? req.body.name : product.name;
      product.quantity = req.body.quantity ? req.body.quantity : product.quantity;
      product.price.amount_in_euros = req.body.price.amount_in_euros ? req.body.price.amount_in_euros : product.price.amount_in_euros;
      product.price.metric = req.body.price.metric ? req.body.price.metric : product.price.metric;
      product.description = req.body.description ? req.body.description : product.description;

      product.save(function (err, product) {
        if (err) {
          console.log(err);
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          });
        } else {
          res.status(StatusCodes.OK).json(product.toJSON());
        }
      });
    }
  });
};

// Handle delete product
exports.delete = function (req, res) {
  Product.deleteOne({_id: req.params.product_id}, function (err) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
      });
    } else {
      res.status(StatusCodes.OK).send();
    }
  });
};
