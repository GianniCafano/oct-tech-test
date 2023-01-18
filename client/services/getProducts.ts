import { gql } from "@apollo/client";
import client from "./apollo-client";
import { TProduct } from "../types/product.types";
import { DocumentNode } from "graphql";


type TQueryProductFilter = {
    q: string
    strings: string[]
    string: string
    name: string
    power: string
    description: string
    price: number
    quantity: number
    brand: string
    weight: number
    height: number
    wstringth: number
    length: number
    model_code: string
    colour: string
    img_url: string
    string_neq: string
    name_neq: string
    power_neq: string
    description_neq: string
    price_lt: number
    price_lte: number
    price_gt: number
    price_gte: number
    price_neq: number
    quantity_lt: number
    quantity_lte: number
    quantity_gt: number
    quantity_gte: number
    quantity_neq: number
    brand_neq: string
    weight_lt: number
    weight_lte: number
    weight_gt: number
    weight_gte: number
    weight_neq: number
    height_lt: number
    height_lte: number
    height_gt: number
    height_gte: number
    height_neq: number
    wstringth_lt: number
    wstringth_lte: number
    wstringth_gt: number
    wstringth_gte: number
    wstringth_neq: number
    length_lt: number
    length_lte: number
    length_gt: number
    length_gte: number
    length_neq: number
    model_code_neq: string
    colour_neq: string
    img_url_neq: string
}

type TQueryResponse = {
    allProducts: TProduct[]
}

type TQueryOptions = {
    page?: number
    perPage?: number
    sortField?: string
    sortOrder?: string
    productFilter?: TQueryProductFilter
}

export const GET_PRODUCTS =
    gql`
          query getProducts {
            allProducts {
              id
              name
              power
              description
              price
              quantity
              brand
              weight
              height
              width
              length
              model_code
              colour
              img_url
            }
          }
        `


export async function getProducts() {
    
    return await client.query<TQueryResponse, TQueryOptions>({
        query: GET_PRODUCTS as DocumentNode,
        variables: {}
    });
}

