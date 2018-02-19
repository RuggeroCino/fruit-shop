import appleImg from '../../assets/img/apple.jpg';
import orangeImg from '../../assets/img/orange.jpg';
import bananaImg from '../../assets/img/banana.jpg';
import papayaImg from '../../assets/img/papaya.jpg';

export const Products = [
  {
    id: '001',
    name: 'Apple',
    type: 'Fruit',
    price: 0.25,
    image: appleImg,
    description: 'An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia. (from: wikipedia.org)',
    discount: null,
  },
  {
    id: '002',
    name: 'Orange',
    type: 'Fruit',
    price: 0.30,
    image: orangeImg,
    description: 'The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. (from: wikipedia.org)',
    discount: null,
  },
  {
    id: '003',
    name: 'Banana',
    type: 'Fruit',
    price: 0.15,
    image: bananaImg,
    description: 'The banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas. (from: wikipedia.org)',
    discount: null,
  },
  {
    id: '004',
    name: 'Papaya',
    type: 'Fruit',
    price: 0.50,
    image: papayaImg,
    description: 'The papaya is a small, sparsely branched tree, usually with a single stem growing from 5 to 10 m (16 to 33 ft) tall, with spirally arranged leaves confined to the top of the trunk. The lower trunk is conspicuously scarred where leaves and fruit were borne. (from: wikipedia.org)',
    discount: 'THREE_FOR_TWO',
  },
];
