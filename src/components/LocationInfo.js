import React from "react";

const LocationInfo = ({ currentWeather, location, country, timeZone }) => {
    const formatTime = (time) => {
        const tFormat = new Intl.DateTimeFormat("en-GB", {
            timeZone: timeZone,
            hour12: true,
            hour: "numeric",
            minute: "numeric",
        });
        return tFormat.format(new Date(time * 1e3)).toUpperCase();
    };

    if (!currentWeather > 0) {
        return <div></div>;
    } else
        return (
            <>
                <div className="location-info">
                    <div className="location-info__name">
                        <h4>Location</h4>
                        <p>
                            {location}, {country}
                        </p>
                    </div>
                    <div className="location-info__time">
                        <h4>Local Time</h4>
                        <p>{formatTime(currentWeather.dt)}</p>
                    </div>
                </div>
            </>
        );
};

export default LocationInfo;
