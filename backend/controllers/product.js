const ReasonPhrases = require('http-status-codes').ReasonPhrases;
const StatusCodes = require('http-status-codes').StatusCodes;
const Product = require('../models/product');

// Handle index actions
exports.index = function (req, res) {
    if (req.user && req.user.type === 'PRODUCER') {
        Product.find({seller_id: req.user._id}, function (err, products) {
            if (err) {
                console.log(err);
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                });
            } else {
                res.status(StatusCodes.OK).json(products.map(product => product.toJSON()));
            }
        });
    } else {
        Product.find(function (err, products) {
            if (err) {
                console.log(err);
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                });
            } else {
                res.status(StatusCodes.OK).json(products.map(product => product.toJSON()));
            }
        });
    }
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
                seller_id: req.user._id,
                quantity: req.body.quantity,
                image: req.body.image,
                price: {
                    amount_in_euros: req.body.price.amount_in_euros,
                    metric: req.body.price.metric
                },
                type: req.body.type,
                weight_in_g: req.body.weight_in_g,
                sustainability_score: {
                    score: calculateSustainabilityScore(req.body),
                    packaging: req.body.sustainability_score.packaging,
                    transportation_type: req.body.sustainability_score.transportation_type,
                    organic: req.body.sustainability_score.organic,
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
        if (err || !product) {
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
        if (err || !product) {
            console.log(err);
            res.status(StatusCodes.NOT_FOUND).json({
                message: ReasonPhrases.NOT_FOUND,
            });
        } else {
            if (req.user._id !== product.seller_id.toString()) {
                res.status(StatusCodes.FORBIDDEN).json({
                    message: ReasonPhrases.FORBIDDEN,
                });
            } else {
                product.name = req.body.name ? req.body.name : product.name;
                product.quantity = req.body.quantity ? req.body.quantity : product.quantity;
                product.image = req.body.image ? req.body.image : product.image;
                product.price.amount_in_euros = req.body.price.amount_in_euros ? req.body.price.amount_in_euros : product.price.amount_in_euros;
                product.price.metric = req.body.price.metric ? req.body.price.metric : product.price.metric;
                product.description = req.body.description ? req.body.description : product.description;
                product.sustainability_score.packaging = req.body.sustainability_score.packaging ? req.body.sustainability_score.packaging : product.sustainability_score.packaging;
                product.sustainability_score.transportation_type = req.body.sustainability_score.transportation_type ? req.body.sustainability_score.transportation_type : product.sustainability_score.transportation_type;
                product.sustainability_score.organic = req.body.sustainability_score.organic ? req.body.sustainability_score.organic : product.sustainability_score.organic;
                product.sustainability_score.score = calculateSustainabilityScore(product);

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
        }
    });
};

// Handle delete product
exports.delete = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err || !product) {
            console.log(err);
            res.status(StatusCodes.OK).send();
        } else {
            if (req.user._id !== product.seller_id.toString()) {
                res.status(StatusCodes.FORBIDDEN).json({
                    message: ReasonPhrases.FORBIDDEN,
                });
            } else {
                Product.deleteOne({_id: req.params.product_id}, function () {
                    res.status(StatusCodes.OK).send();
                });
            }
        }
    });
};

// ------------------- UTILITY -------------------
const calculateSustainabilityScore = (product) => {
    let score = 0;

    // Packaging
    const packagingTypes = Product.schema.path('sustainability_score.packaging').enumValues;

    for (let i = 0; i < packagingTypes.length; i++) {
        if (product.sustainability_score.packaging === packagingTypes[i]) {
            score += 12 - i * packagingTypes.length;
        }
    }

    // Transportation type
    const transportationTypes = Product.schema.path('sustainability_score.transportation_type').enumValues;

    if (product.sustainability_score.transportation_type === transportationTypes[0]) {
        score += 30;
    } else if (product.sustainability_score.transportation_type === transportationTypes[1]) {
        score += 30;
    } else if (product.sustainability_score.transportation_type === transportationTypes[2]) {
        score += 0;
    }

    // Organic
    if (product.sustainability_score.organic) {
        score += 18;
    }

    return score / 12;
}
