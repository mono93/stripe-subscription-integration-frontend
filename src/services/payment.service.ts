import axiosServices from "../sharedServices/axios.services";

export class PaymentService {
    public createSubscription = async (payload: any) => {
        return axiosServices.post('subscription/createSubscription', payload)
    }
}