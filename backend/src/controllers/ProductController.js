const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const {
            page = 1,
        } = req.query;

        const products = await Product.paginate({}, {
            page,
            limit: 10,
        });
        // const products = await Product.findAll();

        return res.json(products);
    },

    async show(req, res) {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(400).json({ error: 'Product not found' });
        }
        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res) {
        const { title, description, url } = req.body;
        const { id } = req.params;
        const product = await Product.update(
            {
                title,
                description,
                url,
            },
            {
                returning: true,
                where: {
                    id,
                },
            },
        );

        if (!product) {
            return res.status(400).json({ error: 'Product not found' });
        }

        return res.json(product);
    },

    async destroy(req, res) {
        const { id } = req.params;
        const product = await Product.destroy({
            where: {
                id,
            },
        });

        if (!product) {
            return res.status(400).json({ error: 'Product not found' });
        }
        return res.status(200).send('Produto deletado');
    },
};