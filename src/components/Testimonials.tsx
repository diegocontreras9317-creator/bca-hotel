import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/hotelData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F4EE] text-[#0C0C0C] relative border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#8C7D65] uppercase block mb-2">
            Opiniones de Huéspedes
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C0C0C] tracking-tight">
            Experiencias en BCA HOTEL
          </h2>

          <p className="mt-3 text-sm text-[#5C564D] font-normal">
            La tranquilidad y el buen servicio reflejados en los comentarios de quienes nos visitan.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#E3DDD1] hover:border-[#C5BDAF] rounded-xl p-5 shadow-sm hover:shadow-md flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#121212] text-[#121212]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#7A7163] font-medium">{rev.date}</span>
                </div>

                <p className="text-xs text-[#262626] leading-relaxed font-normal italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EFEAE1] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0C0C0C]">
                    {rev.author}
                  </h4>
                  <p className="text-[10px] text-[#7A7163] font-normal">{rev.city}</p>
                </div>
                <span className="text-[10px] text-[#3D372E] bg-[#EFE9DD] px-2 py-0.5 rounded border border-[#E0D8CA] font-medium">
                  {rev.tripType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
