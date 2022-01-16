import React from "react";
import { toast } from "react-toastify";
export default function New() {
  const [form, setForm] = React.useState({
    word_tr: "",
    word_en: "",
    explaination_tr: "",
    explaination_en: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/api/word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      if (res.status === 201) {
        toast.success("Kelime Eklendi");
      }
    });
    event.target.reset();
  };

  return (
    <div className="container mx-auto py-12">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <label htmlFor="word_tr" className="text-lg font-medium">
            Terim (Türkçe)
          </label>
          <input
            onChange={(event) =>
              setForm({ ...form, word_tr: event.target.value })
            }
            id="word_tr"
            className="border-2 border-gray-600 rounded-lg p-2"
            type="text"
            required
            placeholder=""
          />
          <label htmlFor="word_en" className="text-lg font-medium">
            Terim (İngilizce)
          </label>
          <input
            onChange={(event) =>
              setForm({ ...form, word_en: event.target.value })
            }
            id="word_en"
            className="border-2 border-gray-600 rounded-lg p-2"
            type="text"
            required
            placeholder=""
          />
          <label htmlFor="explaination_tr" className="text-lg font-medium">
            Anlam (Türkçe)
          </label>
          <textarea
            onChange={(event) =>
              setForm({ ...form, explaination_tr: event.target.value })
            }
            id="explaination_tr"
            className="border-2 border-gray-600 rounded-lg p-2"
            type="text"
            placeholder=""
          />
          <label htmlFor="explaination_en" className="text-lg font-medium">
            Anlam (İngilizce)
          </label>
          <textarea
            onChange={(event) => {
              setForm({ ...form, explaination_en: event.target.value });
            }}
            id="explaination_en"
            className="border-2 border-gray-600 rounded-lg p-2"
            type="text"
            placeholder=""
          />
        </div>
        <button className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 mt-4">
          Kaydet
        </button>
      </form>
    </div>
  );
}
