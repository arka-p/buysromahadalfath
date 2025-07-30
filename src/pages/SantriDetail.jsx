import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetSpreadsheetData } from "../component/getSpreadsheetData";
import { Link } from "react-router-dom"
import Breadcrumb from "../component/Breadcrumb";

export default function SantriDetail() {
  const { id } = useParams();
  const [santri, setSantri] = useState(null);

  useEffect(() => {
    GetSpreadsheetData().then(data => {
      const selected = data.find(item => item.NomorID === id);
      setSantri(selected);
    });
  }, [id]);

  if (!santri) {
    return <p className="p-4">Memuat Data...</p>;
  }

  return (
    <div className="py-4 px-8 bg-lime-50 h-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="my-2 border-b-6 w-full border-lime-500 mb-4">
          <Breadcrumb />
        </div>
      
        <div className="my-6">
          <div className="text-xl font-extrabold">Capaian Hafalan Quran</div>
          <div className="text-xs text-gray-500">Klik Home / Kembali untuk ke Beranda</div>
        </div>
        <div className="grid xs:grid-cols-4 sm:grid-cols-3 gap-4">
          <div className="px-6 py-10 rounded-2xl shadow bg-white border border-gray-200 justify-items-center">
            {santri.URLpic && (
              <img src={santri.URLpic} alt="Foto Santri" className="w-36 h-auto mt-2 rounded-full border-7 border-lime-200 " />
            )}
            <div className="text-center">
              <div class="text-xl font-bold">{santri.NamaLengkap}</div>
              <div className="text-sm text-gray-500">NomorID : {santri.NomorID}</div>
              <div className="text-sm text-gray-500">Usia : {santri.Usia}</div>
              <div className="text-sm text-gray-500">Asal : {santri.AsalKota}</div>
            </div>
            <div
              className={`${santri.BiayaPendidikan === "Belum Terpenuhi" ? "bg-gray-300 text-gray-500" : "bg-lime-600 text-white"
                } py-2 my-4 rounded-xl w-full  text-center`}
            >
              <div className="text-sm font-light">Biaya Pendidikan</div>
              <div className="font-bold">{santri.BiayaPendidikan}</div>
            </div>

          </div>
          <div className="xs:col-span-3 sm:col-span-2 px-6 py-10 rounded-2xl shadow bg-white border border-gray-200 justify-items-start">
            <div className="text-gray-500 text-sm">Orang Tua Asuh: </div>
            <div className="text-gray-500 text-sm font-bold pb-3">{santri.NamaOrangTuaAsuh}</div>
            <div className="border-b w-full border-gray-200 mb-2"></div>
            <div className="text-gray-500 text-sm">Hafalan Bulan Lalu: </div>
            <div className="text-gray-500 text-sm font-bold pb-3">{santri.HafalanBulanLalu}</div>
            <div className="border-b w-full border-gray-200 mb-2"></div>
            <div className="text-gray-500 text-sm">Ziyadah Bulan Ini: </div>
            <div className="text-gray-500 text-sm font-bold pb-3">{santri.ZiyadahBulanini}</div>
            <div className="border-b w-full border-gray-200 mb-2"></div>
            <div className="text-gray-500 text-sm">Juz Yang Di Hafal: </div>
            <div className="text-gray-500 text-sm font-bold pb-3">{santri.JuzYangDiHafal}</div>
            <div className="border-b w-full border-gray-200 mb-2"></div>
            <div className="text-gray-500 text-sm">Total Hafalan: </div>
            <div className="text-gray-500 text-sm font-bold pb-3">{santri.TotalHafalan}</div>
            <div className="border-b w-full border-gray-200 mb-2"></div>
            <div className="text-gray-500 text-sm">Total Tasmi': </div>
            <div className="text-gray-500 text-sm font-bold pb-3">{santri.JuzYangSudahdiTasmikan}</div>
          </div>
        </div>

        <div className="mt-4 text-center pb-10">
          <Link to="/" className="text-lime-600 hover:underline">← Kembali ke daftar</Link>
        </div>
      </div>
    </div>
  );
}
