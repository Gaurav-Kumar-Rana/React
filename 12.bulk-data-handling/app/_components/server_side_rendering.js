async function ServerSideTable() {
  let result = [];

  const data = await fetch("https://jsonplaceholder.typicode.com/photos");
  result = await data.json();

  return (
    <>
      <h1 className="w-full mb-10">
        List of pictures via server side rendering
      </h1>
      <div className="heading flex flex-auto w-full">
        <span className="w-16">Sl No.</span>
        <span className="w-16">Album No.</span>
        <span className="grow">Title</span>
        <span className="w-16">Thumbnail</span>
      </div>
      {result.map((dt) => {
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

export default ServerSideTable;
