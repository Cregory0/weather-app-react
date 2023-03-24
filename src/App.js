import Main from "./components/Main";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import clsx from "clsx";
import ReactGA from "react-ga4";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [input, setInput] = useState("London");
    const [mode, setMode] = useState("dark");

    useEffect(() => {
        ReactGA.initialize('G-BMF70R4GBP');
    }, []);

    const { loading, currentWeather, weatherData, error } = useFetch(
        input,
        searchTerm
    );

    return (
        <>
            <div
                className={clsx("app-wrapper", {
                    dark: mode === "dark",
                })}
            >
                <Header
                    setInput={setInput}
                    input={input}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    loading={loading}
                    currentWeather={weatherData?.current}
                    country={currentWeather?.sys.country}
                    location={currentWeather?.name}
                    timeZone={weatherData?.timezone}
                    mode={mode}
                    setMode={setMode}
                />
                {error ? (
                    <p className="error-message">
                        This location does not exist. Check the location and try
                        again.
                    </p>
                ) : (
                    <Main
                        input={input}
                        setInput={setInput}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        currentWeather={weatherData?.current}
                        loading={loading}
                        hourly={weatherData?.hourly}
                        timeZone={weatherData?.timezone}
                        daily={weatherData?.daily}
                    />
                )}
            </div>
        </>
    );
}

export default App;
