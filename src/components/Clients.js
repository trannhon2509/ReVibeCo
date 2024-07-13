import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


const Clients = () => {
  useEffect(() => {
    // Initialize Swiper here if needed
  }, []);

  return (
    <section className="section__container client__container">
      <div className="client__content">
        <h2 className="section__header">What our happy clients say</h2>
        <p className="section__description">
          Testimonials Highlighting Our Commitment to Quality, Exceptional
          Service, and Customer Satisfaction
        </p>
        <Swiper>
          <SwiperSlide>
            <div className="client__card">
              <img src="assets/user-1.jpg" alt="user" />
              <div>
                <p>
                  Furni.shop transformed my living space with their beautiful
                  and affordable furniture. The 5% cashback was a delightful
                  bonus!
                </p>
                <h4>David Miller</h4>
                <h5>Real Estate Agent</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <img src="assets/user-2.jpg" alt="user" />
              <div>
                <p>
                  Exceptional quality and service! The furniture is stunning,
                  and the 30-day payment terms made it incredibly convenient.
                </p>
                <h4>Mark Zucker</h4>
                <h5>Financial Advisor</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <img src="assets/user-3.jpg" alt="user" />
              <div>
                <p>
                  Furni.shop offers unbeatable prices for top-notch furniture.
                  My home feels more luxurious, thanks to their amazing
                  products!
                </p>
                <h4>Alex Maxin</h4>
                <h5>Entrepreneur</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
