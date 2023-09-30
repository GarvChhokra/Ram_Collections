export interface Promotion {
  title: string;
  description: string;
}

const promotionsData: Promotion[] = [
  {
    title: 'Promotion 1',
    description: 'Additional 10% off for the first time',
  },
  {
    title: 'Promotion 2',
    description: '20-50% Off Everything',
  },
  {
    title: 'Promotion 3',
    description: 'Get a coupon of 10% on every purchases',
  },
];

export default promotionsData;
