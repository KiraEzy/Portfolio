import './App.css';
import './style.css';
const TopBar = () =>{
    return(
        <div className = "relative w-full flex flex-row items-center justify-center sm:justify-between sm:h-16">
            <div className =" flex flex-row ">
            <div className = "inline-flex ">Charles Wong</div>
                <div className="flex flex-row px-6">
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
    );
};
export default TopBar;