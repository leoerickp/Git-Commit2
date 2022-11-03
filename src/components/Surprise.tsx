import surpriseLogo from '../assets/img/05.png';

export const Surprise = () => {
    return (
        <div className="fadeInDown flex flex-col justify-center items-center bg-cyan-200 shadow-lg border-2 pt-2 border-cyan-300 rounded-md">
            <img src={surpriseLogo} className="w-2/6" />
            <div className="bg-cyan-900 opacity-70 px-1 md:px-8 py-1 md:py-2 text-md lg:text-xl text-white text-center w-2/3 md:w-1/2 sticky bottom-0 rounded-t-md">
                Thanks!!! ... see you soon
            </div>
        </div>
    )
}
