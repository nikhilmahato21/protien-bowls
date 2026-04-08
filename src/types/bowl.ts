export interface BowlNutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fibre: number;
  level: 'Low' | 'Medium' | 'High';
}

export interface Bowl {
  id: string;
  name: string;
  link: string;
  image: string;
  description: string;
  price: number;
  type: 'veg' | 'non-veg';
  category: string;
  isRecommended: boolean;
  serving?: string;
  nutrition: BowlNutrition;
  healthBenefits: string[];
}
