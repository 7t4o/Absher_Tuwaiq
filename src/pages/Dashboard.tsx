import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { RiRobot3Fill, RiSmartphoneFill } from "react-icons/ri";
import { BsExclamationSquare, BsGraphUp } from "react-icons/bs";
import { IoMdCamera } from "react-icons/io";
import { MdOnlinePrediction } from "react-icons/md";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";

const alertItems = [
  { text: "نشاط غير معتاد للمركبات", location: "منطقة الخدمات – مبنى B" },
  { text: "ازدحام مسجل بنسبة 27% فوق المعدل", location: " المنطقة المركزية" },
  { text: "عطل في جهاز استشعار", location: " طريق الملك فهد – الرياض" },
];

const systemStatusItems = [
  {
    icon: <IoMdCamera className="h-12 w-12 sm:h-14 sm:w-14" />,
    status: "نشطة",
    efficiency: "98%",
    issues: "لا يوجد",
  },
  {
    icon: <MdOnlinePrediction className="h-12 w-12 sm:h-14 sm:w-14" />,
    status: "نشطة",
    efficiency: "91%",
    issues: "لا يوجد",
  },
  {
    icon: <RiSmartphoneFill className="h-12 w-12 sm:h-14 sm:w-14" />,
    status: "نشطة",
    efficiency: "95%",
    issues: "لا يوجد",
  },
];

const aiPredictions = [
  {
    text: "إحتمال زيادة الخطر بنسبة 21% خلال 3 ساعات",
    reason: "الأسباب المحتملة: إزدحام في المنطقة الجنوبية",
    image: "/images/dashboard 1.png",
  },
  {
    text: "إحتمال زيادة الخطر بنسبة 30% خلال 3 ساعات",
    reason: "الأسباب المحتملة: ارتفاع كثافة الحشود + تنبيهات متكررة غير معالجة",
    image: "/images/dashboard 2.png",
  },
];

