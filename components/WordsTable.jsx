import React, { useEffect, useState } from "react";

export default function WordsTable() {
  const [data, setData] = useState([]);

  const FetchData = () => {
    fetch("/api/word")
      .then((res) => res.json())
      .then((words) => setData(words.data));
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/word/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((word) => word.id !== id));
      FetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => FetchData(), []);

  return (
    <section className="w-full">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Türkçe</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">İngilizce</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="border-2 border-gray-100">
          {data.map((word) => (
            <tr
              key={word._id}
              className="hover:bg-gray-100 border-b border-gray-300"
            >
              <td className="p-2 whitespace-nowrap">{word.word_tr}</td>
              <td className="p-2 whitespace-nowrap">{word.word_en}</td>
              <td className="p-2 whitespace-nowrap">
                <button
                  aria-label="sil"
                  onClick={() => handleDelete(word._id)}
                  className="bg-red-500 text-white font-semibold rounded-lg px-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
