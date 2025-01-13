import ClientSideTable from "./_components/client_side_rendering";
import ServerSideTable from "./_components/server_side_rendering";
import PaginationTable from "./_components/pagination";
import InfiniteScrollTable from "./_components/infinite_scroll";

export default function Home() {
  return (
    <main className="w-95 p-4 m-4 h-screen">
      {/* <ClientSideTable /> */}
      {/* <ServerSideTable /> */}
      <PaginationTable />
      {/* <InfiniteScrollTable /> */}
    </main>
  );
}
