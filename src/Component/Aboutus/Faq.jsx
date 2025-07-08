import React from 'react';
import Tittles from '../Tittles';

const faqList = [
  {
    question: "Who is Vimal Agro Products Pvt. Ltd.?",
    answer: "Vimal Agro is a renowned manufacturer of ready-to-eat foods and agro-based products in India and across the globe.",
  },
  {
    question: "What types of products do they offer?",
    answer: "They offer a variety of food products including pickles, canned foods, chutneys, sauces, ready meals, and more.",
  },
  {
    question: "Do your products contain preservatives or additives?",
    answer: "Most of our products are prepared using traditional recipes with minimal use of preservatives, ensuring both safety and taste.",
  },
  {
    question: "What packaging formats are available?",
    answer: "We provide packaging in jars, pouches, tins, and bulk containers depending on product type and customer needs.",
  },
];

function Faq() {
  return (
    <div className='container py-5'>
      <div className='row d-flex justify-content-center align-content-center align-items-center'>
        <div className='col-12 col-lg-6 order-2 order-lg-1' data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
          <div className="h-100">
            <div className='test-shine'>
              <img
                src="https://www.vimalagro.com/wp-content/uploads/2018/03/vimal_agro_ready_food_group_images.png"
                className='img-fluid w-100 h-100 object-fit-cover'
                alt=""
              />
            </div>
          </div>
        </div>

        <div className='col-12 col-lg-6 mb-4 p-4 order-1 order-lg-2'>
          <div className="h-100">
            <div className='brdstart'>
              <Tittles stitle={"FAQs"} ltitle={"Your Laundry Queries, Answered!"} />
            </div>
            <div className='pera text-secondary mt-3 mb-4'>
              Washing your clothes with WashStrip is easy, safe, and eco-friendly. Here, you’ll find simple answers to your questions!
            </div>

            <div className="accordion accordion-flush mt-1" id="accordionFlushExample">
              {faqList.map((faq, index) => {
                const collapseId = `flush-collapse-${index}`;
                const headingId = `flush-heading-${index}`;
                const isFirst = index === 0;

                return (
                  <div className="accordion-item border-0" key={index}>
                    <h2 className="accordion-header my-2" id={headingId}>
                      <button
                        className={`accordion-button ${!isFirst ? 'collapsed' : ''} addicon text-white p-3`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? 'true' : 'false'}
                        aria-controls={collapseId}
                      >
                        <span className='fs-6 pe-3'>{faq.question}</span>
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body pera text-secondary">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
