import { useDispatch } from 'react-redux'
import { updateBotModel } from '../store/store_functions';

const ChatBotIcon = () => {
    const dispatch = useDispatch();

    const openChatBox = () => {
        dispatch(updateBotModel(true))
    }

    return (
        <img src="bot.png" alt="Bot Image" className='h-20 cursor-pointer' onClick={()=>openChatBox()} />
    )
}

export default ChatBotIcon