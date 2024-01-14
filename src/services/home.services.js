import api from "./api";

export async function searchProducts(searchTerm) {
    try {
        const response = await api.get('/buscar-termo', {
            params: { query: searchTerm }
        })
        return response.data;
    } catch (error) {

    }

}