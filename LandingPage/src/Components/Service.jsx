import React from 'react'
import Card from './Card'
import userExperience from './assets/userExperience.jpeg'
import announcement from './assets/announcement.png'
import Programmer from './assets/programmer.jpeg'
import creativeDesign from './assets/creative-design.png'
import customerSatisfaction from './assets/customer.jpeg'
import Public from './assets/review.jpg'
function Service() {
  return (
    <section>
        <div>
            <h2 className='font-bold text-3xl p-10'>Our Services</h2>

            <div className='text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 w-96 h-1 pl-4 ml-8'>g</div>
        </div>

        <div className='flex flex-wrap justify-center gap-24 p-4'>
  <Card 
    mainImage={userExperience}
    mainText="User Experience" 
    secondaryImage={announcement} 
    secondaryImageText="announcement"
    text='User Experience'
  />

  <Card 
    mainImage={Programmer}
    mainText="Programmer" 
    secondaryImage={creativeDesign} 
    secondaryImageText="creativeDesign"
    text='Creative Design'
  />
  
  <Card 
    mainImage={customerSatisfaction}
    mainText="Customer Satisfaction" 
    secondaryImage={Public} 
    secondaryImageText="Public"
    text='Customer Satisfaction'
  />
</div>

    </section>
  )
}

export default Service
