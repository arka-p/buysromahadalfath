import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetSpreadsheetData } from "../component/getSpreadsheetData";
import Breadcrumb from "../component/Breadcrumb";

export default function DataSantri() {
  const [santri, setSantri] = useState([]);

  useEffect(() => {
    GetSpreadsheetData().then(data => {
      setSantri(data);
    });
  }, []);

  return (
    <div className="py-4 px-8 bg-lime-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="my-2 border-b-6 w-full border-lime-500 mb-4">
          <Breadcrumb />
        </div>

        <div className="my-6">
          <div className="text-xl font-extrabold">Daftar Santri Tahfidz Al-Fath</div>
          <div className="text-xs text-gray-500">Klik Selengkapnya untuk melihat capaian hafalan</div>
        </div>
        {santri.length === 0 ? (
          <p>Memuat Data...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-3 text-center">
            {santri.map((item, index) => (
              <div key={index} className="px-6 py-10 rounded-2xl shadow bg-white border border-gray-200 justify-items-center">
                {item.URLpic && (
                  <img src={item.URLpic} alt="Foto Santri" className="w-36 h-auto mt-2 rounded-full border-7 border-lime-200 " />
                )}
                <div className="">
                  <div class="py-3 text-xl font-bold">{item.NamaLengkap}</div>
                  <div className="text-sm text-gray-500">NomorID : {item.NomorID}</div>
                  <div className="text-sm text-gray-500">Usia : {item.Usia}</div>
                  <div className="text-sm text-gray-500">Asal : {item.AsalKota}</div>
                  <div className="text-sm font-bold text-lime-600">Total Tasmi': {item.JuzYangSudahdiTasmikan}</div>
                </div>
                <div
                  className={`${item.BiayaPendidikan === "Belum Terpenuhi" ? "bg-gray-300 text-gray-500" : "bg-lime-600 text-white"
                    } py-2 my-4 rounded-xl w-full`}
                >
                  <div className="text-sm font-light">Biaya Pendidikan</div>
                  <div className="font-bold">{item.BiayaPendidikan}</div>
                </div>


                <div className="mt-8">
                  <Link to={`/santri/${item.NomorID}`} className="text-lime-600 hover:underline text-sm">
                    Selengkapnya →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}