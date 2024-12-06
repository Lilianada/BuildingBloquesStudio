import React from "react";
import { Link } from "react-router-dom";

const TemplateDescription = ({ description, tools, features, url }) => {
  return (
    <div className="py-5 text-white">
      <p className="leading-normal">{description}</p>

      {features && features.length > 0 && (
        <article className="w-full my-5">
          <h3 className="text-base font-medium mb-2">Features</h3>

          {features.map((feature, i) => {
            return (
              <div key={i}>
                {feature.title !== "" && (
                  <h3 className="text-base font-medium my-5">
                    {feature.title}:{" "}
                  </h3>
                )}

                <ul className="flex gap-3 flex-col list-disc list-inside">
                  {feature.subContents.map((subContent, i) => {
                    return (
                      <li key={i} className="text-sm">
                        <span className="font-medium">
                          {subContent.heading}:{" "}
                        </span>
                        {subContent.content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
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

      <Link
        to={url}
        target="_blank"
        className="md:hidden flex gap-2 text-sm font-semibold leading-6 text-cyan-400 transition-colors duration-300 hover:text-cyan-200 cursor-pointer my-3"
      >
        Preview Project<span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  );
};

export default TemplateDescription;
