import { fetchPoducts } from "@/app/services/server/products";
export async function GET() {
  const products = await fetchPoducts();
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}