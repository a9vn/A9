import React from "react";
import AnimatedContent from "../UI/AnimatedContent";
import MusicCard from "./MusicCard";

const MusicGrid = ({ songs, startIndex, onSelectMusic }) => {
  return (
    <AnimatedContent className="mb-8">
      <div className="music-grid mb-8">
        {songs.map((item, index) => (
          <AnimatedContent key={item.id} className="animate-in">
            <MusicCard
              item={item}
              index={startIndex + index}
              onClick={() => onSelectMusic(item)}
            />
          </AnimatedContent>
        ))}
      </div>
    </AnimatedContent>
  );
};

export default MusicGrid;

// import React from "react";

// const MusicCard = ({ item, onClick }) => {
//   return (
//     <div
//       className="music-card relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
//       onClick={onClick}
//     >
//       {/* Album Cover */}
//       <div className="relative w-full">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-48 object-cover rounded-lg shadow-lg"
//         />
//       </div>
//       {/* Album Title - Only show on hover */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <h3 className="text-white text-sm font-medium truncate">{item.name}</h3>
//         <p className="text-gray-300 text-xs truncate">{item.desc}</p>
//       </div>
//     </div>
//   );
// };

// export default MusicCard;
