export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-[120px] pb-[64px]" aria-label="Site Footer">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Main Grid: 5 Columns on Desktop, Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[48px] lg:gap-[32px] mb-[120px]">
          
          {/* Column 1: Brand Info (Spans 2 columns on large screens for layout balance) */}
          <div className="lg:col-span-2 max-w-[320px]">
            {/* Logo - Newsreader serif font */}
            <span className="font-secondary font-bold text-2xl text-black block mb-[16px]">
              Steward
            </span>
            <p className="font-primary font-regular text-sm text-gray-500 leading-[1.6]">
              Steward is a restaurant operating system designed to bring clarity to everyday operations through one connected platform.
            </p>
          </div>

          {/* Column 2: Product Links */}
          <nav aria-label="Product Navigation">
            <span className="font-primary font-semibold text-xs text-black uppercase tracking-wider block mb-[20px]">
              Product
            </span>
            <ul className="space-y-[12px]">
              <li>
                <a href="#product" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Product
                </a>
              </li>
              <li>
                <a href="#pricing" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#book-a-demo" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Book a Demo
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3: Company Links */}
          <nav aria-label="Company Navigation">
            <span className="font-primary font-semibold text-xs text-black uppercase tracking-wider block mb-[20px]">
              Company
            </span>
            <ul className="space-y-[12px]">
              <li>
                <a href="#about" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#early-partners" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Early Partners
                </a>
              </li>
              <li>
                <a href="#contact" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 4: Resources & Legal */}
          <nav aria-label="Resources Navigation">
            <span className="font-primary font-semibold text-xs text-black uppercase tracking-wider block mb-[20px]">
              Resources
            </span>
            <ul className="space-y-[12px]">
              <li>
                <a href="#faq" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#privacy" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="touch-target font-primary font-regular text-sm text-gray-500 hover:text-black hover:underline transition-all">
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>

        </div>

        {/* Contact Info Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-100 py-[24px] gap-[16px]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[32px]">
            <span className="font-primary text-sm text-gray-500 font-regular">
              Email:{' '}
              <a href="mailto:hello@steward.so" className="text-black hover:underline font-medium">
                hello@steward.so
              </a>
            </span>
            <span className="font-primary text-sm text-gray-500 font-regular">
              Location: <span className="text-black font-medium">Hyderabad, India</span>
            </span>
          </div>
          <span className="font-primary text-xs text-gray-400 font-regular">
            Version 1.0
          </span>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-100 pt-[24px] flex flex-col sm:flex-row items-center justify-between gap-[12px]">
          <span className="font-primary text-xs text-gray-500 font-regular">
            &copy; {currentYear} Steward.
          </span>
          <span className="font-primary text-xs text-gray-400 font-regular">
            Built thoughtfully for restaurants.
          </span>
        </div>

      </div>
    </footer>
  );
}
