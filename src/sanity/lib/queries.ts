import { defineQuery } from "next-sanity";





export const allfoods = defineQuery(`
    *[_type == food]{
    _id,
    name,
    description,
    price,
    discountpercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    tag,
    category,
    "imageUrl" : image.asset->url
    }
    `)


    export const allchefs = defineQuery(`
        *[_type == chef]{
        _id,
        name,
        description,
        position,
        experience,
        pecialization,
        introduction,
        category,
        "imageUrl" : image.asset->url
        }
        `)