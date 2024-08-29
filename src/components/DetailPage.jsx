import { ArrowLeftCircle } from "lucide-react"
import MessageProfile from "./MessageProfile"
import Payment_details from "./Payment_details"
import { updatePage } from "../store/store_functions"
import { useDispatch } from "react-redux"

const info = [
    "Date of Visit", "Number of Tickets", "Number of Children", "Number of Adults", "Ticket Type"
]

const DetailPage = ({ details }) => {

    const keys = Object.keys(details)

    const dispatch = useDispatch();

    const handleBack = ()=>{
        dispatch(updatePage(1))
    }

    return (
        <>
            <div className='flex justify-center'>
                <MessageProfile />
            </div>
            <hr />
            <div className="flex justify-between">
                <div className="flex flex-col gap-1 fw-semibold">
                    {
                        info.map((item) => (
                            <label className="sm:text-[.6rem] lg:text-[.9rem]" key={item}>
                                {item}
                            </label>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-1">
                    {
                        info.map((item, index) => (
                            <label className="sm:text-[.6rem] lg:text-[.9rem]" key={index}>
                                :
                            </label>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-1">
                    {
                        keys.map((item, index) => (
                            <label className="sm:text-[.6rem] lg:text-[.9rem]" key={item}>
                                {
                                    item == "ticket" ? parseInt(details["children"]) + parseInt(details["adult"])
                                        :
                                        item == "type" ?
                                            details[item].toUpperCase()
                                            :
                                            details[item]
                                }
                            </label>
                        ))
                    }
                </div>
            </div>
            <hr />
            <Payment_details details={details}/>
            <div className="flex gap-2 items-center mt-3">
                <div className="btn btn-danger" onClick={handleBack}>
                    <ArrowLeftCircle />
                </div>
                <div className="btn btn-outline-success w-full">
                    Proceed to Payment
                </div>
            </div>
        </>
    )
}

export default DetailPage