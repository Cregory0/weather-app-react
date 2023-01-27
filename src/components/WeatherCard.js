import weatherTypes from "../utilities/weatherTypes";
import React from "react";

const WeatherCard = ({ currentWeather }) => {
    const findIcon = (description) => {
        let weatherObj = {};
        weatherTypes.map((types) => {
            if (types.weather.includes(description)) {
                weatherObj[0] = { icon: types.icon, color: types.main };
                return weatherObj;
            }
            return weatherObj;
        });
        return weatherObj;
    };

    if (!currentWeather > 0) {
        return <div></div>;
    } else
        return (
            <>
                <div className="card-wrapper">
                    <div className="weather-card">
                        <div className="weather-card__logo__forecast">
                            {React.createElement(
                                findIcon(
                                    currentWeather.weather[0].description
                                )[0].icon,
                                {
                                    size: "60",
                                    color: `url(#linear-${
                                        findIcon(
                                            currentWeather.weather[0]
                                                .description
                                        )[0].color
                                    })`,
                                }
                            )}
                            <p>{currentWeather.weather[0].main}</p>
                        </div>

                        <div className="weather-card__temp">
                            <h2>{Math.round(currentWeather.temp)}°</h2>
                            <p>
                                Feels like{" "}
                                {Math.round(currentWeather.feels_like)}°C
                            </p>
                        </div>
                    </div>

                    <div className="daily-stats-card">
                        <div className="daily-pressure">
                            <p>Pressure</p>
                            <p>{currentWeather.pressure}mb</p>
                        </div>

                        <div className="daily-visibility">
                            <p>Visibility</p>
                            <p>{currentWeather.visibility} km</p>
                        </div>

                        <div className="daily-humiidity">
                            <p>Humidity</p>
                            <p>{currentWeather.humidity}%</p>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default WeatherCard;
