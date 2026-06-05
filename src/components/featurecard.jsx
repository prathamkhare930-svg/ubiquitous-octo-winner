export const FeatureCard = ({ emoji ,title, description }) => {
    return (
        <div className=" text-center bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto hover:scale-105
transition-all
duration-300
cursor-pointer"> 
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p>{description}</p>
            <p className="text-5xl mt-2">{emoji}</p>
        </div>
    ) }