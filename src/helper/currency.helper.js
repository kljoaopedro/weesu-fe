export function formatCurrency(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 5
    });
    return formatter.format(value);
}

export function calculateDiscountAndFormatCurrency(valueA = 0, valueB) {
    const maxValue = Math.max(valueA, valueB);
    const minValue = Math.min(valueA, valueB);

    // Calcular a diferença percentual
    const discountPercentage = ((maxValue - minValue) / maxValue) * 100;


    return {
        discount: discountPercentage.toFixed(2) + '%'
    };
}