import {
  whiteCoconut,
  whiteOnigiri,
  whitePiano,
  whiteRabbit,
  productClothes,
  productFnB,
  milkBun,
  matchaMilkBun,
  mangoRollCake,
  strawberryRollCake,
  cincau,
  coconut1,
  coconut2,
  coconut3,
  coconut4,
  coconut5,
  piano1,
  piano2,
  piano3,
  piano4,
  piano5,
  onigiri1,
  onigiri2,
  onigiri3,
  onigiri4,
  onigiri5,
  rabbit1,
  rabbit2,
  rabbit3,
  reviewStrawberryRoll,
  reviewMangoRoll,
  reviewCincau,
} from '../assets';

export const newProductImages = [
  {
    id: 1,
    src: whiteCoconut,
    title: 'White Series - Coconut',
    name: 'Coconut',
  },
  {
    id: 2,
    src: whitePiano,
    title: 'White Series - Piano',
    name: 'Piano',
  },
  {
    id: 3,
    src: whiteOnigiri,
    title: 'White Series - Onigiri',
    name: 'Onigiri',
  },
  {
    id: 4,
    src: whiteRabbit,
    title: 'White Series - Rabbit',
    name: 'Rabbit',
  },
];

export const foodBeverageProducts = [
  {
    id: 1,
    src: milkBun,
    name: 'Milk Bun',
    description:
      'Milkbun merupakan roti yang berasal dari negara Thailand yang sekarang viral di Indonesia. Milkbun mirip seperti roti sobek, hanya saja ditaburi susu dan gula halus di atasnya.',
    otherDescription:
      'GANF memanfaatkan keviralan tersebut untuk melakukan perdagangan.',
    ingredients: ['Tepung', 'Susu', 'Whipped Cream', 'Butter'],
    variantSizes: [],
  },
  {
    id: 2,
    src: matchaMilkBun,
    name: 'Matcha Milk Bun',
    description:
      'Milkbun merupakan roti yang berasal dari negara Thailand yang sekarang viral di Indonesia. Milkbun mirip seperti roti sobek, hanya saja ditaburi susu dan gula halus di atasnya.',
    otherDescription:
      'GANF memanfaatkan keviralan tersebut untuk melakukan perdagangan dan membuat variasi dan rasa yang berbeda.',
    ingredients: ['Tepung', 'Susu', 'Whipped Cream', 'Butter', 'Bubuk Matcha'],
    variantSizes: [],
  },
  {
    id: 3,
    src: mangoRollCake,
    name: 'Mango Roll Cake',
    description:
      'Perpaduan antara Fresh buah Mangga dan Sweet Cream dibalut dengan Bolu yang lembut menjadikan rasa yang fresh dan sweet ketika dimakan.',
    otherDescription: '',
    ingredients: [
      'Buah Mangga',
      'Butter',
      'Whipped Cream',
      'Gula',
      'Susu',
      'Garam',
      'Telur',
      'Tepung',
    ],
    variantSizes: ['Rollcake 16cm', 'Slice 5cm', 'Slice 3cm'],
  },
  {
    id: 4,
    src: strawberryRollCake,
    name: 'Strawberry Roll Cake',
    description:
      'Perpaduan antara Fresh Strawberry dan Sweet Cream dibalut dengan Bolu yang lembut menjadikan rasa yang fresh dan sweet ketika dimakan.',
    otherDescription: '',
    ingredients: [
      'Strawberry',
      'Butter',
      'Whipped Cream',
      'Gula',
      'Susu',
      'Garam',
      'Telur',
      'Tepung',
    ],
    variantSizes: ['Rollcake 16cm', 'Slice 5cm', 'Slice 3cm'],
  },
  {
    id: 5,
    src: cincau,
    name: 'Cincau',
    description:
      'Produk pertama di GANF yaitu Cincau #1. Di Indonesia, cincau biasanya di sajikan bersama air gula aren atau minuman manis serupa, seperti minuman es cincau ataupun es campur.',
    otherDescription: '',
    ingredients: ['Brown Sugar', 'Susu', 'Cincau'],
    variantSizes: [],
  },
];

