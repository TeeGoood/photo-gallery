import Card from "./Card.js";
import { useState, useEffect } from "react";
import Search from "./Serch.js";

function App() {
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [term , setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then( res => res.json())
            .then( data => {
                setImages(data.hits);
                setIsLoading(false);

            })
            .catch( err => console.log(err.message));
    },[term]);


  return (
      <div className="max-w-5xl mx-auto">
        <Search searchText={(text) => setTerm(text)} />
        
        {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }
        
        <div className="grid grid-cols-3 gap-4">
          {isLoading ? <div className="font-4xl">Loading...</div> : images.map(image => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      </div>
  );
}

export default App;
