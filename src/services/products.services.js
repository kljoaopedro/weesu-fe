import api from "./api";

export async function searchProductsService(searchTerm, page = 1) {
    const limit = 3;
    const offset = (page - 1) * limit; // Calculando o offset com base na página atual
    try {
        const response = await api.get('/search-product', {
            params: {query: searchTerm, offset, limit}
        })
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        throw error; // Relançar o erro para tratá-lo no componente
    }
}

    export async function getDetailsService(itemId) {
        try {
            const response = await api.get(`/get-details${itemId}`)
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }

    }
