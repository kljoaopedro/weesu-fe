import api from "./api";

export async function searchProducts(searchTerm) {
    try {
        const response = await api.get('/buscar-termo', {
            params: { query: searchTerm }
        })
        console.log(response);
    } catch (error) {

    }

}