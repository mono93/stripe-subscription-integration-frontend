import { useEffect } from "react";
import { ProductService } from "../services/product.service";

const ProductList = () => {

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const res: any = await new ProductService().showProduct();
            console.log(res.productDetails)
            // const products = res.productDetails
        } catch (error) {

        }
    }

    return (
        <h1> product list component </h1>
    )

}

export default ProductList