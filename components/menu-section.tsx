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
  drinks: [
    {
      name: "Lassi (Sweet or Salted / Mango lassi )",
      description: "",
      price: "310br",
      image: "/Mango lassi.webp",
    },
    {
      name: "Juices",
      description: "",
      price: "325br",
      image: "/Mango lassi.webp",
    },
    {
      name: "Hot drinks",
      description: "",
      price: "198br",
      image: "/Masala tea.webp",
    },
    {
      name: "Sparkling Water",
      description: "",
      price: "119br",
      image: "/Virgin mojito.webp",
    },
    {
      name: "Soft Drinks",
      description: "",
      price: "119br",
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
                {!["breads", "drinks"].includes(activeTab) && (
                  <div className="flex-shrink-0 w-full sm:w-44 lg:h-44 h-64 relative rounded-lg overflow-hidden border-2 border-border/30 shadow-md">
                    <Image
                      src={
                        item?.image?.trim() ? item.image : "/placeholder.svg"
                      }
                      alt={item?.name || "Menu item"}
                      fill
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
