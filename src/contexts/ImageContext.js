import React, { createContext, useState, useEffect } from "react";

export const ImageContext = createContext({});

export function ImageProvider({ children }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadApiData(pageNumber = page, shouldRefresh = false) {
    setLoading(true);
    fetch(
      `https://api.unsplash.com/photos/?client_id=7wQgLl4lMGkFavxqwAWHoGj2CQmlWY8JoCyhBadnxlc&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((apiData) => {
        setData(shouldRefresh ? apiData : [...data, ...apiData]);
        setPage(page + 1);
      });
    setLoading(false);
  }

  async function refreshiList() {
    setRefreshing(true);

    await loadApiData(1, true);
    setRefreshing(false);
  }

  useEffect(() => {
    loadApiData();
  }, []);
  return (
    <ImageContext.Provider
      value={{
        data,
        loadApiData,
        loading,
        refreshiList,
        refreshing,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
