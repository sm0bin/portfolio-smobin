
const Points = ({ icon, field, value }) => {
    const IconComponent = icon;
    return (
        <div className="flex items-center gap-4">
            <figure className="p-4 bg-secondary/40 rounded-md">
                {IconComponent && <IconComponent className="text-2xl" />}
            </figure>
            <div>
                <h3 className="font-bold text-2xl text-secondary">{field}</h3>
                <p className="font-medium text-lg">{value}</p>
            </div>
        </div>


    );
};

export default Points;