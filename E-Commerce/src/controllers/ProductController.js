const ProductService = require('../services/ProductService');

const getListProduct = async (req, resp) => {
    try {

        const response = await ProductService.getListProduct(req.body);
        return resp.status(200).json(response);
    }
    catch (e) {
        console.log(e);
        return resp.status(404).json({
            message: e,
        });
    }
}
module.exports = {
    getListProduct
};
