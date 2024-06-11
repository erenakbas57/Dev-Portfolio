import React from "react";

function Modal({ active, data, onClose }) {
  return (
    <div
      className={`modal-container ${active ? "active" : ""}`}
      data-modal-container=""
    >
      <div
        className={`overlay ${active ? "active" : ""}`}
        data-overlay=""
        onClick={onClose}
      ></div>
      <section className="testimonials-modal">
        <button
          className="modal-close-btn"
          data-modal-close-btn=""
          onClick={onClose}
        >
          <ion-icon name="close-outline" />
        </button>
        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src={data.imgSrc}
              alt={data.imgAlt}
              width={80}
              data-modal-img=""
            />
          </figure>
          <img src="./assets/images/icon-quote.svg" alt="quote icon" />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title="">
            {data.title}
          </h4>
          <time dateTime={data.date}>{data.date}</time>
          <div data-modal-text="">
            <p>{data.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Modal;
