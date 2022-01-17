import './App.css';
import topBack from './topBack.jpg';
const intro = () =>{
    return(
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
    );
}
export default intro;