import './ThirdSection.css'
export default function ThirdSection(){
    return (
      <div className="content col-12 col-md-4">
        <div className="container d-flex justify-content-center align-items-center gap-5 mx-4">
          <div className="one d-flex flex-column gap-3">
            <div className="circle1"></div>
            <h6>Healthy eating</h6>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
          <div className="two d-flex flex-column gap-3">
            <div className="circle2"></div>
            <h6>Regular exercise</h6>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
          <div className="three d-flex flex-column gap-3">
            <div className="circle3"></div>
            <h6>Adequate sleep</h6>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    );
}