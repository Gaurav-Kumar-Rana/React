"use client";
import { useEffect, useState, useRef } from "react";
function PaginationTable() {
  const perPageSet = 10;
  let totalPages = useRef(0);
  let displayData = useRef([]);
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await data.json();
      displayData.current = result.slice(0, perPageSet * currentPage);
      totalPages.current = Math.ceil(result.length / perPageSet);
      setApiData(result);
    }
    fetchData();
  }, []);

  const handlePrevious = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    displayData.current = apiData.slice(
      perPageSet * (currentPage - 1),
      perPageSet * currentPage
    );
  };

  const handleNext = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    displayData.current = apiData.slice(
      perPageSet * currentPage,
      perPageSet * (currentPage + 1)
    );
  };
  console.log(currentPage);
  return (
    <>
      <h1 className="w-full mb-10">
        List of pictures via clent side rendering and pagination
      </h1>
      <div className="action flex justify-between">
        <button
          className="p-2 bg-emerald-300 text-black"
          onClick={handlePrevious}
          disabled={currentPage == 1}
        >
          Previous
        </button>
        <p>
          Showing page {currentPage} out of {totalPages.current} pages
        </p>
        <button
          className="p-2 bg-emerald-300 text-blacks"
          onClick={handleNext}
          disabled={currentPage == totalPages.current}
          id="aaa"
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
