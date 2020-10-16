import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row flex-wrap mt-3 lg:flex-row list-none sm:justify-center">
        {/* <div className="group inline-block">
          <button className="bg-transparent mb-2 border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
            <span className="pr-1 font-semibold text-white flex-1">
              Our story
            </span>
          </button>
          <span className="px-2">
            <i className="fa fa-caret-down text-white" aria-hidden="true"></i>
          </span>
          <ul
            className="bg-black bg-opacity-50 py-2 z-50 text-white rounded-full scale-0 group-hover:scale-100 absolute 
                  transition duration-150 origin-top"
          >
            <li className="relative py-1">
              <Link href="">
                <a className="w-full px-4 text-left list-none font-semibold text-sm flex items-center">
                  Spotlights
                  <span className="pl-8">
                    <i
                      className="fa fa-caret-right px-2 text-white"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </Link>
              <ul
                className="bg-black z-20 rounded-lg absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left divide-y divide-white"
              >
                <li className="px-8 py-2">
                  <Link href="/story/connectivity">
                    <a className="text-white">Connectivity</a>
                  </Link>
                </li>
                <li className="px-8 py-2">
                  <Link href="/story/education">
                    <a className="text-white">Education</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}

        <div className="text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center z-50 rounded-full inline-flex items-center">
              <span className="mr-1">Who we are</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/who-are-we/about">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    History/About us
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/who-are-we/values">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Values
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/who-are-we/staff">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Staff
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/who-are-we/board">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Board
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/who-are-we/sponsors">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Sponsors
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center z-50 rounded-full inline-flex items-center">
              <span className="mr-1">About</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/about/festival-history">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Festival History
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/about/festival-board">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Festival Board
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/about/festival-team">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Festival Team
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/about/submissions">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Submissions
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/about/blog">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Blog
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/about/archive">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Archive
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Newsroom</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/newsroom/african-news">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    African News
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/newsroom/world-news">
                  <a className="bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    World News
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/newsroom/local-news">
                  <a className="bg-black hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    Local News
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/newsroom/covid-19">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 pr-8 block whitespace-no-wrap">
                    Covid 19
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Experience</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/experience/1st-edition">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    1st Edition
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/experience/2nd-edition">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    2nd Edition
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/experience/entertainment">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 pr-10 block whitespace-no-wrap">
                    Entertainments
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
              <span className="mr-1">Gallery/Library</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/gallery/1st-edition-pictures">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    1st Edition Pictures
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/gallery/seminar">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Seminars
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/gallery/meeting">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Meeting
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/gallery/programme">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Programme for <br /> 2020 Edition
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center z-50 rounded-full inline-flex items-center">
              <span className="mr-1">Box office</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/box-office/how-t0-book">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    How to book
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/box-office/group-offers">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Group offers
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/box-office/special-offers">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Special offers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center z-50 rounded-full inline-flex items-center">
              <span className="mr-1">Merchandise</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/merchandise/apparel">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Apparel
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/merchandise/posters">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Posters
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/merchandise/stationary-and-gifts">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Stationary and gifts
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/merchandise/gift-vouchers">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Gift vouchers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white mb-3">
          <div className="dropdown inline-block relative">
            <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center z-50 rounded-full inline-flex items-center">
              <span className="mr-1">Get involved</span>
            </a>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
            <ul className="dropdown-menu z-50 absolute text-left hidden text-white pt-1 divide-y divide-white px-6">
              <li className="">
                <Link href="/get-involved/become-a-volunteer">
                  <a className="rounded-t-lg bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Become a volunteer
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/get-involved/go-green-with-apfac">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Go green with APFAC
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/get-involved/selected">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Selected
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/get-involved/apfac-student">
                  <a className="bg-black hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    APFAC student
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/get-involved/social-partner">
                  <a className="bg-black rounded-b-lg hover:bg-black py-2 px-4 block whitespace-no-wrap">
                    Social partner
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <Link href="/contact">
              <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
                <span className="mr-1">Contact</span>
              </a>
            </Link>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        {/* <div className="text-center text-white mb-3">
          <div className="dropdown inline-block relative">
            <Link href="/help">
              <a className="bg-transparent border border-white hover:border-red-500 font-semibold py-2 w-32 justify-center rounded-full inline-flex items-center">
                <span className="mr-1">Help</span>
              </a>
            </Link>
            <span className="px-2">
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
