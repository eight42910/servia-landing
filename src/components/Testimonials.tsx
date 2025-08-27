import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <div className="grid gap-8 w-full mx-auto lg:gap-8 lg:grid-cols-3 px-4 lg:px-0">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <div className="flex items-center mb-6 w-full justify-start">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name} avatar`}
              width={50}
              height={50}
              className="rounded-full shadow-md"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-secondary mb-1">
                {testimonial.name}
              </h3>
              <p className="text-sm text-foreground-accent">
                {testimonial.role}
              </p>
            </div>
          </div>
          <p className="text-foreground-accent text-left leading-relaxed text-base">
            &quot;{testimonial.message}&quot;
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
