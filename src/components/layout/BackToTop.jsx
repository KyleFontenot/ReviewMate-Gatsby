import React, {useState, useEffect} from 'react'

const BackToTop = () => {
const [show, changeState] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }



	window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
		if (scroll > 800){
			changeState(true);
		}
		else {
			changeState(false);
		}
});

	return (
		<a href="#mainLogo" className={show ? "showbtt" : ''} id="backToTop" onClick={() => {document.scroll = document.scrollTop}}>

		</a>
	)
}

export default BackToTop;
