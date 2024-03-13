import React from 'react';

const TierCard = ({ image, description, price }) => {
  return (
    <div className="flex border border-black rounded-[20px] w-full pr-8">
      <img src={image} alt="Card Image" className="object-cover max-w-xs 2xl:max-w-xl" />
      <div className="flex items-center">
        <p className="text-xs 2xl:text-base font-medium px-6 text-black text-center">{description}</p>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700">{`${price}`}</p>
          <button className="bg-black text-white px-20 py-2 rounded-lg mt-2">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default TierCard;
