import React, { useState, useMemo } from "react";
import { useMusic } from "../hooks/useMusic";

import MusicSearchBar from "../components/Music/MusicSearchBar";
import MusicGrid from "../components/Music/MusicGrid";
import Pagination from "../components/Music/Pagination";

import MusicDetailModal from "../components/Music/MusicDetailModal";
import Rightbar from "../components/Music/Rightbar";
import { songsData } from "../assets/icon-assets/assets";

const Music = () => {
  const { songs, loading, error } = useMusic();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [selectedMusic, setSelectedMusic] = useState(null);
  const [rightbarOpen, setRightbarOpen] = useState(false);

  // ⭐ Lọc danh sách bài hát
  const filteredSongs = useMemo(() => {
    return songs.filter(
      (song) =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, songs]);

  // ⭐ Phân trang
  const totalPages = Math.ceil(filteredSongs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSongs = filteredSongs.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const musicSection = document.getElementById("music");
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="music"
      className="fullpage-section bg-gradient-to-br from-blue-900 via-black to-cyan-900"
    >
      <div className="w-full h-full flex flex-col justify-center px-6">
        {/* Loading & Error */}
        {loading && (
          <p className="text-center text-gray-300 mt-10">Đang tải bài hát...</p>
        )}
        {error && (
          <p className="text-center text-red-400 mt-10">
            Lỗi khi tải bài hát: {error}
          </p>
        )}

        {/* Search Bar */}
        {!loading && (
          <MusicSearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Music List */}
        {!loading && (
          <MusicGrid
            songs={currentSongs}
            startIndex={startIndex}
            onSelectMusic={setSelectedMusic}
          />
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        )}

        {/* Info text */}
        {!loading && totalPages > 1 && (
          <div className="text-center text-gray-400 text-sm mb-4">
            Trang {currentPage} / {totalPages} • Hiển thị {startIndex + 1}–
            {Math.min(endIndex, filteredSongs.length)} / {filteredSongs.length}{" "}
            bài hát
          </div>
        )}
      </div>

      {/* Modal */}
      <MusicDetailModal
        open={!!selectedMusic}
        music={
          selectedMusic
            ? {
                title: selectedMusic.name,
                cover: selectedMusic.image,
                audio: selectedMusic.audio,
                lyrics: selectedMusic.lyrics,
              }
            : null
        }
        onClose={() => {
          setSelectedMusic(null);
          setRightbarOpen(false);
        }}
        onOpenPlaylist={() => setRightbarOpen((v) => !v)}
      />

      {/* Right Sidebar */}
      <Rightbar open={rightbarOpen} playlist={songsData} />
    </div>
  );
};

export default Music;
