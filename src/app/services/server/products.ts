import { client } from '@/app/services/server/mongo';

export async function fetchPoducts() {
    const res = client.db("hadasimShop").collection("products");
    const products = await res.find({}).toArray();
    return products;
}
