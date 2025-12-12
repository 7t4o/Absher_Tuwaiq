import { useState } from "react";
import { FiSearch, FiChevronDown, FiTrash2 } from "react-icons/fi";
import {
  IoWarningOutline,
  IoLocationSharp,
  IoCheckmarkCircle,
} from "react-icons/io5";

export default function Notifications() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "ارتفاع كثافة الحشود",
      location: "مدينة الرياض - طريق الملك فهد",
      status: "تمت المعالجة",
      time: "منذ 15 دقيقة",
      badge: "إنذار أحمر",
      processed: true,
    },
    {
      id: 2,
      type: "خلل تقني - عطل في الكاميرا",
      location: "مدينة الرياض - طريق الملك خالد",
      status: "قيد المعالجة",
      time: "منذ 30 دقيقة",
      badge: "إنذار أحمر",
      processed: false,
    },
    {
      id: 3,
      type: "احتراق مبنى",
      location: "مدينة الرياض - طريق الأمير تركي",
      status: "قيد المعالجة",
      time: "منذ 1 ساعة",
      badge: "إنذار أحمر",
      processed: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const deleteAlert = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:p-8" dir="rtl">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-800 sm:text-[32px] lg:text-[38px]">
          لوحة التنبيهات المركزية
        </h1>

        <div className="mb-6 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full min-w-60 flex-1">
            <input
              type="text"
              placeholder="ابحث عن التنبيهات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-500 px-4 py-3 pr-12 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#17b26a] sm:text-lg"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 transform text-xl text-gray-400" />
          </div>

          <div className="relative w-full min-w-[200px] sm:w-auto">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-gray-500 px-4 py-3 pl-10 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#17B26A] sm:text-lg"
            >
              <option value="">نوع التنبيه</option>
              <option value="حشود">ارتفاع كثافة الحشود</option>
              <option value="تقني">خلل تقني</option>
              <option value="حريق">احتراق</option>
            </select>
            <FiChevronDown className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>

          <button className="w-full rounded-xl bg-[#17b26a] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-green-600 sm:w-auto sm:px-8 sm:text-lg">
            تحديث
          </button>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row-reverse sm:items-center sm:justify-between">
                <span className="rounded px-3 py-1 text-sm text-red-500 ring-1 ring-red-500">
                  {alert.badge}
                </span>
                <span className="text-sm text-gray-500">{alert.time}</span>
              </div>

              <div className="mb-3 flex items-start gap-2">
                <IoWarningOutline className="mt-1 shrink-0 text-xl text-yellow-500 sm:text-2xl lg:text-3xl" />
                <div className="flex-1 text-base text-gray-900 sm:text-lg">
                  <span className="text-gray-600">نوع الخطر : </span>
                  <span className="font-semibold">{alert.type}</span>
                </div>
              </div>

              <div className="mb-3 flex items-start gap-2">
                <IoLocationSharp className="mt-1 shrink-0 text-xl text-red-500 sm:text-2xl lg:text-3xl" />
                <div className="flex-1 text-base text-gray-900 sm:text-lg">
                  <span className="text-gray-600">الموقع : </span>
                  <span className="font-semibold">{alert.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <IoCheckmarkCircle className="mt-1 shrink-0 text-xl text-[#17b26a] sm:text-2xl lg:text-3xl" />
                <div className="flex-1 text-base text-gray-900 sm:text-lg">
                  <span className="text-gray-600">الحالة: </span>
                  <span className="font-semibold">{alert.status}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-end gap-3 sm:flex-row-reverse sm:absolute bottom-5 left-5">
                <button
                  onClick={() => deleteAlert(alert.id)}
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 sm:text-base"
                >
                  <FiTrash2 className="text-gray-600" />
                  <span>إزالة</span>
                </button>
                <button className="flex items-center justify-center rounded-lg bg-[#17b26a] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600 sm:text-base">
                  عرض التفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
