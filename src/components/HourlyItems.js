import React from "react";

const HourlyItems = ({ hourly, timeZone, icon, color }) => {
    const formatTime = (time) => {
        const tFormat = new Intl.DateTimeFormat("en-GB", {
            timeZone: timeZone,
            hour12: true,
            hour: "numeric",
            minute: "numeric",
        });
        return tFormat.format(new Date(time * 1e3)).toUpperCase();
    };

    if (!hourly > 0) {
        return <div></div>;
    } else
        return (
            <div className="hourly-item">
                <p>{formatTime(hourly.dt)}</p>

                <div className="hourly-item__icon">
                    {React.createElement(icon, {
                        size: "50",
                        color: `url(#linear-${color})`,
                    })}
                </div>
                <div className="hourly-item__stats">
                    <p>{Math.round(hourly.temp)}°</p>
                </div>
            </div>
        );
};

export default HourlyItems;
