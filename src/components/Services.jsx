import React from 'react'

export default function Services() {
  return (
    <section id="Services">
        <h2 className="text-center">Services</h2>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] fa-2x">
            <div className="service-card">
              <div className="flex">
                <i className="fas fa-rocket fa-beat"></i>
                <h3 className="font mb-4 text-2xl">High Performance</h3>
              </div>
              <p className="text-[1.1rem]">I deliver optimized and efficient solutions to ensure high performance and scalability for your projects.</p>
            </div>
            <div className="service-card">
              <div className="flex">
                <i className="fas fa-clock"></i>
                <h3 className="font mb-4 text-2xl">On-Time Delivery</h3>
              </div>
              <p className="text-[1.1rem]">Timely project submissions with a focus on meeting deadlines without compromising quality.</p>
            </div>
            <div className="service-card">
              <div className="flex">
                <i className="fas fa-lightbulb"></i>
                <h3 className="font mb-4 text-2xl">Creative Solutions</h3>
              </div>
              <p className="text-[1.1rem] text-[rgb(94, 96, 206)]">Innovative and tailored solutions to meet your business needs and goals effectively.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

