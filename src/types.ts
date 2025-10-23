export interface Product{
  _id: string;
  title: string;
  description: string;
  price: number;
  inv: {
    [location: string]: number;
  };
  img: string;
}

