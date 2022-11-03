
import { Route, Routes } from 'react-router-dom';
import { Home, Commits, Contact, Surprise, Detail, Error } from './';

export const Router = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className="clear-both float-none"></div>
            <div className="container md p-5 bg-cyan-100 text-tahiti pt-2 w-9/12 mb-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/commits" element={<Commits />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/surprise" element={<Surprise />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </div>
        </div >
    )
}
