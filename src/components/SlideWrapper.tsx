

export const SlideWrapper = () => {
    const message: string = 'The future is today!';
    return (
        <div className="flex flex-col justify-center items-center bg-cyan-900 rounded-md">
            <div className="overflow-hidden rounded-t-md brightness-70 ">
                <div className="flex flex-row h-full relative slideshow-wrapper">
                    <div className="h-full w-full">
                        <img className="objectfit-cover" src="./img/img1.jpg" />
                    </div>
                    <div className="h-full w-full">
                        <img className="objectfit-cover" src="./img/img2.jpg" />
                    </div>
                    <div className="h-full w-full">
                        <img className="objectfit-cover" src="./img/img3.jpg" />
                    </div>
                </div>
            </div>
            <div className="bg-cyan-900  opacity-70 px-1 md:px-10 py-1 md:py-2 text-xl text-white text-center md:w-1/2 sticky bottom-0 rounded-t-md">
                {message}
            </div>
        </div>
    )
}
