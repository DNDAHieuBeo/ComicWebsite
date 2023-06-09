import React from 'react';

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-60 right-4  rounded-full focus:outline-none z-20"
    >
      <img className='w-16' src='./ScrollUpButton.png'/>
    </button>
  );
}

export default ScrollToTopButton;
