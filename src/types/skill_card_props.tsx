export type SkillCardProps = {
    icon: React.ElementType// SVG or any React component as icon
    title: string;
    description: string;

    isViewMore?: boolean; // Optional prop to indicate if the card is a "View More" card
};