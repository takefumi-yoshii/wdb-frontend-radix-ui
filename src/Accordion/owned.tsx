import { useState } from "react";
import { contents } from "./contents";

const AccordionSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </button>
      {isOpen && <div>{content}</div>}
    </div>
  );
};
const AccordionComponent = () => (
  <div>
    {contents.map((content) => (
      <AccordionSection
        key={content.id}
        title={content.title}
        content={content.content}
      />
    ))}
  </div>
);
export default AccordionComponent;
