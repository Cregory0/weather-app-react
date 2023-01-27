import { SunriseFill, SunsetFill } from "react-bootstrap-icons";

const SunSet = ({ sunrise, sunset, timeZone }) => {
    const formatTime = (time) => {
        const tFormat = new Intl.DateTimeFormat("en-GB", {
            timeZone: timeZone,
            hour12: true,
            hour: "numeric",
            minute: "numeric",
        });
        return tFormat.format(new Date(time * 1e3)).toUpperCase();
    };

    if (!sunrise && !sunset > 0) {
        return <div></div>;
    } else
        return (
            <div className="sun-time">
                <div className="sun-rise">
                    <p>Sun rise</p>
                    <SunriseFill size={40} color="url(#linear-Clear)" />
                    <p>{formatTime(sunrise)}</p>
                </div>
                <div className="sun-set">
                    <p>Sun set</p>
                    <SunsetFill size={40} color="url(#linear-Clear)" />
                    <p>{formatTime(sunset)}</p>
                </div>
            </div>
        );
};

export default SunSet;
