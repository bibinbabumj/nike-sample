const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex justify-center gap-2 px-7 py-4 font-montserrat text-lg leading-none
    rounded-full text-white bg-coral-red"
    >
      {label}

      {/* {iconURL != null ? (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      ) : (
        null
      )} */}

      
      {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
