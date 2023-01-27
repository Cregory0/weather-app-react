import HourlyItems from "./HourlyItems";
import weatherTypes from "../utilities/weatherTypes";

const HourlyTemps = ({ hourly, timeZone }) => {
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

    if (!hourly > 0) {
        return <div></div>;
    } else
        return (
            <>
                <h2>Hourly Temperatures</h2>

                <div className="hourly-temp-container">
                    {hourly.slice(0, 9).map((items, index) => {
                        return (
                            <HourlyItems
                                key={index}
                                hourly={items}
                                timeZone={timeZone}
                                icon={
                                    findIcon(items?.weather[0].description)[0]
                                        .icon
                                }
                                color={
                                    findIcon(items?.weather[0].description)[0]
                                        .color
                                }
                            />
                        );
                    })}
                </div>
            </>
        );
};

export default HourlyTemps;
