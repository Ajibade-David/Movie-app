import React from 'react';
import styles from "./styles.module.css";

function Movies() {
  return (
    <div className="container-fluid" id={styles.Control}>
      <div className="row">
        {/* Sidebar */}
        <nav id={styles.SideBar} className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <a className="navbar-brand" href="#">
              <img
                src="https://s3-alpha-sig.figma.com/img/a73b/9b32/376a54ffd2dfb11ef1f3a8b513491895?Expires=1695600000&Signature=PwVvK6KfdUw4JIzipR9rZvRmFJnvPO5O1aDWcC3-72QgXOG7EHZ1VxMy46eaqGN3vT9Y7NbePvbvSkUVgPVmMQ61xpnsWTRz00MAb5PIKPwjjVhkO7T30OqqpVW5i105r5HXrD2qdnu5gEzHN3fN3rwqkC58dDRBvkRDuBLpQIsb5kr7fMPGUvecD46K~ZhPvfSloW1m8re5yL-DWnQiY78WqoYidxryuXmPrT8mWF5HULiRCo1MwLUWlfxONKaUTbuFBI1aCOb77EwX5fFlA8akB6EHBTnceY6jmbyt-cw9QK-Bc3Z4IsYoS8MNfYxZPQY8z2HJ0ANwp4bQieTnrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Logo"
                width="35"
                height="30"
                className="d-inline-block align-text-top"
              />
              <span className="h6">Movie Box</span>
            </a>
            <ul className="nav flex-column space-between" id={styles.nava}>
              {/* Home Link */}
              <div className='mt-5'>
                <li className="nav-item mt-5">
                  <span style={{ display: 'inline' }}>
                    <i className="bi bi-house-door" style={{ display: 'inline' }}></i>
                    <a className="nav-link active" href="#" id={styles.nava} style={{ display: 'inline' }}>
                      Home
                    </a>
                  </span>
                </li>

              </div>
              {/* Movies Link */}
              <li className="nav-item mt-5"id={styles.nava2icon}>
                    <span style={{ display: 'inline' }}>
                      <i className="bi bi-camera-reels" style={{ display: 'inline' }}></i>
                    <a className="nav-link active" href="#" id={styles.nava2} style={{ display: 'inline' }}>
                      Movies
                    </a>
                  </span>
                </li>
              {/* TV Series Link */}
              <li className="nav-item mt-5">
                    <span style={{ display: 'inline' }}>
                      <i className="bi bi-play-btn" style={{ display: 'inline' }}></i>
                    <a className="nav-link active" href="#" id={styles.nava} style={{ display: 'inline' }}>
                      Tv Search
                    </a>
                  </span>
                </li>
              {/* Upcoming Link */}
              <li className="nav-item mt-5">
                <a className="nav-link " href="#" id={styles.nava}>
                  Upcoming
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* Your content goes here */}
          <div>
            <img
              className="img-fluid rounded-2xl"
              src="https://s3-alpha-sig.figma.com/img/1856/c95c/9af6d5a4107cc24f878e63ed529a275d?Expires=1695600000&Signature=AS86qp3truWPTvvqdnE0HulXiT-hc5sD39UynsclsNcznyHzn2c8GBQhLbMdvQtw92Amwo4Szvh7KdsIEZT~XwQOVrvqPsFzuRvmNO99MY3gV21sCV5GGUgwF8~xgHgi9rVRtdyemrWmojtnp5vU1XCmggLHTpllrQvFKOX0-bSOHdAHLWqJGXiBZzpVjnyWcrJa2456p5iTTSRI2dXLq1JAGM4V2jkvqdOS-YytO-FHjKOw4y3lGFE-fr9aFBFV2DTwv2toewMUN8YmcXVtusvjvdH5u-6~hew-4fCvVE~xydxRwW4j9GHmOXquhhldZQTAfAJXuRgWnj9gQ9Gm-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="Movie Poster"
              style={{ width: '100%', maxWidth: '1198px', height: 'auto', borderRadius: '20px' }}
            />
          </div>
          <div className='mt-2'>
            <h7 className='h7'>Top Gun Maverisk  <span className='ms-2'>•  2022</span>   <span className='ms-2'>•</span>   <span className='ms-2'>PG-13</span>  <span className='ms-2'>•2h 10m </span><span className='ms-2'> <span className='ms-5'><a href="" id={styles.a2}>Action</a> </span> <span className='ms-5'><a href="" id={styles.a2}>Drama</a></span></span></h7>
          </div><br />
          <div className='text-black h2'>
            <p >After thirty years, Maverick is still pushing the envelope as a top naval aviator, <span><button className='btn btn-danger ms-2'>See Showtimes</button></span> <br />
              but must confront ghosts of his past when he leads TOP GUN's elite graduates <br />
              on a mission that demands the ultimate sacrifice from those chosen to fly it
              {/* <span><button className='btn btn-outline-danger ms-4'>See Showtimes</button></span> */}
            </p>
          </div>
          <div>
            <p>Director: <a href="" className='text-danger' id={styles.a}>Joseph Kosinki</a></p>
          </div>
          <div>
            <p>Writers: <a href="" id={styles.a}>Jim Cash, Jack Epps Jr,  Peter Craig</a> <span></span></p>
          </div>
          <div>
            <span>
              <p>Stars: <a href="" id={styles.a}>Tom Cruise, Jennifer Connelly, Miles Teller</a></p>
            </span>
            <div className="mt-5 d-flex align-items-center">
              <button className="btn btn-danger mr-2">Top Rated movie #65</button>
              <div className="form-group mb-0">
                <select
                  className="custom-select custom-select-sm"
                  id="nomination"
                  name="nomination"
                  style={{ width: '300px', height: '40px' }}
                >
                  <option value="Awards" selected>Awards</option>
                  <option value="Nomination 1">Nomination 1</option>
                  <option value="Nomination 2">Nomination 2</option>
                  <option value="Nomination 3">Nomination 3</option>
                  <option value="Nomination 4">Nomination 4</option>
                  <option value="Nomination 5">Nomination 5</option>
                  <option value="Nomination 6">Nomination 6</option>
                  <option value="Nomination 7">Nomination 7</option>
                  <option value="Nomination 8">Nomination 8</option>
                  <option value="Nomination 9">Nomination 9</option>
                </select>
              </div>
            </div>

            {/* <span>
              <img id={styles.bottomImage} className='img-fluid w-25 mb-2' style={{ width: 360, borderRadius: 2 }} src="https://s3-alpha-sig.figma.com/img/4e62/bce8/116ee4b17ae77fa058f95de8e6b7cf2e?Expires=1695600000&Signature=dQsNOeRD1j3qqqMLmsPABCIzAL5t9OUF7SKgQqjl2pK0laQqLUd4EdYgFuZO4PVWndKU3NWiVFdOOOY0pv0kSeUmKg5YL4yHUBoNzzNpAAPxQr9iUcL4-wXIs~S4KMPo8tEh01lFKjFgWJK723s73ZUGXRZi5Nu4N5AGBaEOU5e7Emo9bZhHzpTTrFK4u4Bm6coshFnd4mIueHVa-ZuVpuUhAK3Cz5UpaAUd~0-mIKLNas8lDhtHfunaPHr~Sxnt3~o78td-JD158DbuIQl32klJ29c5kTGuZszoAj22wcGYhbUHshb~iqlbTQNOXE77QsGFF-rVMdeqLdEZrcGwEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Bottom Image" />
            </span> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Movies;
