


import PropTypes from 'prop-types';

const Card = ({ title, description, imageUrl, styles }) => {
  return (
    <div className=" bg-orange-500 rounded-lg shadow-lg  w-36">
      <h1 className="text-lg text-center font-bold mb-2"></h1>
      <div className="p-4">
        <img
          src={imageUrl}
          alt={title}
          className={`${styles} w-screen h-28 object-cover rounded-md`}
        />
        
        <h2 className="text-xl  mt-4">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <button id='learnMore' className="mt-4 px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-500 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default Card;
