import img404 from '../assets/img/404.png'

export const Error = () => {
    return (
        <div className="fadeInDown flex flex-col justify-center items-center bg-cyan-200 shadow-lg border-2 pt-2 border-cyan-300 rounded-md">
            <img src={img404} className="w-4/6 rounded-md shadow-lg" />
            <div className="bg-cyan-900 opacity-70 px-10 text-xl text-white text-center w-1/2 sticky bottom-0 rounded-t-md">
                Error 404: Page not found
            </div>
        </div>
    )
}
