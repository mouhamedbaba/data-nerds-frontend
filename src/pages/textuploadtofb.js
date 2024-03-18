import { add_image_url, get_imag_urls } from '@/repository/repository';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const Upload = () => {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState("");

    const get_images = async () => {
        const data = await get_imag_urls();
        setImages(data);
    }

    const hadleSubmit = async (e) => {
        e.preventDefault();
        console.log("file", file);
        const data = await add_image_url(file);
    }

    useEffect(() => {
        get_images();
    }, []);

    return (
        <div className=''>
            <form onSubmit={hadleSubmit}>
                <div className="w-full">
                    <label aria-controls='dropzone-file' htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Cliquez pour télécharger</span> ou faites glisser et déposez</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden"  onChange={(e) => setFile(e.target.files[0])} />
                    </label>
                </div> 
                <button className='bg-blue-500 rounded-sm px-4 py-2' type="submit">Télécharger</button>
            </form>
            <div className='mt-2 flex gap-3 mx-auto'>
                {images.map((image) => {
                    return (
                        <div className='col-4' key={image.id}>
                            <img className='h-40 w-40' src={image.url} key={image.id} alt={image.id}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
