import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import style from '../styles/courts.module.css'
import search from '../assets/images/search.svg'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'

function Courts() {
  const [courts, setCourts] = useState([])
  const [courtList, setCourtList] = useState([])
  const courtArray = useRef([]);
  const [pagCount, setPagCount] = useState(0);


  async function fetchCourts() {
    try {
      const response = await axios.get('https://pickleball-o3oe.onrender.com/api/courts');
      // console.log('response', response.data)
      const data = response.data
      if (data.length) {
        courtArray.current = data;
        setCourtList(data.slice(0, 6))
        setCourts(data);
        setPagCount(data.length > 6 ? 6 : data.length);
      }

    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    fetchCourts()
  }, [])

  const nextHandler = () => {
    // console.log('nextHandler')
    if (courts.length > pagCount) {
      const data = courts.slice(pagCount, pagCount + 6)
      setCourtList(data);
      setPagCount(pagCount + data.length)
    }
  }
  const previousHandler = () => {
    // console.log('previousHandler')
    const pagCountMod = pagCount % 6;
    let updatedPagCount = pagCount - pagCountMod
    let data = []
    if (pagCountMod !== 0) {
      console.log('pagCountMod', pagCountMod)
      data = courts.slice(updatedPagCount - 6, updatedPagCount)
    }
    else {
      data = courts.slice(updatedPagCount - 12, updatedPagCount - 6)
      updatedPagCount -= 6;
    }

    setCourtList(data);
    setPagCount(updatedPagCount)
  }

  const searchHandler = (e) => {
    const searchText = e.target.value;
    const data = courtArray.current;
    if (searchText === "") {
      setCourtList(data.slice(0, 6))
      setCourts(data);
      setPagCount(data.length > 6 ? 6 : data.length);
    }
    else {
      const filteredData = data.filter(court => court.name.toLowerCase().includes(searchText.toLowerCase()))
      setCourtList(filteredData.slice(0, 6))
      setCourts(filteredData);
      setPagCount(filteredData.length > 6 ? 6 : filteredData.length);
    }
  }

  function debounce(cb, interval) {
      let timerId;
      return function (e) {
        if (timerId) {
          clearTimeout(timerId);
        }
        console.log(timerId,"timerIs");
        timerId = setTimeout(() => {
          timerId = null;
          console.log("set Timeout");
          cb(e);
        }, interval);
      }
    }
  const debouncedSearchHanlder = debounce(searchHandler, 400);
  
  return (
    <div className={style.findcourt__container}>
      <h3>Find Court</h3>
      <div className={style.search_bar}>
        <input type="text" name="" id="" placeholder='Search' onChange={debouncedSearchHanlder} />
        <div className={style.search_icon}>
          <img src={search} alt="" />
        </div>
      </div >
      {
        courts.length > 0 ? <div style={{ width: "100%" }}>
          {
            courts.length > 0 ? <>
              <div className={style.court_count}>
                {
                  courts.length ? `${courts.length} results` : "0 results"
                }
              </div>
              <div className={style.court_table__container}>
                <table border={1}>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Net Type</th>
                      <th>Lights</th>
                      <th># of Courts</th>
                      <th>Map</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      courtList.map((data) => (
                        <tr key={data._id}>
                          <td>{data.name}</td>
                          <td>{data.NetType}</td>
                          <td>{data.lights ? "true" : "false"}</td>
                          <td>{data.NoOfCourts}</td>
                          <td></td>
                        </tr>
                      ))
                    }
                    <tr></tr>
                  </tbody>
                </table>

                <div className={style.pagination_btn}>
                  <div className={`${style.arrow} ${(pagCount <= 6) ? style.disable_arrow : null}`}
                    onClick={previousHandler}
                  >
                    <BiSolidLeftArrow />
                  </div>
                  <div className={`${style.arrow} ${pagCount >= courts.length || pagCount === courts.length ? style.disable_arrow : null}`}
                    onClick={nextHandler}
                  >
                    <BiSolidRightArrow />
                  </div>
                </div>
              </div>
            </> : null
          }
        </div> : <p>No courts found</p>
      }
    </div>

  )
}

export default Courts;
