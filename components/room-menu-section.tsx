"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { menuData as menu } from "@/components/menu-section";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  isSpecial?: boolean;
  isNew?: boolean;
}

// Helper function to apply 17% markup to prices
const applyRoomServiceMarkup = (price: string): string => {
  // Extract the number from price string (e.g., "999br" -> 999)
  const match = price.match(/(\d+)/);
  if (!match) return price;

  const basePrice = parseInt(match[1]);
  const roomPrice = Math.round(basePrice * 1.17); // 17% markup
  return price.replace(/\d+/, roomPrice.toString());
};

const menuData: Record<string, MenuItem[]> = {
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
  main: [
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
  ],
  fish: [
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
  biryani: [
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
  ],
  breads: [
    {
      name: "Plain",
      description: "",
      price: "210br",
      image: "/Garlic Butter Naan.webp",
    },
    {
      name: "Tandoori Roti",
      description: "Whole wheat flat bread",
      price: "300br",
      image: "/Garlic Butter Naan.webp",
    },
    {
      name: "Butter Tandoori",
      description: "Whole wheat flat bread with butter",
      price: "300br",
      image: "/Garlic Butter Naan.webp",
    },
    {
      name: "Missi Roti",
      description: "Brown flour, chick pea powder, green chili, Indian spices",
      price: "300br",
      image: "/Missi roti.webp",
    },
    {
      name: "Garlic/ Butter Naan",
      description: "",
      price: "250br",
      image: "/Garlic Butter Naan.webp",
    },
    {
      name: "Lachay Dar Paratha",
      description: "Flat layered bread, butter",
      price: "350br",
      image: "/Missi roti.webp",
    },
    {
      name: "Plain Rice",
      description: "Steamed basmati rice",
      price: "450br",
      image: "/Missi roti.webp",
    },
    {
      name: "Jeera Rice",
      description: "Basmati, Cumin",
      price: "450br",
      image: "/Missi roti.webp",
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
  cocktails: [
    {
      name: "Mumbai Sour",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Gulaab Sour",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Fennel Collins",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Jaljeera Mojito",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Dehli Martini",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Espresso",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Black Russian",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "John Collins",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Whiskey Sour",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Americano",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Mojito",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Rusty Nails",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Godfather",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "B-52",
      description: "",
      price: "599br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Chocolate Martini",
      description: "",
      price: "890br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Tequilla Sunrise",
      description: "",
      price: "655br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Gin Fizz",
      description: "",
      price: "700br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Sangria (Glass)",
      description: "",
      price: "995br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Black Russia",
      description: "",
      price: "750br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Blue Monday",
      description: "",
      price: "890br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Kamikaze",
      description: "",
      price: "630br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Tejito",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Vodka Sour",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Rum Sour",
      description: "",
      price: "695br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Negroni",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Long Island",
      description: "",
      price: "715br",
      image: "/Virgin mojito.webp",
    },
  ],
  mocktails: [
    {
      name: "Virgin Mojito",
      description: "",
      price: "355br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Virgin Sour",
      description: "",
      price: "355br",
      image: "/Virgin sour.webp",
    },
  ],
  beer: [
    {
      name: "Local small beer",
      description: "",
      price: "155br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Heineken",
      description: "",
      price: "190br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Arada",
      description: "",
      price: "170br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Dankira cocktail",
      description: "",
      price: "170br",
      image: "/Virgin mojito.webp",
    },
  ],
  liquor: [
    {
      name: "Red Bull",
      description: "Energy Drink (categorized here due to placement on menu)",
      price: "750br",
      image: "/Virgin mojito.webp",
    },
  ],
  whisky: [
    {
      name: "JW Black Label (50cl) - Glass",
      description: "",
      price: "435br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW Black Label (50cl/100cl) - Bottle",
      description: "",
      price: "7,900/17,708br",
      image: "/Virgin mojito.webpp",
    },
    {
      name: "JW D. Black Label (50/100cl) - Glass",
      description: "",
      price: "450br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW D. Black Label (50/100cl) - Bottle",
      description: "",
      price: "8,000/21,077br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW Blue Label (100cl) - Glass",
      description: "",
      price: "3,990br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW Blue Label (100cl) - Bottle",
      description: "",
      price: "97,997br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW Gold Label (100cl) - Glass",
      description: "",
      price: "700br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW Gold Label (100cl) - Bottle",
      description: "",
      price: "25,316br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW Red Label (50/100cl) - Glass",
      description: "",
      price: "320br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "JW Red Label (50/100cl) - Bottle",
      description: "",
      price: "7,000/11,900br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Jack Daniel's (50/100cl) - Glass",
      description: "",
      price: "450br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Jack Daniel's (50/100cl) - Bottle",
      description: "",
      price: "6,100/16,800br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Chivas Reg. 12 (100cl) - Glass",
      description: "",
      price: "475br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Chivas Reg. 12 (100cl) - Bottle",
      description: "",
      price: "17,890br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Glenfiddich 15 (100cl) - Glass",
      description: "",
      price: "800br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Glenfiddich 15 (100cl) - Bottle",
      description: "",
      price: "29,900br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Glenfiddich 18 (100cl) - Glass",
      description: "",
      price: "1,200br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Glenfiddich 18 (100cl) - Bottle",
      description: "",
      price: "41,000br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Glenfiddich 21 (100cl) - Glass",
      description: "",
      price: "940br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Glenfiddich 21 (100cl) - Bottle",
      description: "",
      price: "65,000br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Dimple 15 (100cl) - Glass",
      description: "",
      price: "599br",
      image: "/whisky.webp",
    },
    {
      name: "Dimple 15 (100cl) - Bottle",
      description: "",
      price: "25,090br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "White Hourse (100cl) - Glass",
      description: "",
      price: "299br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "White Hourse (100cl) - Bottle",
      description: "",
      price: "9,900br",
      image: "/Virgin mojito.webp",
    },
  ],
  Cognac: [
    {
      name: "Camus V.S.O.P 100CL - Glass",
      description: "",
      price: "9,700br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Camus V.S.O.P 100CL - Bottle",
      description: "",
      price: "21,890br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Courvoisier V.S (70cl) - Glass",
      description: "",
      price: "370br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Courvoisier V.S (70cl) - Bottle",
      description: "",
      price: "9,700br",
      image: "/Virgin mojito.webpp",
    },
    {
      name: "Winter Palace - Glass",
      description: "",
      price: "230br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Winter Palace - Bottle",
      description: "",
      price: "5,900br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Camus Cognac X.O (70cl) - Glass",
      description: "",
      price: "1,390br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Camus Cognac X.O (70cl) - Bottle",
      description: "",
      price: "59,470br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Remy Martin V.S.O.P (100cl) - Glass",
      description: "",
      price: "1,190br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Remy Martin V.S.O.P (100cl) - Bottle",
      description: "",
      price: "23,980br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Remy Martin XO (70/100cl) - Glass",
      description: "",
      price: "1,590br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Remy Martin XO (70/100cl) - Bottle",
      description: "",
      price: "61,080/76,000br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Martell vs - Glass",
      description: "",
      price: "370br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Martell vs - Bottle",
      description: "",
      price: "19,200br",
      image: "/Virgin mojito.webp",
    },
  ],
  Rum: [
    {
      name: "Bacardi White (100cl) - Glass",
      description: "",
      price: "320br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Bacardi White (100cl) - Bottle",
      description: "",
      price: "9,900br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Bacardi Gold (100cl) - Glass",
      description: "",
      price: "470br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Bacardi Gold (100cl) - Bottle",
      description: "",
      price: "18,990br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Captain Morgan (100cl) - Glass",
      description: "",
      price: "415br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Captain Morgan (100cl) - Bottle",
      description: "",
      price: "17,990br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Malibu (100cl) - Glass",
      description: "",
      price: "250br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Malibu (100cl) - Bottle",
      description: "",
      price: "6,990br",
      image: "/Virgin mojito.webp",
    },
  ],
  Vodka: [
    {
      name: "Sky Vodka (100cl) - Glass",
      description: "",
      price: "200br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Sky Vodka (100cl) - Bottle",
      description: "",
      price: "4,500br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Russian Standard Vodka (100cl) - Glass",
      description: "",
      price: "370br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Russian Standard Vodka (100cl) - Bottle",
      description: "",
      price: "9,990br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Ketel One - Glass",
      description: "",
      price: "335br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Ketel One - Bottle",
      description: "",
      price: "9,990br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Absolute Vodka (50cl/100cl) - Glass",
      description: "",
      price: "315br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Absolute Vodka (50cl/100cl) - Bottle",
      description: "",
      price: "4,100/7,100br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Grey Goose Vodka (100cl) - Glass",
      description: "",
      price: "490br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Grey Goose Vodka (100cl) - Bottle",
      description: "",
      price: "12,950br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Ciroc Blue (100cl) - Glass",
      description: "",
      price: "370br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Ciroc Blue (100cl) - Bottle",
      description: "",
      price: "12,700br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Smirnoff (75cl) - Glass",
      description: "",
      price: "250br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Smirnoff (75cl) - Bottle",
      description: "",
      price: "3,900br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Stolichnaya Gold (100cl) - Glass",
      description: "",
      price: "370br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Stolichnaya Gold (100cl) - Bottle",
      description: "",
      price: "9,500br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Stolichnaya Elite (100cl) - Glass",
      description: "",
      price: "490br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Stolichnaya Elite (100cl) - Bottle",
      description: "",
      price: "13,550br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Stolichnaya Vodka (50/75cl) - Bottle",
      description: "",
      price: "4,100/7,200br",
      image: "/Virgin mojito.webp",
    },
  ],
  Gin: [
    {
      name: "Gordon's Gin - Glass",
      description: "",
      price: "395br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Gordon's Gin - Bottle",
      description: "",
      price: "12,975br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Beef Eater Gin - Glass",
      description: "",
      price: "350br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Beef Eater Gin - Bottle",
      description: "",
      price: "13,990br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Beef Eater Pink - Glass",
      description: "",
      price: "350br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Beef Eater Pink - Bottle",
      description: "",
      price: "12,790br",
      image: "/gin.webp",
    },
    {
      name: "Bombay Sapphire - Glass",
      description: "",
      price: "390br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Bombay Sapphire - Bottle",
      description: "",
      price: "14,200br",
      image: "/Virgin mojito.webp",
    },
  ],
  Aperitifs: [
    {
      name: "Campari Bitter - Glass",
      description: "",
      price: "370br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Campari Bitter - Bottle",
      description: "",
      price: "9,050br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Fernet Branca - Glass",
      description: "",
      price: "800br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Fernet Branca - Bottle",
      description: "",
      price: "17,000br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Martini Bianco - Glass",
      description: "",
      price: "320br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Martini Bianco - Bottle",
      description: "",
      price: "10,500br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Martini Extra Dry - Glass",
      description: "",
      price: "320br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Martini Extra Dry - Bottle",
      description: "",
      price: "9,900br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Pastis - Glass",
      description: "",
      price: "320br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Pastis - Bottle",
      description: "",
      price: "9,100br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Pernod - Glass",
      description: "",
      price: "220br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Pernod - Bottle",
      description: "",
      price: "7,390br",
      image: "/Virgin mojito.webp",
    },
  ],
  "Other Drinks": [
    {
      name: "Tequila: Camino Real Tequila - Glass",
      description: "",
      price: "390br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Tequila: Camino Real Tequila - Bottle",
      description: "",
      price: "12,900br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Cointreau - Glass",
      description: "",
      price: "350br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Cointreau - Bottle",
      description: "",
      price: "10,300br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Jagermeister - Glass",
      description: "",
      price: "320br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Jagermeister - Bottle",
      description: "",
      price: "9,700br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Drambuie - Glass",
      description: "",
      price: "350br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Drambuie - Bottle",
      description: "",
      price: "11,370br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Amarula - Glass",
      description: "",
      price: "250br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Amarula - Bottle",
      description: "",
      price: "7,950br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Sambuca - Glass",
      description: "",
      price: "299br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Sambuca - Bottle",
      description: "",
      price: "7,990br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Baileys - Glass",
      description: "",
      price: "300br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Baileys - Bottle",
      description: "",
      price: "8,500br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Kahlua - Glass",
      description: "",
      price: "250br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Kahlua - Bottle",
      description: "",
      price: "7,500br",
      image: "/Virgin mojito.webp",
    },
  ],
  Wine: [
    {
      name: "Rift Valley Chardonnay",
      description: "",
      price: "2,300br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Acacia Dry 75ml",
      description: "",
      price: "1,975br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Acacia M.S. Red",
      description: "",
      price: "1,975br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Rift Valley Merlot 75ml",
      description: "",
      price: "2,124br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Rift Valley Syrah",
      description: "",
      price: "2,124br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Rift Valley Cuvee pr. /Cab.",
      description: "",
      price: "2,300br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Western Cellar, Chardon",
      description: "",
      price: "6,900br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Grand Époque",
      description: "",
      price: "700br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Sangria (Bottle)",
      description: "",
      price: "5,690br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Sunrise (75cl)",
      description: "",
      price: "3,985br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Baron d'Arignac",
      description: "",
      price: "3,590br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Lamothe Parrot (75cl)",
      description: "",
      price: "6,690br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Louis Eschenauer",
      description: "",
      price: "6,770br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Alvinde Resarve Syrah",
      description: "",
      price: "3,999br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Alvinde Resarve Chardonnay",
      description: "",
      price: "5,999br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Cellar Cask Select (75cl)",
      description: "",
      price: "6,990br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Two Oceans Chardonnay",
      description: "",
      price: "4,990br",
      image: "/Espresso martini.webp",
    },
    {
      name: "Long Champs (75cl)",
      description: "",
      price: "6,797br",
      image: "/Espresso martini.webp",
    },
  ],
  "Hot Drinks": [
    {
      name: "Coffee",
      description: "",
      price: "135br",
      image: "/Macchiato.webp",
    },
    {
      name: "Café Americano",
      description: "",
      price: "125br",
      image: "/Macchiato.webp",
    },
    {
      name: "Hot Chocolate",
      description: "",
      price: "250br",
      image: "/Macchiato.webp",
    },
    {
      name: "Macchiato",
      description: "",
      price: "170br",
      image: "/Macchiato.webp",
    },
    {
      name: "Special Tea",
      description: "",
      price: "250br",
      image: "/Masala tea.webp",
    },
    {
      name: "Tea",
      description: "",
      price: "80br",
      image: "/Masala tea.webp",
    },
    {
      name: "Fasting Macchiato",
      description: "",
      price: "210br",
      image: "/Masala tea.webp",
    },
    {
      name: "Tea with Milk",
      description: "",
      price: "210br",
      image: "/Masala tea.webp",
    },
    {
      name: "Cappuccino",
      description: "",
      price: "190br",
      image: "/Macchiato.webp",
    },
    {
      name: "Milk",
      description: "",
      price: "150br",
      image: "/Macchiato.webp",
    },
    {
      name: "Coffee with Milk",
      description: "",
      price: "210br",
      image: "/Macchiato.webp",
    },
    {
      name: "Large macchiato",
      description: "",
      price: "190br",
      image: "/Macchiato.webp",
    },
    {
      name: "Masala Tea",
      description: "",
      price: "250br",
      image: "/Masala tea.webp",
    },
  ],
  "Soft Drinks": [
    {
      name: "Soft Drinks (Can/Bottle)",
      description: "",
      price: "120br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Ambo water",
      description: "",
      price: "120br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Water 0.5lit",
      description: "",
      price: "80br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Water 1lit.",
      description: "",
      price: "110br",
      image: "/Virgin mojito.webp",
    },
  ],
  kids: [
    {
      name: "Veg - Pad Pao",
      description: "Potato, indian spicy, chick peas powder",
      price: "555br",
      image: "/Chicken Pad Pao.webp",
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
      image: "/Chicken Pad Pao.webp",
    },
  ],
};

const categories = [
  { id: "thali", name: "Thali & Platters", icon: "🍽️" },
  { id: "starters", name: "Starters", icon: "🥘" },
  { id: "main", name: "Main Course", icon: "🍛" },
  { id: "fish", name: "Fish Specialties", icon: "🐟" },
  { id: "vegetarian", name: "Vegetarian", icon: "🥬" },
  { id: "biryani", name: "Biryani", icon: "🍚" },
  { id: "breads", name: "Breads", icon: "🥖" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "drinks", name: "Drinks", icon: "🥤" },
];

export function RoomMenuSection({ activeTab }: { activeTab: string }) {
  const items = menu[activeTab] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2; // Show 2 items at a time on desktop

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
                <div className="shrink-0 w-full sm:w-44 h-44 relative rounded-lg overflow-hidden border-2 border-border/30 shadow-md">
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
                    <Button
                      onClick={() => handleOrder(item.name)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans uppercase tracking-wider text-sm px-6 py-2.5 h-auto shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order
                    </Button>
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
