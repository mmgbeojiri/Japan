import "./index.css";

function Visit() {
    return ( <>
        <div id="visit" className='section lightLayer0 dark:!darkLayer0'>
            <h1 className="sectionHeader">Visit</h1>

            <div className="w-full flex gap-2  flex-col border p-4 justify-center lightLayer0 dark:darkLayer0 rounded-xl">
            <iframe className="video " 
            src="https://www.youtube.com/embed/h1abl_g2L2Q" 
            title="6 Reasons You Should Visit Japan" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
            <div className="border lightLayer1 p-4 rounded-lg">
                <h1 className="text-lg font-semibold">6 Reasons You Should Visit Japan</h1>
                <h2 className="text-lg font-normal">Eisei-en Bonsai - Jul 14th, 2016</h2>
            </div>
            </div>

            <div className="lightLayer1 dark:!darkLayer1 rounded-xl shadow-xl p-3 flex flex-row justify-between gap-1">
                <div className="max-w-[50%] flex flex-col ">
                    <h1 className="text-2xl shadow rounded-xl p-2">Visit Us!</h1>
                    <p className="my-auto">Japan is a beautiful country with its people, culture, technology, food, and so much more! On the right we've embeded flights to Japan. Check them out!</p>
                </div>
                <div>
                    <iframe className="iframe" src="https://www.wego.com/flights/jp/nyc/cheapest-flights-from-japan-to-new-york-city"></iframe>
                </div>
            </div>
        </div>

    </>)
}

export default Visit;