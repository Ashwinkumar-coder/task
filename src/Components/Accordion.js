import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import accordionData from '../data/accordionData.json';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="accordionExample">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index ? 'true' : 'false'}
              aria-controls={`collapse${index}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
