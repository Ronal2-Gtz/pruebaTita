interface StatBarProps {
    label: string;
    value: number;
    color: string;
}

export const StatBar = ({ label, value, color, }: StatBarProps) => {    
    return (
        <div className="flex items-center">
            <span className="text-sm font-bold w-12 text-right border-r border-gray-300 pr-2" style={{ color }}>
                {label}
            </span>
            <span className="text-sm w-8 text-right ml-2 mr-4 text-gray-700">
                {String(value).padStart(3, '0')}
            </span>
            <div className="grow bg-gray-200 rounded-full h-2">
                <div 
                    className="h-2 rounded-full" 
                    style={{ 
                        backgroundColor: color, 
                        width: `${value}%` 
                    }}
                />
            </div>
        </div>
    );
};