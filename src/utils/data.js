export const datas = {

  burgers: {
    category: 1,
    type: "BURGERS",
    data: [
      {
        name: "CLÁSICA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Tomate, Lechuga, Salsa BBQ, Salsa de la Granja",
        price: 10_900,
        category: 1,
      },
      {
        name: "DE POLLO",
        description: "Pan Artesanal, Burger de Pollo Apanada, Queso, Tomate, Lechuga Salsa BBQ, Salsa de la Granja.",
        price: 11_500,
        category: 1,
      },
      {
        name: "TÍPICA",
        description: "Pan Artesanal, Carne de Res (150grs) Queso, Maíz Tierno, Tomate, Lechuga, Salsa BBQ y Salsa Típica.",
        price: 12_500,
        category: 1,
      },
      {
        name: "SÚPER QUESO",
        description: "Pan Artesanal, Carne de Res (150grs) Queso Mozzarella, Queso Americano, Queso Fundido, Lechuga y Salsa BBQ.",
        price: 12_500,
        category: 1,
      },
      {
        name: "DE LA CALLE",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Papa Fosforito, Lechuga, Tomate, y Mayonesa de Chimichurri.",
        price: 11_500,
        category: 1,
      },
      {
        name: "MEXICANA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Salsa de Fríjol, Pico de Gallo, Guacamole, Lechuga, Tomate, Salsa BBQ.",
        price: 12_500,
        category: 1,
      },
      {
        name: "BARBACOA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso Americano, Trozos de Tocineta y Cebolla, Lechuga y Salsa BBQ de la Casa",
        price: 12_000,
        category: 1,
      },
      {
        name: "GAUCHA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Chorizo a la Parrilla bañado en Mayonesa de Chimichurri, Tomate, Lechuga y Salsa BBQ.",
        price: 12_900,
        category: 1,
      },
      {
        name: "CONTAINER",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Croquetas de Papa, Maíz Tierno, Lechuga, Salsa BBQ y Mayonesa de Chimichurri",
        price: 12_500,
        category: 1,
      },
      {
        name: "DE LA GRANJA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Huevo Frito, Trozos de Tocineta y Cebolla, Tomate, Lechuga y Salsa de la Granja.",
        price: 12_900,
        category: 1,
      },
      {
        name: "DEL CAMPO",
        description: "Plátano de Temporada, Carne de Res (150grs) Queso, Maíz Tierno, Lechuga, Tomate, Cebolla, Salsa BBQ y Salsa Especial de la Casa.",
        price: 12_900,
        category: 1,
        option: {
          first: {
            type: "res",
            price: 12_900
          },
          second: {
            type: "pollo",
            price: 13_500
          },
        }
      },
      {
        name: "KING KONG",
        description: "Pan Artesanal, Carne de Res (150grs), Burger de Pollo Apanado, Doble Queso Mozzarella, Maíz Tierno, Trozos de Tocineta y Cebolla, Papa Fosforo, Salsa Típica, Salsa BBQ, Lechuga y Tomate.",
        price: 16_900,
        category: 1,
      },
      {
        name: "ABORRAJADA",
        description: "Pan Artesanal, Carne Certified Angus (175grs), Queso Gratinado, Tajadas de Plátano Maduro, Sour Cream y Lechuga.",
        price: 17_900,
        category: 1,
      },
      {
        name: "CRUNCH",
        description: "Pan Artesanal, Carne Certified Angus (175grs), Queso Americano, Tocineta Crocante, Cebolla Crispy, Salsa BBQ de la Casa.",
        price: 17_500,
        category: 1,
      },
    ]
  },

  hotDogs: {
    type: "HOT DOGS",
    category: 2,
    data: [
      {
        name: "GRANJERO",
        description: "Pan Artesanal, Salchicha Parrilla, Maíz Tierno, Queso Gratinado, Trozos de Tocineta, Cebolla Crispy y Mayonesa de Chimichurri.",
        price: 11_500,
        category: 2,
      },
      {
        name: "CHORIPAN CRIOLLO",
        description: "Pan Artesanal, Chorizo a la Parrilla, Queso, Maíz Tierno, Trozos de Tocineta y Cebolla, Mayonesa de Chimichurri.",
        price: 11_900,
        category: 2,
      },
      {
        name: "CLÁSICO",
        description: "Pan Artesanal, Salchicha Parrilla, Salsa de Tomate, Mayonesa, Queso y Papa Fosforito",
        price: 10_500,
        category: 2,
      },
      {
        name: "CALLEJERO",
        description: "Pan Artesanal, Salchicha Parrilla, Cebolla, Queso Rallado, Papa Fosforito, Mayonesa, Mostaza, Salsa de Tomate y Piña.",
        price: 11_500,
        category: 2,
      }
    ],
  },
  kids: {
    type: "KIDS",
    category: 3,
    data: [
      {
        name: "NUGGETS DE POLLO",
        description: "Nuggets de Pollo, Acompañados de Papa a la Francesa y Jugo HIT",
        price: 12_500,
        category: 3,
      },
      {
        name: "MINIBURGER",
        description: "Pan Artesanal, Carne de Res (90grs) Queso, Salsa de Tomate y Mayonesa, Acompañada con Papa a la Francesa y Jugo HI",
        price: 12_500,
        category: 3,
      }

    ],
  },

  specialities: {
    type: "SPECIALITIES",
    category: 4,
    data: [
      {
        name: "MONTAÑERA",
        description: "Plátano de Temporada Picado, Carne de Res (150grs) Queso Rallado, Maíz Tierno, Lechuga, Tomate, Cebolla, Salsa BBQ y Salsa Especial de la Casa.",
        price: 13_900,
        category: 4,
      },
      {
        name: "CHORIPAPA",
        description: "Trozos de Chorizo a la Parrilla, Queso Rallado, Cascos de Papa, Lechuga y Mayonesa de Chimichurri.",
        price: 11_500,
        category: 4,
      },
      {
        name: "MAZORCADA",
        description: "Base de Lechuga, Trozos de Pollo y Carne de Res, Trozos de Tocineta, Queso Rallado, Maíz Tierno, Papa Fosforito, Salsa Típica y Mayonesa de Chimichurri.",
        price: 15_900,
        category: 4,
      },
      {
        name: "COSTILLAS BARBACOA",
        description: "Costilla de Cerdo Ahumada (400grs), con deliciosa Salsa BBQ, acompañada con Papa Casco y Ensalada",
        price: 24_900,
        category: 4,
      },
      {
        name: "SALCHIPAPA",
        description: "Trozos de Salchicha Americana, Queso Fundido, Papa a la Francesa y Queso Rallado.",
        price: 11_500,
        category: 4,
      },
      {
        name: "ENSALADA DE LA GRANJA",
        description: "Trozos de Pechuga asados a la parrilla (170grs), Jamón, Maíz Tierno, Queso Mozzarella, Croutones de Pan al Oregano, Lechuga, Tomate Cherry, Vinagreta de la Granja",
        price: 15_900,
        category: 4,
      }
    ],
  },

  sandwichs: {
    type: "SANDWICHIS",
    category: 5,
    data: [
      {
        name: "GRANJA",
        description: "Pan Artesanal, Pollo Desmechado, Queso Gratinado, Maíz Tierno, Lechuga y Mayonesa de Chimichurri",
        price: 11_500,
        category: 5,
      },
      {
        name: "PECHUGA A LA PARRILLA",
        description: "Pan Artesanal, Pechuga a la Parrilla (170grs), Queso Gratinado, Lechuga, Tomate, Mayonesa de Chimichurri.",
        price: 12_500,
        category: 5,
      },
      {
        name: "CORDERO",
        description: "Pan Artesanal, Jamón de Cordero, Queso Americano Gratinado, Lechuga y Mayonesa de Chimichurri.",
        price: 11_500,
        category: 5,
      }
    ],
  },

  adicionals: {
    type: "ADICIONALS",
    category: 6,
    data: [
      {
        name: "CARNE ANGUS",
        price: 10_500,
        category: 6,
      },
      {
        name: "CARNE MINI",
        price: 4_000,
        category: 6,
      },
      {
        name: "CARNE POLLO",
        price: 5_500,
        category: 6,
      },
      {
        name: "CARNE RES",
        price: 5_000,
        category: 6,
      },
      {
        name: "CARNE VEGETARIANA",
        price: 5_500,
        category: 6,
      },
      {
        name: "CASCOS DE PAPA",
        price: 4_500,
        category: 6,
      },
      {
        name: "CHORIZO",
        price: 3_000,
        category: 6,
      },
      {
        name: "EXTRA QUESO FUNDIDO",
        price: 5_500,
        category: 6,
      },
      {
        name: "HUEVO",
        price: 2_500,
        category: 6,
      },
      {
        name: "JAMON",
        price: 2_500,
        category: 6,
      },
      {
        name: "JAMON CORDERO",
        price: 3_000,
        category: 6,
      },
      {
        name: "MAIZ TIERNO",
        price: 2_500,
        category: 6,
      },
      {
        name: "MIX DE CEBOLLA",
        price: 2_500,
        category: 6,
      },
      {
        name: "PATACON",
        price: 3_500,
        category: 6,
      },
      {
        name: "PECHUGA 170gr",
        price: 6_000,
        category: 6,
      },
      {
        name: "PECHUGA 300gr",
        price: 10_000,
        category: 6,
      },
      {
        name: "PEPINILLOS",
        price: 1_000,
        category: 6,
      },
      {
        name: "PIÑA PROCION",
        price: 2_500,
        category: 6,
      },
      {
        name: "POLLO DESMECHADO",
        price: 4_500,
        category: 6,
      },
      {
        name: "QUESO AMERICANO",
        price: 2_500,
        category: 6,
      },
      {
        name: "QUESO BLANCO",
        price: 2_500,
        category: 6,
      },
      {
        name: "SALCHICHA",
        price: 4_500,
        category: 6,
      },
      {
        name: "SALSA FRIJOL",
        price: 2_000,
        category: 6,
      },
      {
        name: "SALSA GUACAMOLE",
        price: 2_000,
        category: 6,
      },
      {
        name: "SALSA MAIZ",
        price: 2_000,
        category: 6,
      },
      {
        name: "TOCINETA",
        price: 3_000,
        category: 6,
      },
      {
        name: "TOCINETA CROCANTE",
        price: 3_000,
        category: 6,
      },
      {
        name: "TROZOS DE RES Y POLLO",
        price: 5_500,
        category: 6,
      }
    ],
  },

  milkshakesAndSlushies: {
    type: "MILKSHKES AND SLUSHIES",
    category: 7,
    data: [
      { name: "GRANIZADO CHULUPA", price: 5_000, category: 7, },
      { name: "GRANIZADO FRUTOS ROJOS", price: 5_000, category: 7, },
      { name: "GRANIZADO LIMON", price: 5_000, category: 7, },
      { name: "GRANIZADO MARACUYA", price: 5_000, category: 7, },
      { name: "LIMONADA DE COCO", price: 6_500, category: 7, },
      { name: "MALTEADA COOKES AND CREAM (OREO)", price: 9_900, category: 7, },
      { name: "MALTEADA FRUTOS ROJOS YOGURT", price: 9_900, category: 7, },
      { name: "MALTEADA VAINILLA (COCOSETTE)", price: 9_900, category: 7, },
    ],
  },

  liquors: {
    type: "LIQUORS",
    category: 8,
    data: [
      { name: "CERVEZA ANDINA (BOTELLA)", price: 4_000, category: 8, },
      { name: "CERVEZA ANDINA (LATA)", price: 4_000, category: 8, },
      { name: "CERVEZA HEINEKEN (BOTELLA)", price: 4_500, category: 8, },
      { name: "CERVEZA HEINEKEN (LATA)", price: 4_500, category: 8, }
    ],
  },

  watersAndJuicesAndSoftDrinks: {
    type: "WATER AND JUICES AND SOFT DRINK",
    category: 9,
    data: [
      { name: "AGUA (BOTELLA)", price: 4_000, category: 9, },
      { name: "AGUA BRISA CON GAS", price: 4_000, category: 9, },
      { name: "GASEOSA 1.5", price: 7_000, category: 9, },
      { name: "GASEOSA GO PACK 400mL", price: 4_500, category: 9, },
      { name: "H2O (BOTELLA)", price: 4_500, category: 9, },
      { name: "JUGOS HIT CAJITA", price: 2_500, category: 9, },
      { name: "JUGO HIT GO", price: 4_500, category: 9, },
      { name: "Mr TEA", price: 4_500, category: 9, },
      { name: "TEA HATSU", price: 6_500, category: 9, }
    ],
  },

  portions: {
    type: "PORTIONS",
    category: 10,
    data: [
      { name: "AROS DE CEBOLLA", price: 9_000, category: 10, },
      { name: "PAPAS A LA FRANCESA", price: 5_000, category: 10, },
      { name: "PAPAS CRIOLLAS", price: 5_000, category: 10, },
      { name: "PAPAS EN CASCO", price: 5_000, category: 10, },
      { name: "PAPAS AMERICANAS", price: 9_000, category: 10, category: 10, },
      { name: "PAPAS MEXICANAS", price: 9_000, category: 10, },
      { name: "SALSA ESPECIAL - SALSA DE LA GRANJA", price: 1_000, category: 10, },
      { name: "SOBRE SALSA BBQ", price: 200, category: 10, },
      { name: "SOBRE SALSA ROSADA", price: 200, category: 10, }
    ],
  },

}
