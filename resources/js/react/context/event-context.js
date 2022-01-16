import axios from "axios";
import React, {useState} from "react";

const defaultValue = {
    id: 0,
    title: null,
    start: null,
    end: null,
    days: []
}

export const EventContext = React.createContext({
    event: defaultValue,
    upsertEvent: (data) => {}
});

export default (props) => {

    const [event, setEvent] = useState({ event: defaultValue });

    const upsertEvent = (newData) => {
        setEvent(newData)
    }

    return <EventContext.Provider value={{
        event: event,
        upsertEvent: upsertEvent
     }}>{props.children}</EventContext.Provider>;
};
