import "./NotFound.css"
// import image from "../images/girl_.jpg"
function NotFound() {
    return(
        <div className="NotFound-container">
            <div className="inner_container">
                {/* <img src="https://img.freepik.com/free-photo/medium-shot-little-girl-with-food_23-2151061757.jpg?t=st=1756621719~exp=1756625319~hmac=d3b894c49f1963336ca69f12306cf495e6bff9244bb30a4bda896339f63a22be&w=1480" alt="Page Not Found" className="notfound"/> */}
                {/* <img src="https://img.freepik.com/free-photo/portrait-sad-young-student-getting-bullied-school_23-2151395724.jpg?t=st=1756622350~exp=1756625950~hmac=553064c56d917c23fc2a643d6330cd1db6c6b6687b96e3294bf48b3fd85cc415&w=1480" alt="Page Not Found" className="notfound"/> */}
                <div className="sub_container">
                    <h1 className="fof">404</h1>
                    <h3 className="nftext">Page Not Found</h3>
                    <p>This page wandered off. Let’s get you back on track!</p>
                    <a href='./' ><button>Go Back Home</button></a>
                </div>
                {/* <img src={image}/> */}
            </div>
        </div>
    )
}
export default NotFound