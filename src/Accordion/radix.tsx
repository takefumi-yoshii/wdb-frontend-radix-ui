import * as Accordion from '@radix-ui/react-accordion';
import { contents } from "./contents";

const AccordionSection = ({
	value,
	title,
	content,
}: {
	value: string;
	title: string;
	content: string;
}) => (
	<Accordion.Item
		value={value}
		className="AccordionItem"
	>
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger className="AccordionTrigger">
				{title}
			</Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content className="AccordionContent">
			<div className="AccordionContentText">
				{content}
			</div>
		</Accordion.Content>
	</Accordion.Item>
);
const AccordionComponent = () => (
	<Accordion.Root
		type="single"
		defaultValue="item-1"
		collapsible
	>
		{contents.map((content) => (
			<AccordionSection
				key={content.id}
				value={content.id}
				title={content.title}
				content={content.content}
			/>
		))}
	</Accordion.Root>
);
export default AccordionComponent;
