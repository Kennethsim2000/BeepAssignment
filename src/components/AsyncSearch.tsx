import React, { useState, useEffect, useRef } from "react";
import jsonData from "../data/data.json";
import Popper from "popper.js";
import { FiSearch } from "react-icons/fi";
import Spinner from "~/components/Spinner";
import { debounce } from "lodash";

interface Result {
  name: string;
  code: string;
  countryCode: string;
}

const AsyncSearch: React.FC = ({}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const popperRef = useRef<HTMLUListElement | null>(null); //ul
  const popperInstance = useRef<Popper | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); // State to track selected items
  const [selectedIndex, setSelectedIndex] = useState<number>(0); //use to track keyup and keydown selectedItems
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputRef.current && popperRef.current) {
      if (popperInstance.current) {
        popperInstance.current.destroy();
      }
      popperInstance.current = new Popper(inputRef.current, popperRef.current, {
        placement: "bottom-start",
        modifiers: {
          preventOverflow: {
            boundariesElement: "viewport",
          },
          flip: {
            enabled: false,
          },
        },
      });
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        popperRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !popperRef.current.contains(event.target as Node)
      ) {
        setResults([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    }

    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    }
    if (e.key === "Enter") {
      if (results.length > 0) {
        const selectedResult = results[selectedIndex];

        if (selectedResult) {
          handleCheckboxChange(selectedResult.name);
        }
      }
    }
    //Scroll into view for list
    if (popperRef.current) {
      const list = popperRef.current;
      const item = list.children[selectedIndex];

      if (item) {
        item.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  const handleSearch = async (searchTerm: string) => {
    setLoading(true);
    try {
      const results = await searchResults(searchTerm);
      setResults(results);
    } catch (error) {
      console.error("Error searching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchResults = async (searchTerm: string): Promise<Result[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!searchTerm) {
          resolve(jsonData); // Return all data if searchTerm is empty
          return;
        }
        const lowercaseSearchTerm = searchTerm.toLowerCase();
        const filteredData = jsonData.filter((item) => {
          return item.name.toLowerCase().includes(lowercaseSearchTerm);
        });
        resolve(filteredData);
      }, 500);
    });
  };
  const debouncedSearch = debounce(handleSearch, 500) as (
    searchTerm: string
  ) => void;

  //checking and unchecking boxes
  const handleCheckboxChange = (itemName: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="relative flex justify-center items-center ">
      <FiSearch className="absolute left-3 text-gray-400" />
      {loading && <Spinner />}
      <input
        placeholder="Type to begin searching"
        ref={inputRef}
        className="pl-10 border border-gray-400 shadow p-2 rounded w-64"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setLoading(true);
          debouncedSearch(e.target.value);
        }}
        onFocus={(e) => {
          debouncedSearch(searchTerm);
          setSelectedIndex(0);
        }}
        onKeyDown={handleKeyDown}
      />
      <ul
        className="max-h-40 overflow-y-auto w-64 border border-gray-400 shadow z-10"
        ref={popperRef}
      >
        {results.map((result, index) => (
          <li
            className={`p-2 hover:bg-gray-100 bg-white ${
              index === selectedIndex ? "bg-blue-400" : ""
            }`}
            key={result.name}
          >
            {/* make the checkbox tick bigger surface area */}
            <label className="flex justify-between items-center">
              <div>
                <div className="flex flex-row gap-2">
                  <h1>{result.name}</h1>
                  <h1>{result.code}</h1>
                </div>
                <div>
                  <h1>Country : {result.countryCode}</h1>
                </div>
              </div>

              <input
                type="checkbox"
                checked={selectedItems.includes(result.name)}
                onChange={() => handleCheckboxChange(result.name)}
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncSearch;
