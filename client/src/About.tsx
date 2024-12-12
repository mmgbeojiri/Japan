import React, { useEffect } from "react";
import "./index.css"

function About() {
    let activeTab = 0
    
    const setTab = (x: number): undefined => {
        activeTab = x
        const button = document.getElementById(x.toString())
        const allButtons = document.getElementsByClassName("aboutButton")

        if (allButtons) {
            for (var i=0; i < allButtons.length; i++) {
                allButtons[i].className = "aboutButton" // will reset all buttons\
            }
        }
        if (button) {
            button.className = button.className + " bg-white shadow !text-slate-900"; // cant do button?.classname
        }

        const targetedDiv = document.getElementById(x.toString() + "div")
        const allDivs = document.getElementsByClassName("hiddenSection")

        if (allDivs) {
            for (var i=0; i<allDivs.length;i++) {
                allDivs[i].className = "hiddenSection hidden" //I want them to be hidden always.
            }
        }

        if (targetedDiv) {
            targetedDiv.className = "hiddenSection lightLayer1 dark:darkLayer1 "
        }
    } 

    useEffect(() => {
        setTab(0)
    },[]);

    return (<>
    
    <div id="about" className='section dark:darkLayer0 lightLayer0 gap-5'>
        <h1 className="sectionHeader">About</h1>
        
        <div className="w-full">
        <div className="overflow-hidden rounded-xl border dark:darkLayer1  lightLayer1 p-1 "> {/* Light/Dark */}
            <ul className="flex items-center gap-2 text-sm font-medium">
            <li>
                <a onClick={(e) => {e.preventDefault; setTab(0);}} id="0" className="aboutButton">Geography</a>
            </li>
            <li>
                <a onClick={(e) => {e.preventDefault; setTab(1);}} id="1" className="aboutButton">Technology</a>
            </li>
            <li>
                <a onClick={(e) => {e.preventDefault; setTab(2);}} id="2" className="aboutButton">Language</a>
            </li>
            <li>
                <a onClick={(e) => {e.preventDefault; setTab(3);}} id="3" className="aboutButton">Food</a>
            </li>
            <li>
                <a onClick={(e) => {e.preventDefault; setTab(4);}} id="4" className="aboutButton">Culture & Religion</a>
            </li>
            
            {/*
            <li>
                <a @click="activeTab = 1" :className="{ 'bg-white shadow text-gray-700': activeTab === 1 }" className="aboutButton"> Preferences</a>
            </li>
            <li>
                <a @click="activeTab = 2" :className="{ 'bg-white shadow text-gray-700': activeTab === 2 }" className="aboutButton">
                Notifications
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold "> 8 </span></a>
                >
            </li>
            <li>
                <a @click="activeTab = 3" :className="{ 'bg-white shadow text-gray-700': activeTab === 3 }" className="aboutButton"> Applications</a>
            </li>
            <li>
                <a @click="activeTab = 4" :className="{ 'bg-white shadow text-gray-700': activeTab === 4 }" className="aboutButton"> API</a>
            </li>
            */}
            </ul>
            
            
        </div>
        
        <div className="py-3">
        <div className="hiddenSection lightLayer1 dark:darkLayer1" id="0div">
            <h1 className="text-2xl text-bold p-2 rounded shadow">Geography</h1>
            <div className="flex flex-row  rounded items-center p-4 rounded gap-4">
                <p>Japan is an Archipelago, which is a string of islands on the eastern part of Asia. Japan has four main islands, those being Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 minor islands in Japan. Japan is a mountainous country. Japan's nearest neighbors on the mainland are the Koreas, China and Siberia.</p>
                <img className="aboutImage" src="https://www.worldatlas.com/upload/4a/5a/54/jp-01.jpg" alt="Map Of Japan" />
            </div>
            </div>
        <div className="hiddenSection lightLayer1 dark:darkLayer1" id="1div">
        <h1 className="text-2xl text-bold p-2 rounded shadow">Techology</h1>
            <div className="flex flex-row  rounded items-center p-4 rounded gap-4">
                <p>
Japan is known for its major amount of innovations. From media and entertainment of manga and several classic video game companies, to transportation of the bullet trains that run through the Shinkansen network – Japan’s version of the network, Japan is ranked highly in the invention field. Just recently in 2024, Japan reached rank 13 in the Global Innovation Index by the World Intellectual Property Organization.
                </p>
                <img className="aboutImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Shinkansen0-n700.jpg/1024px-Shinkansen0-n700.jpg" alt="Shinkansen Trains" />
            </div>
        </div>
        <div className="hiddenSection lightLayer1 dark:darkLayer1" id="2div">
            <h1 className="text-2xl text-bold p-2 rounded shadow">Language</h1>
            <div className="flex flex-row  rounded items-center p-4 rounded gap-4">
                <p>
                The Japanese language is made up of three alphabets. The first is “Hiragana”, which is used to write native japanese words. はな is the hiragana for “flower”. The second is “Katakana”, which is used to write foreign words not native to the language. パソコン is the katakana for “Personal Computer”. The third and most complex alphabet is Kanji, borrowed from the Chinese language. The characters in this alphabet represent ideas, not letters. 日本 is Kanji for Japan.
                </p>
                <img className="aboutImage" src="https://90dayjapanese.com/wp-content/uploads/2022/05/Hiragana-Chart-min-1190x1536.png" alt="Hiragana Chart" />
            </div>
        </div>
        <div className="hiddenSection lightLayer1 dark:darkLayer1" id="3div">
        <h1 className="text-2xl text-bold p-2 rounded shadow">Food</h1>
            <div className="flex flex-row  rounded items-center p-4 rounded gap-4">
                <div>
                <p>
                Japan has a large selection of food respective to its culture.
                </p>
                <ul className="list-disc">
                    
                        <li>Sushi is a dish from a combination of raw salmon, and vinegar rice. The most popular version of sushi (and the one you might imagine whilst reading) is called a nori roll, which is when seaweed is wrapped around the ingredients.</li>
                        <li>Tempura is deep fried vegetables, most commonly shrimp.</li>
                        <li>Takoyaki is fried octopus balls, and is a common snack in Japan. It consists of a wheat base with octopus and served with sauce.</li>
                        <li>Onigiri is a Japanese rice ball that usually consists of tuna or some other kind of fish meat inside, wrapped in seaweed. Onigiri usually holds the triangular shape.</li>

                </ul>
                </div>
                
                <img className="aboutImage" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSKVr_punqtZNBMdIZ-2rcqmu3cKRz2CSXWhqd2XT87-ETJGZ75YyFIT3QCv_mGU5L4AyIz6J3BGWcG3ovc6N0EdWbXUemvUGAkepzK0TPhp9eFOCZEkVc6rQiy1bqFrP6lAMLLlutkqOb/s1600/IMGP1881.JPG" alt="Nori Roll" />
            </div>
        </div>
        <div className="hiddenSection lightLayer1 dark:darkLayer1" id="4div">
        <h1 className="text-2xl text-bold p-2 rounded shadow">Culture & Religion</h1>
            <div className="flex flex-row  rounded items-center p-4 rounded gap-4">
                <div>
                <p>
                   The two major religions in Japan are Shinto and Buddhism. Religion does not take a big role in the average life of the Japanese person, but it is common for them to go to shrines or temples on New Years, participate at local festivals, and follow the rituals for birth, wedding, and funeral ceremonies.
                    Japanese people follow a specific routine when praying at a shrine. This includes:
                </p>
                <ol className="list-decimal">
                    <li>Toss a coin into an offering box. This is called a Saisen-bako. Most people throw in 5 yen since it's rumored to make a good relationship. </li>
                    <li>Shake a rope to ring a bell, but if there is no bell, you can skip this step</li>
                    <li>Bow deeply twice.</li>
                    <li>Clap your hands twice.</li>
                    <li>Pray and make a wish and make sure to put your hands together in front of your body.</li>
                    <li>Bow deeply once again.</li>
                </ol>
                </div>

                <img className="aboutImage" src="https://cdn.britannica.com/54/130754-050-CA9B32D5/Shinto-shrine-paper-streamers-Fujiyoshida-Japan.jpg?w=300" alt="Shinto Shrine in Japan" />
            </div>
        </div>
           
        </div>
        </div>

    </div>
    </>
    )
}

export default About