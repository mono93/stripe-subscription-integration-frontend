export interface IProductResponse {
    message: string;
    productDetails: IProductDetails[];
    subscriptionDetails: ISubscriptionDetails[] | null;
}

export interface IProductDetails {
    product_id: string;
    product_name: string;
    product_description: string;
    product_price: number;
    product_is_active: boolean;
    product_frequency: string;
}

interface ISubscriptionDetails {

}
