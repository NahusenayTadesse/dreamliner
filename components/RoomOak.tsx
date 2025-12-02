import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  isSpecial?: boolean;
  isNew?: boolean;
}

const menuData: Record<string, MenuItem[]> = {
  "main-dishes": [
    // Chicken
    {
      name: "Stir-fried Chicken",
      description:
        "Tender chicken pieces stir-fried with vegetables and aromatic spices",
      price: "810",
      image: "/Stir-fried Chiken.webp",
    },

    {
      name: "Chicken Curry",
      description: "Served with steam rice",
      price: "930",
      image: "/Chicken Curry.webp",
    },

    {
      name: "South African Grilled Chicken Breast",
      description: "Grilled chicken breast cooked in mushroom sauce",
      price: "822.9",
      image: "/South African Grilled Chicken Breast.webp",
    },

    // Beef
    // {
    //   name: "Beef Medallion",
    //   description:
    //     "Cooked in lemon butter sauce & served with French f ries & vegetable",
    //   price: "575.25",
    //   image: "",
    // },
    {
      name: "Beef Stroganoff",
      description:
        "Cooked in mushroom sauce & served with noodles/rice & vegetables",
      price: "786.9",
      image: "/beef stroganoff.webp",
    },
    {
      name: "Mixed Grill",
      description:
        "Beef fillet, chicken, lamb, sausage, fish, served with rice & vegetablen",
      price: "956.4",
      image: "/Mixed Grill Beef fillet.webp",
    },
    // {
    //   name: "Pepper Steak",
    //   description: "",
    //   price: "785",
    //   image: "/Pepper-Steak-15.webp",
    // },

    // Fish
    {
      name: "Grilled Fish",
      description: "Fresh fish grilled with herbs and lemon",
      price: "765",
      image: "/Grilled Fish.webp",
    },

    // {
    //   name: "Oven Baked Fish",
    //   description:
    //     "Cooked in lemon butter sauce & served with boiled potatoes & sautéed vegetables",
    //   price: "595",
    //   image: "",
    // },
    // {
    //   name: "Deep Fried Fish",
    //   description:
    //     "Cooked in lemon butter sauce and served with vegetable & French- fries",
    //   price: "555.25",
    //   image: "/Deep Fried Fish.webp",
    // },
    // {
    //   name: "Poached Fish",
    //   description:
    //     "Cooked in white cream sauce & served with boiled vegetables & parsley",
    //   price: "510",
    //   image: "/Poached Fish.webp",
    // },

    {
      name: "Fish Goulash",
      description:
        "Shredded fish cooked in tomato, onion & garlic sauce served with steamed rice and vegetable",
      price: "624.24",
      image: "/Fish Goulash.webp",
    },

    // Spaghetti
    // {
    //   name: "Spaghetti Carbonara",
    //   description: "Classic Italian pasta with cream, eggs, and cheese",
    //   price: "450",
    //   image: "/Spaghetti Carbonara 2.webp",
    // },
    // {
    //   name: "Spaghetti Bolognese",
    //   description: "Italian pasta with meat sauce",
    //   price: "480",
    //   image: "/spaghetti-bologna.webp",
    // },
    // {
    //   name: "Penne Napolitano",
    //   description: "",
    //   price: "395",
    //   image: "/penne napolitan.webp",
    // },
    // {
    //   name: "Penne with Mushroom sauce",
    //   description: "",
    //   price: "425",
    //   image: "/penne-with-mushroom-sauce.webp",
    // },
    {
      name: "Spaghetti with Tuna",
      description: "",
      price: "666",
      image: "/Spaghetti-with-Tuna-.webp",
    },
    {
      name: "Spaghetti with Vegetable",
      description: "",
      price: "474",
      image: "/Spaghetti with Vegetable.webp",
    },
    // {
    //   name: "Spaghetti with Tomato sauce",
    //   description: "",
    //   price: "395",
    //   image: "/spaghetti with tomato sauce.webp",
    // },
    // Burgers
    {
      name: "Classic Beef Burger",
      description: "Beef patty with lettuce, tomato, onion, and special sauce",
      price: "750",
      image: "/Beef Burger.webp",
    },
    {
      name: "Cheese Burger",
      description: "",
      price: "810",
      image: "/cheese-burger.webp",
    },
    {
      name: "Chicken Burger",
      description: "Grilled chicken breast with fresh vegetables",
      price: "738",
      image: "/Chicken burger.webp",
    },
    {
      name: "Fish Burger",
      description: "",
      price: "716.4",
      image: "/Fish  burger.webp",
    },
    // {
    //   name: "Ham and cheese sandwich",
    //   description: "",
    //   price: "615",
    //   image: "/Ham and cheese sandwich.webp",
    // },
    {
      name: "Tuna sandwich",
      description: "",
      price: "690",
      image: "/Tuna sandwich.webp",
    },
    // {
    //   name: "Egg sandwich",
    //   description: "",
    //   price: "498",
    //   image: "/Eggsandwich.webp",
    // },
    {
      name: "Chicken Sandwich",
      description:
        "Served with chicken, cheese, boiled egg, lettuce and tomato",
      price: "690",
      image: "/chicken sandwich.webp",
    },
    {
      name: "Egg Omelete",
      description: "",
      price: "395",
      image: "/Egg Omelete.webp",
    },
    //Soup

    // {
    //   name: "Vegetarian Burger",
    //   description: "Plant-based patty with fresh vegetables",
    //   price: "420",
    //   image: "/vegetarian-burger.png",
    // },
    // Sandwiches
    // {
    //   name: "Club Sandwich",
    //   description: "Triple-decker sandwich with chicken, bacon, and vegetables",
    //   price: "450",
    //   image: "/club-sandwich.png",
    // },
    //
  ],
  breakfast: [
    {
      name: "Omelet",
      description:
        "With onion, bell pepper, spinach, chili, cheese, mushroom and tomato",
      price: "474",
      image: "/omelete.webp",
    },

    {
      name: "American Breakfast",
      description:
        "Omelet, fried, boiled, scrambled or poached with onion, chili, cheese mushroom, ham and tomato toast bread & homemade bakery with jam and butter sliced seasonal fruit & fresh juice coffee or tea",
      price: "858",
      image: "/American Breakfast.webp",
    },
    {
      name: "Continental Breakfast",
      description:
        "Toast bread and homemade bakery with jam and butter, slice seasonal fruit, fresh juices, coffee and tea",
      price: "750",
      image: "/Continental Breakfast.webp",
    },
    {
      name: "Chechebsa",
      description:
        "Fresh dough homemade bread scrambles and mixed with berbere butter sauce or honey",
      price: "510",
      image: "/B.webp",
    },
  ],
  ethiopian: [
    // National Corner
    {
      name: "Lamb Tibs/Yebeg Tibs",
      description:
        "Lamb cube mixed with vegetable, and spiced butter served with Injera",
      price: "668.1",
      image: "/Lamb Tibs.webp",
    },
    {
      name: "Checkina Tibs",
      description:
        "Dice cut beef fillet with Ethiopian spiced butter sauted with Garlic, diced onion, Green pepper, tomatoes & served with traditional roll of Injera",
      price: "858",
      image: "/chikna.webp",
    },
    {
      name: "Special Shiro",
      description:
        "Mitin Shiro, Garlic, Onion, Green chilli, lettuce, tomatoes and Ethiopian spiced butter, served with green salad and traditional roll of Injera",
      price: "480",
      image: "/Special Shiro.webp",
    },
  ],
  pizza: [
    {
      name: "Pizza Margherita",
      description: "Mozzarella cheese, tomato sauce oregano, garlic, oil",
      price: "690.3",
      image: "/pizza margherita.webp",
    },
    // {
    //   name: "Pizza Al Bero",
    //   description:
    //     "Mozzarella cheese, tomato sauce, tuna fish, onions, chili, garlic oil, basil",
    //   price: "57",
    //   image: "/pizza-al-bero.png",
    // },
    {
      name: "Pizza Own",
      description:
        "Mozzarella cheese, tomato sauce, olive oil, oregano garlic and your choice of topping",
      price: "870",
      image: "/pizza own.webp",
    },
    // {
    //   name: "Pizza Calzone",
    //   description:
    //     "Mozzarella cheese, tomato sauce, ham, beef sausage, basil, garlic olive",
    //   price: "655",
    //   image: "/pizza calzone.webp",
    // },
    // {
    //   name: "Beef Pizza",
    //   description:
    //     "Mozzarella cheese, tomato sauce, minced beef, garlic olive, oregano",
    //   price: "775",
    //   image: "/beef pizza.webp",
    // },
    {
      name: "Home Special Pizza",
      description:
        "Mozzarella and Provolone cheese, tomato sauce, minced beef, chicken, chili, garlic oil, basil, vegetable",
      price: "1146",
      image: "/home special pizza.webp",
    },
  ],
  starters: [
    {
      name: "Healthy Salad",
      description: "Grilled carrot, baby marrow, eggplant, lettuce",
      price: "540",
      image: "/Healthy Salad.webp",
    },
    {
      name: "Chicken Caesar Salad",
      description:
        "Lettuce, grilled/roasted chicken, parmesan cheese, croutons, lemon juice, served with Caesar and salad dressing",
      price: "492",
      image: "/chicken caesar salad.webp",
    },
    {
      name: "Mixed Vegetable Salad",
      description:
        "Carrots, lettuce, onions, tomatoes and seasonal fruits and vegetables served",
      price: "492",
      image: "/mixed vegetable salad.webp",
    },
    // Soups
    // {
    //   name: "French Onion Soup",
    //   description: "",
    //   price: "316",
    //   image: "/French Onion Soup.webp",
    // },
    {
      name: "Cream of Tomato",
      description: "",
      price: "316",
      image: "/Cream of Tomato.webp",
    },
    {
      name: "Cream of Chicken",
      description: "",
      price: "425",
      image: "/Cream of Chicken.webp",
    },
    // {
    //   name: "Vegetable Soup",
    //   description: "Fresh vegetable soup with herbs",
    //   price: "316",
    //   image: "/Vegetable Soup.webp",
    // },
  ],
  snacks: [
    {
      name: "French Fries",
      description: "Crispy golden French fries",
      price: "306",
      image: "/french fries.webp",
    },
    {
      name: "Vegetable Samosa",
      description: "Spiced vegetable samosas",
      price: "450",
      image: "/Samosa full.webp",
    },
    {
      name: "Fish Finger with French Fries",
      description: "Crispy fish fingers served with French fries",
      price: "500",
      image: "/fish finger with french fries.webp",
    },
    {
      name: "Tuna Canapés",
      description: "Elegant tuna canapés",
      price: "499",
      image: "/Tuna Canapés.webp",
    },
    {
      name: "Special Assorted Canapés",
      description: "Selection of assorted canapés",
      price: "399",
      image: "/specialcanape.webp",
    },
    {
      name: "Meat Kebab with French Fries",
      description: "Grilled meat kebab served with crispy French fries",
      price: "399",
      image: "/meat kebab.webp",
    },
    {
      name: "Chicken Wings in Honey Sauce",
      description: "Crispy chicken wings glazed with sweet honey sauce",
      price: "455",
      image: "/chiken wings in honey sauce.webp",
    },
    {
      name: "Chicken Drumstick",
      description: "Grilled chicken drumstick with herbs and spices",
      price: "410",
      image: "/chicken drumsticks.webp",
    },
    {
      name: "Chicken Kebab with French Fries",
      description: "Marinated chicken kebab served with crispy French fries",
      price: "399",
      image: "/chicken kebab with fries.webp",
    },
  ],
  drinks: [
    {
      name: "Local Beer",
      description: "Local brewery beer",
      price: "161.256",
      image: "/local-small-beer.png",
    },
    {
      name: "Arada Beer",
      description: "Premium local beer",
      price: "180",
      image: "/arada-beer.png",
    },
    {
      name: "Heineken",
      description: "International premium beer",
      price: "203.95",
      image: "/heineken.png",
    },
    {
      name: "Red Bull",
      description: "Energy drink",
      price: "840",
      image: "/red-bull.png",
    },
  ],
  wines: [
    {
      name: "Alvinde Reserva Syrah (75cl)",
      description: "Premium imported red wine",
      price: "3,350",
      image: "/alvinde-reserva-syrah-75cl.png",
    },
    {
      name: "Louis Eschenauer (75cl)",
      description: "Fine imported wine",
      price: "5,309",
      image: "/louis-eschenauer-75cl.png",
    },
    {
      name: "Grand Epoque (75cl)",
      description: "Elegant imported wine",
      price: "4,498",
      image: "/grand-epoque-75cl.png",
    },
    {
      name: "Lamothe Parrot (75cl)",
      description: "Premium imported wine",
      price: "5,367",
      image: "/lamothe-parrot-75cl.png",
    },
    {
      name: "Sunrise (75cl)",
      description: "Smooth imported wine",
      price: "3,300",
      image: "/sunrise-75cl.png",
    },
    {
      name: "Western Cellar Chardonnay (75cl)",
      description: "Premium white wine",
      price: "5,450",
      image: "/western-cellar-chardonnay-75cl.png",
    },
    {
      name: "Baron d'Arignac (75cl)",
      description: "Classic imported wine",
      price: "2,900",
      image: "/baron-darignac-75cl.png",
    },
    {
      name: "Alvinde Reserva Chardonnay (75cl)",
      description: "Premium white wine",
      price: "4,842",
      image: "/alvinde-reserva-chardonnay-75cl.png",
    },
    {
      name: "Cellar Cask Select (75cl)",
      description: "Select imported wine",
      price: "5,546",
      image: "/cellar-cask-select-75cl.png",
    },
    {
      name: "Two Oceans Chardonnay",
      description: "South African white wine",
      price: "3,951",
      image: "/two-oceans-chardonnay.png",
    },
    {
      name: "Long Champ (75cl)",
      description: "Premium imported wine",
      price: "5,396",
      image: "/long-champ-75cl.png",
    },
    {
      name: "Acacia Dry (75cl)",
      description: "Local dry wine",
      price: "2,100",
      image: "/acacia-dry-75cl.png",
    },
    {
      name: "Acacia Medium Sweet (75cl)",
      description: "Local medium sweet wine",
      price: "2,100",
      image: "/acacia-medium-sweet-75cl.png",
    },
    {
      name: "Rift Valley Cuvee Prestige Chardonnay (75cl)",
      description: "Premium local white wine",
      price: "2,200",
      image: "/rift-valley-cuvee-prestige-chardonnay-75cl.png",
    },
    {
      name: "Rift Valley Merlot (75cl)",
      description: "Local red wine",
      price: "2,200",
      image: "/rift-valley-merlot-75cl.png",
    },
    {
      name: "Rift Valley Syrah (75cl)",
      description: "Local red wine",
      price: "2,200",
      image: "/rift-valley-syrah-75cl.png",
    },
    {
      name: "Glass of Wine",
      description: "Single glass of wine",
      price: "475",
      image: "/glass-of-wine.png",
    },
  ],
  spirits: [
    {
      name: "Camus V.S.O.P (100cl)",
      description: "Premium cognac",
      price: "Bottle: 22,790br | Glass: 910br",
      image: "/camus-vsop-100cl.png",
    },
    {
      name: "Courvoisier V.S (70cl)",
      description: "Fine cognac",
      price: "Bottle: 21,500br | Glass: 910br",
      image: "/courvoisier-vs-70cl.png",
    },
    {
      name: "Camus Cognac X.O (70cl)",
      description: "Extra old cognac",
      price: "Bottle: 69,7850br | Glass: 1,350br",
      image: "/camus-cognac-xo-70cl.png",
    },
    {
      name: "Remy Martin V.S.O.P (100cl)",
      description: "Premium cognac",
      price: "Bottle: 27,000br | Glass: 1,25br",
      image: "/remy-martin-vsop-100cl.png",
    },
    {
      name: "Remy Martin X.O (70cl)",
      description: "Extra old cognac",
      price: "Bottle: 79,000br | Glass: 1,799br",
      image: "/remy-martin-xo-70cl.png",
    },
    {
      name: "Beefeater Gin",
      description: "Premium gin",
      price: "Bottle: 11,350br | Glass: 395br",
      image: "/beefeater-gin.png",
    },
    {
      name: "Beefeater Pink Gin (100cl)",
      description: "Pink gin",
      price: "Bottle: 11,350br | Glass: 395br",
      image: "/beefeater-pink-gin-100cl.png",
    },
    {
      name: "Bombay Sapphire (70cl)",
      description: "Premium gin",
      price: "Bottle: 12,250br | Glass: 355br",
      image: "/bombay-sapphire-70cl.png",
    },
    {
      name: "Gordon's Gin",
      description: "Classic gin",
      price: "Bottle: 10,225br | Glass: 375br",
      image: "/gordons-gin.png",
    },
    {
      name: "Bacardi White (100cl)",
      description: "White rum",
      price: "Bottle: 15,200br | Glass: 415br",
      image: "/bacardi-white-100cl.png",
    },
    {
      name: "Bacardi Gold (100cl)",
      description: "Gold rum",
      price: "Bottle: 14,390br | Glass: 379br",
      image: "/bacardi-gold-100cl.png",
    },
    {
      name: "Captain Morgan (100cl)",
      description: "Spiced rum",
      price: "Bottle: 14,290br | Glass: 379br",
      image: "/captain-morgan-100cl.png",
    },
    {
      name: "Malibu (100cl)",
      description: "Coconut rum",
      price: "Bottle: 5,700br | Glass: 225br",
      image: "/malibu-100cl.png",
    },
    {
      name: "J.W Black Label (50cl, 100cl)",
      description: "Premium whiskey",
      price: "Bottle: 6,445br for 50cl/14998br for 100cl | Glass:500br",
      image: "/jw-black-label-50cl-100cl.png",
    },
    {
      name: "J.W Double Black Label (50cl, 100cl)",
      description: "Premium whiskey",
      price: "Bottle: 7,995 for 50cl /17,661br for 100cl | Glass: 425br",
      image: "/jw-double-black-label-50cl-100cl.png",
    },
    {
      name: "J.W Blue Label (100cl)",
      description: "Ultra premium whiskey",
      price: "Bottle: 80,452br | Glass: 3750br",
      image: "/jw-blue-label-100cl.png",
    },
    {
      name: "J.W Gold Label (100cl)",
      description: "Premium whiskey",
      price: "Bottle: 21,012br | Glass: 625br",
      image: "/jw-gold-label-100cl.png",
    },
    {
      name: "J.W Red Label (50cl, 100cl)",
      description: "Classic whiskey",
      price: "Bottle: 5,733 for 50cl/9,907br | Glass: 299br",
      image: "/jw-red-label-50cl-100cl.png",
    },
    {
      name: "Jack Daniel's (50cl, 100cl)",
      description: "Tennessee whiskey",
      price: "Bottle: 4,922/14,280br | Glass: 400br",
      image: "/jack-daniels-50cl-100cl.png",
    },
    {
      name: "Chivas 12 (50cl, 100cl)",
      description: "Premium scotch",
      price: "Bottle: 14,542br | Glass: 425br",
      image: "/chivas-12-50cl-100cl.png",
    },
    {
      name: "Glenfiddich 15 (100cl)",
      description: "Single malt scotch",
      price: "Bottle: 25,636br | Glass: 675br",
      image: "/glenfiddich-15-100cl.png",
    },
    {
      name: "Glenfiddich 18 (75cl)",
      description: "Aged single malt",
      price: "Bottle: 35,411br | Glass: 795br",
      image: "/glenfiddich-18-75cl.png",
    },
    {
      name: "Glenfiddich 21 (70cl)",
      description: "Ultra premium single malt",
      price: "Bottle: 52,094br | Glass: 890br",
      image: "/glenfiddich-21-70cl.png",
    },
    {
      name: "Dimple 15 (100cl)",
      description: "Premium scotch",
      price: "Bottle: 19,833br | Glass: 500br",
      image: "/dimple-15-100cl.png",
    },
    {
      name: "White Horse (100cl)",
      description: "Classic scotch",
      price: "Bottle: 9,255br | Glass: 300br",
      image: "/white-horse-100cl.png",
    },
    {
      name: "Absolute Vodka (50cl, 100cl)",
      description: "Premium vodka",
      price: "Bottle: 4015 for 50cl/7505br for 100 cl| Glass: 300br",
      image: "/absolut-50cl-100cl.png",
    },
    {
      name: "Grey Goose (100cl)",
      description: "Ultra premium vodka",
      price: "Bottle: 11,200br | Glass: 435br",
      image: "/grey-goose-100cl.png",
    },
    {
      name: "Ciroc Blue (100cl)",
      description: "Premium vodka",
      price: "Bottle: 10,675br | Glass: 395br",
      image: "/ciroc-blue-100cl.png",
    },
    {
      name: "Smirnoff (75cl)",
      description: "Classic vodka",
      price: "Bottle: 3,599br | Glass: 225br",
      image: "/smirnoff-75cl.png",
    },
    {
      name: "Stolichnaya Gold (100cl)",
      description: "Premium vodka",
      price: "Bottle: 7,625br | Glass: 360br",
      image: "/stolichnaya-gold-100cl.png",
    },
    {
      name: "Stolichnaya Elite (100cl)",
      description: "Ultra premium vodka",
      price: "Bottle: 11,100br | Glass: 425br",
      image: "/stolichnaya-elite-100cl.png",
    },
    {
      name: "Stolichnaya Vodka (50cl, 75cl)",
      description: "Classic vodka",
      price: "Bottle: 3,955br for 50cl/6,357br for 75cl | Glass: 295br",
      image: "/stolichnaya-vodka-50cl-75cl.png",
    },
    {
      name: "Sky Vodka (100cl)",
      description: "Premium vodka",
      price: "Bottle: 3,557br | Glass: 200br",
      image: "/sky-vodka-100cl.png",
    },
    {
      name: "Russian Standard Vodka (100cl)",
      description: "Premium vodka",
      price: "Bottle: 8,155br | Glass: 325br",
      image: "/russian-standard-vodka-100cl.png",
    },
    {
      name: "Winter Palace",
      description: "Premium vodka",
      price: "Bottle: 4,890br | Glass: 300br",
      image: "/winter-palace.png",
    },
    {
      name: "Ketel One Vodka (75cl)",
      description: "Premium vodka",
      price: "Bottle: 8,000br | Glass: 300br",
      image: "/ketel-one-vodka-75cl.png",
    },
    {
      name: "Baileys Irish (100cl)",
      description: "Irish cream liqueur",
      price: "Bottle: 7,000br | Glass: 250br",
      image: "/baileys-irish-100cl.png",
    },
    {
      name: "Drambuie (100cl)",
      description: "Scotch liqueur",
      price: "Bottle: 8.988br | Glass: 325br",
      image: "/drambuie-100cl.png",
    },
    {
      name: "Cointreau (100cl)",
      description: "Orange liqueur",
      price: "Bottle: 9,100br | Glass: 345br",
      image: "/cointreau-100cl.png",
    },
    {
      name: "Amarula (100cl)",
      description: "Cream liqueur",
      price: "Bottle: 6,765br | Glass: 256br",
      image: "/amarula-100cl.png",
    },
    {
      name: "Sambuca (75cl)",
      description: "Anise liqueur",
      price: "Bottle: 7,015br | Glass: 267br",
      image: "/sambuca-75cl.png",
    },
    {
      name: "Kahlua (100cl)",
      description: "Coffee liqueur",
      price: "Bottle: 6,910br | Glass: 200br",
      image: "/kahlua-100cl.png",
    },
    {
      name: "Jaegermeister (100cl)",
      description: "Herbal liqueur",
      price: "Bottle: 7,999br | Glass: 295br",
      image: "/jaegermeister-100cl.png",
    },
  ],

  "non-alcoholic-drinks": [
    {
      name: "Sparkling Water Small/Medium",
      description: "Refreshing sparkling water",
      price: "71.14/90.90",
      image: "/sparkling-water-small-medium.png",
    },
    {
      name: "Soda/Soft Drinks/Ambo",
      description: "Assorted soft drinks and local beverages",
      price: "102.76",
      image: "/soda-soft-drinks-ambo.png",
    },
    {
      name: "Malt/Non-Alcoholic",
      description: "Non-alcoholic malt beverages",
      price: "134.38",
      image: "/malt-non-alcoholic.png",
    },
    {
      name: "Red Bull",
      description: "Energy drink",
      price: "700",
      image: "/red-bull.png",
    },
  ],
  "hot-drinks": [
    {
      name: "Tea",
      description: "Traditional tea",
      price: "94.86",
      image: "/tea.png",
    },
    {
      name: "Coffee",
      description: "Freshly brewed coffee",
      price: "134.38",
      image: "/coffee.png",
    },
    {
      name: "Café Americano",
      description: "Classic American coffee",
      price: "150",
      image: "/café-americano.png",
    },
    {
      name: "Macchiato",
      description: "Espresso with steamed milk",
      price: "150.19",
      image: "/macchiato.png",
    },
    {
      name: "Large Macchiato",
      description: "Large macchiato",
      price: "197.62",
      image: "/large-macchiato.png",
    },
    {
      name: "Teas with Coffee",
      description: "Tea and coffee blend",
      price: "118.57",
      image: "/teas-with-coffee.png",
    },
    {
      name: "Mocca",
      description: "Chocolate coffee drink",
      price: "125",
      image: "/mocca.png",
    },
    {
      name: "Coffee Latte",
      description: "Espresso with steamed milk",
      price: "135",
      image: "/coffee-latte.png",
    },
    {
      name: "Double Espresso",
      description: "Strong double shot espresso",
      price: "237",
      image: "/double-espresso.png",
    },
    {
      name: "Masala Tea",
      description: "Spiced Indian tea",
      price: "237.14",
      image: "/masala-tea.png",
    },
    {
      name: "Fasting Macchiato",
      description: "Special fasting macchiato",
      price: "237.14",
      image: "/fasting-macchiato.png",
    },
    {
      name: "Hot Chocolate",
      description: "Rich hot chocolate",
      price: "197.62",
      image: "/hot-chocolate.png",
    },
    {
      name: "Tea with Milk",
      description: "Tea with fresh milk",
      price: "210",
      image: "/tea-with-milk.png",
    },
    {
      name: "Cappuccino",
      description: "Espresso with foamed milk",
      price: "237.14",
      image: "/cappuccino.png",
    },
    {
      name: "Milk",
      description: "Fresh milk",
      price: "158.10",
      image: "/milk.png",
    },
    {
      name: "Coffee with Milk",
      description: "Coffee with fresh milk",
      price: "237.14",
      image: "/coffee-with-milk.png",
    },
    {
      name: "Special Tea",
      description: "House special tea blend",
      price: "237.14",
      image: "/special-tea.png",
    },
    {
      name: "Fresh Ginger Tea",
      description: "Fresh ginger tea",
      price: "237.14",
      image: "/fresh-ginger-tea.png",
    },
  ],
  "cocktails and mocktails": [
    // {
    //   name: "Mumbai sour",
    //   description: "",
    //   price: "715br",
    //   image: "/Mumbai sour.webp",
    // },
    // {
    //   name: "Gulaab Sour",
    //   description: "",
    //   price: "715br",
    //   image: "/Gulaab Sour.webp",
    // },
    // {
    //   name: "Fennel Collins",
    //   description: "",
    //   price: "715br",
    //   image: "/Fennel Collins.webp",
    // },
    // {
    //   name: "Jaljeera Mojito",
    //   description: "",
    //   price: "715br",
    //   image: "/Jaljeera Mojito.webp",
    // },
    // {
    //   name: "Dehli Martini",
    //   description: "",
    //   price: "715br",
    //   image: "/Dehli Martini.webp",
    // },
    // {
    //   name: "John Collins",
    //   description: "",
    //   price: "695br",
    //   image: "/John Collins.webp",
    // },
    // {
    //   name: "Whiskey Sour",
    //   description: "",
    //   price: "695br",
    //   image: "/Whiskey Sour.webp",
    // },
    // {
    //   name: "Americano",
    //   description: "",
    //   price: "715br",
    //   image: "/Americano.webp",
    // },
    // {
    //   name: "Mojito",
    //   description: "",
    //   price: "695br",
    //   image: "/Mojito.webp",
    // },
    // {
    //   name: "Rusty Nails",
    //   description: "",
    //   price: "695br",
    //   image: "/Rusty Nails.webp",
    // },
    // {
    //   name: "Godfather",
    //   description: "",
    //   price: "695br",
    //   image: "/Godfather.webp",
    // },
    {
      name: "Vodka Sour",
      description: "Vodka, lemon juice, simple syrup",
      price: "775",
      image: "/Vodka Sour.webp",
    },
    {
      name: "Rum Sour",
      description: "Rum, lemon juice, simple syrup",
      price: "795",
      image: "/Rum Sour.webp",
    },
    {
      name: "Negroni",
      description: "Gin, Campari, Martini Rosso",
      price: "799",
      image: "/Negroni.webp",
    },
    {
      name: "Long Island",
      description: "Vodka, rum, gin, triple sec, lemon juice, simple syrup",
      price: "999",
      image: "/Long Island.webp",
    },
    {
      name: "B-52",
      description: "",
      price: "735br",
      image: "/B-52.webp",
    },
    {
      name: "Chocolate martini",
      description: "",
      price: "875br",
      image: "/Chocolate martini.webp",
    },
    {
      name: "Tequilla Sunrise",
      description: "",
      price: "715br",
      image: "/Tequilla Sunrise.webp",
    },
    {
      name: "Gin Fizz",
      description: "",
      price: "655br",
      image: "/Gin Fizz.webp",
    },
    {
      name: "Sangria",
      description: "",
      price: "950br",
      image: "/Sangria.webp",
    },
    {
      name: "Black Russia",
      description: "",
      price: "635br",
      image: "/Black Russia.webp",
    },

    {
      name: "Blue Monday",
      description: "",
      price: "890br",
      image: "/Blue Monday.webp",
    },
    {
      name: "Kamikaze",
      description: "",
      price: "875br",
      image: "/Kamikaze.webp",
    },
    {
      name: "Virgin Mojito",
      description:
        "Tonic water, sprite, soda water, lemon juice, sugar, mint leaves",
      price: "350",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Virgin Sour",
      description: "Watermelon juice, orange juice, lemon juice, simple syrup",
      price: "350",
      image: "/Virgin sour.webp",
    },
    // {
    //   name: "Tejito",
    //   description: "",
    //   price: "695br",
    //   image: "/Tejito.webp",
    // },
  ],
  // drinks: [
  //   {
  //     name: "Sparkling Water Small/Medium",
  //     description: "Refreshing sparkling water",
  //     price: "71.14/90.90",
  //     image: "/sparkling-water-small-medium.png",
  //   },
  //   {
  //     name: "Soda/Soft Drinks/Ambo",
  //     description: "Assorted soft drinks and local beverages",
  //     price: "102.76",
  //     image: "/soda-soft-drinks-ambo.png",
  //   },
  //   {
  //     name: "Malt/Non-Alcoholic",
  //     description: "Non-alcoholic malt beverages",
  //     price: "134.38",
  //     image: "/malt-non-alcoholic.png",
  //   },
  //   {
  //     name: "Local Small Beer",
  //     description: "Local brewery beer",
  //     price: "134.38",
  //     image: "/local-small-beer.png",
  //   },
  //   {
  //     name: "Arada Beer",
  //     description: "Premium local beer",
  //     price: "150",
  //     image: "/arada-beer.png",
  //   },
  //   {
  //     name: "Heineken",
  //     description: "International premium beer",
  //     price: "169.96",
  //     image: "/heineken.png",
  //   },
  //   {
  //     name: "Red Bull",
  //     description: "Energy drink",
  //     price: "700",
  //     image: "/red-bull.png",
  //   },
  //   {
  //     name: "Alvinde Reserva Syrah (75cl)",
  //     description: "Premium imported red wine",
  //     price: "3,461",
  //     image: "/alvinde-reserva-syrah-75cl.png",
  //   },
  //   {
  //     name: "Louis Eschenauer (75cl)",
  //     description: "Fine imported wine",
  //     price: "5,509",
  //     image: "/louis-eschenauer-75cl.png",
  //   },
  //   {
  //     name: "Grand Epoque (75cl)",
  //     description: "Elegant imported wine",
  //     price: "4,798",
  //     image: "/grand-epoque-75cl.png",
  //   },
  //   {
  //     name: "Lamothe Parrot (75cl)",
  //     description: "Premium imported wine",
  //     price: "5,467",
  //     image: "/lamothe-parrot-75cl.png",
  //   },
  //   {
  //     name: "Sunrise (75cl)",
  //     description: "Smooth imported wine",
  //     price: "3,350",
  //     image: "/sunrise-75cl.png",
  //   },
  //   {
  //     name: "Western Cellar Chardonnay (75cl)",
  //     description: "Premium white wine",
  //     price: "6,067",
  //     image: "/western-cellar-chardonnay-75cl.png",
  //   },
  //   {
  //     name: "Baron d'Arignac (75cl)",
  //     description: "Classic imported wine",
  //     price: "2,937",
  //     image: "/baron-darignac-75cl.png",
  //   },
  //   {
  //     name: "Alvinde Reserva Chardonnay (75cl)",
  //     description: "Premium white wine",
  //     price: "4,842",
  //     image: "/alvinde-reserva-chardonnay-75cl.png",
  //   },
  //   {
  //     name: "Cellar Cask Select (75cl)",
  //     description: "Select imported wine",
  //     price: "5,546",
  //     image: "/cellar-cask-select-75cl.png",
  //   },
  //   {
  //     name: "Two Oceans Chardonnay",
  //     description: "South African white wine",
  //     price: "3,995",
  //     image: "/two-oceans-chardonnay.png",
  //   },
  //   {
  //     name: "Long Champ (75cl)",
  //     description: "Premium imported wine",
  //     price: "5,396",
  //     image: "/long-champ-75cl.png",
  //   },
  //   {
  //     name: "Acacia Dry (75cl)",
  //     description: "Local dry wine",
  //     price: "1,995",
  //     image: "/acacia-dry-75cl.png",
  //   },
  //   {
  //     name: "Acacia Medium Sweet (75cl)",
  //     description: "Local medium sweet wine",
  //     price: "1,995",
  //     image: "/acacia-medium-sweet-75cl.png",
  //   },
  //   {
  //     name: "Rift Valley Cuvee Prestige Chardonnay (75cl)",
  //     description: "Premium local white wine",
  //     price: "2,390",
  //     image: "/rift-valley-cuvee-prestige-chardonnay-75cl.png",
  //   },
  //   {
  //     name: "Rift Valley Merlot (75cl)",
  //     description: "Local red wine",
  //     price: "2,390",
  //     image: "/rift-valley-merlot-75cl.png",
  //   },
  //   {
  //     name: "Rift Valley Syrah (75cl)",
  //     description: "Local red wine",
  //     price: "2,390",
  //     image: "/rift-valley-syrah-75cl.png",
  //   },
  //   {
  //     name: "Glass of Wine",
  //     description: "Single glass of wine",
  //     price: "475",
  //     image: "/glass-of-wine.png",
  //   },
  //   {
  //     name: "Camus V.S.O.P (100cl)",
  //     description: "Premium cognac",
  //     price: "650 / 20.304",
  //     image: "/camus-vsop-100cl.png",
  //   },
  //   {
  //     name: "Courvoisier V.S (70cl)",
  //     description: "Fine cognac",
  //     price: "620 / 20.270",
  //     image: "/courvoisier-vs-70cl.png",
  //   },
  //   {
  //     name: "Camus Cognac X.O (70cl)",
  //     description: "Extra old cognac",
  //     price: "1125 / 65,500",
  //     image: "/camus-cognac-xo-70cl.png",
  //   },
  //   {
  //     name: "Remy Martin V.S.O.P (100cl)",
  //     description: "Premium cognac",
  //     price: "1,025 / 24,956",
  //     image: "/remy-martin-vsop-100cl.png",
  //   },
  //   {
  //     name: "Remy Martin X.O (70cl)",
  //     description: "Extra old cognac",
  //     price: "1,590 / 79,000",
  //     image: "/remy-martin-xo-70cl.png",
  //   },
  //   {
  //     name: "Beefeater Gin",
  //     description: "Premium gin",
  //     price: "355 / 1.200",
  //     image: "/beefeater-gin.png",
  //   },
  //   {
  //     name: "Beefeater Pink Gin (100cl)",
  //     description: "Pink gin",
  //     price: "355 / 10,975",
  //     image: "/beefeater-pink-gin-100cl.png",
  //   },
  //   {
  //     name: "Bombay Sapphire (70cl)",
  //     description: "Premium gin",
  //     price: "355 / 12,100",
  //     image: "/bombay-sapphire-70cl.png",
  //   },
  //   {
  //     name: "Gordon's Gin",
  //     description: "Classic gin",
  //     price: "315 / 9,997",
  //     image: "/gordons-gin.png",
  //   },
  //   {
  //     name: "Bacardi White (100cl)",
  //     description: "White rum",
  //     price: "370 / 15.011",
  //     image: "/bacardi-white-100cl.png",
  //   },
  //   {
  //     name: "Bacardi Gold (100cl)",
  //     description: "Gold rum",
  //     price: "350 / 14.221",
  //     image: "/bacardi-gold-100cl.png",
  //   },
  //   {
  //     name: "Captain Morgan (100cl)",
  //     description: "Spiced rum",
  //     price: "350 / 14,150",
  //     image: "/captain-morgan-100cl.png",
  //   },
  //   {
  //     name: "Malibu (100cl)",
  //     description: "Coconut rum",
  //     price: "200 / 5,525",
  //     image: "/malibu-100cl.png",
  //   },
  //   {
  //     name: "J.W Black Label (50cl, 100cl)",
  //     description: "Premium whiskey",
  //     price: "375 / 7.700/6.995",
  //     image: "/jw-black-label-50cl-100cl.png",
  //   },
  //   {
  //     name: "J.W Double Black Label (50cl, 100cl)",
  //     description: "Premium whiskey",
  //     price: "405 / 7.905/20.000",
  //     image: "/jw-double-black-label-50cl-100cl.png",
  //   },
  //   {
  //     name: "J.W Blue Label (100cl)",
  //     description: "Ultra premium whiskey",
  //     price: "4154 / 97,997",
  //     image: "/jw-blue-label-100cl.png",
  //   },
  //   {
  //     name: "J.W Gold Label (100cl)",
  //     description: "Premium whiskey",
  //     price: "555 / 23,990",
  //     image: "/jw-gold-label-100cl.png",
  //   },
  //   {
  //     name: "J.W Red Label (50cl, 100cl)",
  //     description: "Classic whiskey",
  //     price: "295 / 6.933/11.000",
  //     image: "/jw-red-label-50cl-100cl.png",
  //   },
  //   {
  //     name: "Jack Daniel's (50cl, 100cl)",
  //     description: "Tennessee whiskey",
  //     price: "355 / 6.500/15.000",
  //     image: "/jack-daniels-50cl-100cl.png",
  //   },
  //   {
  //     name: "Chivas 12 (50cl, 100cl)",
  //     description: "Premium scotch",
  //     price: "395 / 15.700",
  //     image: "/chivas-12-50cl-100cl.png",
  //   },
  //   {
  //     name: "Glenfiddich 15 (100cl)",
  //     description: "Single malt scotch",
  //     price: "700 / 28,500",
  //     image: "/glenfiddich-15-100cl.png",
  //   },
  //   {
  //     name: "Glenfiddich 18 (75cl)",
  //     description: "Aged single malt",
  //     price: "1000 / 39,900",
  //     image: "/glenfiddich-18-75cl.png",
  //   },
  //   {
  //     name: "Glenfiddich 21 (70cl)",
  //     description: "Ultra premium single malt",
  //     price: "1100 / 59,900",
  //     image: "/glenfiddich-21-70cl.png",
  //   },
  //   {
  //     name: "Dimple 15 (100cl)",
  //     description: "Premium scotch",
  //     price: "455 / 27,500",
  //     image: "/dimple-15-100cl.png",
  //   },
  //   {
  //     name: "White Horse (100cl)",
  //     description: "Classic scotch",
  //     price: "250 / 8,900",
  //     image: "/white-horse-100cl.png",
  //   },
  //   {
  //     name: "Absolut (50cl, 100cl)",
  //     description: "Premium vodka",
  //     price: "275 / 3.950/6.970",
  //     image: "/absolut-50cl-100cl.png",
  //   },
  //   {
  //     name: "Grey Goose (100cl)",
  //     description: "Ultra premium vodka",
  //     price: "399 / 10,997",
  //     image: "/grey-goose-100cl.png",
  //   },
  //   {
  //     name: "Ciroc Blue (100cl)",
  //     description: "Premium vodka",
  //     price: "275 / 10,500",
  //     image: "/ciroc-blue-100cl.png",
  //   },
  //   {
  //     name: "Smirnoff (75cl)",
  //     description: "Classic vodka",
  //     price: "200 / 3,475",
  //     image: "/smirnoff-75cl.png",
  //   },
  //   {
  //     name: "Stolichnaya Gold (100cl)",
  //     description: "Premium vodka",
  //     price: "315 / 7,509",
  //     image: "/stolichnaya-gold-100cl.png",
  //   },
  //   {
  //     name: "Stolichnaya Elite (100cl)",
  //     description: "Ultra premium vodka",
  //     price: "367 / 10,999",
  //     image: "/stolichnaya-elite-100cl.png",
  //   },
  //   {
  //     name: "Stolichnaya Vodka (50cl, 75cl)",
  //     description: "Classic vodka",
  //     price: "295 / 3.900/6.195",
  //     image: "/stolichnaya-vodka-50cl-75cl.png",
  //   },
  //   {
  //     name: "Sky Vodka (100cl)",
  //     description: "Premium vodka",
  //     price: "200 / 3,870",
  //     image: "/sky-vodka-100cl.png",
  //   },
  //   {
  //     name: "Russian Standard Vodka (100cl)",
  //     description: "Premium vodka",
  //     price: "295 / 8,015",
  //     image: "/russian-standard-vodka-100cl.png",
  //   },
  //   {
  //     name: "Winter Palace",
  //     description: "Premium vodka",
  //     price: "200 / 4,764",
  //     image: "/winter-palace.png",
  //   },
  //   {
  //     name: "Ketel One Vodka (75cl)",
  //     description: "Premium vodka",
  //     price: "275 / 7,897",
  //     image: "/ketel-one-vodka-75cl.png",
  //   },
  //   {
  //     name: "Baileys Irish (100cl)",
  //     description: "Irish cream liqueur",
  //     price: "250 / 7,000",
  //     image: "/baileys-irish-100cl.png",
  //   },
  //   {
  //     name: "Drambuie (100cl)",
  //     description: "Scotch liqueur",
  //     price: "325 / 8,988",
  //     image: "/drambuie-100cl.png",
  //   },
  //   {
  //     name: "Cointreau (100cl)",
  //     description: "Orange liqueur",
  //     price: "345 / 9,100",
  //     image: "/cointreau-100cl.png",
  //   },
  //   {
  //     name: "Amarula (100cl)",
  //     description: "Cream liqueur",
  //     price: "256 / 6,765",
  //     image: "/amarula-100cl.png",
  //   },
  //   {
  //     name: "Sambuca (75cl)",
  //     description: "Anise liqueur",
  //     price: "267 / 7,015",
  //     image: "/sambuca-75cl.png",
  //   },
  //   {
  //     name: "Kahlua (100cl)",
  //     description: "Coffee liqueur",
  //     price: "200 / 6,910",
  //     image: "/kahlua-100cl.png",
  //   },
  //   {
  //     name: "Jaegermeister (100cl)",
  //     description: "Herbal liqueur",
  //     price: "295 / 7,999",
  //     image: "/jaegermeister-100cl.png",
  //   },
  // ],
  // cocktails: [

  //   {
  //     name: "Gin Fizz",
  //     description:
  //       "50ml gin, 25ml lemon juice, 2 tsp sugar syrup, ice, sparkling water, lemon slice",
  //     price: "655",
  //     image: "/gin-fizz.png",
  //   },
  //   {
  //     name: "Black Russian",
  //     description: "Vodka, Kahlua",
  //     price: "695",
  //     image: "/black-russian.png",
  //   },
  //   {
  //     name: "Tequila Sunrise",
  //     description:
  //       "1 ½ oz (3 parts) tequila, ½ oz (1 part) grenadine syrup, 3 oz (6 parts) orange juices",
  //     price: "545",
  //     image: "/tequila-sunrise.png",
  //   },
  //   {
  //     name: "Blue Monday",
  //     description:
  //       "1.5 oz vodka, ½ ounces Cointreau, or triple sec, ½ ounce Blue curacao",
  //     price: "825",
  //     image: "/blue-monday.png",
  //   },
  //   {
  //     name: "B-52",
  //     description: "⅔ Coffee liqueur, Kahlua, ⅔ bailey's, ⅔ Cointreau",
  //     price: "605",
  //     image: "/b-52.png",
  //   },
  //   {
  //     name: "Chocolate Martini",
  //     description:
  //       "4 oz bailey's Irish cream, 4 oz chocolate liqueur, 8 oz vodka, 3 tsp chocolate syrup or ganache",
  //     price: "905",
  //     image: "/chocolate-martini.png",
  //   },
  //   {
  //     name: "Sangria",
  //     description: "Red wine, gin, vodka, fresh fruits",
  //     price: "825",
  //     image: "/sangria.png",
  //   },
  //   {
  //     name: "Kamikaze",
  //     description:
  //       "1 ½ ounces vodka, ½ ounce triple sec, Dash of lime juice: Lime",
  //     price: "615",
  //     image: "/kamikaze.png",
  //   },
  //   {
  //     name: "Virgin Mojito",
  //     description:
  //       "Tonic water, sprite, soda water, lemon juice, sugar, mint leaves",
  //     price: "350",
  //     image: "/virgin-mojito.png",
  //   },
  //   {
  //     name: "Virgin Sour",
  //     description: "Watermelon juice, orange juice, lemon juice, simple syrup",
  //     price: "350",
  //     image: "/virgin-sour.png",
  //   },
  // ],
  // "hot-drinks": [
  //   {
  //     name: "Tea",
  //     description: "Traditional tea",
  //     price: "79.05",
  //     image: "/tea.png",
  //   },
  //   {
  //     name: "Coffee",
  //     description: "Freshly brewed coffee",
  //     price: "118.57",
  //     image: "/coffee.png",
  //   },
  //   {
  //     name: "Café Americano",
  //     description: "Classic American coffee",
  //     price: "125",
  //     image: "/café-americano.png",
  //   },
  //   {
  //     name: "Macchiato",
  //     description: "Espresso with steamed milk",
  //     price: "150.19",
  //     image: "/macchiato.png",
  //   },
  //   {
  //     name: "Large Macchiato",
  //     description: "Large macchiato",
  //     price: "197.62",
  //     image: "/large-macchiato.png",
  //   },
  //   {
  //     name: "Teas with Coffee",
  //     description: "Tea and coffee blend",
  //     price: "94.86",
  //     image: "/teas-with-coffee.png",
  //   },
  //   {
  //     name: "Mocca",
  //     description: "Chocolate coffee drink",
  //     price: "125",
  //     image: "/mocca.png",
  //   },
  //   {
  //     name: "Coffee Latte",
  //     description: "Espresso with steamed milk",
  //     price: "118.57",
  //     image: "/coffee-latte.png",
  //   },
  //   {
  //     name: "Double Espresso",
  //     description: "Strong double shot espresso",
  //     price: "197.62",
  //     image: "/double-espresso.png",
  //   },
  //   {
  //     name: "Masala Tea",
  //     description: "Spiced Indian tea",
  //     price: "197.62",
  //     image: "/masala-tea.png",
  //   },
  //   {
  //     name: "Fasting Macchiato",
  //     description: "Special fasting macchiato",
  //     price: "197.62",
  //     image: "/fasting-macchiato.png",
  //   },
  //   {
  //     name: "Hot Chocolate",
  //     description: "Rich hot chocolate",
  //     price: "197.62",
  //     image: "/hot-chocolate.png",
  //   },
  //   {
  //     name: "Tea with Milk",
  //     description: "Tea with fresh milk",
  //     price: "146.24",
  //     image: "/tea-with-milk.png",
  //   },
  //   {
  //     name: "Cappuccino",
  //     description: "Espresso with foamed milk",
  //     price: "197.62",
  //     image: "/cappuccino.png",
  //   },
  //   {
  //     name: "Milk",
  //     description: "Fresh milk",
  //     price: "158.10",
  //     image: "/milk.png",
  //   },
  //   {
  //     name: "Coffee with Milk",
  //     description: "Coffee with fresh milk",
  //     price: "197.62",
  //     image: "/coffee-with-milk.png",
  //   },
  //   {
  //     name: "Special Tea",
  //     description: "House special tea blend",
  //     price: "197.62",
  //     image: "/special-tea.png",
  //   },
  //   {
  //     name: "Fresh Ginger Tea",
  //     description: "Fresh ginger tea",
  //     price: "197.62",
  //     image: "/fresh-ginger-tea.png",
  //   },
  // ],
  // wine: [
  //   {
  //     name: "Alvinde Reserva Syrah (75cl)",
  //     description: "Premium imported red wine",
  //     price: "3,461",
  //     image: "/alvinde-reserva-syrah-75cl.png",
  //   },
  //   {
  //     name: "Louis Eschenauer (75cl)",
  //     description: "Fine imported wine",
  //     price: "5,509",
  //     image: "/louis-eschenauer-75cl.png",
  //   },
  //   {
  //     name: "Grand Epoque (75cl)",
  //     description: "Elegant imported wine",
  //     price: "4,798",
  //     image: "/grand-epoque-75cl.png",
  //   },
  //   {
  //     name: "Lamothe Parrot (75cl)",
  //     description: "Premium imported wine",
  //     price: "5,467",
  //     image: "/lamothe-parrot-75cl.png",
  //   },
  //   {
  //     name: "Sunrise (75cl)",
  //     description: "Smooth imported wine",
  //     price: "3,350",
  //     image: "/sunrise-75cl.png",
  //   },
  //   {
  //     name: "Western Cellar Chardonnay (75cl)",
  //     description: "Premium white wine",
  //     price: "6,067",
  //     image: "/western-cellar-chardonnay-75cl.png",
  //   },
  //   {
  //     name: "Baron d'Arignac (75cl)",
  //     description: "Classic imported wine",
  //     price: "2,937",
  //     image: "/baron-darignac-75cl.png",
  //   },
  //   {
  //     name: "Alvinde Reserva Chardonnay (75cl)",
  //     description: "Premium white wine",
  //     price: "4,842",
  //     image: "/alvinde-reserva-chardonnay-75cl.png",
  //   },
  //   {
  //     name: "Cellar Cask Select (75cl)",
  //     description: "Select imported wine",
  //     price: "5,546",
  //     image: "/cellar-cask-select-75cl.png",
  //   },
  //   {
  //     name: "Two Oceans Chardonnay",
  //     description: "South African white wine",
  //     price: "3,995",
  //     image: "/two-oceans-chardonnay.png",
  //   },
  //   {
  //     name: "Long Champ (75cl)",
  //     description: "Premium imported wine",
  //     price: "5,396",
  //     image: "/long-champ-75cl.png",
  //   },
  //   {
  //     name: "Acacia Dry (75cl)",
  //     description: "Local dry wine",
  //     price: "1,995",
  //     image: "/acacia-dry-75cl.png",
  //   },
  //   {
  //     name: "Acacia Medium Sweet (75cl)",
  //     description: "Local medium sweet wine",
  //     price: "1,995",
  //     image: "/acacia-medium-sweet-75cl.png",
  //   },
  //   {
  //     name: "Rift Valley Cuvee Prestige Chardonnay (75cl)",
  //     description: "Premium local white wine",
  //     price: "2,390",
  //     image: "/rift-valley-cuvee-prestige-chardonnay-75cl.png",
  //   },
  //   {
  //     name: "Rift Valley Merlot (75cl)",
  //     description: "Local red wine",
  //     price: "2,390",
  //     image: "/rift-valley-merlot-75cl.png",
  //   },
  //   {
  //     name: "Rift Valley Syrah (75cl)",
  //     description: "Local red wine",
  //     price: "2,390",
  //     image: "/rift-valley-syrah-75cl.png",
  //   },
  //   {
  //     name: "Glass of Wine",
  //     description: "Single glass of wine",
  //     price: "475",
  //     image: "/glass-of-wine.png",
  //   },
  // ],
  // alcohols: [
  //   {
  //     name: "Camus V.S.O.P (100cl)",
  //     description: "Premium cognac",
  //     price: "650 / 20.304",
  //     image: "/camus-vsop-100cl.png",
  //   },
  //   {
  //     name: "Courvoisier V.S (70cl)",
  //     description: "Fine cognac",
  //     price: "620 / 20.270",
  //     image: "/courvoisier-vs-70cl.png",
  //   },
  //   {
  //     name: "Camus Cognac X.O (70cl)",
  //     description: "Extra old cognac",
  //     price: "1125 / 65,500",
  //     image: "/camus-cognac-xo-70cl.png",
  //   },
  //   {
  //     name: "Remy Martin V.S.O.P (100cl)",
  //     description: "Premium cognac",
  //     price: "1,025 / 24,956",
  //     image: "/remy-martin-vsop-100cl.png",
  //   },
  //   {
  //     name: "Remy Martin X.O (70cl)",
  //     description: "Extra old cognac",
  //     price: "1,590 / 79,000",
  //     image: "/remy-martin-xo-70cl.png",
  //   },
  //   {
  //     name: "Beefeater Gin",
  //     description: "Premium gin",
  //     price: "355 / 1.200",
  //     image: "/beefeater-gin.png",
  //   },
  //   {
  //     name: "Beefeater Pink Gin (100cl)",
  //     description: "Pink gin",
  //     price: "355 / 10,975",
  //     image: "/beefeater-pink-gin-100cl.png",
  //   },
  //   {
  //     name: "Bombay Sapphire (70cl)",
  //     description: "Premium gin",
  //     price: "355 / 12,100",
  //     image: "/bombay-sapphire-70cl.png",
  //   },
  //   {
  //     name: "Gordon's Gin",
  //     description: "Classic gin",
  //     price: "315 / 9,997",
  //     image: "/gordons-gin.png",
  //   },
  //   {
  //     name: "Bacardi White (100cl)",
  //     description: "White rum",
  //     price: "370 / 15.011",
  //     image: "/bacardi-white-100cl.png",
  //   },
  //   {
  //     name: "Bacardi Gold (100cl)",
  //     description: "Gold rum",
  //     price: "350 / 14.221",
  //     image: "/bacardi-gold-100cl.png",
  //   },
  //   {
  //     name: "Captain Morgan (100cl)",
  //     description: "Spiced rum",
  //     price: "350 / 14,150",
  //     image: "/captain-morgan-100cl.png",
  //   },
  //   {
  //     name: "Malibu (100cl)",
  //     description: "Coconut rum",
  //     price: "200 / 5,525",
  //     image: "/malibu-100cl.png",
  //   },
  //   {
  //     name: "J.W Black Label (50cl, 100cl)",
  //     description: "Premium whiskey",
  //     price: "375 / 7.700/6.995",
  //     image: "/jw-black-label-50cl-100cl.png",
  //   },
  //   {
  //     name: "J.W Double Black Label (50cl, 100cl)",
  //     description: "Premium whiskey",
  //     price: "405 / 7.905/20.000",
  //     image: "/jw-double-black-label-50cl-100cl.png",
  //   },
  //   {
  //     name: "J.W Blue Label (100cl)",
  //     description: "Ultra premium whiskey",
  //     price: "4154 / 97,997",
  //     image: "/jw-blue-label-100cl.png",
  //   },
  //   {
  //     name: "J.W Gold Label (100cl)",
  //     description: "Premium whiskey",
  //     price: "555 / 23,990",
  //     image: "/jw-gold-label-100cl.png",
  //   },
  //   {
  //     name: "J.W Red Label (50cl, 100cl)",
  //     description: "Classic whiskey",
  //     price: "295 / 6.933/11.000",
  //     image: "/jw-red-label-50cl-100cl.png",
  //   },
  //   {
  //     name: "Jack Daniel's (50cl, 100cl)",
  //     description: "Tennessee whiskey",
  //     price: "355 / 6.500/15.000",
  //     image: "/jack-daniels-50cl-100cl.png",
  //   },
  //   {
  //     name: "Chivas 12 (50cl, 100cl)",
  //     description: "Premium scotch",
  //     price: "395 / 15.700",
  //     image: "/chivas-12-50cl-100cl.png",
  //   },
  //   {
  //     name: "Glenfiddich 15 (100cl)",
  //     description: "Single malt scotch",
  //     price: "700 / 28,500",
  //     image: "/glenfiddich-15-100cl.png",
  //   },
  //   {
  //     name: "Glenfiddich 18 (75cl)",
  //     description: "Aged single malt",
  //     price: "1000 / 39,900",
  //     image: "/glenfiddich-18-75cl.png",
  //   },
  //   {
  //     name: "Glenfiddich 21 (70cl)",
  //     description: "Ultra premium single malt",
  //     price: "1100 / 59,900",
  //     image: "/glenfiddich-21-70cl.png",
  //   },
  //   {
  //     name: "Dimple 15 (100cl)",
  //     description: "Premium scotch",
  //     price: "455 / 27,500",
  //     image: "/dimple-15-100cl.png",
  //   },
  //   {
  //     name: "White Horse (100cl)",
  //     description: "Classic scotch",
  //     price: "250 / 8,900",
  //     image: "/white-horse-100cl.png",
  //   },
  //   {
  //     name: "Absolut (50cl, 100cl)",
  //     description: "Premium vodka",
  //     price: "275 / 3.950/6.970",
  //     image: "/absolut-50cl-100cl.png",
  //   },
  //   {
  //     name: "Grey Goose (100cl)",
  //     description: "Ultra premium vodka",
  //     price: "399 / 10,997",
  //     image: "/grey-goose-100cl.png",
  //   },
  //   {
  //     name: "Ciroc Blue (100cl)",
  //     description: "Premium vodka",
  //     price: "275 / 10,500",
  //     image: "/ciroc-blue-100cl.png",
  //   },
  //   {
  //     name: "Smirnoff (75cl)",
  //     description: "Classic vodka",
  //     price: "200 / 3,475",
  //     image: "/smirnoff-75cl.png",
  //   },
  //   {
  //     name: "Stolichnaya Gold (100cl)",
  //     description: "Premium vodka",
  //     price: "315 / 7,509",
  //     image: "/stolichnaya-gold-100cl.png",
  //   },
  //   {
  //     name: "Stolichnaya Elite (100cl)",
  //     description: "Ultra premium vodka",
  //     price: "367 / 10,999",
  //     image: "/stolichnaya-elite-100cl.png",
  //   },
  //   {
  //     name: "Stolichnaya Vodka (50cl, 75cl)",
  //     description: "Classic vodka",
  //     price: "295 / 3.900/6.195",
  //     image: "/stolichnaya-vodka-50cl-75cl.png",
  //   },
  //   {
  //     name: "Sky Vodka (100cl)",
  //     description: "Premium vodka",
  //     price: "200 / 3,870",
  //     image: "/sky-vodka-100cl.png",
  //   },
  //   {
  //     name: "Russian Standard Vodka (100cl)",
  //     description: "Premium vodka",
  //     price: "295 / 8,015",
  //     image: "/russian-standard-vodka-100cl.png",
  //   },
  //   {
  //     name: "Winter Palace",
  //     description: "Premium vodka",
  //     price: "200 / 4,764",
  //     image: "/winter-palace.png",
  //   },
  //   {
  //     name: "Ketel One Vodka (75cl)",
  //     description: "Premium vodka",
  //     price: "275 / 7,897",
  //     image: "/ketel-one-vodka-75cl.png",
  //   },
  //   {
  //     name: "Baileys Irish (100cl)",
  //     description: "Irish cream liqueur",
  //     price: "250 / 7,000",
  //     image: "/baileys-irish-100cl.png",
  //   },
  //   {
  //     name: "Drambuie (100cl)",
  //     description: "Scotch liqueur",
  //     price: "325 / 8,988",
  //     image: "/drambuie-100cl.png",
  //   },
  //   {
  //     name: "Cointreau (100cl)",
  //     description: "Orange liqueur",
  //     price: "345 / 9,100",
  //     image: "/cointreau-100cl.png",
  //   },
  //   {
  //     name: "Amarula (100cl)",
  //     description: "Cream liqueur",
  //     price: "256 / 6,765",
  //     image: "/amarula-100cl.png",
  //   },
  //   {
  //     name: "Sambuca (75cl)",
  //     description: "Anise liqueur",
  //     price: "267 / 7,015",
  //     image: "/sambuca-75cl.png",
  //   },
  //   {
  //     name: "Kahlua (100cl)",
  //     description: "Coffee liqueur",
  //     price: "200 / 6,910",
  //     image: "/kahlua-100cl.png",
  //   },
  //   {
  //     name: "Jaegermeister (100cl)",
  //     description: "Herbal liqueur",
  //     price: "295 / 7,999",
  //     image: "/jaegermeister-100cl.png",
  //   },
  // ],
  // cocktails: [
  //   {
  //     name: "Vodka Sour",
  //     description: "Vodka, lemon juice, simple syrup",
  //     price: "595",
  //     image: "/vodka-sour.png",
  //   },
  //   {
  //     name: "Rum Sour",
  //     description: "Rum, lemon juice, simple syrup",
  //     price: "595",
  //     image: "/rum-sour.png",
  //   },
  //   {
  //     name: "Negroni",
  //     description: "Gin, Campari, Martini Rosso",
  //     price: "655",
  //     image: "/negroni.png",
  //   },
  //   {
  //     name: "Long Island",
  //     description: "Vodka, rum, gin, triple sec, lemon juice, simple syrup",
  //     price: "655",
  //     image: "/long-island.png",
  //   },
  //   {
  //     name: "Gin Fizz",
  //     description:
  //       "50ml gin, 25ml lemon juice, 2 tsp sugar syrup, ice, sparkling water, lemon slice",
  //     price: "655",
  //     image: "/gin-fizz.png",
  //   },
  //   {
  //     name: "Black Russian",
  //     description: "Vodka, Kahlua",
  //     price: "695",
  //     image: "/black-russian.png",
  //   },
  //   {
  //     name: "Tequila Sunrise",
  //     description:
  //       "1 ½ oz (3 parts) tequila, ½ oz (1 part) grenadine syrup, 3 oz (6 parts) orange juices",
  //     price: "545",
  //     image: "/tequila-sunrise.png",
  //   },
  //   {
  //     name: "Blue Monday",
  //     description:
  //       "1.5 oz vodka, ½ ounces Cointreau, or triple sec, ½ ounce Blue curacao",
  //     price: "825",
  //     image: "/blue-monday.png",
  //   },
  //   {
  //     name: "B-52",
  //     description: "⅔ Coffee liqueur, Kahlua, ⅔ bailey's, ⅔ Cointreau",
  //     price: "605",
  //     image: "/b-52.png",
  //   },
  //   {
  //     name: "Chocolate Martini",
  //     description:
  //       "4 oz bailey's Irish cream, 4 oz chocolate liqueur, 8 oz vodka, 3 tsp chocolate syrup or ganache",
  //     price: "905",
  //     image: "/chocolate-martini.png",
  //   },
  //   {
  //     name: "Sangria",
  //     description: "Red wine, gin, vodka, fresh fruits",
  //     price: "825",
  //     image: "/sangria.png",
  //   },
  //   {
  //     name: "Kamikaze",
  //     description:
  //       "1 ½ ounces vodka, ½ ounce triple sec, Dash of lime juice: Lime",
  //     price: "615",
  //     image: "/kamikaze.png",
  //   },
  //   {
  //     name: "Virgin Mojito",
  //     description:
  //       "Tonic water, sprite, soda water, lemon juice, sugar, mint leaves",
  //     price: "350",
  //     image: "/virgin-mojito.png",
  //   },
  //   {
  //     name: "Virgin Sour",
  //     description: "Watermelon juice, orange juice, lemon juice, simple syrup",
  //     price: "350",
  //     image: "/virgin-sour.png",
  //   },
  // ],

  kids: [
    {
      name: "French Fries",
      description: "",
      price: "306",
      image: "/french fries.webp",
    },
    {
      name: "Chicken Wrap",
      description:
        "Grilled Chcken, Onion, Garlic, Green Chilli, Fresh Cream, Cheese served with French Fries",
      price: "420",
      image: "/chicken wrap.webp",
    },
    {
      name: "Two Mini Beef Burgers",
      description:
        "Minced Beef, Egg, Garlic, Bread crumbs, mixed spice, with French Fries",
      price: "900",
      image: "/two mini beef burger.webp",
    },

    // {
    //   name: "Vegetable Wrap",
    //   description:
    //     "Seasonal Vegetable, Onion, Garlic, Green Chilli, Fresh Cream, Cheese served with French Fries",
    //   price: "400",
    //   image: "/vegetable wrap.webp",
    // },
  ],
};

