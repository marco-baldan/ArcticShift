"use client";

import { FC, ReactNode, useState } from 'react';

interface SubStep {
  title: string;
  description: string;
}

interface ProcessStep {
  icon: ReactNode; 
  title: string;
  description: string;
  subSteps?: SubStep[];
}

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

const ProcessSection: FC<ProcessSectionProps> = ({ title, steps }) => {
  const [activeStep, setActiveStep] = useState<ProcessStep | null>(null);

  const openModal = (step: ProcessStep) => {
    setActiveStep(step);
  };

  const closeModal = () => {
    setActiveStep(null);
  };

  return (
    <section className="bg-base-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">{title}</h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between">
          <div className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-full md:h-0.5 w-0.5 md:w-full bg-primary md:top-8 hidden md:block"></div>

          {/* Timeline Steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative w-full md:w-1/4 flex flex-col md:items-center text-left md:text-center my-8 md:my-0 px-4 md:px-0 transition duration-300 hover:scale-105 hover:bg-opacity-10 rounded-lg"
            >
              {/* Step Icon with Hover Effect */}
              <div className="z-10 flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 hover:scale-110 transition">
                {step.icon}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{step.description}</p>

                {/* View Details Button */}
                <button
                  onClick={() => openModal(step)}
                  className="btn btn-outline btn-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DaisyUI Modal for Active Step */}
        {activeStep && (
          <div className={`modal modal-open`}>
            <div className="modal-box relative bg-base-200 shadow-xl">
              <button onClick={closeModal} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
              <h3 className="text-2xl font-bold text-primary mb-4">{activeStep.title}</h3>
              <p className="text-gray-700 mb-6">{activeStep.description}</p>
              <div className="space-y-4">
                {activeStep.subSteps?.map((subStep, index) => (
                  <div key={index} className="bg-base-100 p-4 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-accent">{subStep.title}</h4>
                    <p className="text-gray-600">{subStep.description}</p>
                  </div>
                ))}
              </div>
              <div className="modal-action">
                <button onClick={closeModal} className="btn btn-primary">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessSection;
