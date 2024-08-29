import ChatBotIcon from './components/ChatBotIcon'
import ChatModel from './Model/ChatModel'

const App = () => {
  return (
    <div className='h-screen flex justify-end items-end pb-4 px-6'>
      <ChatModel/>
      <ChatBotIcon />
    </div>
  )
}

export default App