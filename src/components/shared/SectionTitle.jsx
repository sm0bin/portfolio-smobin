const SectionTitle = ({ title, subTitle }) => {
    return (
        <>
            <h4 className="font-medium text-xl text-center mb-1">{subTitle}</h4>
            <h2 className="font-head text-3xl text-center text-secondary mb-12">{title}</h2>

        </>
    );
};

export default SectionTitle;