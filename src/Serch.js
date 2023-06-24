import { useState } from "react";

const Search = ({searchText}) => {
    const [text ,setText] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }
    return (
        <div>
            <div className="flex justify-center w-full border-b-2 " >
                <form className="my-4 w-1/2" onSubmit={onSubmit}>
                    <input type="text" className="border-2 rounded-full w-3/4 mr-5 px-5" onChange={(e)=>setText(e.target.value)}/>
                    <button className="rounded-full bg-green-400 px-3 text-white" type="submit">search</button>
                </form>
            </div>
        </div>
    );
}
 
export default Search;