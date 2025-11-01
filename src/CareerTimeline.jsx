import React from "react";

export default function CareerTimeline({ careerEntries }) {
  const sortedEntries = [...careerEntries].sort((a, b) => a.id - b.id);

return (
    <>
            <section className="max-w-6xl mt-4 mx-auto px-6 py-4 border-gray-300 dark:border-gray-700 border-b">
            <h2 className="text-xl font-bold mb-2">Experience</h2>
                    <div className="max-w-2xl mt-auto relative mx-auto">
                            <div className={`absolute h-[calc(100%-(${sortedEntries.length}rem))] ml-3 top-4 bottom-0 w-[4px] bg-gray-300 dark:bg-gray-800 `}></div>
                            {sortedEntries.map((entry) => (
                            <div key={entry.id} className="relative pb-8">

                                    <span
                                            className="absolute left-3 top-2 w-3 h-3 bg-gray-400 dark:bg-gray-500 
                                            rounded-full border-[2px] border-gray-900 dark:border-gray-800 -translate-x-1/3 
                                            shadow-[0_0_8px_3px_rgba(168,85,247,0.5)] backdrop-blur-sm brightness-125">
                                    </span>

                                    <div className="ml-8">
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                                            {entry.role}
                                            {entry.company && (
                                                <span className="text-sm text-gray-600 dark:text-gray-400"> - {entry.company}</span>
                                            )}
                                            <span className="text-sm float-right text-gray-500 dark:text-gray-400">
                                            {entry.duration}
                                            </span>
                                    </h3>

                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                            {entry.location}
                                    </p>
                                    </div>
                            </div>
                            ))}
                    </div>
            </section>
    </>
);
}



// import React from "react";

// export default function CareerTimeline({ careerEntries }) {
//   // keep chronological order oldest -> newest (adjust if you prefer reverse)
//   const sortedEntries = [...careerEntries].sort((a, b) => a.id - b.id);

//   return (
//     <section className="max-w-2xl mx-auto px-6 py-12">
//       <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
//         Career Timeline
//       </h2>

//       {/* container for timeline */}
//       <div className="relative pl-12">
//         {/* vertical line: absolute so we can control dot centering precisely */}
//         <div
//           style={{ left: 12 }}
//           className="absolute top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-600"
//         />

//         {sortedEntries.map((entry) => (
//           <div key={entry.id} className="relative pb-6">
//             {/* dot: centered on the vertical line.
//                 - dot size = 10px (w-2.5 h-2.5 in rem-ish; using exact px via inline style)
//                 - left = lineLeft - (dotSize/2) => 12 - 5 = 7 */}
//             <span
//               style={{ left: 7 }}
//               className="absol top-2 w-[10px] h-[10px] rounded-full bg-gray-400 dark:bg-gray-500 border border-white dark:border-gray-800"
//             />

//             {/* entry content */}
//             <div className="leading-relaxed">
//               <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
//                 {entry.role} 
//                 {/* right align space */}
//                 <span className="text-sm float-right text-gray-500 dark:text-gray-400">
//                   {entry.duration}
//                 </span>
//               </h3>

//               {/* <p className="text-sm text-gray-600 dark:text-gray-400">
//                 {entry.type}
//               </p> */}


//               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
//                 {entry.location}
//               </p>

//               {/* <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
//                 {entry.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="flex items-center text-sm text-gray-700 dark:text-gray-300"
//                   >
//                     <span className="text-gray-400 dark:text-gray-500 text-xs mr-1.5">◆</span>
//                     {skill}
//                   </span>
//                 ))}
//               </div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
