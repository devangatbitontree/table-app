import { DataTable } from "@/components/DataTable";
import { Input } from "@/components/ui/Input";
import Sidebar from "@/components/ui/Sidebar";
import { HeaderContext, CellContext, useReactTable } from "@tanstack/react-table";

export default function Home() {  
  return (
    <>
      <div className="grid grid-cols-12 gap-4 m-5">
        <div id="sidebar" className="col-span-4">
          <Sidebar />
        </div>

        <div className="col-span-8">
          {/* <div className="mb-4">
            <Input type="text" placeholder="Search" />
          </div> */}
  <DataTable/>

        </div>
      </div>

    </>
  );
}

