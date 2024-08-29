import { useState } from "react";
import payment_info from "./PaymentDetails"

const Payment_details = ({ details }) => {
    const keys = Object.keys(payment_info);

    const [total,setTotal] = useState((parseInt(details.children)*(payment_info.Children))+(parseInt(details.adult)*(payment_info.Adult)))

    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-1 fw-semibold sm:text-[.6rem] lg:text-[.9rem]">
                {
                    keys.map((item) => (
                        <label key={item}>
                            {item}
                        </label>
                    ))
                }
            </div>
            <div className="flex flex-col gap-1 sm:text-[.6rem] lg:text-[.9rem]">
                {
                    keys.map((item, index) => (
                        <label key={index}>
                            :
                        </label>
                    ))
                }
            </div>
            <div className="flex flex-col gap-1 sm:text-[.6rem] lg:text-[.9rem]">
                <label>{"$ "+ payment_info.Children + " X "+details.children}</label>
                <label>{"$ "+ payment_info.Adult + " X "+details.adult}</label>
                <label>{"$ "+total}</label>
                <label>{payment_info["G.S.T."]+"%"}</label>
                <label>{"$ "+(total+(total*parseInt(payment_info["G.S.T."]))/100)}</label>
            </div>
        </div>
    )
}

export default Payment_details