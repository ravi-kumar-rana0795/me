import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SkillCardProps = {
    icon: IconDefinition,
    skillName: string
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, skillName }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-2 flex flex-col justify-center items-center m-2 
            transition-all duration-200
            hover:shadow-xl
            hover:-translate-y-1
            hover:bg-blue-50
            cursor-pointer">
            <div className="flex flex-row">
                <FontAwesomeIcon icon={icon} size="2x" color='#1f5886' />
            </div>
            <div className="flex flex-row justify-center">
                <h3 className="text-[#1f5886] text-center">{skillName}</h3>
            </div>
        </div>
    );
}

export default SkillCard;