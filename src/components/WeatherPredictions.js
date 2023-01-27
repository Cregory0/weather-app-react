import PredictionCards from "./PredictionCards";
import weatherTypes from "../utilities/weatherTypes";

export const WeatherPredictions = ({ daily, loading, timeZone }) => {
    const formatDate = (date) => {
        const dFormat = new Intl.DateTimeFormat("en-GB", {
            timeZone: timeZone,
            month: "short",
            day: "numeric",
            weekday: "short",
        });
        return dFormat.format(new Date(date * 1e3));
    };

    const capitalizeFirstLetter = (sentence) => {
        const words = sentence.split(" ");
        const convertedWord = words
            .map((word) => {
                return word[0].toUpperCase() + word.substring(1);
            })
            .join(" ");
        return convertedWord;
    };

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

    if (!daily > 0) {
        return <div></div>;
    } else
        return (
            <>
                <h2>Weather Next 5 days</h2>
                <div className="weather-forecast-container">
                    {daily.slice(0, 5).map((items, index) => {
                        return (
                            <PredictionCards
                                key={index}
                                date={formatDate(items.dt)}
                                weather={capitalizeFirstLetter(
                                    items.weather[0].description
                                )}
                                tempHigh={Math.round(items.temp.max)}
                                tempLow={Math.round(items.temp.min)}
                                icon={
                                    findIcon(items.weather[0].description)[0]
                                        .icon
                                }
                                color={
                                    findIcon(items.weather[0].description)[0]
                                        .color
                                }
                                precipitation={items.pop}
                                wind={items.wind_speed}
                            />
                        );
                    })}
                </div>
            </>
        );
};
