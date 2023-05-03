import MainWeather from "./components/first-block/MainWeather";
import SearchWeather from "./components/second-block/SearchWeatjer";
import SliderWeather from "./components/first-block/SliderWeather";
import StationsWeather from "./components/first-block/StationsWeather";
import EventsWeather from "./components/second-block/EventsWeather";
import MeasureWeather from "./components/second-block/MeasureWeather";
import { useSelector } from "react-redux";

function App() {
  const weather = useSelector((state) => state.weather);
  const loading = useSelector((state) => state.loading);

  return (
    <div className='App text-white lg:flex lg:flex-row-reverse justify-between max-w-[90%] mx-auto bg-gradient-to-r from-gradient-to to-gradient-from mt-[50px]'>
      {loading ? (
        <>
          <div className='fixed w-full h-screen z-[-1] top-0 left-0 flex items-center justify-center'>
            <div className='flex flex-col items-center'>
              <span class='loader inline-block'></span>
              <span className='block mt-5'>
                Please check the correctness of the data set.
              </span>
            </div>
          </div>
          <SearchWeather />
        </>
      ) : (
        <>
          <div className='lg:w-2/5 p-10 bg-gradient-to-br from-white/40 to-white/20 flex flex-col items-center'>
            <SearchWeather />
            {typeof weather.name === "undefined" ? (
              <p></p>
            ) : (
              <div className='hidden lg:block'>
                <EventsWeather />
                <MeasureWeather />
              </div>
            )}
          </div>
          <div className='lg:w-3/5 relative py-8 px-4'>
            <MainWeather />
            <StationsWeather />
            <SliderWeather />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
