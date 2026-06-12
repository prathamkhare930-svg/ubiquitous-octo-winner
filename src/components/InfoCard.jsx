 export const InfoCard = (props) => {
    return (
        <div className="bg-gray-700 p-4 rounded-xl mt-4">
      <h3 className="text-gray-300 font-semibold">
        {props.title}
      </h3>

      <p className="text-white text-lg mt-2">
        {props.value}
      </p>
    </div>
    );
};