import api from "./api";

export async function searchProducts(searchTerm, page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit; // Calculando o offset com base na página atual
    try {
        const response = await api.get('/buscar-termo', {
            params: { query: searchTerm, offset, limit }
        })
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        throw error; // Relançar o erro para tratá-lo no componente
    }

}