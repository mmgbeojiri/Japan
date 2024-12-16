import "./index.css";

function Stats() {
    return(
        <>
        <div id="stats" className='section lightLayer0 dark:!darkLayer0 flex-col flex gap-4'>
            <h1 className="sectionHeader" >Stats</h1>
            <div className="rounded p-4 flex flex-row gap-4 w-full">
                <div className="statThing !darkLayer1">
                    <h1 className="text-xl">124.5 million</h1>
                    <p className="text-sm text-slate-500">people live in Japan.</p>
                </div>
                <div className="statThing dark:!darkLayer1 ">

                    <h1 className="text-xl">18-34 million</h1>
                    <p className="text-sm text-slate-500">of which speak English.</p>
                </div>
                <div className="statThing dark:!darkLayer1">

                    <h1 className="text-xl">The 9th</h1>
                    <p className="text-sm text-slate-500">most populous nation is Japan.</p>
                </div>
                <div className="statThing dark:!darkLayer1">

                    <h1 className="text-xl">$4.213 trilion</h1>
                    <p className="text-sm text-slate-500">is Japan's GDP, making it the third biggest in the world.</p>
                </div>
                <div className="statThing dark:!darkLayer1">

                    <h1 className="text-xl">329 people per square kilometer</h1>
                    <p className="text-sm text-slate-500">is Japan's population density, ranking only 43rd place <a className="text-primarylight underline hover:text-primary" href="https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population_density">according to Wikipedia.</a></p>
                </div>
            </div>
        </div>
        </>)
}

export default Stats