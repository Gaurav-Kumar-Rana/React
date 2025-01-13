"use client";
import { useEffect, useState, useRef } from "react";

function PaginationTable() {
  const perPageSet = 10;
  const totalPages = useRef(0);
  const displayData = useRef([]);
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await data.json();
      totalPages.current = Math.ceil(result.length / perPageSet);
      displayData.current = result.slice(
        perPageSet * (currentPage - 1),
        perPageSet * currentPage
      );
      setApiData(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    displayData.current = apiData.slice(
      perPageSet * (currentPage - 1),
      perPageSet * currentPage
    );
  }, [apiData, currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages.current));
  };

  return (
    <>
      <h1 className="w-full mb-10">
        List of pictures via client side rendering and pagination
      </h1>
      <div className="action flex justify-between">
        <button
          className="p-2 bg-emerald-300 text-black"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p>
          Showing page {currentPage} out of {totalPages.current} pages
        </p>
        <button
          className="p-2 bg-emerald-300 text-blacks"
          onClick={handleNext}
          disabled={currentPage === totalPages.current}
        >
          Next
        </button>
      </div>
      <div className="heading flex flex-auto w-full">
        <span className="w-16">Sl No.</span>
        <span className="w-16">Album No.</span>
        <span className="grow">Title</span>
        <span className="w-16">Thumbnail</span>
      </div>
      {displayData.current.map((dt) => {
        return (
          <div key={dt.id} className="body flex flex-auto">
            <span className="w-16">{dt.id}</span>
            <span className="w-16">{dt.albumId}</span>
            <span className="grow">{dt.title}</span>
            <span className="w-16">
              <a href={dt.url}>Image</a>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default PaginationTable;