export const categories = [
  { id: "breakfast", name: "Breakfasts", icon: "🥞" },
  { id: "starters", name: "Starters", icon: "🥗" },
  { id: "main-dishes", name: "Main Dishes", icon: "🍽️" },
  { id: "ethiopian", name: "Ethiopian Dishes", icon: "🍽️" },
  { id: "pizza", name: "Pizzas", icon: "🍕" },
  { id: "snacks", name: "Snacks", icon: "🍟" },
  { id: "drinks", name: "Beers and Ciders", icon: "🥤" },
  { id: "wines", name: "Wines", icon: "🍷" },
  { id: "spirits", name: "Spirits", icon: "🍸" },
  { id: "non-alcoholic-drinks", name: "Non-Alcoholic Drinks", icon: "🥤" },
  { id: "hot-drinks", name: "Hot Drinks", icon: "☕" },
  {
    id: "cocktails and mocktails",
    name: "Cocktails and mocktails",
    icon: "🍸",
  },
  { id: "kids", name: "Kids Menu", icon: "🧒" },
];

const drinkCategories = [
  "drinks",
  "wines",
  "spirits",
  "non-alcoholic-drinks",
  "hot-drinks",
];

function applyMarkupToPrice(price: string): string {
  const trim = price.trim();
  // Handle ranges or multi-prices separated by '/'
  if (trim.includes("/")) {
    return trim
      .split("/")
      .map((p) => applyMarkupToPrice(p))
      .join("/");
  }
  // Remove commas and non-number trailing text
  const numeric = parseFloat(trim.replace(/[^0-9.]/g, ""));
  if (Number.isFinite(numeric)) {
    const marked = Math.round(numeric * 1.17 * 100) / 100;
    // keep up to 2 decimals only if needed
    const shown = Number.isInteger(marked)
      ? marked.toFixed(0)
      : marked.toFixed(2);
    return shown;
  }
  return trim;
}
import { usePathname } from "next/navigation";

