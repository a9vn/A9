import React from "react";
import { useLyrics } from "../../hooks/useLyrics";

const MusicDetailModal = ({ open, onClose, music, onOpenPlaylist }) => {
  const { lyrics, loading, error } = useLyrics(music?.lyrics);

  if (!open || !music) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      {/* Back button */}
      <button
        className="absolute top-8 left-8 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
        onClick={onClose}
        aria-label="Back"
      >
        &#8592;
      </button>

      {/* Main content */}
      <div className="flex w-4/5 h-4/5 bg-transparent">
        {/* LEFT: Cover image */}
        <div className="flex-3 flex items-center justify-center">
          <img
            src={music.cover}
            alt={music.title}
            className="max-h-[80vh] max-w-full rounded-xl shadow-2xl object-contain"
          />
        </div>

        {/* RIGHT: Lyrics + Info */}
        <div className="flex-1 flex flex-col justify-center text-white pl-12">
          <h2 className="text-4xl font-bold mb-4">{music.title}</h2>

          {/* Lyrics Box */}
          <div className="bg-black bg-opacity-40 rounded-lg p-6 mb-8 min-h-[180px] overflow-y-auto whitespace-pre-wrap">
            {loading && (
              <p className="italic text-gray-300">Đang tải lyrics...</p>
            )}
            {error && <p className="italic text-red-400">Lỗi: {error}</p>}
            {!error && !loading && !lyrics && (
              <p className="italic text-gray-300">(Không có lyrics)</p>
            )}
            {!loading && lyrics && (
              <p className="text-gray-200 leading-relaxed">{lyrics}</p>
            )}
          </div>

          {/* Playlist button */}
          <button
            className="self-start flex items-center gap-2 px-6 py-3 bg-white bg-opacity-10 border border-white rounded-lg hover:bg-opacity-30 transition text-lg font-semibold mb-4"
            onClick={onOpenPlaylist}
          >
            🎵 PLAYLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicDetailModal;
