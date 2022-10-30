import axiosServices from "../sharedServices/axios.services";

export class ProductService {
    public showProduct = async () => {
        return axiosServices.get('products/showProducts')
    }
}