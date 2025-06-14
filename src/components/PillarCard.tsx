import "./component-styles/PillarCard.css";

type PillarCardProps = {
    image: string;
    tag?: string;
    title: string;
    description: string;
    tagIcon?: string;
    tagHighlight?: string;
};

const PillarCard = ({ image, tag, title, description, tagIcon, tagHighlight }: PillarCardProps) => (
    <div className="pillar-card">
        <div className="pillar-card-image-wrapper">
            <img src={image} alt={title} className="pillar-card-image" />
            {tag && (
                <div className="pillar-card-image-overlay">
                    {tagIcon && <img src={tagIcon} alt="" className="pillar-card-tag-icon" />}
                    {tagHighlight}<span className="tag">{tag}</span>
                </div>
            )}
        </div>
        <div className="pillar-card-content">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

export default PillarCard;
