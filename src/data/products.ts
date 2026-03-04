export type ProductCategory = "desk" | "chair" | "accessory";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  weeklyPrice: number;
  monthlyPrice: number;
  imageSrc: string;
  features: string[];
  emoji: string;
}

export const desks: Product[] = [
  {
    id: "desk-electrical",
    name: "Electrical Adjustable Desk",
    description:
      "Electric height adjustment (70-118cm), smooth and quiet motor, spacious durable tabletop. Ergonomic sit-stand design.",
    category: "desk",
    weeklyPrice: 7,
    monthlyPrice: 20,
    imageSrc: "/products/desk_1.webp",
    features: [
      "Electric height: 70-118cm",
      "Quiet motor",
      "3 size options",
      "Steel frame",
    ],
    emoji: "⚡",
  },
  {
    id: "desk-mechanical",
    name: "Mechanical Adjustable Desk",
    description:
      "Effortlessly adjust height from 70-120cm, no electricity needed. Clean, minimal wooden design.",
    category: "desk",
    weeklyPrice: 5,
    monthlyPrice: 14,
    imageSrc: "/products/desk.webp",
    features: [
      "Manual height: 70-120cm",
      "No power needed",
      "2 size options",
      "Wooden top",
    ],
    emoji: "🪵",
  },
  {
    id: "desk-basic",
    name: "Simple Work Desk",
    description:
      "Sturdy fixed-height desk with a clean minimalist design. Perfect for a focused workspace setup.",
    category: "desk",
    weeklyPrice: 4,
    monthlyPrice: 11,
    imageSrc: "/products/desk.webp",
    features: [
      "Fixed height",
      "Spacious top",
      "Minimalist design",
      "Easy setup",
    ],
    emoji: "🖥️",
  },
];

export const chairs: Product[] = [
  {
    id: "chair-ergonomic",
    name: "Ergonomic Office Chair",
    description:
      "Breathable mesh back, high-density foam seat, 4D adjustable armrests, adjustable headrest, lumbar support, reclining backrest.",
    category: "chair",
    weeklyPrice: 12,
    monthlyPrice: 24,
    imageSrc: "/products/chair.webp",
    features: [
      "4D armrests",
      "Mesh back",
      "Lumbar support",
      "Reclining + leg rest",
    ],
    emoji: "🪑",
  },
  {
    id: "chair-standard",
    name: "Standard Office Chair",
    description:
      "Comfortable padded office chair with adjustable height and swivel base. Great for everyday use.",
    category: "chair",
    weeklyPrice: 6,
    monthlyPrice: 16,
    imageSrc: "/products/chair_1.webp",
    features: [
      "Padded seat",
      "Height adjustable",
      "Swivel base",
      "Armrests",
    ],
    emoji: "💺",
  },
  {
    id: "chair-stool",
    name: "Standing Desk Stool",
    description:
      "Active sitting stool that promotes movement and better posture. Perfect companion for standing desks.",
    category: "chair",
    weeklyPrice: 4,
    monthlyPrice: 11,
    imageSrc: "/products/chair.webp",
    features: [
      "Active sitting",
      "Height adjustable",
      "360° movement",
      "Compact",
    ],
    emoji: "🔄",
  },
];

export const accessories: Product[] = [
  {
    id: "acc-monitor-24",
    name: '24" FHD Monitor',
    description:
      "Xiaomi Mi 23.8 Desktop Monitor A24i at 100Hz, 1920x1080 FHD, 250 Nits, 99% sRGB.",
    category: "accessory",
    weeklyPrice: 5,
    monthlyPrice: 14,
    imageSrc: "/products/24-front.webp",
    features: ["24 inch FHD", "100Hz", "99% sRGB", "HDMI + DP"],
    emoji: "🖥️",
  },
  {
    id: "acc-monitor-34",
    name: '34" Curved Monitor',
    description:
      "Xiaomi Mi Curved 34\" 4K monitor at 144Hz, WQHD 3440×1440, 121% sRGB, perfect for multitasking.",
    category: "accessory",
    weeklyPrice: 10,
    monthlyPrice: 28,
    imageSrc: "/products/34-front.webp",
    features: ["34 inch curved", "144Hz", "WQHD 4K", "121% sRGB"],
    emoji: "🖥️",
  },
  {
    id: "acc-keyboard",
    name: "Logitech MX Keyboard",
    description:
      "Wireless keyboard with up to 10m range, Easy-Switch for 3 devices, all OS support.",
    category: "accessory",
    weeklyPrice: 2,
    monthlyPrice: 5,
    imageSrc: "/products/rk_keyboard.webp",
    features: ["Wireless", "Multi-device", "All OS", "5-month battery"],
    emoji: "⌨️",
  },
  {
    id: "acc-mouse",
    name: "Logitech M331 Mouse",
    description:
      "Silent wireless mouse with Logi Bolt USB receiver, supports all operating systems.",
    category: "accessory",
    weeklyPrice: 1,
    monthlyPrice: 3,
    imageSrc: "/products/mouse_1.webp",
    features: ["Silent clicks", "Wireless", "All OS", "Ergonomic"],
    emoji: "🖱️",
  },
  {
    id: "acc-laptop-stand",
    name: "Ergonomic Laptop Stand",
    description:
      'Compatible with all laptops 10"-17", raises and angles for comfortable and efficient use.',
    category: "accessory",
    weeklyPrice: 2,
    monthlyPrice: 5,
    imageSrc: "/products/laptop_stand.webp",
    features: ['10"-17" laptops', "Adjustable angle", "Aluminum", "Portable"],
    emoji: "💻",
  },
  {
    id: "acc-light-bar",
    name: "Monitor Light Bar",
    description:
      "Mijia dimmable light bar, color temp 2700-6500K, premium metal body, Ra95 color rendering.",
    category: "accessory",
    weeklyPrice: 2,
    monthlyPrice: 5,
    imageSrc: "/products/lightbar.webp",
    features: ["Dimmable", "2700-6500K", "Metal body", "Ra95 CRI"],
    emoji: "💡",
  },
  {
    id: "acc-webcam",
    name: "Logitech 4K Webcam",
    description:
      "Logitech Brio 4K with 5x HD zoom, integrated microphone, noise canceling.",
    category: "accessory",
    weeklyPrice: 3,
    monthlyPrice: 8,
    imageSrc: "/products/4k_webcam.webp",
    features: ["4K Ultra HD", "5x zoom", "Noise cancel", "Tripod mount"],
    emoji: "📷",
  },
  {
    id: "acc-plant",
    name: "Desk Plant",
    description:
      "Beautiful potted desk plant to bring life and freshness to your workspace. Low maintenance.",
    category: "accessory",
    weeklyPrice: 1,
    monthlyPrice: 3,
    imageSrc: "/products/desk_plant.webp",
    features: ["Low maintenance", "Air purifying", "Decorative pot", "Tropical"],
    emoji: "🌿",
  },
];

export const allProducts: Product[] = [...desks, ...chairs, ...accessories];

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}
