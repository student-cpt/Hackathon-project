const MessageProfile = ({ label }) => {
    return (
        <div className="flex gap-4 items-center">
            <img src="bot.png" alt="bot" className="h-8" />
            {
                label ? <label className="sm:text-[.6rem] lg:text-[1rem]">{label}</label> : ""
            }
        </div>
    )
}

export default MessageProfile