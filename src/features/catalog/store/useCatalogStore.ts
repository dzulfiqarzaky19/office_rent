"use client";

import { create } from "zustand";
import { desks, chairs } from "../data/products";
import type { Product } from "../data/products";

type RentalPeriod = "weekly" | "monthly";

interface CatalogState {
    selectedDesk: Product | null;
    selectedChair: Product | null;
    accessories: Product[];
    rentalPeriod: RentalPeriod;
    // Computed
    totalPrice: number;
    itemCount: number;
    allSelectedItems: Product[];
    monthlySavings: number;
    // Actions
    selectDesk: (desk: Product) => void;
    selectChair: (chair: Product) => void;
    addAccessory: (accessory: Product) => void;
    removeAccessory: (id: string) => void;
    hasAccessory: (id: string) => boolean;
    toggleAccessory: (accessory: Product) => void;
    setRentalPeriod: (period: RentalPeriod) => void;
    clearAll: () => void;
}

function computeDerived(
    selectedDesk: Product | null,
    selectedChair: Product | null,
    accessories: Product[],
    rentalPeriod: RentalPeriod
) {
    const allSelectedItems: Product[] = [
        ...(selectedDesk ? [selectedDesk] : []),
        ...(selectedChair ? [selectedChair] : []),
        ...accessories,
    ];

    const totalPrice = allSelectedItems.reduce(
        (sum, item) => sum + (rentalPeriod === "weekly" ? item.weeklyPrice : item.monthlyPrice),
        0
    );

    const weeklyTotal = allSelectedItems.reduce((sum, item) => sum + item.weeklyPrice * 4, 0);
    const monthlyTotal = allSelectedItems.reduce((sum, item) => sum + item.monthlyPrice, 0);
    const monthlySavings = weeklyTotal - monthlyTotal;

    return { allSelectedItems, totalPrice, itemCount: allSelectedItems.length, monthlySavings };
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
    selectedDesk: desks[0] ?? null,
    selectedChair: chairs[0] ?? null,
    accessories: [],
    rentalPeriod: "weekly",
    ...computeDerived(desks[0] ?? null, chairs[0] ?? null, [], "weekly"),

    selectDesk: (desk) => {
        const s = get();
        set({ selectedDesk: desk, ...computeDerived(desk, s.selectedChair, s.accessories, s.rentalPeriod) });
    },
    selectChair: (chair) => {
        const s = get();
        set({ selectedChair: chair, ...computeDerived(s.selectedDesk, chair, s.accessories, s.rentalPeriod) });
    },
    addAccessory: (accessory) => {
        const s = get();
        if (s.accessories.find((a) => a.id === accessory.id)) return;
        const next = [...s.accessories, accessory];
        set({ accessories: next, ...computeDerived(s.selectedDesk, s.selectedChair, next, s.rentalPeriod) });
    },
    removeAccessory: (id) => {
        const s = get();
        const next = s.accessories.filter((a) => a.id !== id);
        set({ accessories: next, ...computeDerived(s.selectedDesk, s.selectedChair, next, s.rentalPeriod) });
    },
    hasAccessory: (id) => get().accessories.some((a) => a.id === id),
    toggleAccessory: (accessory) => {
        const s = get();
        s.accessories.find((a) => a.id === accessory.id)
            ? s.removeAccessory(accessory.id)
            : s.addAccessory(accessory);
    },
    setRentalPeriod: (rentalPeriod) => {
        const s = get();
        set({ rentalPeriod, ...computeDerived(s.selectedDesk, s.selectedChair, s.accessories, rentalPeriod) });
    },
    clearAll: () => {
        set({ selectedDesk: null, selectedChair: null, accessories: [], ...computeDerived(null, null, [], get().rentalPeriod) });
    },
}));
