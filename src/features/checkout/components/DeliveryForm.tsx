import { MotionButton } from "@/shared/components/motion/MotionButton";
import { CheckoutFormData } from "../types";

interface DeliveryFormProps {
  formData: CheckoutFormData;
  setFormData: (data: CheckoutFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  totalPrice: number;
}

export const DeliveryForm = ({ formData, setFormData, onSubmit, totalPrice }: DeliveryFormProps) => {
  return (
    <section>
      <div className="mb-8 pb-4 border-b border-border-main">
        <h2 className="font-prada text-xs font-bold tracking-[0.2em] text-black">
          DELIVERY INFORMATION
        </h2>
      </div>

      <form id="checkout-form" onSubmit={onSubmit} className="space-y-8">
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

        <MotionButton
          type="submit"
          className="w-full py-5 bg-black text-white font-prada text-[11px] tracking-[0.3em] font-bold lg:hidden cursor-pointer"
        >
          CONFIRM RENTAL — ${totalPrice}
        </MotionButton>
      </form>
    </section>
  );
};
