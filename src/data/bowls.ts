import type { Bowl } from '../types/bowl';

function createBowlImage(
  base: string,
  toppingA: string,
  toppingB: string,
  toppingC: string,
) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180">
      <rect width="220" height="180" rx="24" fill="#efe5d3"/>
      <ellipse cx="110" cy="126" rx="76" ry="20" fill="#3a2519"/>
      <path d="M46 86c0 42 26 62 64 62s64-20 64-62H46Z" fill="#5a3b28"/>
      <path d="M54 80c3-26 28-44 56-44s53 18 56 44c0 0-20 17-56 17S54 80 54 80Z" fill="#f5f0e6"/>
      <ellipse cx="84" cy="76" rx="24" ry="15" fill="${base}"/>
      <ellipse cx="132" cy="69" rx="25" ry="16" fill="${toppingA}"/>
      <ellipse cx="114" cy="90" rx="26" ry="14" fill="${toppingB}"/>
      <ellipse cx="90" cy="97" rx="18" ry="12" fill="${toppingC}"/>
      <ellipse cx="146" cy="94" rx="16" ry="11" fill="#d1f2c4"/>
      <ellipse cx="71" cy="95" rx="14" ry="10" fill="#f7d56b"/>
      <circle cx="150" cy="103" r="10" fill="#ffffff"/>
      <circle cx="150" cy="103" r="6" fill="#8ecf76"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createShakeImage(primary: string, secondary: string, accent: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180">
      <rect width="220" height="180" rx="24" fill="#efe5d3"/>
      <ellipse cx="110" cy="142" rx="40" ry="12" fill="#d9cfbe"/>
      <path d="M86 36h48l-9 96c-1 10-8 17-15 17h0c-7 0-14-7-15-17l-9-96Z" fill="${primary}"/>
      <path d="M92 48h36l-6 74c-1 8-6 13-12 13h0c-6 0-11-5-12-13l-6-74Z" fill="${secondary}" opacity="0.55"/>
      <path d="M100 26h20" stroke="#e23744" stroke-width="6" stroke-linecap="round"/>
      <path d="M115 26v22" stroke="#e23744" stroke-width="6" stroke-linecap="round"/>
      <circle cx="110" cy="36" r="17" fill="#fff7ef"/>
      <circle cx="110" cy="36" r="8" fill="${accent}"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createPancakeImage(base: string, syrup: string, berry: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 180">
      <rect width="220" height="180" rx="24" fill="#efe5d3"/>
      <ellipse cx="110" cy="144" rx="58" ry="14" fill="#d9cfbe"/>
      <ellipse cx="110" cy="110" rx="52" ry="14" fill="${base}"/>
      <ellipse cx="110" cy="95" rx="48" ry="13" fill="${base}"/>
      <ellipse cx="110" cy="80" rx="44" ry="12" fill="${base}"/>
      <path d="M84 66c8-9 44-9 52 0 5 6-2 18-8 22-9 6-27 6-36 0-7-5-12-16-8-22Z" fill="${syrup}"/>
      <circle cx="97" cy="66" r="6" fill="${berry}"/>
      <circle cx="113" cy="61" r="6" fill="${berry}"/>
      <circle cx="126" cy="68" r="6" fill="${berry}"/>
      <rect x="148" y="54" width="10" height="28" rx="5" fill="#fff7ef"/>
      <rect x="151" y="49" width="4" height="14" rx="2" fill="#ffd166"/>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const bowls: Bowl[] = [
  {
    id: 'tandoori-power',
    name: 'Tandoori Power Bowl',
    image: createBowlImage('#9bcf74', '#e76f51', '#f4a261', '#5cb85c'),
    description:
      'Charred chicken, jeera quinoa, smoky peppers, mint yogurt and pickled onions for a spicy high-protein hit.',
    price: 349,
    tags: ['Best Seller', '42g Protein', 'Spicy'],
    macros: [
      { label: 'Protein', value: 42, color: '#ff7f50', suffix: 'g' },
      { label: 'Carbs', value: 28, color: '#ffd166', suffix: 'g' },
      { label: 'Fat', value: 14, color: '#7ae582', suffix: 'g' },
    ],
  },
  {
    id: 'peri-peri-paneer',
    name: 'Peri Peri Paneer Stack',
    image: createBowlImage('#98c86d', '#ef476f', '#f7b267', '#f4d35e'),
    description:
      'Seared paneer, roasted corn, brown rice, crunchy slaw and a creamy peri drizzle that stays indulgent.',
    price: 329,
    tags: ['Veg Favourite', '35g Protein', 'Creamy'],
    macros: [
      { label: 'Protein', value: 35, color: '#ff5d8f', suffix: 'g' },
      { label: 'Carbs', value: 31, color: '#ffc857', suffix: 'g' },
      { label: 'Fat', value: 16, color: '#80ed99', suffix: 'g' },
    ],
  },
  {
    id: 'green-goddess',
    name: 'Green Goddess Bowl',
    image: createBowlImage('#88c057', '#5dbb63', '#c7e77f', '#9ad1d4'),
    description:
      'Herb grilled tofu, avocado mash, edamame, cucumber ribbons and lemon tahini over millet greens.',
    price: 319,
    tags: ['Plant Powered', '29g Protein', 'Fresh'],
    macros: [
      { label: 'Protein', value: 29, color: '#5dd39e', suffix: 'g' },
      { label: 'Carbs', value: 24, color: '#f6bd60', suffix: 'g' },
      { label: 'Fat', value: 18, color: '#84dcc6', suffix: 'g' },
    ],
  },
  {
    id: 'double-chicken',
    name: 'Double Chicken Crunch',
    image: createBowlImage('#a7cf63', '#da6a4e', '#f1c453', '#d1495b'),
    description:
      'Twice the grilled chicken with sweet potato cubes, black beans, lettuce crunch and chipotle lime dressing.',
    price: 389,
    tags: ['Max Protein', '48g Protein', 'High Volume'],
    macros: [
      { label: 'Protein', value: 48, color: '#ff6f61', suffix: 'g' },
      { label: 'Carbs', value: 26, color: '#f7b267', suffix: 'g' },
      { label: 'Fat', value: 12, color: '#70c1b3', suffix: 'g' },
    ],
  },
  {
    id: 'korean-bbq',
    name: 'Korean BBQ Fuel',
    image: createBowlImage('#93c86b', '#bc4749', '#f77f00', '#6a994e'),
    description:
      'Lean beef strips, sticky rice, kimchi, sesame spinach and a glossy gochujang glaze with heat.',
    price: 399,
    tags: ['New Drop', '40g Protein', 'Umami'],
    macros: [
      { label: 'Protein', value: 40, color: '#ff5c8a', suffix: 'g' },
      { label: 'Carbs', value: 34, color: '#ffd166', suffix: 'g' },
      { label: 'Fat', value: 13, color: '#5ec2b7', suffix: 'g' },
    ],
  },
  {
    id: 'mediterranean-lean',
    name: 'Mediterranean Lean Bowl',
    image: createBowlImage('#9bcb68', '#e9c46a', '#e76f51', '#84a98c'),
    description:
      'Za’atar chicken, couscous, hummus swipe, tomato cucumber salsa and garlic yogurt for clean comfort.',
    price: 359,
    tags: ['Balanced', '38g Protein', 'Zesty'],
    macros: [
      { label: 'Protein', value: 38, color: '#ffa94d', suffix: 'g' },
      { label: 'Carbs', value: 30, color: '#ffd670', suffix: 'g' },
      { label: 'Fat', value: 11, color: '#52b69a', suffix: 'g' },
    ],
  },
  {
    id: 'cold-coffee-shake',
    name: 'Cold Coffee Protein Shake',
    image: createShakeImage('#d8b08c', '#8d5d3d', '#6f4e37'),
    description:
      'Creamy cold coffee shake blended with whey, milk and a touch of cocoa for a smooth post-workout sip.',
    price: 249,
    tags: ['Shake', '24g Protein', 'Best Seller'],
    macros: [
      { label: 'Protein', value: 24, color: '#b27c54', suffix: 'g' },
      { label: 'Carbs', value: 18, color: '#ffd166', suffix: 'g' },
      { label: 'Fat', value: 7, color: '#7bc47f', suffix: 'g' },
    ],
  },
  {
    id: 'berry-banana-shake',
    name: 'Berry Banana Shake',
    image: createShakeImage('#f4c8d0', '#d96c7b', '#ffd166'),
    description:
      'Strawberry, banana and yogurt blended into a thick high-protein shake that feels like dessert.',
    price: 259,
    tags: ['Shake', '22g Protein', 'Fruity'],
    macros: [
      { label: 'Protein', value: 22, color: '#ff7b8a', suffix: 'g' },
      { label: 'Carbs', value: 21, color: '#ffd166', suffix: 'g' },
      { label: 'Fat', value: 6, color: '#7bc47f', suffix: 'g' },
    ],
  },
  {
    id: 'banana-oat-pancakes',
    name: 'Banana Oat Pancakes',
    image: createPancakeImage('#d9a86a', '#8d5524', '#cf425c'),
    description:
      'Stacked oat pancakes with banana slices, berry compote and warm maple drizzle for a filling breakfast plate.',
    price: 289,
    tags: ['Pancakes', '18g Protein', 'Breakfast'],
    macros: [
      { label: 'Protein', value: 18, color: '#c27c3d', suffix: 'g' },
      { label: 'Carbs', value: 33, color: '#ffd166', suffix: 'g' },
      { label: 'Fat', value: 8, color: '#7bc47f', suffix: 'g' },
    ],
  },
  {
    id: 'choco-chip-pancakes',
    name: 'Choco Chip Pancakes',
    image: createPancakeImage('#d5a06a', '#6b3e20', '#8b5cf6'),
    description:
      'Soft protein pancakes layered with dark chocolate chips and syrup for a sweeter menu option.',
    price: 299,
    tags: ['Pancakes', '20g Protein', 'Sweet'],
    macros: [
      { label: 'Protein', value: 20, color: '#a56735', suffix: 'g' },
      { label: 'Carbs', value: 36, color: '#ffd166', suffix: 'g' },
      { label: 'Fat', value: 9, color: '#7bc47f', suffix: 'g' },
    ],
  },
];
