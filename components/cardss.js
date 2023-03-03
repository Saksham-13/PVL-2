// card component returns a gray card
export default function Cardss(props) {
    return(
        <div className="bg-gray-100 rounded-xl w-full shadow-lg p-4">
            <div className=" flex justify-between   text-gray-400 truncate">
            <div className="font-bold text-md">Finance</div>
            <div className="font-bold text-sm hover:underline">Know more &gt;</div>
            </div>
            <div className="font-bold text-xl my-4 flex  ">
                <div className="text-[#3B81F6] mr-4">
                    {props.name}
                </div>
                 
                <div className="text-[#21C55D]">
                    {props.number}
                </div>
            </div>
        {/* a green button of full width */}
            <div className="bg-[#21C55D] text-white text-sm font-bold rounded text-center  py-2 px-4 w-full">Tag a job</div>
        {/* a purple bordered button with purple text inside which is transparent but become purple on hover and text becomes white the text inside should be "employees enrolled and should be wrapped in a div" */}
            <div className="border-[#ac5af4] hover:text-gray-100 text-[#ac5af4] hover:bg-[#ac5af4] border-2 text-sm font-bold rounded text-center  py-2 px-4 w-full my-4">Employees enrolled</div>
        {/* a gray button with content width */}
            <div className="bg-gray-200 hover:bg-gray-300 text-gray-500 text-sm f rounded text-center    w-fit md:py-4 px-10">Assign Certificates</div>
        </div>
    )

}
