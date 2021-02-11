import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { BASE_URL, FETCH_OPTIONS } from "../../constants/api";
import Loader from "../Loader";

const HomeCard = lazy(() => import("./DropCard"));
const Search = lazy(() => import("../Search"));

function HomeDropdown() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = BASE_URL + "establishments";
    fetch(url, FETCH_OPTIONS)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setError("A server error occured.");
        }
      })
      .then((json) => {
        setHotels(json);
        setFilteredHotels(json);
        setError(null);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const node = useRef();
  const [dropdown, setDropdown] = useState(false);

  const toggling = () => {
    setDropdown(!dropdown);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (node.current && node.current.contains(event.target)) {
        setIsSearched(true);
        return;
      }
      setIsSearched(false);
      setDropdown(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [node]);

  const filterHotels = (e) => {
    setIsSearched(true);
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = hotels.filter(function (h) {
      const lowerCaseName = h.name.toLowerCase();

      if (searchValue.length === 0) {
        setIsSearched(false);
      }

      if (lowerCaseName.includes(searchValue)) {
        return true;
      }

      return false;
    });

    setFilteredHotels(filteredArray);
  };

  const renderLoader = () => <Loader />;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <Search handleSearch={filterHotels} onChange={toggling} />
      </Suspense>

      <div className="dropdown">
        <div
          ref={node}
          className={
            dropdown !== true && isSearched === false
              ? "d-none "
              : "d-block dropdown__box "
          }
        >
          {filteredHotels.map((hotel) => {
            const { id, name, image, price } = hotel;
            return (
              <div key={id}>
                {" "}
                <Suspense fallback={renderLoader()}>
                  <HomeCard id={id} image={image} name={name} price={price} />{" "}
                </Suspense>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeDropdown;
