import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "التحليلات", to: "/analytics" },
  { label: "مركز التنبيهات", to: "/notifications" },
  { label: "لوحة التحكم", to: "/dashboard" },
  { label: "الخريطة الذكية", to: "/map" },
  { label: "الرئيسية", to: "/" },
];

export default function Nav() {
  const location = useLocation();

  return (
    <header className="bg-[#17b26a] h-40 relative">
      <img
        className="absolute top-0 right-0 w-[287px] h-56 object-cover"
        alt="Logo"
        src={`${import.meta.env.BASE_URL}images/Logo.png`}
      />
      <nav className="flex items-center justify-start gap-16 h-full px-[90px]">
        {navigationItems.map((item, index) => (
          <Link
            to={item.to || "#"}
            key={index}
            className={`font-normal text-4xl cursor-pointer tracking-[0] leading-[normal] [direction:rtl] transition-all duration-300 ease-in-out hover:scale-105 ${
              item.to === location.pathname
                ? "font-bold text-white [text-shadow:0px_4px_4px_#00000080]"
                : "text-[#ffffff80] hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
