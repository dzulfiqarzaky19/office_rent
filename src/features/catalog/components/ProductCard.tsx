"use client";

import { Product } from "../data/products";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
  rentalPeriod: "weekly" | "monthly";
}

export default function ProductCard({ product, isSelected, onSelect, rentalPeriod }: ProductCardProps) {
  const price = rentalPeriod === "weekly" ? product.weeklyPrice : product.monthlyPrice;
  const periodLabel = rentalPeriod === "weekly" ? "/WK" : "/MO";

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`product-card w-full text-left p-4 mb-3 transition-all duration-200 cursor-pointer border ${
        isSelected ? "border-black bg-white" : "border-border-light bg-white hover:border-border-main"
      }`}
    >
      <div className="flex items-start justify-between mb-3 min-w-0">
        <h3 className="font-prada text-[11px] font-bold tracking-widest text-black truncate leading-tight flex-1 uppercase">
          {product.name}
        </h3>
        <span className="shrink-0 font-prada text-[10px] text-black tracking-tighter">
          ${price}{periodLabel}
        </span>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-24 h-24 bg-bg-offset border border-border-light shrink-0 overflow-hidden relative">
          <Image src={product.imageSrc} alt={product.name} fill className="object-contain p-2" />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((f, i) => (
              <span key={i} className="font-prada text-[8px] text-text-muted tracking-widest uppercase border border-border-light px-1.5 py-0.5">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-light">
        <span className="font-prada text-[9px] text-text-secondary tracking-widest uppercase">
          {isSelected ? "ADDED" : "SELECT"}
        </span>
        <div className="w-3 h-3 rounded-full border border-border-main flex items-center justify-center">
          {isSelected && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
        </div>
      </div>
    </motion.button>
  );
}
