import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import EventProvider from './context/event-context'

require('../bootstrap');


if (document.getElementById('root')) {
    ReactDOM.render(
    <EventProvider>
        <App />
    </EventProvider>,
    document.getElementById('root'));
}
