"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useWorkspace } from "@/context/workspace-context";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const {
    selectedDesk,
    selectedChair,
    accessories,
    rentalPeriod,
    setRentalPeriod,
    totalPrice,
    allSelectedItems,
    itemCount,
  } = useWorkspace();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryDate: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const buildWhatsAppMessage = () => {
    const period = rentalPeriod === "weekly" ? "weekly" : "monthly";
    const itemLines = [
      selectedDesk ? `• ${selectedDesk.name} ($${rentalPeriod === "weekly" ? selectedDesk.weeklyPrice : selectedDesk.monthlyPrice}/${period === "weekly" ? "wk" : "mo"})` : null,
      selectedChair ? `• ${selectedChair.name} ($${rentalPeriod === "weekly" ? selectedChair.weeklyPrice : selectedChair.monthlyPrice}/${period === "weekly" ? "wk" : "mo"})` : null,
      ...accessories.map(a => `• ${a.name} ($${rentalPeriod === "weekly" ? a.weeklyPrice : a.monthlyPrice}/${period === "weekly" ? "wk" : "mo"})`),
    ].filter(Boolean).join("\n");

    const msg = [
      `Hi monis.rent! I'd like to rent a workspace setup 🏠`,
      ``,
      `*My Setup (${rentalPeriod}):*`,
      itemLines,
      ``,
      `*Total: $${totalPrice}/${rentalPeriod === "weekly" ? "wk" : "mo"}*`,
      ``,
      `*My Details:*`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Address: ${formData.address}`,
      `Preferred Delivery: ${formData.deliveryDate}`,
      formData.notes ? `Notes: ${formData.notes}` : null,
    ].filter(v => v !== null).join("\n");

    return `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppMessage(), "_blank");
    setIsSubmitted(true);
  };

  const monthlySavings = (() => {
    const weeklyTotal = allSelectedItems.reduce(
      (sum, item) => sum + item.weeklyPrice * 4,
      0
    );
    const monthlyTotal = allSelectedItems.reduce(
      (sum, item) => sum + item.monthlyPrice,
      0
    );
    return weeklyTotal - monthlyTotal;
  })();

  if (isSubmitted) {
    return (
      <main className="relative min-h-screen bg-white">
        <Navbar />
        <div className="pt-[calc(var(--page-pt)+40px)] pb-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-border-main p-10 sm:p-16 bg-white shadow-sm"
          >
            <h1 className="font-prada text-3xl font-light mb-6 tracking-tight text-black">
              THANK YOU
            </h1>
            <p className="font-prada text-[10px] text-text-secondary mb-2 tracking-[0.2em] uppercase">
              Your rental request has been received.
            </p>
            <p className="font-prada text-[10px] text-text-secondary mb-12 tracking-[0.2em] uppercase">
              Our team will contact you at <span className="text-black font-bold">{formData.email}</span> shortly.
            </p>

            <div className="border border-border-light p-6 mb-12">
              <div className="flex items-center justify-between">
                <span className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                  {itemCount} ITEMS • {rentalPeriod === "weekly" ? "WEEKLY" : "MONTHLY"}
                </span>
                <span className="font-prada text-2xl font-bold text-black tracking-tight">
                  ${totalPrice}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/builder">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="px-8 py-4 border border-border-main text-black font-prada text-[10px] tracking-[0.3em] hover:bg-zinc-50 transition-all cursor-pointer"
                >
                  MODIFY SETUP
                </motion.button>
              </Link>
              <a href="https://monis.rent" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="px-10 py-4 bg-black text-white font-prada text-[10px] tracking-[0.3em] font-bold cursor-pointer"
                >
                  RETURN HOME
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <div className="pt-[calc(var(--page-pt)+40px)] pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-prada text-4xl sm:text-5xl font-light tracking-tight text-black">
            CHECKOUT
          </h1>
          <p className="font-prada text-[10px] text-text-muted mt-4 tracking-[0.3em] uppercase">
            Review and finalize your workspace collection
          </p>
        </motion.div>

        {itemCount === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 border border-dashed border-border-light"
          >
            <p className="font-prada text-[10px] text-text-muted mb-8 tracking-[0.2em]">
              YOUR WORKSPACE COLLECTION IS EMPTY
            </p>
            <Link href="/builder">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="px-12 py-4 bg-black text-white font-prada text-[10px] tracking-[0.3em] font-bold cursor-pointer"
              >
                GO TO BUILDER
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            {/* Left: Form */}
            <div className="space-y-12">
              <section>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-main">
                  <h2 className="font-prada text-xs font-bold tracking-[0.2em] text-black">
                    COLLECTION DETAILS
                  </h2>
                  <Link
                    href="/builder"
                    className="font-prada text-[9px] text-text-muted hover:text-black tracking-widest uppercase"
                  >
                    EDIT COLLECTION
                  </Link>
                </div>

                <div className="space-y-4">
                  {allSelectedItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-6 border-b border-border-light">
                      <div className="flex items-center gap-6 min-w-0">
                        <div className="w-20 h-20 bg-bg-offset border border-border-light shrink-0 overflow-hidden relative">
                          <Image 
                            src={item.imageSrc} 
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-prada text-xs font-bold text-black tracking-widest truncate uppercase">
                            {item.name}
                          </p>
                          <p className="font-prada text-[8px] text-text-muted tracking-widest uppercase mt-1">
                            {item.id.includes('desk') ? 'DESK' : item.id.includes('chair') ? 'CHAIR' : 'ACCESSORY'}
                          </p>
                        </div>
                      </div>
                      <span className="font-prada text-[11px] text-black tracking-tighter ml-6 shrink-0">
                        ${rentalPeriod === "weekly" ? item.weeklyPrice : item.monthlyPrice}
                        <span className="text-[9px] text-text-muted font-normal ml-1">/ {rentalPeriod === "weekly" ? "WK" : "MO"}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-8 pb-4 border-b border-border-main">
                  <h2 className="font-prada text-xs font-bold tracking-[0.2em] text-black">
                    DELIVERY INFORMATION
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                      <label className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-0 py-2 border-b border-border-light text-sm text-black placeholder:text-text-muted focus:outline-none focus:border-black transition-colors bg-transparent border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="NAME"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-0 py-2 border-b border-border-light text-sm text-black placeholder:text-text-muted focus:outline-none focus:border-black transition-colors bg-transparent border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="EMAIL@EXAMPLE.COM"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-0 py-2 border-b border-border-light text-sm text-black placeholder:text-text-muted focus:outline-none focus:border-black transition-colors bg-transparent border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="+62"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                        Preferred Delivery Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.deliveryDate}
                        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                        className="w-full px-0 py-2 border-b border-border-light text-sm text-black focus:outline-none focus:border-black transition-colors bg-transparent border-t-0 border-l-0 border-r-0 rounded-none"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-2">
                      <label className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                        Delivery Address in Bali *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-0 py-2 border-b border-border-light text-sm text-black placeholder:text-text-muted focus:outline-none focus:border-black transition-colors bg-transparent border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="VILLA / HOTEL / HUB NAME"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-2">
                      <label className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                        Special Instructions
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={2}
                        className="w-full px-0 py-2 border-b border-border-light text-sm text-black placeholder:text-text-muted focus:outline-none focus:border-black transition-colors bg-transparent border-t-0 border-l-0 border-r-0 rounded-none resize-none"
                        placeholder="OPTIONAL"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-5 bg-black text-white font-prada text-[11px] tracking-[0.3em] font-bold lg:hidden cursor-pointer"
                  >
                    CONFIRM RENTAL — ${totalPrice}
                  </motion.button>
                </form>
              </section>
            </div>

            {/* Right: Price summary (sticky) */}
            <div className="lg:sticky h-fit pb-12" style={{ top: 'calc(var(--navbar-height) + 40px)' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="border border-black p-8 bg-white"
              >
                <h2 className="font-prada text-xs font-bold tracking-[0.2em] text-black mb-10">
                  ESTIMATED TOTAL
                </h2>

                {/* Period toggle */}
                <div className="flex border border-border-light mb-10">
                  <button
                    onClick={() => setRentalPeriod("weekly")}
                    className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer ${
                      rentalPeriod === "weekly" ? "bg-black text-white" : "text-text-muted hover:text-black"
                    }`}
                  >
                    WEEKLY
                  </button>
                  <button
                    onClick={() => setRentalPeriod("monthly")}
                    className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer border-l border-border-light ${
                      rentalPeriod === "monthly" ? "bg-black text-white" : "text-text-muted hover:text-black"
                    }`}
                  >
                    MONTHLY
                  </button>
                </div>

                <div className="space-y-6 mb-10">
                  {rentalPeriod === "monthly" && monthlySavings > 0 && (
                    <div className="flex justify-between border border-border-light p-3">
                      <span className="font-prada text-[9px] text-text-muted tracking-widest uppercase">SAVINGS</span>
                      <span className="font-prada text-[10px] font-bold text-black tracking-tighter">
                        -${monthlySavings}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-end pb-6 border-b border-border-light">
                    <div>
                      <p className="font-prada text-[11px] font-bold text-black tracking-tight">TOTAL</p>
                      <p className="font-prada text-[8px] text-text-muted uppercase tracking-widest mt-1">INC. TAX & SETUP</p>
                    </div>
                    <div className="text-right">
                      <p className="font-prada text-3xl font-light text-black tracking-tight leading-none">
                        ${totalPrice}
                      </p>
                      <p className="font-prada text-[9px] text-text-muted uppercase tracking-widest mt-2 px-1">
                        / {rentalPeriod === "weekly" ? "WEEK" : "MONTH"}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleSubmit}
                  className="w-full py-5 bg-black text-white font-prada text-[11px] tracking-[0.3em] font-bold hidden lg:block cursor-pointer transition-colors hover:bg-zinc-800"
                >
                  CONFIRM RENTAL
                </motion.button>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    <span className="font-prada text-[8px] text-text-muted tracking-widest uppercase">FREE NEXT-DAY DELIVERY</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    <span className="font-prada text-[8px] text-text-muted tracking-widest uppercase">SETUP & INSTALLATION</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    <span className="font-prada text-[8px] text-text-muted tracking-widest uppercase">PREMIUM SERVICE SUPPORT</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
