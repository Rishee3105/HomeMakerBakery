// import React, { useState } from "react";
// import { Search } from "react-feather";
// import Sidebar from "../Sidebar/Sidebar.jsx";

// const Bakers = () => {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(true);

//   const orders = [
//     {
//       id: "#1001",
//       name: "Camera Lens",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1002",
//       name: "Black Sleep Dress",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1003",
//       name: "Argan Oil",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1004",
//       name: "EAU DE Parfum",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1005",
//       name: "Perfume",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1006",
//       name: "Lipstick",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1007",
//       name: "Sunglasses",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1008",
//       name: "Watch",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1001",
//       name: "Camera Lens",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1002",
//       name: "Black Sleep Dress",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1003",
//       name: "Argan Oil",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1004",
//       name: "EAU DE Parfum",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1005",
//       name: "Perfume",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1006",
//       name: "Lipstick",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1007",
//       name: "Sunglasses",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//     {
//       id: "#1008",
//       name: "Watch",
//       email: "abc@gmail.com",
//       Total_Items: "789",
//       Total_Order: "1236",
//     },
//   ];

//   const [searchQuery, setSearchQuery] = useState(""); // Add state for search input
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;

//   // Filter orders based on search query
//   const filteredOrders = orders.filter(
//     (order) =>
//       order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       order.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       order.id.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

//   // Get the current page's items
//   const currentItems = filteredOrders.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Handle page navigation
//   const goToNextPage = () =>
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   const goToPreviousPage = () =>
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   const goToPage = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar visible={isSidebarVisible} />

//       <div className="bg-white p-6 rounded-xl shadow-md ml-64">
//         {" "}
//         {/* Added ml-64 for left margin */}
//         <div className="flex justify-between items-center mb-4 m-10">
//           <h2 className="text-xl font-semibold text-gray-800">Bakers List</h2>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search here"
//               className="w-full lg:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-400"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
//             />
//             <Search className="absolute right-3 top-2 text-gray-500 w-5 h-5" />
//           </div>
//         </div>
//         {/* Orders Table */}
//         <table className="w-full text-left">
//           <thead>
//             <tr className="text-gray-500 text-sm">
//               <th className="py-2 px-3">
//                 <input type="checkbox" className="rounded border-gray-300" />
//               </th>
//               <th className="py-2 px-3">Baker Id</th>
//               <th className="py-2 px-3">Baker Name</th>
//               <th className="py-2 px-3">Email</th>
//               <th className="py-2 px-3">Total Items</th>
//               <th className="py-2 px-3">Total Orders</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((order, index) => (
//               <tr
//                 key={order.id}
//                 className={`text-gray-700 ${
//                   index % 2 !== 0 ? "bg-gray-50" : ""
//                 }`}
//               >
//                 <td className="py-3 px-3">
//                   <input type="checkbox" className="rounded border-gray-300" />
//                 </td>
//                 <td className="py-3 px-3">{order.id}</td>
//                 <td className="py-3 px-3 flex items-center">
//                   <img
//                     src={order.image}
//                     alt={order.name}
//                     className="w-8 h-8 rounded-full mr-2"
//                   />
//                   {order.name}
//                 </td>
//                 <td className="py-3 px-3">{order.email}</td>
//                 <td className="py-3 px-3">{order.Total_Items}</td>
//                 <td className="py-3 px-3">{order.Total_Order}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* Pagination */}
//         <div className="flex justify-between items-center mt-4 text-gray-600">
//           <span>
//             {(currentPage - 1) * itemsPerPage + 1}-{" "}
//             {Math.min(currentPage * itemsPerPage, filteredOrders.length)} of{" "}
//             {filteredOrders.length}
//           </span>
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={goToPreviousPage}
//               className="p-2 hover:bg-gray-100 rounded-full"
//               disabled={currentPage === 1}
//             >
//               &lt;
//             </button>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index + 1}
//                 onClick={() => goToPage(index + 1)}
//                 className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                   currentPage === index + 1
//                     ? "bg-blue-500 text-white"
//                     : "hover:bg-gray-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={goToNextPage}
//               className="p-2 hover:bg-gray-100 rounded-full"
//               disabled={currentPage === totalPages}
//             >
//               &gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bakers;

import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import Sidebar from "../Sidebar/Sidebar.jsx";
import axios from "axios";

const Bakers = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [bakersData, setBakersData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchBakersData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/admin/bakersData");
        if (response.data.status) {
          setBakersData(response.data.data);
          console.log(response.data.data);
        } else {
          setError("Failed to load bakers data.");
        }
      } catch (err) {
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBakersData();
  }, []);

  const filteredBakers = bakersData.filter(
    (baker) =>
      baker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      baker.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      baker.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBakers.length / itemsPerPage);
  const currentItems = filteredBakers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-pastel-peach">
      <Sidebar visible={isSidebarVisible} />

      <div className="bg-white p-8 rounded-xl shadow-md ml-64">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-brown-800">Bakers List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="w-full lg:w-64 pl-4 pr-10 py-2 border border-brown-300 rounded-full focus:ring focus:ring-brown-200 focus:border-brown-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2 text-brown-500 w-5 h-5" />
          </div>
        </div>
        <table className="w-full bg-white text-left border-separate border-spacing-y-2 border-spacing-x-4">
          <thead>
          <tr className="text-brown-500 text-sm bg-pastel-cream">
              <th className="py-2 px-4">
                <input type="checkbox" className="rounded border-brown-300" />
              </th>
              <th className="py-2 px-4">Baker Id</th>
              <th className="py-2 px-4">Baker Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Total Items</th>
              <th className="py-2 px-4">Total Orders</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((baker, index) => (
              <tr
                key={baker.id}
                className={`text-brown-700 ${index % 2 !== 0 ? "bg-brown-50" : ""}`}
              >
                <td className="py-3 px-4">
                  <input type="checkbox" className="rounded border-brown-300" />
                </td>
                <td className="py-3 px-4">{baker.id}</td>
                <td className="py-3 px-4 flex items-center">
                  <img
                    src={baker.image || "/default-baker.png"}
                    alt={baker.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  {baker.name}
                </td>
                <td className="py-3 px-4">{baker.email}</td>
                <td className="py-3 px-4">{baker.products.length}</td>
                <td className="py-3 px-4">{baker.orders.length}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-brown-600">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, filteredBakers.length)} of{" "}
            {filteredBakers.length}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousPage}
              className="p-2 bg-brown-100 hover:bg-brown-200 rounded-full"
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === index + 1 ? "bg-brown-500 text-white" : "hover:bg-brown-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={goToNextPage}
              className="p-2 bg-brown-100 hover:bg-brown-200 rounded-full"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bakers;
