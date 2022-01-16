import React from "react";
import AddForm from "../components/AddForm";
import WordsTable from "../components/WordsTable";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function New() {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <AddForm />
      <WordsTable />
      <ToastContainer position="bottom-center" autoClose={2500} />
    </div>
  );
}
