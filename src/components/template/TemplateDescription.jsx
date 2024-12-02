import React from "react";

const TemplateDescription = ({ description, tools, features }) => {
  return (
    <div className="py-5">
      <p className="leading-normal">{description}</p>

      {features && features.length > 0 && (
        <article className="w-full my-5">
          <h3 className="text-base font-medium mb-2">Features</h3>

          <ul className="flex gap-3 flex-col list-disc list-inside">
            {features.map((feature, i) => {
              return (
                <li key={i} className="text-sm">
                  {feature}
                </li>
              );
            })}
          </ul>
        </article>
      )}

      <article className="w-full my-5">
        <h3 className="text-base font-medium mb-2">Tools</h3>

        <ul className="flex gap-3 flex-col list-disc list-inside">
          {tools.map((tool, i) => {
            return (
              <li key={i} className="text-sm">
                {tool}
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default TemplateDescription;
