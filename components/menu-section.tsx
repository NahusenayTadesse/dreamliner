"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isSpecial?: boolean;
  isNew?: boolean;
}

export const menuData: Record<string, MenuItem[]> = {
  thali: [
    {
      name: "Non-V Thali",
      description: "Chicken, lamb, dal, rice, roti naan",
      price: "1790br",
      image: "/Non V thali.webp",
      isSpecial: true,
    },
    {
      name: "V- Thali",
      description: "Paneer, dal, vegetables, rice, roti naan",
      price: "1290br",
      image: "/v - tahli.png",
      isSpecial: true,
    },
    {
      name: "Non - Veg Platter",
      description:
        "Fish tikka, Murgh malai tikka, Chicken tikka, Keema samosa, Haryali chiken tikka",
      price: "1950br",
      image: "/non v platter.webp",
      isSpecial: true,
    },
    {
      name: "Assorted V Platter",
      description: "Veg. samosa, Mixveg pakora Aloo tikki paneer tikka",
      price: "1250br",
      image: "/Assorted V Platter.png",
      isSpecial: true,
    },
  ],
  starters: [
    {
      name: "Chicken Tikka",
      description: "Boneless chicken, yogurt, gram masala, spices",
      price: "999br",
      image: "/Chicken tikka.webp",
      isSpecial: false,
    },
    {
      name: "Murgh Malai Tikka",
      description: "boneless chicken, cream, yogurt, cheese",
      price: "1050br",
      image: "/Murgh malai tikka.webp",
      isSpecial: false,
    },
    {
      name: "Fish Amritsari",
      description:
        "Tilapia, yoghurt, corn flour, chick pea powder, spices, herbs",
      price: "990br",
      image: "/Fish Amritsari.webp",
      isSpecial: true,
    },
    {
      name: "Keema Samosa",
      description: "lamb boti, coriander, garam masala, jeera",
      price: "590br",
      image: "/keema-samosa.jpg",
      isSpecial: true,
    },
    {
      name: "Ajwaini Fish Tikka",
      description: "Nile Perch, chick peas, yoghurt, Indian spice",
      price: "990br",
      image: "/Ajwaini Fish tikka.webp",
    },
    {
      name: "Tandoori Chicken",
      description: "Bone chicken, yogurt, cream, spices",
      price: "800br",
      image: "/Tandoori chicken.webp",
    },
    {
      name: "Lamb sheek kebab",
      description: "Lamb boti, chat masala, butter, indian spices",
      price: "825br",
      image: "/Lamb sheek kebab.png",
    },
    {
      name: "Paneer Pakora",
      description: "Spiced paneer, besan or chickpea flour batter",
      price: "750br",
      image: "/Paneer Pakora.png",
    },
    {
      name: "Mix Pakora",
      description: "Vegetable, chick peas, butter",
      price: "750br",
      image: "/Mix Pakora.png",
    },
    {
      name: "Samosas",
      description: "Full/Half",
      price: "590br",
      image: "/Samosa full.webp",
    },
    {
      name: "Pineapple paneer tikka",
      description:
        "Pineapple, Cheese, yoghurt, chick pea powder, fresh lemon, Indian Spices",
      price: "990br",
      image: "/Pineapple paneer tikka.webp",
    },
    {
      name: "Aloo Tikki",
      description: "Boiled & mashed potatoes, spices and herb",
      price: "420br",
      image: "/Aloo Tikki.webp",
    },
  ],
  "main courses": [
    {
      name: "Chicken Tikka Masala",
      description: "chicken breast, onions, tomatoes",
      price: "1000br",
      image: "/Chicken tikka masala.webp",
    },
    {
      name: "Chicken Tikka Makhni",
      description: "chicken, tomatoes, spices",
      price: "1015br",
      image: "/Chicken tikka makhni.webp",
    },
    {
      name: "Kadhai Chicken",
      description: "chicken, capsicum, tomatoes, onions",
      price: "1015br",
      image: "/Kadhai chicken.png",
    },
    {
      name: "Chicken kadha palak",
      description: "Chicken, onions, tomatoes, spices, herbs, spinach.",
      price: "1015br",
      image: "/chiken kadha palak.png",
    },
    {
      name: "Murgh Awadhi Korma",
      description: "chicken, cashew, onions, creamy sauce",
      price: "990br",
      image: "/Murgh Awadhi Korma.webp",
    },
    {
      name: "Lamb Rogan Josh",
      description: "Lamb, Tomatoes, Onions, Indian spices",
      price: "1025br",
      image: "/Lamb Rogan Josh.webp",
    },
    {
      name: "Lamb Korma",
      description: "boneless lamb, cashew, onions",
      price: "1025br",
      image: "/Lamb-Korma.webp",
    },
    {
      name: "kahada palak Gosht",
      description: "Mutton, Spinach, onions, tomatoes, potatoes",
      price: "990br",
      image: "/Kahada palak Gosht.webp",
    },
    {
      name: "Kadhai Gosht",
      description: "mutton, Spinach, onions, tomatoes, capsicum",
      price: "1050br",
      image: "/Karahi gosht.png",
    },
    {
      name: "Fish Curry",
      description: "Nile perch, Onions, curry",
      price: "990br",
      image: "/fish curry indian (1).webp",
    },
    {
      name: "Gogan Fish Curry",
      description: "Nile perch, coconut,Indian spices, herbs",
      price: "1025br",
      image: "/Gogan fish curry.png",
    },
  ],
  vegetarian: [
    {
      name: "Palak Paneer",
      description: "cheese cubes, spinach, spices",
      price: "990br",
      image: "/Palak paneer.webp",
    },
    {
      name: "Paneer makhini",
      description: "ricotta cheese, tomato sauce",
      price: "990br",
      image: "/paneer makhan.png",
    },
    {
      name: "Kadhai paneer",
      description: "cheese, tomatoes, onions, sweet pepper",
      price: "965br",
      image: "/Kadhai paneer.png",
    },
    {
      name: "Aloo Jeera",
      description: "dry boiled potatoes, cumin spices",
      price: "480br",
      image: "/aloo jeera.webp",
    },
    {
      name: "Aloo palak",
      description: "Spinach, potato, herbs and spices",
      price: "590br",
      image: "/aloo palak.webp",
    },
    {
      name: "Paneer Butter Masala",
      description: "stuffed paneer, batter, onion, tomato, cashew gravy",
      price: "900br",
      image: "/paneer butter masala.webp",
    },
    {
      name: "Paneer Pasanda",
      description: "cheese, butter, tomatoes, cream",
      price: "990br",
      image: "/Paneer Pasanda (1).webp",
    },
    {
      name: "Aloo Gobhi Masala",
      description: "cauliflower, potato, onion gravy",
      price: "590br",
      image: "/Aloo Gobhi Masala.jpg",
    },
    {
      name: "Dal Tadkha",
      description: "Lentil, garlic, mustard seeds, spices & Herbs",
      price: "490br",
      image: "/Dal tadkha.webp",
    },
    {
      name: "Chana Masala",
      description: "Chick peas, onion, tomato",
      price: "550br",
      image: "/Chana Masala.jpg",
    },
    {
      name: "Mixed Veg",
      description: "Vegetable, Onions and indian spices",
      price: "690br",
      image: "/Mixed Veg.webp",
    },
  ],
  biryanis: [
    {
      name: "V- Dum Biryani",
      description: "basmati rice, vegetables, herbs, spices",
      price: "1190br",
      image: "/V. Dum Biryani.webp",
    },
    {
      name: "Chicken Dum Biryani",
      description: "basmati rice, boneless chicken, herbs, spices",
      price: "1099br",
      image: "/Chicken dum biryani.webp",
    },
    {
      name: "Lamb Dum Biryani",
      description: "basmati rice, lamb, herbs, spices",
      price: "1190br",
      image: "/Lamb dum biryani.png",
    },
    {
      name: "Plain Rice",
      description: "Steamed basmati rice",
      price: "450br",
      image: "",
    },
    {
      name: "Jeera Rice",
      description: "Basmati, Cumin",
      price: "450br",
      image: "",
    },
  ],
  breads: [
    {
      name: "Plain",
      description: "",
      price: "210br",
      image: "",
    },
    {
      name: "Tandoori Roti",
      description: "Whole wheat flat bread",
      price: "300br",
      image: "",
    },
    {
      name: "Butter Tandoori",
      description: "Whole wheat flat bread with butter",
      price: "300br",
      image: "",
    },
    {
      name: "Missi Roti",
      description: "Brown flour, chick pea powder, green chili, Indian spices",
      price: "300br",
      image: "",
    },
    {
      name: "Garlic/ Butter Naan",
      description: "",
      price: "250br",
      image: "/Garlic Butter Naan (1).webp",
    },
    {
      name: "Lachay Dar Paratha",
      description: "Flat layered bread, butter",
      price: "350br",
      image: "",
    },
  ],
  desserts: [
    {
      name: "Gulab Jamun",
      description: "Milk, sweet syrup",
      price: "500br",
      image: "/Gulab Jamun.webp",
    },
    {
      name: "Kulfi",
      description: "Milk, dry fruits",
      price: "425br",
      image: "/Kulfi.webp",
    },
  ],
  "cocktails and mocktails": [
    {
      name: "Mumbai Sour",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Gulaab Sour",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Fennel Collins",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Jaljeera Mojito",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Dehli Martini",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Espresso",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Black Russian",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "John Collins",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "Whiskey Sour",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "Americano",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Mojito",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "Rusty Nails",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "Godfather",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "B-52",
      description: "",
      price: "599br",
      image: "",
    },
    {
      name: "Chocolate Martini",
      description: "",
      price: "890br",
      image: "",
    },
    {
      name: "Tequilla Sunrise",
      description: "",
      price: "655br",
      image: "",
    },
    {
      name: "Gin Fizz",
      description: "",
      price: "700br",
      image: "",
    },
    {
      name: "Sangria (Glass)",
      description: "",
      price: "995br",
      image: "",
    },
    {
      name: "Black Russia",
      description: "",
      price: "750br",
      image: "",
    },
    {
      name: "Blue Monday",
      description: "",
      price: "890br",
      image: "",
    },
    {
      name: "Kamikaze",
      description: "",
      price: "630br",
      image: "",
    },
    {
      name: "Tejito",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "Vodka Sour",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "Rum Sour",
      description: "",
      price: "695br",
      image: "",
    },
    {
      name: "Negroni",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Long Island",
      description: "",
      price: "715br",
      image: "",
    },
    {
      name: "Virgin Mojito",
      description: "",
      price: "355br",
      image: "",
    },
    {
      name: "Virgin Sour",
      description: "",
      price: "355br",
      image: "",
    },
  ],
  "beers and cider": [
    {
      name: "Local beer",
      description: "",
      price: "155br",
      image: "",
    },
    {
      name: "Heineken",
      description: "",
      price: "190br",
      image: "",
    },
    {
      name: "Arada",
      description: "",
      price: "170br",
      image: "",
    },
    {
      name: "Dankira cocktail",
      description: "",
      price: "170br",
      image: "",
    },

    {
      name: "Red Bull",
      description: "Energy Drink (categorized here due to placement on menu)",
      price: "750br",
      image: "",
    },
  ],
  wines: [
    {
      name: "Rift Valley Chardonnay",
      price: "2,200br",
      image: "",
      description: "",
    },
    {
      name: "Acacia Dry (75ml)",
      price: "1,975br",
      image: "",
      description: "",
    },
    {
      name: "Acacia M.S. Red",
      price: "1,975br",
      image: "",
      description: "",
    },
    {
      name: "Rift Valley Merlot (75ml)",
      price: "2,124br",
      image: "",
      description: "",
    },
    {
      name: "Rift Valley Syrah",
      price: "2,124br",
      image: "",
      description: "",
    },
    {
      name: "Rift Valley Cuvee Premier / Cabernet",
      price: "2,200br",
      image: "",
      description: "",
    },
    {
      name: "Western Cellar Chardonnay",
      price: "6,900br",
      image: "",
      description: "",
    },
    {
      name: "Grand Époque",
      price: "5,690br",
      image: "",
      description: "",
    },
    {
      name: "Sunrise (75cl)",
      price: "3,985br",
      image: "",
      description: "",
    },
    {
      name: "Baron d’Arignac",
      price: "3,590br",
      image: "",
      description: "",
    },
    {
      name: "Lamothe Parrot (75cl)",
      price: "6,690br",
      image: "",
      description: "",
    },
    {
      name: "Louis Eschenauer",
      price: "6,770br",
      image: "",
      description: "",
    },
    {
      name: "Alvinde Reserve Syrah",
      price: "3,999br",
      image: "",
      description: "",
    },
    {
      name: "Alvinde Reserve Chardonnay",
      price: "5,999br",
      image: "",
      description: "",
    },
    {
      name: "Cellar Cask Select (75cl)",
      price: "6,990br",
      image: "",
      description: "",
    },
    {
      name: "Two Oceans Chardonnay",
      price: "4,990br",
      image: "",
      description: "",
    },
    {
      name: "Long Champs (75cl)",
      price: "6,797br",
      image: "",
      description: "",
    },
  ],
  spirits: [
    {
      name: "JW Black Label (50cl)",
      price: "Bottle: 7,900/17,708br | Glass: 435br",
      image: "",
      description: "",
    },
    {
      name: "JW D. Black Label (50/100cl)",
      price: "Bottle: 8,000/21,077br | Glass: 450br",
      image: "",
      description: "",
    },
    {
      name: "JW Blue Label (100cl)",
      price: "Bottle: 97,997br | Glass: 3,990br",
      image: "",
      description: "",
    },
    {
      name: "JW Gold Label (100cl)",
      price: "Bottle: 25,316br | Glass: 700br",
      image: "",
      description: "",
    },
    {
      name: "JW Red Label (50/100cl)",
      price: "Bottle: 7,000/11,900br | Glass: 320br",
      image: "",
      description: "",
    },

    {
      name: "Jack Daniel's (50/100cl)",
      price: "Bottle: 6,100/16,800br | Glass: 450br",
      image: "",
      description: "",
    },

    {
      name: "Chivas Regal 12 (100cl)",
      price: "Bottle: 17,890br | Glass: 475br",
      image: "",
      description: "",
    },

    {
      name: "Glenfiddich 15 (100cl)",
      price: "Bottle: 29,900br | Glass: 800br",
      image: "",
      description: "",
    },
    {
      name: "Glenfiddich 18 (100cl)",
      price: "Bottle: 41,000br | Glass: 1,200br",
      image: "",
      description: "",
    },
    {
      name: "Glenfiddich 21 (100cl)",
      price: "Bottle: 65,000br | Glass: 940br",
      image: "",
      description: "",
    },

    {
      name: "Dimple 15 (100cl)",
      price: "Bottle: 25,090br | Glass: 599br",
      image: "",
      description: "",
    },

    {
      name: "White Horse (100cl)",
      price: "Bottle: 9,900br | Glass: 299br",
      image: "",
      description: "",
    },

    {
      name: "Camus V.S.O.P (100cl)",
      price: "Bottle: 21,890br | Glass: 9,700br",
      image: "",
      description: "",
    },
    {
      name: "Courvoisier V.S (70cl)",
      price: "Bottle: 9,700br | Glass: 370br",
      image: "",
      description: "",
    },

    {
      name: "Winter Palace",
      price: "Bottle: 5,900br | Glass: 230br",
      image: "",
      description: "",
    },

    {
      name: "Camus Cognac X.O (70cl)",
      price: "Bottle: 59,470br | Glass: 1,390br",
      image: "",
      description: "",
    },

    {
      name: "Remy Martin V.S.O.P (100cl)",
      price: "Bottle: 23,980br | Glass: 1,190br",
      image: "",
      description: "",
    },
    {
      name: "Remy Martin XO (70/100cl)",
      price: "Bottle: 61,080/76,000br | Glass: 1,590br",
      image: "",
      description: "",
    },

    {
      name: "Martell V.S",
      price: "Bottle: 19,200br | Glass: 370br",
      image: "",
      description: "",
    },

    {
      name: "Bacardi White (100cl)",
      price: "Bottle: 9,900br | Glass: 320br",
      image: "",
      description: "",
    },
    {
      name: "Bacardi Gold (100cl)",
      price: "Bottle: 18,990br | Glass: 470br",
      image: "",
      description: "",
    },
    {
      name: "Captain Morgan (100cl)",
      price: "Bottle: 17,990br | Glass: 415br",
      image: "",
      description: "",
    },
    {
      name: "Malibu (100cl)",
      price: "Bottle: 6,990br | Glass: 250br",
      image: "",
      description: "",
    },

    {
      name: "Sky Vodka (100cl)",
      price: "Bottle: 4,500br | Glass: 200br",
      image: "",
      description: "",
    },
    {
      name: "Russian Standard (100cl)",
      price: "Bottle: 9,990br | Glass: 370br",
      image: "",
      description: "",
    },
    {
      name: "Ketel One",
      price: "Bottle: 9,990br | Glass: 335br",
      image: "",
      description: "",
    },

    {
      name: "Absolute Vodka (50/100cl)",
      price: "Bottle: 4,100/7,100br | Glass: 315br",
      image: "",
      description: "",
    },

    {
      name: "Grey Goose (100cl)",
      price: "Bottle: 12,950br | Glass: 490br",
      image: "",
      description: "",
    },
    {
      name: "Ciroc Blue (100cl)",
      price: "Bottle: 12,700br | Glass: 370br",
      image: "",
      description: "",
    },

    {
      name: "Smirnoff (75cl)",
      price: "Bottle: 3,900br | Glass: 250br",
      image: "",
      description: "",
    },

    {
      name: "Stolichnaya Gold (100cl)",
      price: "Bottle: 9,500br | Glass: 370br",
      image: "",
      description: "",
    },
    {
      name: "Stolichnaya Elite (100cl)",
      price: "Bottle: 13,550br | Glass: 490br",
      image: "",
      description: "",
    },
    {
      name: "Stolichnaya Vodka (50/75cl)",
      price: "Bottle: 4,100/7,200br | Glass: —",
      image: "",
      description: "",
    },

    {
      name: "Gordon's Gin",
      price: "Bottle: 12,975br | Glass: 395br",
      image: "",
      description: "",
    },
    {
      name: "Beefeater Gin",
      price: "Bottle: 13,990br | Glass: 350br",
      image: "",
      description: "",
    },
    {
      name: "Beefeater Pink",
      price: "Bottle: 12,790br | Glass: 350br",
      image: "",
      description: "",
    },
    {
      name: "Bombay Sapphire",
      price: "Bottle: 14,200br | Glass: 390br",
      image: "",
      description: "",
    },

    {
      name: "Campari Bitter",
      price: "Bottle: 9,050br | Glass: 370br",
      image: "",
      description: "",
    },
    {
      name: "Fernet Branca",
      price: "Bottle: 17,000br | Glass: 800br",
      image: "",
      description: "",
    },
    {
      name: "Martini Bianco",
      price: "Bottle: 10,500br | Glass: 320br",
      image: "",
      description: "",
    },
    {
      name: "Martini Extra Dry",
      price: "Bottle: 9,900br | Glass: 320br",
      image: "",
      description: "",
    },
    {
      name: "Pastis",
      price: "Bottle: 9,100br | Glass: 320br",
      image: "",
      description: "",
    },
    {
      name: "Pernod",
      price: "Bottle: 7,390br | Glass: 220br",
      image: "",
      description: "",
    },
  ],

  "signature cocktails": [
    {
      name: "Tequila: Camino Real Tequila - Glass",
      description: "",
      price: "390br",
      image: "",
    },
    {
      name: "Tequila: Camino Real Tequila - Bottle",
      description: "",
      price: "12,900br",
      image: "",
    },
    {
      name: "Cointreau - Glass",
      description: "",
      price: "350br",
      image: "",
    },
    {
      name: "Cointreau - Bottle",
      description: "",
      price: "10,300br",
      image: "",
    },
    {
      name: "Jagermeister - Glass",
      description: "",
      price: "320br",
      image: "",
    },
    {
      name: "Jagermeister - Bottle",
      description: "",
      price: "9,700br",
      image: "",
    },
    {
      name: "Drambuie - Glass",
      description: "",
      price: "350br",
      image: "",
    },
    {
      name: "Drambuie - Bottle",
      description: "",
      price: "11,370br",
      image: "",
    },
    {
      name: "Amarula - Glass",
      description: "",
      price: "250br",
      image: "",
    },
    {
      name: "Amarula - Bottle",
      description: "",
      price: "7,950br",
      image: "",
    },
    {
      name: "Sambuca - Glass",
      description: "",
      price: "299br",
      image: "",
    },
    {
      name: "Sambuca - Bottle",
      description: "",
      price: "7,990br",
      image: "",
    },
    {
      name: "Baileys - Glass",
      description: "",
      price: "300br",
      image: "",
    },
    {
      name: "Baileys - Bottle",
      description: "",
      price: "8,500br",
      image: "",
    },
    {
      name: "Kahlua - Glass",
      description: "",
      price: "250br",
      image: "",
    },
    {
      name: "Kahlua - Bottle",
      description: "",
      price: "7,500br",
      image: "",
    },

    {
      name: "Rift Valley Chardonnay",
      description: "",
      price: "2,300br",
      image: "",
    },
    {
      name: "Acacia Dry 75ml",
      description: "",
      price: "1,975br",
      image: "",
    },
    {
      name: "Acacia M.S. Red",
      description: "",
      price: "1,975br",
      image: "",
    },
    {
      name: "Rift Valley Merlot 75ml",
      description: "",
      price: "2,124br",
      image: "",
    },
    {
      name: "Rift Valley Syrah",
      description: "",
      price: "2,124br",
      image: "",
    },
    {
      name: "Rift Valley Cuvee pr. /Cab.",
      description: "",
      price: "2,300br",
      image: "",
    },
    {
      name: "Western Cellar, Chardon",
      description: "",
      price: "6,900br",
      image: "",
    },
    {
      name: "Grand Époque",
      description: "",
      price: "700br",
      image: "",
    },
    {
      name: "Sangria (Bottle)",
      description: "",
      price: "5,690br",
      image: "",
    },
    {
      name: "Sunrise (75cl)",
      description: "",
      price: "3,985br",
      image: "",
    },
    {
      name: "Baron d'Arignac",
      description: "",
      price: "3,590br",
      image: "",
    },
    {
      name: "Lamothe Parrot (75cl)",
      description: "",
      price: "6,690br",
      image: "",
    },
    {
      name: "Louis Eschenauer",
      description: "",
      price: "6,770br",
      image: "",
    },
    {
      name: "Alvinde Resarve Syrah",
      description: "",
      price: "3,999br",
      image: " ",
    },
    {
      name: "Alvinde Resarve Chardonnay",
      description: "",
      price: "5,999br",
      image: "",
    },
    {
      name: "Cellar Cask Select (75cl)",
      description: "",
      price: "6,990br",
      image: "",
    },
    {
      name: "Two Oceans Chardonnay",
      description: "",
      price: "4,990br",
      image: "",
    },
    {
      name: "Long Champs (75cl)",
      description: "",
      price: "6,797br",
      image: "",
    },
  ],
  "Hot Drinks": [
    // {
    //   name: "Lassi",
    //   description: "",
    //   price: "135br",
    //   image: "",
    // },
    // {
    //   name: "Mango Lassi",
    //   description: "",
    //   price: "135br",
    //   image: "/Mango lassi.webp",
    // },

    // {
    //   name: "Coffee",
    //   description: "",
    //   price: "135br",
    //   image: "",
    // },
    // {
    //   name: "Café Americano",
    //   description: "",
    //   price: "125br",
    //   image: "",
    // },
    // {
    //   name: "Hot Chocolate",
    //   description: "",
    //   price: "250br",
    //   image: "",
    // },
    // {
    //   name: "Macchiato",
    //   description: "",
    //   price: "170br",
    //   image: "",
    // },
    // {
    //   name: "Special Tea",
    //   description: "",
    //   price: "250br",
    //   image: "",
    // },
    // {
    //   name: "Tea",
    //   description: "",
    //   price: "80br",
    //   image: "",
    // },
    // {
    //   name: "Fasting Macchiato",
    //   description: "",
    //   price: "210br",
    //   image: "",
    // },
    // {
    //   name: "Tea with Milk",
    //   description: "",
    //   price: "210br",
    //   image: "",
    // },
    // {
    //   name: "Cappuccino",
    //   description: "",
    //   price: "190br",
    //   image: "",
    // },
    // {
    //   name: "Milk",
    //   description: "",
    //   price: "150br",
    //   image: "",
    // },
    // {
    //   name: "Coffee with Milk",
    //   description: "",
    //   price: "210br",
    //   image: "",
    // },
    {
      name: "Hot Drinks",
      description: "",
      price: "",
      image: "",
    },
    {
      name: "Masala Tea",
      description: "",
      price: "250br",
      image: "/Masala tea.webp",
    },
  ],
  "non alcholic drinks": [
    {
      name: "Lassi",
      description: "",
      price: "135br",
      image: "/Plain Lassi.webp",
    },
    {
      name: "Mango Lassi",
      description: "",
      price: "135br",
      image: "/Mango lassi.webp",
    },
    {
      name: "Soft Drinks (Can/Bottle)",
      description: "",
      price: "120br",
      image: "",
    },
    {
      name: "Ambo water",
      description: "",
      price: "120br",
      image: "",
    },
    {
      name: "Water 0.5lit",
      description: "",
      price: "80br",
      image: "",
    },
    {
      name: "Water 1lit.",
      description: "",
      price: "110br",
      image: "",
    },
  ],
  "kids menu": [
    {
      name: "Veg - Pad Pao",
      description: "Potato, indian spicy, chick peas powder",
      price: "555br",
      image: "",
    },
    {
      name: "Chicken Pad Pao",
      description: "Chicken mince, indian spicy, chick peas powder",
      price: "725br",
      image: "/Chicken Pad Pao.webp",
    },
    {
      name: "French Fries",
      description: "",
      price: "325br",
      image: "",
    },
  ],
};

