import React, {useState, useEffect, useRef} from 'react'

const BackToTop = () => {
	const [show, setShowButton] = useState(false);
	const backToTop = useRef(false);

useEffect(() => {
	window.addEventListener("scroll", toggleBreakpoints);
	if (show) {
		backToTop.current.classList.add('showbtt');
	}
	else {
		backToTop.current.classList.remove('showbtt');
	}
	return () => {
		window.removeEventListener("scroll", toggleBreakpoints);
	}
},[show]);

const toggleBreakpoints = () => {
	const scroll = document.documentElement.scrollTop;
	if (scroll > 800){
		setShowButton(true);
	}
	else {
		setShowButton(false);
	}
}

	const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
		setTimeout(toggleBreakpoints, 1000);
  };

	return (
		<button id="backToTop" ref={backToTop} onClick={scrollToTop}>
		</button>
	)
}

export default BackToTop;
