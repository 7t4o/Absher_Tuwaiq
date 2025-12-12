import React from "react";
import { Card } from "../components/card";
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";
import { BsFire } from "react-icons/bs";

const smartMapItems = [
  { title: "حالات ازدحام", icon: <FaUsers className="w-full h-full"/>, text: "13 حالة ازدحام"},
  { title: "مركبات مشبوهة", icon: <FaCar className="w-full h-full"/>, text: "6 مركبات مشبوهة"},
  { title: "سلوك غير طبيعي", icon: <FaHeadSideVirus className="w-full h-full"/>, text: "4 حالات لسلوك غير طبيعي"},
  { title: "حالات تسرب مياه", icon: <IoWater className="w-full h-full"/>, text: "3 حالات تسرب مياه"},
  { title: "حالات حريق", icon: <BsFire className="w-full h-full"/>, text: "3 حالات حريق"}
]

export default function SmartMap() {
  return (
    <main className="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-5 lg:px-8">
      <div className="relative w-full overflow-hidden rounded-2xl border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.456789012345!2d46.6752953150000!3d24.7135511840000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0123456789ab%3A0xcdef0123456789ab!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          className="h-[280px] w-full sm:h-[380px] lg:h-[600px]"
          style={{
            border: 0,
            filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)",
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <img
          src={import.meta.env.BASE_URL + "/images/map.png"}
          alt="خريطة توضيحية"
          className="pointer-events-none absolute left-3 top-4 w-40 rounded-2xl sm:left-6 sm:top-6 sm:w-52 lg:left-7 lg:top-10 lg:w-[300px]"
        />
      </div>

      <Card className="rounded-[20px] border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-2 lg:h-full">
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-semibold tracking-[0] text-black leading-[normal] sm:text-3xl lg:text-4xl">
            خريطة ذكية
          </h2>

          <div className="space-y-4">
            {smartMapItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-between gap-3">
                  <div className="h-14 w-14 sm:h-16 sm:w-16">{item.icon}</div>
                  <span className="text-xl font-medium text-black sm:text-2xl lg:text-[32px]">
                    {item.title}
                  </span>
                </div>
                {index < smartMapItems.length - 1 && <div className="h-px w-full bg-gray-500" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Card>

      <Card className="rounded-[20px] border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-5">
        <div className="px-4 py-4 sm:px-5">
          <h2 className="mb-4 text-2xl font-semibold tracking-[0] text-black leading-[normal] sm:text-3xl lg:text-4xl">
            الإحصائيات السريعة
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
            {smartMapItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center rounded-xl bg-white p-3 text-center shadow-sm sm:p-4">
                <div className="flex h-[100px] p-4 w-[100px] items-center justify-center rounded-2xl border border-black/50 sm:h-[142px] sm:w-[142px]">
                  {item.icon}
                </div>
                <span className="mt-2 text-base font-medium text-black sm:text-xl lg:text-2xl">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </main>
  )
}
