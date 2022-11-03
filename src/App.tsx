import { BrowserRouter } from 'react-router-dom';
import { Footer, Header, Router } from './components';


export const App = () => {
    return (
        <BrowserRouter>
            <Router />
            <Header />
            <Footer />
        </BrowserRouter>
    )
}
