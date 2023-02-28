export const datas = {

  burgers: {
    type: "BURGERS",
    data: [
      {
        name: "CLÁSICA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Tomate, Lechuga, Salsa BBQ, Salsa de la Granja",
        price: 10_900,
      },
      {
        name: "DE POLLO",
        description: "Pan Artesanal, Burger de Pollo Apanada, Queso, Tomate, Lechuga Salsa BBQ, Salsa de la Granja.",
        price: 11_500
      },
      {
        name: "TÍPICA",
        description: "Pan Artesanal, Carne de Res (150grs) Queso, Maíz Tierno, Tomate, Lechuga, Salsa BBQ y Salsa Típica.",
        price: 12_500
      },
      {
        name: "SÚPER QUESO",
        description: "Pan Artesanal, Carne de Res (150grs) Queso Mozzarella, Queso Americano, Queso Fundido, Lechuga y Salsa BBQ.",
        price: 12_500
      },
      {
        name: "DE LA CALLE",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Papa Fosforito, Lechuga, Tomate, y Mayonesa de Chimichurri.",
        price: 11_500
      },
      {
        name: "MEXICANA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Salsa de Fríjol, Pico de Gallo, Guacamole, Lechuga, Tomate, Salsa BBQ.",
        price: 12_500
      },
      {
        name: "BARBACOA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso Americano, Trozos de Tocineta y Cebolla, Lechuga y Salsa BBQ de la Casa",
        price: 12_000
      },
      {
        name: "GAUCHA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Chorizo a la Parrilla bañado en Mayonesa de Chimichurri, Tomate, Lechuga y Salsa BBQ.",
        price: 12_900,
      },
      {
        name: "CONTAINER",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Croquetas de Papa, Maíz Tierno, Lechuga, Salsa BBQ y Mayonesa de Chimichurri",
        price: 12_500,
      },
      {
        name: "DE LA GRANJA",
        description: "Pan Artesanal, Carne de Res (150grs), Queso, Huevo Frito, Trozos de Tocineta y Cebolla, Tomate, Lechuga y Salsa de la Granja.",
        price: 12_900,
      },
      {
        name: "DEL CAMPO",
        description: "Plátano de Temporada, Carne de Res (150grs) Queso, Maíz Tierno, Lechuga, Tomate, Cebolla, Salsa BBQ y Salsa Especial de la Casa.",
        price: 12_900,
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
        price: 16_900
      },
      {
        name: "ABORRAJADA",
        description: "Pan Artesanal, Carne Certified Angus (175grs), Queso Gratinado, Tajadas de Plátano Maduro, Sour Cream y Lechuga.",
        price: 17_900
      },
      {
        name: "CRUNCH",
        description: "Pan Artesanal, Carne Certified Angus (175grs), Queso Americano, Tocineta Crocante, Cebolla Crispy, Salsa BBQ de la Casa.",
        price: 17_500
      },
    ]
  },

  hotDogs: {
    type: "HOT DOGS",
    data: [
      {
        name: "GRANJERO",
        description: "Pan Artesanal, Salchicha Parrilla, Maíz Tierno, Queso Gratinado, Trozos de Tocineta, Cebolla Crispy y Mayonesa de Chimichurri.",
        price: 11_500
      },
      {
        name: "CHORIPAN CRIOLLO",
        description: "Pan Artesanal, Chorizo a la Parrilla, Queso, Maíz Tierno, Trozos de Tocineta y Cebolla, Mayonesa de Chimichurri.",
        price: 11_900
      },
      {
        name: "CLÁSICO",
        description: "Pan Artesanal, Salchicha Parrilla, Salsa de Tomate, Mayonesa, Queso y Papa Fosforito",
        price: 10_500
      },
      {
        name: "CALLEJERO",
        description: "Pan Artesanal, Salchicha Parrilla, Cebolla, Queso Rallado, Papa Fosforito, Mayonesa, Mostaza, Salsa de Tomate y Piña.",
        price: 11_500
      }
    ],
  },
  kids: {
    type: "KIDS",
    data: [
      {
        name: "NUGGETS DE POLLO",
        description: "Nuggets de Pollo, Acompañados de Papa a la Francesa y Jugo HIT",
        price: 12_500
      },
      {
        name: "MINIBURGER",
        description: "Pan Artesanal, Carne de Res (90grs) Queso, Salsa de Tomate y Mayonesa, Acompañada con Papa a la Francesa y Jugo HI",
        price: 12_500
      }

    ],
  },

  specialities: {
    type: "SPECIALITIES",
    data: [
      {
        name: "MONTAÑERA",
        description: "Plátano de Temporada Picado, Carne de Res (150grs) Queso Rallado, Maíz Tierno, Lechuga, Tomate, Cebolla, Salsa BBQ y Salsa Especial de la Casa.",
        price: 13_900
      },
      {
        name: "CHORIPAPA",
        description: "Trozos de Chorizo a la Parrilla, Queso Rallado, Cascos de Papa, Lechuga y Mayonesa de Chimichurri.",
        price: 11_500
      },
      {
        name: "MAZORCADA",
        description: "Base de Lechuga, Trozos de Pollo y Carne de Res, Trozos de Tocineta, Queso Rallado, Maíz Tierno, Papa Fosforito, Salsa Típica y Mayonesa de Chimichurri.",
        price: 15_900
      },
      {
        name: "COSTILLAS BARBACOA",
        description: "Costilla de Cerdo Ahumada (400grs), con deliciosa Salsa BBQ, acompañada con Papa Casco y Ensalada",
        price: 24_900
      },
      {
        name: "SALCHIPAPA",
        description: "Trozos de Salchicha Americana, Queso Fundido, Papa a la Francesa y Queso Rallado.",
        price: 11_500
      },
      {
        name: "ENSALADA DE LA GRANJA",
        description: "Trozos de Pechuga asados a la parrilla (170grs), Jamón, Maíz Tierno, Queso Mozzarella, Croutones de Pan al Oregano, Lechuga, Tomate Cherry, Vinagreta de la Granja",
        price: 15_900
      }
    ],
  },

  sandwichs: {
    type: "SANDWICHIS",
    data: [
      {
        name: "GRANJA",
        description: "Pan Artesanal, Pollo Desmechado, Queso Gratinado, Maíz Tierno, Lechuga y Mayonesa de Chimichurri",
        price: 11_500
      },
      {
        name: "PECHUGA A LA PARRILLA",
        description: "Pan Artesanal, Pechuga a la Parrilla (170grs), Queso Gratinado, Lechuga, Tomate, Mayonesa de Chimichurri.",
        price: 12_500
      },
      {
        name: "CORDERO",
        description: "Pan Artesanal, Jamón de Cordero, Queso Americano Gratinado, Lechuga y Mayonesa de Chimichurri.",
        price: 11_500
      }
    ],
  },

  adicionals: {
    type: "ADICIONALS",
    data: [
      {
        name: "CARNE ANGUS",
        price: 10_500
      },
      {
        name: "CARNE MINI",
        price: 4_000
      },
      {
        name: "CARNE POLLO",
        price: 5_500
      },
      {
        name: "CARNE RES",
        price: 5_000
      },
      {
        name: "CARNE VEGETARIANA",
        price: 5_500
      },
      {
        name: "CASCOS DE PAPA",
        price: 4_500
      },
      {
        name: "CHORIZO",
        price: 3_000
      },
      {
        name: "EXTRA QUESO FUNDIDO",
        price: 5_500
      },
      {
        name: "HUEVO",
        price: 2_500
      },
      {
        name: "JAMON",
        price: 2_500
      },
      {
        name: "JAMON CORDERO",
        price: 3_000
      },
      {
        name: "MAIZ TIERNO",
        price: 2_500
      },
      {
        name: "MIX DE CEBOLLA",
        price: 2_500
      },
      {
        name: "PATACON",
        price: 3_500
      },
      {
        name: "PECHUGA 170gr",
        price: 6_000
      },
      {
        name: "PECHUGA 300gr",
        price: 10_000
      },
      {
        name: "PEPINILLOS",
        price: 1_000
      },
      {
        name: "PIÑA PROCION",
        price: 2_500
      },
      {
        name: "POLLO DESMECHADO",
        price: 4_500
      },
      {
        name: "QUESO AMERICANO",
        price: 2_500
      },
      {
        name: "QUESO BLANCO",
        price: 2_500
      },
      {
        name: "SALCHICHA",
        price: 4_500
      },
      {
        name: "SALSA FRIJOL",
        price: 2_000
      },
      {
        name: "SALSA GUACAMOLE",
        price: 2_000
      },
      {
        name: "SALSA MAIZ",
        price: 2_000,
      },
      {
        name: "TOCINETA",
        price: 3_000
      },
      {
        name: "TOCINETA CROCANTE",
        price: 3_000
      },
      {
        name: "TROZOS DE RES Y POLLO",
        price: 5_500
      }
    ],
  },

  milkshakesAndSlushies: {
    type: "MILKSHKES AND SLUSHIES",
    data: [
      { name: "GRANIZADO CHULUPA", price: 5_000 },
      { name: "GRANIZADO FRUTOS ROJOS", price: 5_000 },
      { name: "GRANIZADO LIMON", price: 5_000 },
      { name: "GRANIZADO MARACUYA", price: 5_000 },
      { name: "LIMONADA DE COCO", price: 6_500 },
      { name: "MALTEADA COOKES AND CREAM (OREO)", price: 9_900 },
      { name: "MALTEADA FRUTOS ROJOS YOGURT", price: 9_900 },
      { name: "MALTEADA VAINILLA (COCOSETTE)", price: 9_900 },
    ],
  },

  liquors: {
    type: "LIQUORS",
    data: [
      { name: "CERVEZA ANDINA (BOTELLA)", price: 4_000 },
      { name: "CERVEZA ANDINA (LATA)", price: 4_000 },
      { name: "CERVEZA HEINEKEN (BOTELLA)", price: 4_500 },
      { name: "CERVEZA HEINEKEN (LATA)", price: 4_500 }
    ],
  },

  watersAndJuicesAndSoftDrinks: {
    type: "WATER AND JUICES AND SOFT DRINK",
    data: [
      { name: "AGUA (BOTELLA)", price: 4_000 },
      { name: "AGUA BRISA CON GAS", price: 4_000 },
      { name: "GASEOSA 1.5", price: 7_000 },
      { name: "GASEOSA GO PACK 400mL", price: 4_500 },
      { name: "H2O (BOTELLA)", price: 4_500 },
      { name: "JUGOS HIT CAJITA", price: 2_500 },
      { name: "JUGO HIT GO", price: 4_500 },
      { name: "Mr TEA", price: 4_500 },
      { name: "TEA HATSU", price: 6_500 }
    ],
  },

  portions: {
    type: "PORTIONS",
    data: [
      { name: "AROS DE CEBOLLA", price: 9_000 },
      { name: "PAPAS A LA FRANCESA", price: 5_000 },
      { name: "PAPAS CRIOLLAS", price: 5_000 },
      { name: "PAPAS EN CASCO", price: 5_000 },
      { name: "PAPAS AMERICANAS", price: 9_000 },
      { name: "PAPAS MEXICANAS", price: 9_000 },
      { name: "SALSA ESPECIAL - SALSA DE LA GRANJA", price: 1_000 },
      { name: "SOBRE SALSA BBQ", price: 200 },
      { name: "SOBRE SALSA ROSADA", price: 200 }
    ],
  },

}
