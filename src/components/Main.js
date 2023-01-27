import WeatherCard from "./WeatherCard";
import HourlyTemps from "./HourlyTemps";
import SunSet from "./SunSet";
import { WeatherPredictions } from "./WeatherPredictions";
import UvCard from "./UvCard";
import iconColor from "../utilities/Gradients";

const Main = ({ hourly, loading, currentWeather, timeZone, daily }) => {
    return (
        <>
            {iconColor}

            {loading ? (
                <div className="loader-container">
                    <div className="lds-dual-ring"></div>
                </div>
            ) : (
                <main className="main-section">
                    <section className="main-section__today">
                        <WeatherCard currentWeather={currentWeather} />
                        <div className="main-section__current-cards">
                            <SunSet
                                sunrise={currentWeather?.sunrise}
                                sunset={currentWeather?.sunset}
                                timeZone={timeZone}
                                loading={loading}
                            />
                            <UvCard
                                uvi={currentWeather?.uvi}
                                loading={loading}
                            />
                        </div>
                    </section>
                    <HourlyTemps
                        hourly={hourly}
                        loading={loading}
                        timeZone={timeZone}
                    />
                    <WeatherPredictions
                        daily={daily}
                        loading={loading}
                        timeZone={timeZone}
                    />
                </main>
            )}
        </>
    );
};

export default Main;
