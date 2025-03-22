import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

function MemberTypeCard() {
  const { membersType } = useContext(GlobalContext);

  console.log("membersType:", membersType); 

  if (!membersType || typeof membersType !== "object") {
    return <div className="text-black">No membership data available</div>;
  }

  return (
    <div className="ms-10 me-10 font-Roboto grid sm:grid-cols md:grid-cols-3 lg:grid-cols-3 gap-20 m-4">
      {Object.entries(membersType).map(([type, members]) => (
        <div
          key={type}
          className="flex flex-col font-Roboto justify-around w-full md:w-auto h-40 bg-white shadow-lg p-4 rounded-md"
        >
          <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-black">
            {type.charAt(0).toUpperCase() + type.slice(1)} Members
          </div>
          <div className="text-black text-2xl sm:text-xl lg:text-3xl font-semibold">
            {members.length} {/* Get the count of members */}
          </div>
        </div>
      ))}
    </div>
  );
}


export default MemberTypeCard;