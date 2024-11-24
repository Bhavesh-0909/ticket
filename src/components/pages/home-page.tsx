import React from 'react';
import { CarouselPlugin } from '@/components/top-carousel';
import { CarouselSpacing } from '../movie-carousel';

function HomePage() {
  return (
    <div className='h-full w-full flex flex-col gap-3'>
        <div className='w-full'>
            <CarouselPlugin />
        </div>
        <div className='w-full'>
            <h3>Recommended movies</h3>
            <CarouselSpacing />
        </div>
        <div className='w-full'>
            <h3>Recommended Events</h3>
            <CarouselSpacing />
        </div>
    </div>
  )
}

export default HomePage;
