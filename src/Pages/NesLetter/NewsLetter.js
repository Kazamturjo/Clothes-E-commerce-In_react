import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate email format
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setError('Please enter a valid email address.');
      return;
    }

    // Here you can implement your logic for subscribing the user
    // For demonstration purposes, we'll just set the subscribed state to true
    try {
      // Simulate API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribed(true);
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className=" px-4 py-20 relative ">
      {!subscribed ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-700 shadow-md w-full   rounded px-8 pt-6 pb-8 mb-4 transition duration-500 ease-in-out transform "
        >
          <h2 className="lg:text-2xl font-bold mb-4 font-abc  text-center shadow-2xl text-orange-500">
            Get Special Discounts In Your Inbox
          </h2>
          <p className="text-orange-400 font-abc font-semibold shadow-2xl mb-6 text-center">
            Enter email to get offers, discounts and more.
          </p>
          <div className="mb-4 flex items-center gap-11">
            <label
              className="block text-orange-400 font-abc shadow-lg lg:text-xl font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              id="email"
              className="shadow appearance-none font-abc border rounded lg:w-96 md:w-48 w-48 py-2 px-3 text-gray-700 drop-shadow-2xl bg-orange-200 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@example.com"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-orange-500 font-abc drop-shadow-lg hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              type="submit"
            >
              Subscribe
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-xs italic mt-2">{error}</p>
          )}
        </form>
      ) : (
        
        <p className="text-green-500 text-center  mx-auto container text-3xl font-abc font-semibold shadow-2xl h-11 ">Thank you for subscribing!</p>
      )}
      <div className=' lg:absolute right-10 bottom-56 '>

      
      <p className="text-center text-orange-500 font-abc font-bold">
        For any help you may call us at{' '}
        <a href="tel:+8809677666888" className="underline">
          +8809677666888
        </a>
        <br />
        Open 24 Hours a Day, 7 Days a week
      </p>
      </div>
    </div>
  );
};

export default NewsletterForm;
