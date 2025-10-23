"use client";
import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { fetchProducts } from './services/client/products';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);
  useEffect(() => {
    fetchProducts().then(data => setProducts(data))
  }, []);

  return (
    <main>
      <div className="grid">
        {products.map((item) => (
          <Card
            key={item._id}
            image={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </main>
  );
}
