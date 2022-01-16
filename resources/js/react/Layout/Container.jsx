import Calendar from "../components/Calendar/Calendar";
import Form from "../components/Form/Form";

import { useState, useEffect } from "react";
import axios from "axios";

const Container = () => {
    return (
        <main className="min-h-[70vh] px-6 bg-gray-100 p-6">
            <div className="grid grid-cols-4 gap-4">
                <Form />
                <Calendar />
            </div>
        </main>
    );
};

export default Container;
