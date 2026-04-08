export interface BowlMacro {
  label: string;
  value: number;
  color: string;
  suffix: string;
}

export interface Bowl {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  tags: string[];
  macros: BowlMacro[];
}
