export interface IBillingDetails {
    billing_address_line1: string;
    billing_address_line2: string;
    billing_address_city: string;
    billing_address_state: string;
    billing_address_zip: number;
}

export interface ICardError {
    status: boolean;
    message: string;
}