import React from "react";
import Info from "../info/Info";
import Search from "../search/Search";
import { useSelector } from "react-redux";

export default function Weather() {

    const { weather } = useSelector(state => state.weatherReducer)
    
    return (
        <div
            className={
                typeof weather.main != "undefined"
                    ? weather.main.temp > 16
                        ? "app warm"
                        : "app"
                    : "app"
            }
        >
            <main>
                <Search/>
                {typeof weather.main != "undefined" ? (
                    <Info/>
                ) : (
                    ""
                )}
            </main>
        </div>
    );
}
