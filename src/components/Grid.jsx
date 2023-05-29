import Cell from './Cell';

function Grid() {
    return (
        <div className='w-fit h-auto m-auto border-[0.05px] border-[#243c5a] justify-center items-center mt-4'>
           {Array.from({ length: 30 }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex">
                {Array.from({ length: 50 }).map((_, colIndex) => (
                    <Cell key={colIndex} />
                ))}
                </div>
            ))}
        </div>  
    );
}

export default Grid;