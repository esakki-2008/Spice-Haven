import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';

interface OrderCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const OrderCartModal: React.FC<OrderCartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.dish.price * item.quantity, 0);
  const serviceFee = subtotal > 0 ? 3.50 : 0;
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 5.00 : 0;
  const total = subtotal + serviceFee + deliveryFee;

  const handleCheckout = () => {
    setIsSuccess(true);
  };

  const handleCloseAll = () => {
    setIsSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C]/80 backdrop-blur-sm flex justify-end animate-fade-in">
      <div className="w-full max-w-md bg-[#161616] border-l border-white/10 h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 gold-text" />
            <h3 className="serif text-xl font-bold text-white">Your Online Order</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded bg-[#0C0C0C] text-stone-400 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] flex items-center justify-center gold-text">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="serif text-2xl font-bold text-white">Order Placed Successfully!</h4>
              <p className="text-stone-300 text-sm">
                Thank you for ordering with Spice Haven. Your kitchen ticket has been printed and preparation will begin shortly.
              </p>
            </div>
            <button
              onClick={handleCloseAll}
              className="w-full py-3.5 btn-primary rounded text-sm cursor-pointer"
            >
              Back to Restaurant
            </button>
          </div>
        ) : (
          <>
            {/* Order Type Toggle */}
            <div className="p-4 bg-[#0C0C0C] border-b border-white/10">
              <div className="grid grid-cols-2 gap-2 bg-[#161616] p-1 rounded border border-white/10">
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`py-2 rounded text-xs font-semibold transition-all cursor-pointer ${
                    orderType === 'pickup' ? 'bg-[#C5A059] text-[#0C0C0C] font-bold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Pickup (Complimentary)
                </button>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 rounded text-xs font-semibold transition-all cursor-pointer ${
                    orderType === 'delivery' ? 'bg-[#C5A059] text-[#0C0C0C] font-bold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Delivery (+$5.00)
                </button>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-stone-500 space-y-3">
                  <ShoppingBag className="w-12 h-12 stroke-1 text-stone-700" />
                  <p className="text-sm">Your cart is currently empty.</p>
                  <p className="text-xs text-stone-600">Add dishes from our popular items or full menu to start an order.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.dish.id}
                    className="flex items-center justify-between gap-4 p-4 rounded bg-[#0C0C0C] border border-white/10"
                  >
                    <img
                      src={item.dish.image}
                      alt={item.dish.name}
                      className="w-16 h-16 rounded object-cover border border-white/10 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="serif font-bold text-white text-sm truncate">{item.dish.name}</h4>
                      <span className="gold-text text-xs font-semibold">${item.dish.price.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, -1)}
                        className="p-1.5 rounded bg-[#161616] text-stone-300 hover:text-white transition-colors border border-white/10"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-bold text-white w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.dish.id, 1)}
                        className="p-1.5 rounded bg-[#161616] text-stone-300 hover:text-white transition-colors border border-white/10"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-[#0C0C0C] border-t border-white/10 space-y-4">
                <div className="space-y-2 text-sm text-stone-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service & Packaging Fee</span>
                    <span className="font-semibold text-white">${serviceFee.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span className="font-semibold text-white">${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold gold-text">
                    <span>Total Amount</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 btn-primary rounded text-base shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

