"use client";
import { useEffect, useState } from "react";
function ClientSideTable() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const result = await data.json();
    setData(result);
  }, []);
  return (
    <>
      <h1 className="w-full mb-10">
        List of pictures via clent side rendering
      </h1>
      <div className="heading flex flex-auto w-full">
        <span className="w-16">Sl No.</span>
        <span className="w-16">Album No.</span>
        <span className="grow">Title</span>
        <span className="w-16">Thumbnail</span>
      </div>
      {data.map((dt) => {
        return (
          <div key={dt.id} className="body flex flex-auto">
            <span className="w-16">{dt.id}</span>
            <span className="w-16">{dt.albumId}</span>
            <span className="grow">{dt.title}</span>
            <span className="w-16">
              <a href={dt.url}>
              Image
              </a>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default ClientSideTable;
