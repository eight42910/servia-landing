import { ctaDetails } from '@/data/cta';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#2563EB] bg-[linear-gradient(to_right,#1E40AF_1px,transparent_1px),linear-gradient(to_bottom,#1E40AF_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1E3A8A,transparent)]"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaDetails.heading}
            </h2>

            <p className="mx-auto max-w-xl md:px-5 mb-8">
              {ctaDetails.subheading}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 mb-8">
              <a
                href={ctaDetails.primaryCta.url}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                {ctaDetails.primaryCta.text}
              </a>
              <a
                href={ctaDetails.secondaryCta.url}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              >
                {ctaDetails.secondaryCta.text}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-8 text-sm text-neutral-200">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>{ctaDetails.businessHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>{ctaDetails.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
