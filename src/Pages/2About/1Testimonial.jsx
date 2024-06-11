import React, { useState } from 'react';
import Modal from './1Modal';
import testimonials from '../../Data/Testimonial';

function Testimonials() {
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState({ imgSrc: '', imgAlt: '', title: '', text: '', date: '' });

  const openModal = (testimonial) => {
    setModalData({
      imgSrc: testimonial.avatar,
      imgAlt: testimonial.name,
      title: testimonial.name,
      text: testimonial.text,
      date: testimonial.date
    });
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Referanslar</h3>
      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((testimonial, index) => (
          <li
            key={index}
            className="testimonials-item"
            onClick={() => openModal(testimonial)}
          >
            <div className="content-card" data-testimonials-item="">
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  data-testimonials-avatar=""
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title=""
              >
                {testimonial.name}
              </h4>
              <div className="testimonials-text" data-testimonials-text="">
                <p>{testimonial.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal active={modalActive} data={modalData} onClose={closeModal} />
    </section>
  );
}

export default Testimonials;
