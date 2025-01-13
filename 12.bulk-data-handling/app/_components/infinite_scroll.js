"use client";
import { useEffect, useRef, useState } from "react";
function InfiniteScrollTable() {
  const perPageSet = 10;
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const displayData = useRef([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/photos");
      const result = await data.json();
      displayData.current = result.slice(0, perPageSet);
      setApiData(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const elm = document.querySelector('[data-last="true"]');
    if (elm) {
      observer().observe(elm);
    }
  });

  const observer = () =>
    new window.IntersectionObserver(
      ([lastElm]) => {
        if (lastElm.isIntersecting) {
          console.log("last");
          setCurrentPage((currentPage) => currentPage + 1);
          displayData.current = apiData.slice(0, perPageSet * currentPage);
        }
      },
      { threshold: 0.6 }
    );

  console.log(displayData.current, currentPage);

  return (
    <>
      <h1 className="w-full mb-10">
        List of pictures via client side rendering using infinite scroll
      </h1>
      <div className="heading flex flex-auto w-full">
        <span className="w-32">Sl No.</span>
        <span className="w-32">Album No.</span>
        <span className="grow">Title</span>
        <span className="w-32">Thumbnail</span>
      </div>
      {displayData.current.map((dt, index) => {
        return (
          <div
            key={dt.id}
            className="body flex flex-auto"
            data-last={index + 1 == displayData.current.length}
          >
            <span className="w-32">{dt.id}</span>
            <span className="w-32">{dt.albumId}</span>
            <span className="grow">{dt.title}</span>
            <span className="w-32">
              <a href={dt.url}>Image</a>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default InfiniteScrollTable;
