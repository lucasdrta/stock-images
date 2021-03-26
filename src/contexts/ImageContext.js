import React, { createContext, useState, useEffect } from "react";

export const ImageContext = createContext({});

export function ImageProvider({ children }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [topics, setTopics] = useState([]);

  async function loadTopicPhotos(topic, shouldRefresh = false) {
    setData([]);
    fetch(
      `https://api.unsplash.com/topics/${topic}/photos?client_id=7wQgLl4lMGkFavxqwAWHoGj2CQmlWY8JoCyhBadnxlc&per_page=20`
    )
      .then((response) => response.json())
      .then((topicData) => setData(topicData));
  }

  async function loadTopicsName() {
    fetch(
      "https://api.unsplash.com/topics/?client_id=7wQgLl4lMGkFavxqwAWHoGj2CQmlWY8JoCyhBadnxlc&per_page=20"
    )
      .then((response) => response.json())
      .then((data) => setTopics(data));
  }

  async function loadApiData(pageNumber = page, shouldRefresh = false) {
    setLoading(true);
    fetch(
      `https://api.unsplash.com/photos/?client_id=7wQgLl4lMGkFavxqwAWHoGj2CQmlWY8JoCyhBadnxlc&page=${pageNumber}&per_page=50`
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
    loadTopicsName();
  }, []);
  return (
    <ImageContext.Provider
      value={{
        data,
        loadApiData,
        loading,
        refreshiList,
        refreshing,
        topics,
        loadTopicPhotos,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
