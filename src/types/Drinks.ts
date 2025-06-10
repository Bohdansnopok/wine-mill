export interface Drink {
  id: string;
  category: string;
  name: string;
  year: number;
  litres: number;
  country: string;
  city: string;
  price: number;
  description: string;
  image: string;
}

// удобная константа для категорий (удобнее длдя меня)
export const DRINK_CATEGORIES = {
  WINE: "вино",
  WHISKEY: "виски",
  COGNAC: "коньяк",
  VODKA: "водка",
  ARMAGNAC: "арманьяк",
  RUM: "ром",
  LIQUOR: "ликер",
  COCKTAILS: "коктейли",
  DELICACIES: "деликатесы",
}