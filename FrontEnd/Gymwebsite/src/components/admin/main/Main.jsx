import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import SmallCalendar from "../calendar/SmallCalendar";
import DueTable from "./DueTable";
import StatCard from "./StatCard";
import BarGraph from "../report/BarGraph";

function Main() {
  const { getTotalMembers, totalSalary, totalMembershipPrice } = useContext(GlobalContext);

  return (
    <div className="flex flex-col md:flex-row bg-slate-100 dark:bg-slate-100">
      <section className="mt-3 mb-3 w-full md:w-[70%] h-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-4">
          <StatCard
            icon={<FaMoneyBillTransfer />}
            title="Total Sales"
            value={`Nrs. 15`}
          />
          <StatCard
            icon={<IoIosPeople />}
            title="Total Members"
            value={10}
          />
          <StatCard
            icon={<FaMoneyBillTransfer />}
            title="Total Expense"
            value={`Nrs. 15000`}
          />
        </div>
        <div className="pl-5">
          <DueTable />
        </div>
      </section>
      <section className="w-full  md:w-[30%] bg-indigo-100 dark:bg-slate-200 shadow-sm ">
        <div className="bg-slate-100 rounded-md m-2 p-2">
          <SmallCalendar />
        </div>
        <div className="bg-slate-100 m-2 shadow-sm rounded-xl  ">
          <BarGraph />
        </div>
      </section>
    </div>
  );
}

export default Main;
