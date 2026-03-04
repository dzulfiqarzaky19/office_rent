"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { Product, desks, chairs } from "@/data/products";

type RentalPeriod = "weekly" | "monthly";

interface WorkspaceState {
  selectedDesk: Product | null;
  selectedChair: Product | null;
  accessories: Product[];
  rentalPeriod: RentalPeriod;
}

interface WorkspaceContextType extends WorkspaceState {
  selectDesk: (desk: Product) => void;
  selectChair: (chair: Product) => void;
  addAccessory: (accessory: Product) => void;
  removeAccessory: (accessoryId: string) => void;
  hasAccessory: (accessoryId: string) => boolean;
  toggleAccessory: (accessory: Product) => void;
  setRentalPeriod: (period: RentalPeriod) => void;
  totalPrice: number;
  itemCount: number;
  allSelectedItems: Product[];
  clearAll: () => void;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [selectedDesk, setSelectedDesk] = useState<Product | null>(desks[0]);
  const [selectedChair, setSelectedChair] = useState<Product | null>(chairs[0]);
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>("weekly");

  const selectDesk = useCallback((desk: Product) => {
    setSelectedDesk(desk);
  }, []);

  const selectChair = useCallback((chair: Product) => {
    setSelectedChair(chair);
  }, []);

  const addAccessory = useCallback((accessory: Product) => {
    setAccessories((prev) => {
      if (prev.find((a) => a.id === accessory.id)) return prev;
      return [...prev, accessory];
    });
  }, []);

  const removeAccessory = useCallback((accessoryId: string) => {
    setAccessories((prev) => prev.filter((a) => a.id !== accessoryId));
  }, []);

  const hasAccessory = useCallback(
    (accessoryId: string) => {
      return accessories.some((a) => a.id === accessoryId);
    },
    [accessories]
  );

  const toggleAccessory = useCallback(
    (accessory: Product) => {
      if (accessories.find((a) => a.id === accessory.id)) {
        removeAccessory(accessory.id);
      } else {
        addAccessory(accessory);
      }
    },
    [accessories, addAccessory, removeAccessory]
  );

  const clearAll = useCallback(() => {
    setSelectedDesk(null);
    setSelectedChair(null);
    setAccessories([]);
  }, []);

  const allSelectedItems = useMemo(() => {
    const items: Product[] = [];
    if (selectedDesk) items.push(selectedDesk);
    if (selectedChair) items.push(selectedChair);
    items.push(...accessories);
    return items;
  }, [selectedDesk, selectedChair, accessories]);

  const totalPrice = useMemo(() => {
    return allSelectedItems.reduce((sum, item) => {
      return sum + (rentalPeriod === "weekly" ? item.weeklyPrice : item.monthlyPrice);
    }, 0);
  }, [allSelectedItems, rentalPeriod]);

  const itemCount = allSelectedItems.length;

  return (
    <WorkspaceContext.Provider
      value={{
        selectedDesk,
        selectedChair,
        accessories,
        rentalPeriod,
        selectDesk,
        selectChair,
        addAccessory,
        removeAccessory,
        hasAccessory,
        toggleAccessory,
        setRentalPeriod,
        totalPrice,
        itemCount,
        allSelectedItems,
        clearAll,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
}
