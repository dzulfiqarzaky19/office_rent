import { useState } from "react";
import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";
import { CheckoutFormData } from "../types";
import type { Product } from "@/features/catalog/data/products";

export const useCheckoutForm = () => {
    const selectedDesk = useCatalogStore((s) => s.selectedDesk);
    const selectedChair = useCatalogStore((s) => s.selectedChair);
    const accessories = useCatalogStore((s) => s.accessories);
    const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
    const totalPrice = useCatalogStore((s) => s.totalPrice);

    const [formData, setFormData] = useState<CheckoutFormData>({
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
            ...accessories.map((a: Product) => `• ${a.name} ($${rentalPeriod === "weekly" ? a.weeklyPrice : a.monthlyPrice}/${period === "weekly" ? "wk" : "mo"})`),
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

    return {
        formData,
        setFormData,
        isSubmitted,
        handleSubmit,
    };
};
