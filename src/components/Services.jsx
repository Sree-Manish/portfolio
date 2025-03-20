import React from 'react'

export default function Services() {
  return (
    <section id="Services">
        <h2 className="text-center">Services</h2>
        <div className="flex justify-center items-center w-full" style={{padding: '5vh 10vw 0vh'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] fa-3x">
            <div className="service-card">
              <div className="flex">
                <i className="fas fa-rocket fa-beat"></i>
                <h3 className="font-bold mb-4 text-2xl">High Performance</h3>
              </div>
              <p className="text-xl">I deliver optimized and efficient solutions to ensure high performance and scalability for your projects.</p>
            </div>
            <div className="service-card">
              <div className="flex">
                <i className="fas fa-clock"></i>
                <h3 className="font-bold mb-4 text-2xl">On-Time Delivery</h3>
              </div>
              <p className="text-xl">Timely project submissions with a focus on meeting deadlines without compromising quality.</p>
            </div>
            <div className="service-card">
              <div className="flex">
                <i className="fas fa-lightbulb"></i>
                <h3 className="font-bold mb-4 text-2xl">Creative Solutions</h3>
              </div>
              <p className="text-xl">Innovative and tailored solutions to meet your business needs and goals effectively.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

