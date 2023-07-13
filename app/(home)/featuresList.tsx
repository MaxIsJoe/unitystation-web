import React from 'react';
import {IconType} from "react-icons";

export type FeatureData = {
    title: string;
    description: string;
    icon: IconType,
    imageUrl: string;
}

interface FeaturesListProps{
    features: FeatureData[];
}

type FeatureCardProps = {
    feature: FeatureData;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
    const { title, description, icon: Icon } = feature;

    return (
        <div className="flex flex-col space-y-2 p-4 bg-gray-900 rounded-xl shadow-md max-w-sm my-2 h-full">
            <div className="flex space-x-2 items-start mb-4">
                <div className="mt-1">
                    <Icon size={24} color="#10b981" />
                </div>
                <div>
                    <h2 className="font-semibold text-lg text-gray-200">{title}</h2>
                    <p className="text-sm text-gray-300 mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}


const FeaturesList = ({ features }: FeaturesListProps) => {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-2 items-stretch justify-center">
            {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
            ))}
        </div>
    );
}

export default FeaturesList;
