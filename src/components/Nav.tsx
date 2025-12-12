import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navigationItems = [
  { label: "الرئيسية", to: "/" },
  { label: "الخريطة الذكية", to: "/map" },
  { label: "لوحة التحكم", to: "/dashboard" },
  { label: "مركز التنبيهات", to: "/notifications" },
  { label: "التحليلات", to: "/analytics" },
];

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => path === location.pathname;

  return (
    <header className="relative bg-[#17b26a]" dir="rtl">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-[90px] lg:py-5">
        <div className="h-14 w-auto object-contain sm:h-16 lg:h-20 overflow-hidden">
          <img
            className="h-22 w-auto object-cover sm:h-24 lg:h-30"
            alt="Logo"
            src={import.meta.env.BASE_URL + "/images/Logo.png"}
          />
        </div>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>

        <nav className="hidden h-full items-center justify-start gap-23 lg:flex">
          {navigationItems.map((item, index) => (
            <Link
              to={item.to || "#"}
              key={index}
              className={`cursor-pointer text-4xl font-normal leading-[normal] tracking-[0] transition-all duration-300 ease-in-out hover:scale-105 ${
                isActive(item.to)
                  ? "font-bold text-white [text-shadow:0px_4px_4px_#00000080]"
                  : "text-[#ffffffcc] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/20 bg-[#17b26a] px-4 pb-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navigationItems.map((item, index) => (
              <Link
                to={item.to || "#"}
                key={index}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-xl font-medium transition hover:bg-white/10 ${
                  isActive(item.to)
                    ? "text-white [text-shadow:0px_4px_4px_#00000080]"
                    : "text-[#ffffffcc]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
