export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  sizes?: string[];
  unit?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: string;
  quantity: number;
  size?: string;
  imageUrl: string;
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  joinedDate: string;
}

export interface Farm {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  location: {
    address: string;
    city: string;
    state: string;
  };
  products: Product[];
  rating: number;
  reviews: Review[];
  distance: number;
  host: Host;
  farmingApproach: {
    type: 'regenerative' | 'permaculture' | 'organic' | 'conventional';
    description: string;
  };
  gallery: string[];
}