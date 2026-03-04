import Navbar from "@/shared/components/layout/Navbar";
import { CheckoutClient } from "@/features/checkout/components/CheckoutClient";

export default function CheckoutPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <CheckoutClient />
    </main>
  );
}
