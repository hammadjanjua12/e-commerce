import React, { useState, useEffect, useRef } from "react";
import { Search, Close } from "@mui/icons-material";
import { api } from "../../../config/apiConfig";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      setSearchResults([]);
      setSelectedResultIndex(-1);
      setSearchQuery("");
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
    setSearchResults([]);
    setSelectedResultIndex(-1);
    setSearchQuery("");
  };

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const response = await api.get(`/api/search?query=${query}`);
      const results = response.data;
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleResultClick = (result) => {
    navigate(`/product/${result._id}`);
    closeSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && selectedResultIndex < searchResults.length - 1) {
      setSelectedResultIndex((prevIndex) => prevIndex + 1);
    } else if (e.key === "ArrowUp" && selectedResultIndex > 0) {
      setSelectedResultIndex((prevIndex) => prevIndex - 1);
    } else if (e.key === "Enter" && selectedResultIndex !== -1) {
      handleResultClick(searchResults[selectedResultIndex]);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex lg:ml-6 relative">
      <button
        className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
        onClick={toggleSearchVisibility}
      >
        <span className="sr-only">Search</span>
        <Search sx={{ fontSize: 24 }} />
      </button>

      {isSearchVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-96 max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                ref={searchInputRef}
              />
              <button
                onClick={closeSearch}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                <Close sx={{ fontSize: 24 }} />
              </button>
            </div>
            {/* Display search results */}
            {searchResults.length > 0 && (
              <ul>
                {searchResults.map((result, index) => (
                  <li
                    key={result._id}
                    onClick={() => handleResultClick(result)}
                    onMouseEnter={() => setSelectedResultIndex(index)}
                    onMouseLeave={() => setSelectedResultIndex(-1)}
                    style={{
                      cursor: "pointer",
                      background: index === selectedResultIndex ? "#e2e8f0" : "transparent",
                    }}
                  >
                    {result.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
