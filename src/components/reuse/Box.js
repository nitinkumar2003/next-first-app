"use client"
import React from 'react';
import Image from 'next/image';
import ImageBox from '../../../public/Images/Img1.png';
import currencyExchangeImage from '../../../public/Images/currency.jpg'
import { useRouter } from 'next/navigation';


const Box = ({data}) => {
    const {image,id,route}=data;
    console.log('data',data)
    const router = useRouter()

    const handleRoute = () => {

        router.push(route)
    }
    return (
        <>
            <div className="h-96 w-full sm:w-96 md:w-96 lg:w-96 m-4 relative cursor-pointer" onClick={() => handleRoute()}>
                <Image src={image} sizes="100vw" style={{ width: '100%', height: '100%', }} />
                <div class="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity" />
            </div>
        </>
    )
}

export default Box