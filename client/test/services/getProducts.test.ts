import { setupServer } from 'msw/node'
import { graphql } from 'msw'
import { getProducts } from '../../services/getProducts'
import { productDataMock } from '../productData.mock'

const server = setupServer(
    graphql.query("getProducts", (req, res, ctx) => {
        return res(
            ctx.data({
                "allProducts": [
                    {
                      "id": "1",
                      "name": "Energy saving light bulb",
                      "power": "25W",
                      "description": "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
                      "price": 1299,
                      "quantity": 4,
                      "brand": "Philips",
                      "weight": 77,
                      "height": 12.6,
                      "width": 6.2,
                      "length": 6.2,
                      "model_code": "E27 ES",
                      "colour": "Cool daylight",
                      "img_url": "https://i.ibb.co/2nzwxnQ/bulb.png"
                    }
                  ]
            })
        )
    })
)

beforeAll(() => {
    server.listen()
})

afterEach(() => {
    server.resetHandlers()
})

afterAll(() => {
    server.close()
})

describe("The getProducts service", () => {
    it('Should return product data', async () => {
        const res = await getProducts();

        expect(res.data.allProducts[0]).toEqual(productDataMock);
    })

    it('Should throw an error if the api call fails', () => {
        server.use(graphql.query("getProducts", (req, res, ctx) => {
                return res(
                    ctx.status(400)
                )
            }
        ))

        expect(() => getProducts()).rejects.toThrowError();
    })
})
