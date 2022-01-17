import logo from './logo.svg';
import './App.css';
import TopBar from './topbar';
import Intro from './intro';
import Description from './description';
import topBack from './topBack.jpg';
import './style.css'
function App() {
  return (
    
    <div className="App">
      <div className = "relative w-full flex flex-row sm:flex-row items-center justify-between sm:justify-between sm:h-16">
            <div>
            <div className = "inline-flex px-10 align-middle">Charles Wong</div>
                <div className="inline-flex px-6">
                    <div className=" inline-flex p-4 text-lg items-center">
                        <div className="align-middle "> Home </div>
                    </div>
                    <div className=" inline-flex p-4 text-lg items-center">
                        <div className="align-middle "> Projects </div>
                    </div>
                    <div className=" inline-flex p-4 text-lg items-center">
                        <div className="align-middle "> Contact </div>
                    </div>
                </div>
            </div>
            

            <div className=" px-16">
                <a href="https://www.linkedin.com/" className="inline-flex  p-4  text-lg items-center">
                    <div> LI</div>
                </a>

                <a href="https://www.youtube.com/channel/UCKBxPZtgJZRKi07vpwxGcxQ" className="inline-flex  p-4  text-lg items-center">
                    <div> YT</div>
                </a>
            </div>
        </div>


        <div className = " flex justify-center min-h-4/5 bg-bermuda" style ={{ backgroundImage: `url(${topBack})` }}>
            <div class="backdrop-blur-md bg-white/30 w-7/12 h-96 m-8 mt-28 rounded-3xl shadow-2xl ">
                <div className = "flex flex-row">
                    <div className=" w-full ml-10 mt-8">
                        <div className=" text-left font-light text-white text-6xl ">
                            Charles Wong
                        </div>
                        <div className= "text-left font-semibold text-white text-4xl mt-2 leading-tight">
                            An Aspiring Game Programmer
                        </div>
                        <div className= "text-left font-extralight text-white text-xl mt-16 leading-tight">
                            An University Unity game dev with experiences in 2D and VR game projects.
                        </div>
                    </div>
                        <img className=" mr-6 mt-8 w-2/5" src="https://1.bp.blogspot.com/-QU1PrEXerMg/XWS5ZxD-tsI/AAAAAAABUR4/1EuTP776BowewKdMAgnAUpUB5m3O7ve-ACLcBGAs/s1600/computer_screen_programming.png">
                        </img>
                    
                </div>
                
            </div>
        </div>



      <div className="flex flex-col mx-52">
            <div className = " flex flex-col min-h-2/5 ">
                <div className=" text-left text-lg  mt-32">
                    <div className=" text-left text-5xl font-bold">
                        ABOUT ME
                    </div>
                    <div className="flex flex-row">
                        <div className=" text-left font-light mt-6 w-8/12">
                            I am Charles Wong, a young Unity Programmer who have experiences in 2D and VR games. I participated in Global Game Jam 2021 and the kickstart production of Siege of Dungeon project by Binary Tree Studio, also serveral projects made in University.
                        </div>
                        <div className=" w-4/12">

                        </div>
                    </div>
                    
                    <div className="flex flex-row">
                        <div className=" text-left font-light mt-6 w-8/12">
                            I also have knowledge in HTML, CSS, JavaScript, Node.js and React.
                        </div>
                        <div className="w-4/12">

                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className=" text-left font-light mt-6 w-8/12">
                            
                        </div>
                        <div className=" w-4/12">

                        </div>
                    </div>
                    
                </div>
            </div>

            <div className = " flex flex-col min-h-2/5 ">
                <div className=" text-left text-lg  mt-32">
                    <div className=" text-left text-5xl font-bold">
                        PREVIOUS PROJECTS
                    </div>
                    <div className="flex flex-row mt-16">
                        <div className=" text-left font-bold w-5/12">
                            Discover the Undiscovered － Lost the Rock, Find the Element (2021)
                            <div className="my-2">
                                Roles: Programmer
                            </div>
                            <div className="font-light my-2">
                                A 2D game where players are going to throw a rock ball and guess the elements hidden by each grid one by one by observing the sound and movement of the rock. It is a 6 person project including programmer and artist, which I participated in the 2021 Hong Kong Global Game Jam as one of the two programmers of the project. 
                            </div>
                            <div className="font-light my-2">
                            I am responsible for the player control, ball’s movement mechanism ,ball behavior when colliding with various element grids and the sound effect of the game.
                            </div>
                        </div>
                        <div className=" ml-16 w-4/12">
                        <iframe width="480" height="320" src="https://www.youtube.com/embed/1GbyIM7Vdnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="flex flex-row mt-16">
                        <div className=" text-left font-bold w-5/12">
                            Black box (2019)
                            <div className="my-2">
                                Roles: Programmer
                            </div>
                            <div className="font-light my-2">
                                A Text based game where the player navigates through a mysterious story with multiple endings which will be decided by the action chosen, with different hints gathering mini-games. This is a game made in my first year of CCCU life , as the only programmer in the group, I managed to complete the minigames and the text based game navigation mechanism and integrated the graphics into the game.
                            </div>
                        </div>
                        <div className=" ml-16 w-4/12">
                        <iframe width="480" height="320" src="https://www.youtube.com/embed/1GbyIM7Vdnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className = " flex flex-col min-h-2/5 ">
                <div className=" text-left text-lg  mt-32">
                    <div className=" text-left text-5xl font-bold">
                        PREVIOUS PROJECTS
                    </div>
                    <div className="flex flex-row mt-16">
                        <div className=" text-left font-bold w-5/12">
                            Discover the Undiscovered － Lost the Rock, Find the Element (2021)
                            <div className="my-2">
                                Roles: Programmer
                            </div>
                            <div className="font-light my-2">
                                A 2D game where players are going to throw a rock ball and guess the elements hidden by each grid one by one by observing the sound and movement of the rock. It is a 6 person project including programmer and artist, which I participated in the 2021 Hong Kong Global Game Jam as one of the two programmers of the project. 
                            </div>
                            <div className="font-light my-2">
                            I am responsible for the player control, ball’s movement mechanism ,ball behavior when colliding with various element grids and the sound effect of the game.
                            </div>
                        </div>
                        <div className=" ml-16 w-4/12">
                        <iframe width="480" height="320" src="https://www.youtube.com/embed/1GbyIM7Vdnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className = " flex flex-col min-h-2/5 ">
                <div className=" text-left text-lg mt-32">
                    <div className=" text-left text-5xl font-bold">
                        SKILLS
                    </div>
                    <div className="flex flex-row">
                        <div className="text-left mt-6">
                            <div className=" font-normal underline underline-offset-4">Programming Languages</div>
                            <div className=" font-light">C#(2 years)</div>
                            <div className=" font-light">Java</div>
                            <div className=" font-light">JavaScript</div>
                            <div className=" font-light">Java</div>
                            <div className=" font-light">Python (short experience)</div>
                        </div>

                        <div className="text-left mt-6 ml-16">
                            <div className=" font-normal underline underline-offset-4">Software Experiences</div>
                            <div className=" font-light">Unity</div>
                            <div className=" font-light">Visual Studio</div>
                            <div className=" font-light">Visual Studio Code</div>
                            <div className=" font-light">Android Studio</div>
                            <div className=" font-light">Adobe Photoshop</div>
                            <div className=" font-light">Adobe Premiere Pro</div>
                            <div className=" font-light">Sony Vegas Pro</div>
                            <div className=" font-light">Pycharm</div>
                        </div>
                        
                        <div className="text-left mt-6 ml-16">
                            <div className=" font-normal underline underline-offset-4">Others</div>
                            <div className=" font-light">Node.js</div>
                            <div className=" font-light">React</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
