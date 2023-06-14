
const SectionTitle = ({heading}) => {
    return (
        <div className="md:w-1/2 mx-auto">
            <h3 className="uppercase mb-5 text-3xl text-blue-500 font-semibold text-center border-y-4 py-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;