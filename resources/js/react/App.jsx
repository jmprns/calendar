import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

import Header from './Layout/Header'
import Container from './Layout/Container'

const App = () => {
    return (
        <>
            <Header />
            <Container />
            <ToastContainer />
        </>
    )
}

export default App
