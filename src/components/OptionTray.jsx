import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMessage } from "../store/store_functions";

const OptionTray = ({ index, details }) => {

    const [minDate, setMinDate] = useState(moment().format('YYYY-MM-DD'));
    const [maxDate, setMaxDate] = useState(moment().add(10, "days").format('YYYY-MM-DD'));

    const opt = Array.from({ length: 10 }, (_, index) => index + 1);

    const childArr = Array.from({ length: (details.ticket - details.adult) }, (_, index) => index + 1);
    const adultArr = Array.from({ length: (details.ticket - details.children) }, (_, index) => index + 1);

    setInterval(() => {
        const timeLimit = moment().format("hh");

        //Adjust the Time with your museum max time to get close, so that the ticket for that day cannot be booked
        if (timeLimit > 17) {
            setMinDate(moment().add(1, "days").format('YYYY-MM-DD'))
            setMaxDate(moment().add(11, "days").format('YYYY-MM-DD'))
        }
    }, 1000)

    const dispatch = useDispatch();

    const changeData = (variable, value) => {
        dispatch(updateMessage({ "name": variable, "value": value }))
    }

    return (
        <div className=''>
            {
                index == 1 ?
                    <input type="date" className="form-control w-full shadow-md rounded-md outline-none" name="date" min={minDate} max={maxDate} value={details.date} onChange={(e) => changeData("date", e.target.value)} required />
                    : index == 2 ?
                        <select name="people" className=" form-select w-full shadow-md" value={details.ticket} onChange={(e) => changeData("ticket", e.target.value)} required>
                            <option value="0" selected disabled>Select Number of Tickets</option>
                            {
                                opt.map((item) => (
                                    <option value={item} key={item} className="text-center">{item}</option>
                                ))
                            }
                        </select> : index == 3 ?

                            details.ticket > 0 ?
                                <div className="flex gap-3 w-full">
                                    <select
                                        value={details.children}
                                        onChange={(e) => changeData("children", e.target.value)}
                                        className={`w-full form-select shadow-md`}>
                                        <option value="0" selected disabled> less 15 Years</option>
                                        <option value="0" className="text-center">0</option>
                                        {
                                            childArr.map((item) => (
                                                <option value={item} key={item} className="text-center">{item}</option>
                                            ))
                                        }
                                    </select>
                                    <select
                                        value={details.adult}
                                        onChange={(e) => changeData("adult", e.target.value)}
                                        className={`w-full form-select shadow-md text-center`}>
                                        <option value="0" selected disabled>Adult</option>
                                        <option value="0" className="texxt-center">0</option>
                                        {
                                            adultArr.map((item) => (
                                                <option value={item} key={item} className="text-center">{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                :
                                <div className="flex gap-3 w-full">
                                    <div className={`w-full form-control shadow-md`}>Children</div>
                                    <div className={`w-full form-control shadow-md`}>Adult</div>
                                </div>
                            :
                            <div className="flex gap-3 w-full">
                                <div
                                    className={`w-full px-3 py-[6px] rounded-md shadow-md cursor-pointer ${details.type == "entry" ? "bg-sky-300 fw-semibold transition-transform" : "bg-white"}`}
                                    id="entry"
                                    onClick={(e) => changeData("type", e.target.id)}>
                                    Entry
                                </div>
                                <div
                                    className={`w-full px-3 py-[6px] rounded-md shadow-md cursor-pointer ${details.type == "exhibition" ? "bg-sky-300 fw-semibold transition-transform" : "bg-white"}`}
                                    id="exhibition"
                                    onClick={(e) => changeData("type", e.target.id)}>
                                    Exhibition
                                </div>
                                <div
                                    className={`w-full px-3 py-[6px] rounded-md shadow-md cursor-pointer ${details.type === "show" ? "bg-sky-300 fw-semibold transition-transform" : "bg-white"}`}
                                    id="show"
                                    onClick={(e) => changeData("type", e.target.id)}>
                                    Show
                                </div>
                            </div>
            }
        </div >
    )
}

export default OptionTray