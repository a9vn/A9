import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export function useMusic() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const q = query(collection(db, "songs"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);

        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSongs(list);
      } catch (err) {
        console.error("Lỗi load bài hát:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return { songs, loading, error };
}
