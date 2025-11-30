import React from "react";

// Mock: bài đang phát là bài đầu tiên
const currentIndex = 0;

const Rightbar = ({ open, playlist }) => {
  return (
    <div
      className={`fixed left-[1250px] top-1/2 z-50 w-[80vw] h-[80vh] bg-black shadow-2xl flex flex-col rounded-xl border border-gray-700 transition-transform duration-500 ease-in-out
        ${
          open
            ? "translate-x-0 -translate-y-1/2"
            : "translate-x-full -translate-y-1/2"
        }
      `}
      style={{ boxShadow: open ? "-8px 0 32px 0 #000a" : "none" }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex items-center gap-3 rounded-t-xl">
        <div className="w-8 h-8 flex items-center justify-center bg-[#23232b] rounded-full">
          <span role="img" aria-label="playlist" className="text-2xl">
            🎵
          </span>
        </div>
        <span className="text-white text-xl font-bold tracking-widest">
          PLAYLIST
        </span>
      </div>
      {/* Danh sách nhạc */}
      <div className="flex-1 overflow-y-auto p-4">
        {playlist && playlist.length > 0 && (
          <div className="mb-2">
            <div className="text-white text-lg font-bold uppercase tracking-wider mb-2">
              {playlist[0].name}
            </div>
            <div className="flex flex-col gap-1">
              {playlist.map((song, idx) => (
                <div
                  key={idx}
                  className={`flex items-center px-3 py-2 rounded transition-all cursor-pointer
                    ${
                      idx === currentIndex
                        ? "bg-white bg-opacity-10 text-white font-bold"
                        : "text-gray-400 hover:bg-[#23232b]"
                    }
                    ${idx !== 0 ? "pl-8 text-base" : "text-lg"}
                  `}
                >
                  {song.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rightbar;
