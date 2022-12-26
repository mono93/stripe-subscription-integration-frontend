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
    product_price_id: string;
}

export interface ISubscriptionDetails {
    customer_id: string
    product_id: string
    subscription_id: string
}

