import { useEffect, useState } from 'react'
import OptionTray from './OptionTray'
import questions from './botQuestions';
import MessageProfile from './MessageProfile';
import { useDispatch, useSelector } from 'react-redux';
import DetailPage from './DetailPage';
import { updatePage } from '../store/store_functions';

const ChatBox = () => {

    const [disabled, setDisabled] = useState(true)

    const globalData = useSelector((state) => state.data)
    const details = globalData.message;
    
    const pages = useSelector((state) => state.pages)

    const dispatch = useDispatch();

    useEffect(() => {
        if (details.date.length > 0 && details.ticket > 0 && (details.children > 0 || details.adult > 0) && details.type.length > 0) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [details])

    const handleProceed = () => {
        dispatch(updatePage(2))
    }

    return (
        <div className='rounded-md border-2 py-2 px-4 overflow-x-hidden overflow-y-auto no-scrollbar shadow-md w-[23rem] h-[26.5rem]'>
            {
                pages.page == 1 ?
                    <div className='break-words text-justify flex flex-col gap-6'>
                        {
                            questions.map((ques, index) => (
                                <>
                                    <MessageProfile label={ques[index + 1]} />
                                    <OptionTray index={index + 1} details={details} />
                                </>
                            ))
                        }
                        <button className='mt-2 btn btn-success' onClick={handleProceed} disabled={disabled}>Comfirm to Proceed</button>
                    </div>
                    :
                    <DetailPage details={details} />
            }
        </div>
    )
}

export default ChatBox