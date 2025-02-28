// import React, { useState } from "react";

// const Todo = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [data, setData] = useState([]);
//   const [isUpdate, setIsUpdate] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);

//   const handleAdd = () => {
//     if (!inputValue.trim()) return;
//     setData([...data, inputValue]);
//     setInputValue("");
//     console.log([...data, inputValue]);
//   };

//   const handleEdit = (index) => {
//     setInputValue(data[index]);
//     setIsUpdate(true);
//     setCurrentIndex(index);
//   };

//   const handleUpdate = () => {
//     if (!inputValue.trim()) return;
//     setData(data.map((item, i) => (i === currentIndex ? inputValue : item)));
//     setIsUpdate(false);
//     setCurrentIndex(null);
//     setInputValue("");
//   };

//   const handleDelete = (index) => {
//     setData(data.filter((_, i) => i !== index));
//     setIsUpdate(false);
//     setCurrentIndex(null);
//     setInputValue("");
//   };

//   return (
//     <div className="bg-orange-500 flex h-[94vh] gap-10 p-[6rem]">
//       <div className="bg-white w-[40rem] h-full rounded-lg flex flex-col">
//         {/* Input Section (Fixed at Top) */}
//         <div className="flex justify-center mt-8 h-[5rem] font-bold text-lg">
//           <h1>TODO LIST</h1>
//         </div>
//         <div className="flex justify-center gap-2 p-4">
//           <input
//             type="text"
//             placeholder="Add Item"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             className="border-2 p-2 rounded-lg w-full"
//           />
//           {isUpdate ? (
//             <button
//               className="bg-yellow-500 rounded-lg px-4 py-2 text-white"
//               onClick={handleUpdate}
//             >
//               Update
//             </button>
//           ) : (
//             <button
//               className="bg-red-500 rounded-lg px-4 py-2 text-white"
//               onClick={handleAdd}
//             >
//               Add
//             </button>
//           )}
//         </div>

//         {/* Scrollable Todo List */}
//         <div className="flex-1 overflow-y-auto px-4 pb-4">
//           {data.map((item, index) => (
//             <div key={index} className="flex justify-between p-2 border-b">
//               <p>{item}</p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="bg-yellow-500 rounded-lg px-4 py-2 text-white"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 rounded-lg px-4 py-2 text-white"
//                   onClick={() => handleDelete(index)}
//                   disabled={isUpdate && currentIndex === index}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="font-bold text-3xl p-[7rem]">
//         <h1 className="text-white">Build</h1>
//         <h1 className="text-green-500">To-Do List</h1>
//         <h1 className="text-white">With Class Component &</h1>
//         <h1 className="text-white">Tailwind</h1>
//       </div>
//     </div>
//   );
// };

// export default Todo;
