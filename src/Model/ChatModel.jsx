import { useEffect, useRef } from 'react'
import Modal from 'react-modal'
import ChatBox from '../components/ChatBox'
import { useDispatch, useSelector } from 'react-redux'
import { updateBotModel } from '../store/store_functions'

const ChatModel = () => {
    const globalStore = useSelector((state) => state.data)
    const dispatch = useDispatch();

    const close = () => {
        dispatch(updateBotModel(false));
    }

    return (
        <Modal
            isOpen={globalStore.botModel}
            onRequestClose={() => close}
            shouldCloseOnOverlayClick={true}
            style={{
                overlay: {
                    backgroundColor: "transparent",
                    borderRadius: "0px"
                }
            }}
            className="h-screen flex justify-center items-center"
        >
            <ChatBox />
        </Modal>
    )
}

export default ChatModel