"use client";

import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";
import { CheckoutSuccess } from "./CheckoutSuccess";
import { CheckoutHeader } from "./CheckoutHeader";
import { EmptyCollection } from "./EmptyCollection";
import { CollectionDetails } from "./CollectionDetails";
import { DeliveryForm } from "./DeliveryForm";
import { EstimatedTotal } from "./EstimatedTotal";
import { useCheckoutForm } from "../hooks/useCheckoutForm";

export const CheckoutClient = () => {
  const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
  const setRentalPeriod = useCatalogStore((s) => s.setRentalPeriod);
  const totalPrice = useCatalogStore((s) => s.totalPrice);
  const allSelectedItems = useCatalogStore((s) => s.allSelectedItems);
  const itemCount = useCatalogStore((s) => s.itemCount);
  const monthlySavings = useCatalogStore((s) => s.monthlySavings);

  const { formData, setFormData, isSubmitted, handleSubmit } = useCheckoutForm();


  if (isSubmitted) {
    return (
      <CheckoutSuccess 
        email={formData.email} 
        itemCount={itemCount} 
        rentalPeriod={rentalPeriod} 
        totalPrice={totalPrice} 
      />
    );
  }

  return (
    <div className="pt-[calc(var(--page-pt)+40px)] pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10">
      <CheckoutHeader />

      {itemCount === 0 ? (
        <EmptyCollection />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

          <div className="space-y-12">
            <CollectionDetails items={allSelectedItems} rentalPeriod={rentalPeriod} />

            <DeliveryForm 
              formData={formData} 
              setFormData={setFormData}
              onSubmit={handleSubmit}
              totalPrice={totalPrice}
            />
          </div>

          <div className="lg:sticky h-fit pb-12" style={{ top: 'calc(var(--navbar-height) + 40px)' }}>
            <EstimatedTotal 
              rentalPeriod={rentalPeriod}
              setRentalPeriod={setRentalPeriod}
              monthlySavings={monthlySavings}
              totalPrice={totalPrice}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};
