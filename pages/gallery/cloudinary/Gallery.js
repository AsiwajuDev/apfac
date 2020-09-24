import React from 'react';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

const Gallery = ({images}) => {
    return (
       
        <CloudinaryContext cloudName="dxwzdkhyb" className="grid grid-cols-12 gap-6 sm:gap-8 mt-5">
            {
                images && images.map(data => {
                    return (
                        
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y" key={data.public_id}>
                            <div className="border-2 border-red-600 mb-3 hover:shadow">
                                <a target="_blank" href={`https://res.cloudinary.com/dxwzdkhyb/image/upload/${data.public_id}.jpg`}>
                                    <Image publicId={data.public_id}>
                                        <Transformation
                                            crop="scale"
                                            width="300"
                                            height="300"
                                            dpr="auto"
                                            responsive_placeholder="blank"
                                        />
                                    </Image>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </CloudinaryContext>
        
    );
}

export default Gallery;