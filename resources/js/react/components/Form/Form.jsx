import { useContext,useState } from "react";

import { toast } from "react-toastify";

import { EventContext } from "../../context/event-context";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "../UI/Button";
import ErrorToast from "../UI/ErrorToast";

const Form = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const { event, upsertEvent } = useContext(EventContext);

    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState
    } = useForm();

    const onSubmit = (data) => {

        setIsLoading(true)

        const request = axios.post('/api/events/' + event.id, data).then(res => {

            upsertEvent(res.data)
            if(res.status == 200){
                toast.success("Event was updated successfully.")
            }
            if(res.status == 201){
                toast.success("Event was created successfully.")
            }

        }).catch(error => {
            const err = error.response.data

            toast.error(<ErrorToast message={err.message} errors={err.errors}  />)

            console.log(err.errors)

        }).finally(() => {

            setIsLoading(false)

        });

    };

    const inputClass =
        "mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md";

    return (
        <div className="px-10 py-8 bg-white rounded-lg shadow">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Event Name
                        </label>
                        <input
                            type="text"
                            {...register("title", {required: true})}
                            className={inputClass}
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            From
                        </label>
                        <input
                            type="date"
                            {...register("start")}
                            className={inputClass}
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                            To
                        </label>
                        <input
                            type="date"
                            {...register("end")}
                            className={inputClass}
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    {days.map((item, key) => {
                        return (
                            <div
                                className="form-check form-check-inline"
                                key={key + "__" + item}
                            >
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox"
                                    id={"inlineCheckbox_" + item}
                                    value={key}
                                    {...register("days[]")}
                                />
                                <label
                                    className="form-check-label inline-block text-gray-800"
                                    htmlFor={"inlineCheckbox_" + item}
                                >
                                    {item}
                                </label>
                            </div>
                        );
                    })}
                </div>

                <Button loading={isLoading} label={event.id === undefined ? 'Save' : 'Update'} type="submit" />
            </form>
        </div>
    );
};

export default Form;
