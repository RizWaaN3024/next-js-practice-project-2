import React from 'react'
import DevImg from './DevImg'

const About = () => {
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='h2 flex justify-center mt-40'>About Me</h2>
            <div className='flex'>
              {/* Image */}
              <div className='hidden md:flex flex-1 relative border rounded-xl'>
                    <DevImg containerStyles={`rounded-[50%] w-[400px] h-[400px] bg-no-repeat relative`} imgSrc='/MyImage.jpg' />
                </div>
                <div>
                  About Section
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ad quam accusantium velit alias sapiente fuga porro et vel! Unde delectus beatae, velit facere distinctio mollitia. Tenetur sit atque perferendis exercitationem molestias, eveniet accusantium sunt explicabo architecto maxime ullam tempore facilis a fugit blanditiis ab velit, eos rem reiciendis dolorem omnis adipisci sequi. Doloremque officia odit minus repellendus dolorem asperiores nemo quidem provident aliquid distinctio labore esse corrupti pariatur veritatis, voluptatem a ipsam quaerat maiores explicabo laboriosam ipsa. Autem, officia? Ut veritatis adipisci iure dolore rerum inventore vel id beatae nisi! Sint laborum aspernatur quidem? Autem error magnam ipsum corporis?
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default About