export const clothingProducts = [
  {
    id: 1,
    src: whiteCoconut,
    images: [coconut1, coconut2, coconut3, coconut4, coconut5],
    name: 'Coconut',
    series: 'White Series',
    sizeChart: [
      {
        size: 'Kecil',
        bust: '110 cm',
        arm: '42 cm',
        shirt_length: '70 cm',
        sleeve_length: '53 cm',
      },
      {
        size: 'Besar',
        bust: '120 cm',
        arm: '48 cm',
        shirt_length: '75 cm',
        sleeve_length: '56 cm',
      },
    ],
    notes: 'Toleransi 1-3 cm',
  },
  {
    id: 2,
    src: whitePiano,
    images: [piano1, piano2, piano3, piano4, piano5],
    name: 'Piano',
    series: 'White Series',
    sizeChart: [
      {
        size: 'Kecil',
        bust: '110 cm',
        arm: '42 cm',
        shirt_length: '70 cm',
        sleeve_length: '53 cm',
      },
      {
        size: 'Besar',
        bust: '120 cm',
        arm: '48 cm',
        shirt_length: '75 cm',
        sleeve_length: '56 cm',
      },
    ],
    notes: 'Toleransi 1-3 cm',
  },
  {
    id: 3,
    src: whiteOnigiri,
    images: [onigiri1, onigiri2, onigiri3, onigiri4, onigiri5],
    name: 'Onigiri',
    series: 'White Series',
    sizeChart: [
      {
        size: 'Kecil',
        bust: '110 cm',
        arm: '42 cm',
        shirt_length: '70 cm',
        sleeve_length: '53 cm',
      },
      {
        size: 'Besar',
        bust: '120 cm',
        arm: '48 cm',
        shirt_length: '75 cm',
        sleeve_length: '56 cm',
      },
    ],
    notes: 'Toleransi 1-3 cm',
  },
  {
    id: 4,
    src: whiteRabbit,
    images: [rabbit1, rabbit2, rabbit3],
    name: 'Rabbit',
    series: 'White Series',
    sizeChart: [
      {
        size: 'Kecil',
        bust: '110 cm',
        arm: '42 cm',
        shirt_length: '70 cm',
        sleeve_length: '53 cm',
      },
      {
        size: 'Besar',
        bust: '120 cm',
        arm: '48 cm',
        shirt_length: '75 cm',
        sleeve_length: '56 cm',
      },
    ],
    notes: 'Toleransi 1-3 cm',
  },
];

export const testimonials = [
  {
    id: 1,
    src: reviewStrawberryRoll,
    name: 'Strawberry Roll Cake',
    description:
      'Cakenya nda bikin enek, nda kemanisan, pas dilidahku. Strawberrynya juga enak sekali. Sukseski GANF 🫰🏻',
    rating: 5,
    reviewer: 'S** A****i',
    date: 'Oct 27, 2023',
  },
  {
    id: 2,
    src: reviewMangoRoll,
    name: 'Mango Roll Cake',
    description:
      'Bolunya enak skaliiii, creamnya pun enakk padahal saya tim tidak makan cream tapi yang GANF punya enak, mangganya juga manisnya pas ✨',
    rating: 5,
    reviewer: 'F****h S****a',
    date: 'Nov 24, 2023',
  },
  {
    id: 3,
    src: reviewCincau,
    name: 'Cincau Drink',
    description:
      'Minuman cincaunya manisnya pas, porsinya banyak untuk harga segitu 🥺 packagingnya juga oke. Kalau yang Milo terasa banget Milonya, cincaunya terlalu halus tapi ini tergantung seleraji, overall enak bgtbgtbgt semua 💘',
    rating: 4,
    reviewer: 'F****h S****a',
    date: 'Nov 24, 2023',
  },
  {
    id: 4,
    src: reviewStrawberryRoll,
    name: 'Strawberry Roll Cake',
    description:
      'Enak banget bolunya lembut, Strawberrynya besar masih juicy, krimnya bukan rasa mentega jadi nda eneg dimakan, makanya after makan ini nda bikin mau minum air putih banyak2',
    rating: 5,
    reviewer: 'Shafira Rembulan',
    date: 'Oct 12, 2023',
  },
  {
    id: 5,
    src: reviewStrawberryRoll,
    name: 'Strawberry Roll Cake',
    description: 'Cakenya manis tapi tidak bikin enek + segar dari 🍓',
    rating: 5,
    reviewer: 'A****a P***i',
    date: 'Oct 11, 2023',
  },
];

export const productCategories = [
  {
    id: 1,
    src: productFnB,
    name: 'Food n Beverage',
    link: '/products/food-beverage',
    products: foodBeverageProducts,
  },
  {
    id: 2,
    src: productClothes,
    name: 'Clothes',
    link: '/products/clothes',
    products: clothingProducts,
  },
];
