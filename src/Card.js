import { useState } from "react";
import { useEffect } from "react";
import gigachad from "./image/gigachad.jpg"

const Card = ({image}) => {
    const tags = image.tags.split(',')

    return (
        <div className="max-w-sm shadow-lg rounded overflow-hidden">
            <img src={image.webformatURL} className="w-full"/>
            <div className="px-6 py-4">
                <h2 className="text-xl mb-2 font-bold text-purple-500">Photo by {image.user}</h2>
                <ul>
                    <li>
                        <strong>Views: </strong> {image.views}
                    </li>
                    <li>
                        <strong>Download: </strong>{image.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong> {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
 
export default Card;