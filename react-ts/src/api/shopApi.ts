import rest from "../core/lib/axios";

const shopApi = {
    async getProducts() {
        const response = await rest.get('/api/v1/products');
        return response;
    },
    async getProductDetail(id: number) {
        const response = await rest.get(`/api/v1/products/${id}`);
        return response;
    }
}