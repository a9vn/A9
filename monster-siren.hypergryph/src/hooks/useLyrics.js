import { useState, useEffect } from "react";

export function useLyrics(url) {
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchLyrics = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Không thể tải lyrics từ URL.");

        const text = await res.text();
        const lines = text.split("\n");

        // Lọc lyrics giống code cũ
        const filtered = lines
          .map((line) => line.trim())
          .filter((line) => {
            if (!line) return false;
            if (/^\[\d{2}:\d{2}\.\d{2,3}\]/.test(line)) {
              const content = line.replace(/^\[\d{2}:\d{2}\.\d{2,3}\]\s*/, "");
              return content.length > 0;
            }
            if (/^\[(ar|ti|al|by):.*\]/.test(line)) return false;
            return true;
          })
          .map((line) => line.replace(/^\[\d{2}:\d{2}\.\d{2,3}\]\s*/, ""));

        setLyrics(filtered.join("\n"));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, [url]);

  return { lyrics, loading, error };
}
