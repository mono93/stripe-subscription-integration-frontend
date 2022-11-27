import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IProductDetails } from "../models";
import { ProductService } from "../services/product.service";

const Duration = {
    daily: 'Daily',
    monthly: 'Monthly',
    yearly: 'Yearly'
}


const ProductList = () => {

    const navigate = useNavigate();
    const [productList, setProductList] = useState<IProductDetails[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const res: any = await new ProductService().showProduct();
            setProductList([...res.productDetails])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="productListWrapper">
            <div className="tableWrapper">
                <table>
                    <thead>
                        <tr>
                            <th className="col1">Product Name</th>
                            <th className="col2">Description</th>
                            <th className="col3">Duration</th>
                            <th className="col4">Price</th>
                            <th className="col5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList && productList.map((ele: IProductDetails, index: number) => (
                            <tr key={index}>
                                <td className="col1">{ele.product_name}</td>
                                <td className="col2">{ele.product_description}</td>
                                <td className="col3">{Duration[ele.product_frequency as keyof typeof Duration]}</td>
                                <td className="col4">{ele.product_price}</td>
                                <td className="col5"><a className="purchaseClass" onClick={() => navigate('/payment', { state: { data: ele } })}> Buy Now </a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )

}

export default ProductList