const { Product } = require("../models/index");

const createProduct = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const newProduct = await Product.create({
            name,
            price,
            stock
        });

        res.status(200).json({
            status: "success",
            data: {
                newProduct,
            },
        });
    } catch (err) {
        req.status(400).json({
            status: "failed",
            mesagge: err.mesagge
        });
    }
};

const findProduct = async (req, res) => {
    try {
        const newProduct = await Product.findAll();

        res.status(200).json({
            status: "success",
            data: {
                newProduct,
            },
        });
    } catch (err) {
        req.status(400).json({
            status: "failed",
            mesagge: err.mesagge
        });
    }
};

const findProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id,
            }
        });

        res.status(200).json({
            status: "success",
            data: {
                product,
            },
        });
    } catch (err) {
        req.status(400).json({
            status: "failed",
            mesagge: err.mesagge
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.update({
            name,
            stock,
            price,
            where: {
                id: req.params.id,
            }
        });

        res.status(200).json({
            status: "success",
            data: {
                product,
            },
        });
    } catch (err) {
        req.status(400).json({
            status: "failed",
            mesagge: err.mesagge
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.destroy({
            where: {
                id: req.params.id,
            }
        });

        res.status(200).json({
            status: "success",
            data: {
                product,
            },
        });
    } catch (err) {
        req.status(400).json({
            status: "failed",
            mesagge: err.mesagge
        });
    }
};

module.exports = {
    createProduct,
    findProduct,
    findProductById,
    updateProduct,
    deleteProduct
};