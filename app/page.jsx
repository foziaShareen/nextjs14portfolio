import Image from 'next/image'


export default function Home() {

  return (
  
   <div className='h-full flex flex-col'>
    <div className='h-1/2 flex flex-col relative'>
      <Image src="/profile.png" fill className='object-contain'/>
    </div>
    <div className='h-1/2 flex flex-col gap-6 items-center justify-center'>
      <h1 className='text-5xl font-bold'>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam eveniet,
         quod et soluta delectus consequuntur.</p>
         <div className=' flex gap-4'>
          <button className='  rounded-lg p-2 ring-1'>Get Started</button>
          <button className=' rounded-lg  p-2 ring-1'>View Profile</button>
         </div>
    </div>
   </div>



    
  ); 
}
