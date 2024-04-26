import expressoTradicional from '../assets/coffes/expresso.svg'
import expressoAmericano from '../assets/coffes/americano.svg'
import arabe from '../assets/coffes/arabe.svg'
import cafeComLeite from '../assets/coffes/cafe_com_leite.svg'
import CafeGelado from '../assets/coffes/cafe_gelado.svg'
import capuccino from '../assets/coffes/capuccino.svg'
import chocolateQuente from '../assets/coffes/chocolate_quente.svg'
import cubano from '../assets/coffes/cubano.svg'
import expressoCremoso from '../assets/coffes/expresso_cremoso.svg'
import havaiano from '../assets/coffes/havaiano.svg'
import irlandes from '../assets/coffes/irlandes.svg'
import latte from '../assets/coffes/latte.svg'
import macchiato from '../assets/coffes/macchiato.svg'
import mochaccino from '../assets/coffes/mochaccino.svg'

export const mockCoffes = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageSrc: expressoTradicional,
    typeCoffe: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageSrc: expressoAmericano,
    typeCoffe: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 3,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageSrc: arabe,
    typeCoffe: ['Especial'],
    price: 9.9,
  },
  {
    id: 4,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageSrc: cafeComLeite,
    typeCoffe: ['Tradicional', 'Com leite'],
    price: 9.9,
  },
  {
    id: 5,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageSrc: CafeGelado,
    typeCoffe: ['Tradicional', 'Gelado'],
    price: 9.9,
  },
  {
    id: 6,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageSrc: capuccino,
    typeCoffe: ['Tradicional', 'Com leite'],
    price: 9.9,
  },
  {
    id: 7,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageSrc: cubano,
    typeCoffe: ['Especial', 'Alcoólico', 'Geleado'],
    price: 9.9,
  },
  {
    id: 8,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageSrc: havaiano,
    typeCoffe: ['Especial'],
    price: 9.9,
  },
  {
    id: 9,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageSrc: chocolateQuente,
    typeCoffe: ['Especial', 'com leite'],
    price: 9.9,
  },
  {
    id: 10,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imageSrc: expressoCremoso,
    typeCoffe: ['Tradicional'],
    price: 9.9,
  },
  {
    id: 11,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageSrc: irlandes,
    typeCoffe: ['Especial', 'Alcoólico'],
    price: 9.9,
  },
  {
    id: 12,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageSrc: latte,
    typeCoffe: ['Tradicional', 'Com leite'],
    price: 9.9,
  },
  {
    id: 13,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageSrc: macchiato,
    typeCoffe: ['Tradicional', 'Com leite'],
    price: 9.9,
  },
  {
    id: 14,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imageSrc: mochaccino,
    typeCoffe: ['Tradicional', 'Com leite'],
    price: 9.9,
  },
]
