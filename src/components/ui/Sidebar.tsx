import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion';
import { Checkbox } from './Checkbox';

const filterData = [
  {
    label: "Public",
    value: "public",
    options: [
      { label: "true", value: true },
      { label: "false", value: false },
    ],
  },
  {
    label: "Active",
    value: "active",
    options: [
      { label: "true", value: true },
      { label: "false", value: false },
    ],
  },
  {
    label: "School Level",
    value: "regions",
    options: [
      { label: "ES", value: "ES" },
      { label: "MS", value: "MS" },
      { label: "HS", value: "HS" },
    ],
  },
  {
    label: "Subject Area",
    value: "tags",
    options: [
      { label: "Math", value: "math" },
      { label: "Science", value: "science" },
      { label: "Literature", value: "literature" },
      { label: "History", value: "history" },
    ],
  },
];

const Sidebar = () => {

  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2 text-lg font-bold">Filter</div>
        <div className="col-span-4 text-lg font-bold">Button</div>
      </div>
      <div className="accordionForFilter mt-4">
        <Accordion type="single" collapsible className="w-full">
          {filterData.map((field, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{field.label}</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    {field.options && (
                      <div className="mt-4 ml-4 grid grid-cols-1 gap-2">
                        {field.options.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center space-x-2">
                            <Checkbox
                              id={`option_${optIndex}`}
                            />
                            <label
                              htmlFor={`option_${optIndex}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-end text-sm text-gray-500">
                    Count
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Sidebar;
