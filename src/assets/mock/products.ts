import monitor from '~/assets/images/monitor.png';

type Installments = {
  quantity: number;
  price: number;
  hasFees: boolean;
};

type Status = {
  onWishList: boolean;
  onMinicart: boolean;
};

type Product = {
  image: string;
  title: string;
  fullPrice: number;
  price: number;
  installments: Installments;
  status: Status;
};

export type { Installments, Product, Status };

const product1: Product = {
  image: monitor,
  title:
    'Monitor LED 27" Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
  fullPrice: 2813.99,
  price: 2599.0,
  installments: {
    quantity: 10,
    price: 259.9,
    hasFees: false,
  },
  status: {
    onWishList: false,
    onMinicart: false,
  },
};

export const products: Product[] = [
  product1,
  product1,
  product1,
  product1,
  product1,
  product1,
  product1,
  product1,
];
