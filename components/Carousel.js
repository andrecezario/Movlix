import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsChevronLeft,
    BsChevronRight
} from 'react-icons/bs';

import Card from '../components/Card2';

export default function CarouselItems({ items = [], title = '', infinite = false, autoPlay = false }) {
    const CustomRight = ({ onClick }) => (
        <button
            className="justify-center items-center absolute top-1/2 -right-4 focus:outline-none"
            onClick={onClick}>
            <BsChevronCompactRight size="48" color="white" />
        </button>
    );
    const CustomLeft = ({ onClick }) => (
        <button
            className="justify-center items-center absolute top-1/2 -left-4 focus:outline-none"
            onClick={onClick}>
            <BsChevronCompactLeft size="48" color="white" />
        </button>
    );

    return (
        items?.length && (
            <div className="w-full p-4">
                <p className="text-2xl text-white font-bold ml-2 mb-2">{title}</p>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={2000}
                    autoPlay={autoPlay}
                    className="relative w-full"
                    customRightArrow={<CustomRight />}
                    customLeftArrow={<CustomLeft />}
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={infinite}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1280
                            },
                            items: 7,
                            partialVisibilityGutter: 40
                        },
                        desktop2: {
                            breakpoint: {
                                max: 1280,
                                min: 1024
                            },
                            items: 5,
                            partialVisibilityGutter: 40
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 768
                            },
                            items: 4,
                            partialVisibilityGutter: 30
                        },
                        tablet2: {
                            breakpoint: {
                                max: 768,
                                min: 600
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 600,
                                min: 400
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 400,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable>
                    {items?.map((item) => (
                        <div className="flex items-center justify-center" key={item.id}>
                            <Card item={item} />
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    );
}
