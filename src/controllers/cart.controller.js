import { cartsService } from "../dao/services/cart.service.js"



export async function getCartById(req, res) {
	const cartId = req.params.cid;
	const result = await cartsService.getCartById(cartId);
	return res.send({ status: "Success", result });
};

  export async function addCart(req, res) {
	const result = await cartsService.addCart();
	return res.send({ status: "Success", result });
}

export async function getCarts(req, res) {
	const result = await cartsService.getCarts();
	return res.send({ status: "Success", result });
}


export async function addProduct(req, res) {
	const product = req.body;
	const files = req.files.splice(0, 4);

	if (!product) {
		return res.status(400).send({
			status: "Error",
			error: "Error, the product could no be added",
		});
	}

	const result = await productsService.addProduct(product, files);
	const response = {
		ok: true,
		status: "Added",
		message: "Product added",
		result,
	};
	return res.send(response);
}