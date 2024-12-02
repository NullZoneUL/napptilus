declare interface Favorite {
  color: string;
  food: string;
  random_string: string;
  song: string;
}

declare interface Item {
  first_name: string;
  last_name: string;
  favorite: Favorite;
  gender: 'F' | 'M';
  image: string;
  profession: string;
  email: string;
  age: number;
  country: string;
  height: number;
  id: number;
}

declare interface DetailItem extends Item {
  quota: string;
  lastFetched: number;
}

declare interface ItemListRoot {
  current: number;
  total: number;
  results: Item[];
  lastFetched: number;
}