export function MenuSection({ activeTab }: { activeTab: string }) {
  const items = menuData[activeTab] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 24; // Show 24 items at a time on desktop

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage,
  );

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

  const drinkCategories = [
    "cocktails and mocktails",
    "beers and cider",
    "spirits",
    "wines",
    "signature cocktails",
    "Hot Drinks",
    "non alcholic drinks",
  ];
  const isDrinkCategory = drinkCategories.includes(activeTab);

  return (
    <div className="relative">
      {items.length > itemsPerPage && (
        <>
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
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
              className="group relative bg-card border-2 border-border/40 rounded-lg overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                {!isDrinkCategory && (
                  <div className="shrink-0 w-full sm:w-44 lg:h-44 h-64 relative rounded-lg overflow-hidden border-2 border-border/30 shadow-md">
                    <Image
                      src={
                        item?.image?.trim() ? item.image : "/placeholder.svg"
                      }
                      alt={item?.name || "Menu item"}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {(item.isSpecial || item.isNew) && (
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        {item.isSpecial && (
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                            ★ Special
                          </span>
                        )}
                        {item.isNew && (
                          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-sans uppercase tracking-wider shadow-lg">
                            New
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-foreground uppercase tracking-wide leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-foreground/70 text-base leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                    <span className="font-serif text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                    {/*<Button
                                      onClick={() => handleOrder(item.name)}
                                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans uppercase tracking-wider text-sm px-6 py-2.5 h-auto shadow-md hover:shadow-lg transition-all duration-300"
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
                  ? "bg-primary w-8"
                  : "bg-border/50 hover:bg-border"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
