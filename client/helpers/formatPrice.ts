export function formatPrice(price: number): string {
    if(isNaN(price)){
        throw new Error('Parameter is not a number!');
    }
    return (price/100).toFixed(2)
}