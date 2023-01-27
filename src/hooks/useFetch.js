import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (input, searchTerm) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            let res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${
                    input || searchTerm
                }&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            setCurrentWeather(res.data);
            setError("");
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchWeatherOneCall = async () => {
        setLoading(true);
        try {
            let geoResponse = await axios.get(
                `https://api.openweathermap.org/geo/1.0/direct?q=${
                    input || searchTerm
                }&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            let data = await geoResponse.data;
            let weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
            setWeatherData(weatherResponse.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
        fetchWeatherOneCall();
    }, [searchTerm]);

    return {
        currentWeather,
        weatherData,
        loading,
        searchTerm,
        error,
    };
};

export default useFetch;
