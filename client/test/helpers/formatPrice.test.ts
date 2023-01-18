import { formatPrice } from "../../helpers/formatPrice";

describe('The formatPrice function', () => {
    it('Should convert a given number to two decimal places',  () => {
        const formattedPrice = formatPrice(1299);

        expect(formattedPrice).toBe('12.99');
    })
})