export default function Dashboard() {
  return (
    <main
      className="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-8 xl:px-[87px]"
      role="main"
    >
      <Card className="rounded-[20px] border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-8">
        <CardContent className="relative flex h-full flex-col p-5 pt-4">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <BsExclamationSquare className="h-8 w-8 bg-[#cfd8dc] text-[#546e7a] sm:h-9 sm:w-9" />
            <h2 className="text-2xl font-semibold tracking-[0] text-black [direction:rtl] sm:text-3xl lg:text-4xl">
              أخر التنبيهات
            </h2>
          </div>

          <div className="space-y-0">
            {alertItems.map((alert, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col gap-2 py-4 sm:flex-row-reverse sm:items-center sm:gap-4 sm:py-5">
                  <p className="text-lg font-normal tracking-[0] text-black [direction:rtl] sm:text-xl lg:text-[32px]">
                    {alert.text}
                  </p>
                  {alert.location && (
                    <p className="text-lg font-normal tracking-[0] text-black [direction:rtl] sm:text-xl lg:text-[32px] sm:mr-4">
                      {alert.location}
                    </p>
                  )}
                </div>
                {index < alertItems.length - 1 && (
                  <div className="h-px w-full bg-gray-500" />
                )}
              </React.Fragment>
            ))}
          </div>
          <Button className="mt-6 block h-12 w-full rounded-xl bg-[#17b26a] text-lg font-semibold text-white hover:bg-[#17b26a]/90 sm:w-[159px] sm:text-xl">
            <span className="tracking-[0] leading-[normal] [direction:rtl]">
              عرض التفاصيل
            </span>
          </Button>
        </CardContent>
      </Card>

      <Card className="rounded-[20px] border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-4">
        <CardContent className="p-5 pt-4">
          <div className="mb-6 flex items-center justify-between gap-3">
            <FaTriangleExclamation className="h-8 w-8 text-red-500 sm:h-9 sm:w-9" />
            <h2 className="text-2xl font-semibold tracking-[0] text-black [direction:rtl] sm:text-3xl lg:text-4xl">
              إجمالي عدد المخاطر
            </h2>
          </div>

          <div className="space-y-4 text-center sm:space-y-6">
            <div className="text-6xl font-semibold tracking-[0] text-[#496f5d] sm:text-8xl lg:text-9xl">
              116
            </div>
            <p className="text-base font-semibold tracking-[0] text-[#00000099] [direction:rtl] sm:text-xl lg:text-2xl">
              زيادة 12% هذا الاسبوع
            </p>
            <p className="text-base font-semibold tracking-[0] text-[#00000099] [direction:rtl] sm:text-xl lg:text-2xl">
              أخر تحديث: قبل 5 دقائق
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[20px] border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-3">
        <CardContent className="p-5 pt-4">
          <div className="mb-6 flex items-center justify-between gap-3">
            <RiRobot3Fill className="h-8 w-8 sm:h-9 sm:w-9" />
            <h2 className="text-2xl font-semibold tracking-[0] text-black [direction:rtl] sm:text-3xl lg:text-4xl">
              حالة النظام
            </h2>
          </div>

          <div className="space-y-6">
            {systemStatusItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-between gap-6 sm:gap-9 ">
                  <div className="flex h-[88px] w-[72px] shrink-0 items-center justify-center rounded-[20px] border-[0.3px] border-solid border-black sm:h-[103px] sm:w-[76px]">
                    {item.icon}
                  </div>
                  <div className="text-base font-normal tracking-[0] text-black [direction:rtl] sm:text-lg lg:text-xl">
                    <span className="font-semibold">الحالة: </span>
                    <span className="font-normal">
                      {item.status}
                      <br />
                    </span>
                    <span className="font-semibold">الكفاءة </span>
                    <span className="font-normal">
                      {item.efficiency}
                      <br />
                    </span>
                    <span className="font-semibold">المشاكل: </span>
                    <span className="font-normal">{item.issues}</span>
                  </div>
                </div>
                {index < systemStatusItems.length - 1 && (
                  <div className="h-3 w-full rounded-[100px] border-b-[0.5px] [border-bottom-style:solid] border-black" />
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[20px] border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-4">
        <CardContent className="relative flex h-full flex-col items-center justify-between gap-6 p-5 pt-4">
          <div className="mb-2 flex w-full items-center justify-between gap-3">
            <BsGraphUp className="h-8 w-8 sm:h-9 sm:w-9" />
            <h2 className="text-2xl font-semibold tracking-[0] text-black [direction:rtl] sm:text-3xl lg:text-4xl">
              التحليل السريع
            </h2>
          </div>

          <div className="relative flex w-full items-center justify-center">
            <div className="rounded-full border-12 border-[#17b26a_#9FDFC1_#17b26a_#17b26a] px-12 py-12 text-5xl font-normal tracking-[0] text-black sm:border-14 sm:px-14 sm:py-14 sm:text-6xl lg:border-17 lg:px-20 lg:py-20 lg:text-8xl">
              81
            </div>
          </div>

          <p className="w-full max-w-80 text-center text-lg font-medium tracking-[0] text-black [direction:rtl] sm:text-xl lg:text-2xl">
            انخفاض نسبة الحوادث بنسبة 81% هذا الشهر
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-[20px] border border-solid border-[#00000029] shadow-[0px_20px_24px_-4px_#10182414,0px_4px_6px_-2px_#10182408] lg:col-span-5 lg:col-start-8 xl:col-span-5 xl:col-start-8">
        <CardContent className="relative flex h-full flex-col p-5 pt-4">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <RiRobot3Fill className="h-8 w-8 sm:h-9 sm:w-9" />
            <h2 className="text-2xl font-semibold tracking-[0] text-black [direction:rtl] sm:text-3xl lg:text-4xl">
              توقعات الذكاء الإصطناعي
            </h2>
          </div>

          <div className="space-y-6">
            {aiPredictions.map((prediction, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <img
                    className="w-full max-w-[167px] shrink-0 rounded-xl object-cover h-auto"
                    alt="Prediction visual"
                    src={prediction.image}
                  />
                  <div className="w-full max-w-3xl">
                    <p className="text-lg font-normal tracking-[0] text-center sm:text-right text-black [direction:rtl] sm:text-xl lg:text-[32px]">
                      {prediction.text}
                    </p>
                    <p className="mt-2 text-base font-normal tracking-[0] text-center sm:text-right text-[#000000b2] [direction:rtl] sm:text-lg lg:text-2xl">
                      {prediction.reason}
                    </p>
                  </div>
                </div>
                {index < aiPredictions.length - 1 && (
                  <div className="h-px w-full bg-gray-500" />
                )}
              </React.Fragment>
            ))}
          </div>

          <Button className="mt-6 block h-12 w-full rounded-xl bg-[#17b26a] text-lg font-semibold text-white hover:bg-[#17b26a]/90 sm:w-[159px] sm:text-xl">
            <span className="tracking-[0] leading-[normal] [direction:rtl]">
              عرض التوصيات
            </span>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
