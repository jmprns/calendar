import { useState, useContext } from "react";
import {getDaysInMonth, startOfMonth, endOfMonth, subMonths, addMonths, isWithinInterval } from 'date-fns'
import dateRange from "../../../helpers/date-array";

import Day from "./Day";
import CalendarHeader from "./Header";

import { EventContext } from "../../context/event-context";





const Calendar = () => {

    const [date, setDate] = useState(new Date())
    const dayStartInNumber = startOfMonth(date).getDay()
    const daysArray = dateRange(startOfMonth(date), endOfMonth(date));

    const eventCTX = useContext(EventContext)


    const start = new Date(eventCTX.event.start)
    const end = new Date(eventCTX.event.end)
    const includeDays = eventCTX.event.days

    const handleSwitch = (mode) => {

        if(mode == '-') {
            return setDate(subMonths(date, 1))
        } else if(mode == '+'){
            return setDate(addMonths(date, 1))
        }

    }

    const days = []

    // for filling the blank cells of the days
    if(dayStartInNumber !== 0){
        for(let i = 1; i <= dayStartInNumber; i++){
            days.push(<Day key={i + '_'} />)
        }
    }

    // looping the range
    daysArray.forEach((item, key) => {

        let eventName = ""

        if(eventCTX.event.id != undefined){
            eventName = ( isWithinInterval(item, {start: start, end: end}) && includeDays.includes(item.getDay())) ? eventCTX.event.title : ""
        }

        days.push(<Day key={key} number={item.getDate()} event={eventName} />)
    })



    return (
        <div className="bg-white rounded-lg shadow overflow-hidden col-span-3">
            <div className="flex items-center justify-between py-2 px-6">
                <div>
                    <span className="text-lg font-bold text-gray-800">
                        {date.toLocaleString('default', { month: 'long' })}
                    </span>
                    <span className="ml-1 text-lg text-gray-600 font-normal">
                        {date.getFullYear()}
                    </span>
                </div>

                <div className="flex">
                    <button className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-xl shadow rounded-md text-white bg-cyan-500 mr-4" onClick={() => handleSwitch('-')}> ⬅️ </button>

                    <button className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-xl shadow rounded-md text-white bg-cyan-500" onClick={() => handleSwitch('+')}>➡️</button>
                </div>
            </div>
            <div className="-mx-1 -mb-1">
                <div className="grid grid-cols-7">
                   <CalendarHeader />
                    {days}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
