import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to study engineering in best college?
            </h2>
            <p className='text-gray-500 my-2'>
            Cosmos College Application For Entrance Examination
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSvKoyRJ6FjdXbiCrFDW2fG15o_19sO7AYRemY4b876dKXSQ/viewform" target='_blank' rel='noopener noreferrer'>
                    fill the form
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.edusanjal.com/gallery/Cosmos_college_building.jpg" />
        </div>
    </div>
  )
}