const applyRoomServiceMarkup = (input: string): string => {
  return input.replace(/\d[\d,]*/g, (numStr) => {
    // Remove commas to parse the number
    const numeric = parseInt(numStr.replace(/,/g, ""), 10);
    if (isNaN(numeric)) return numStr;

    // Apply 17% markup
    const updated = Math.round(numeric * 1.17);

    // Return with comma formatting
    return updated.toLocaleString();
  });
};
export function OakMenuSection({ activeTab }: { activeTab: string }) {
  const items = menuData[activeTab] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10; // Show 2 items at a time on desktop

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage,
  );

  const isDrinkCategory = drinkCategories.includes(activeTab);

  const handleNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleOrder = (itemName: string) => {
    console.log("[v0] Order placed for:", itemName);
    // Add order logic here
  };

  return (
    <div className="relative">
      {items.length > itemsPerPage && (
        <>
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-500 text-slate-900 shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-amber-500/90 hover:bg-amber-500 text-slate-900 shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            size="icon"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${currentIndex}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-slate-700 border-2 border-amber-500/40 rounded-lg overflow-hidden hover:border-amber-500/60 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                {!isDrinkCategory && (
                  <div className="shrink-0 w-full sm:w-44 h-44 relative rounded-lg overflow-hidden border-2 border-amber-500/30 shadow-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {(item.isSpecial || item.isNew) && (
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        {item.isSpecial && (
                          <span className="bg-amber-500 text-slate-900 px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                            ★ Special
                          </span>
                        )}
                        {item.isNew && (
                          <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                            New
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-amber-100 text-base leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-amber-500/30">
                    <span className="font-serif text-2xl font-bold text-amber-500">
                      {item.price} ETB
                    </span>
                    {/*<Button
                                      onClick={() => handleOrder(item.name)}
                                      className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-sans uppercase tracking-wider text-sm px-6 py-2.5 h-auto shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                      <ShoppingCart className="w-4 h-4 mr-2" />
                                      Order
                                    </Button>*/}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {items.length > itemsPerPage && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-amber-500 w-8"
                  : "bg-amber-500/50 hover:bg-amber-500/70"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
