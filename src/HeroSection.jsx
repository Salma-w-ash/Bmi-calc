import "./HeroSection.css";
export default function HeroSection() {
  return (
    <div className="col-12">
      <div className="container d-flex justify-content-center align-items-center mx-2">
        <div className="left-content">
          <div className="left d-flex flex-column justify-content-center align-items-center gap-3 ml-4 mt-5">
            <h1>Body Mass Index Calculator</h1>
            <p>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
        </div>
        <div className="right p-4 d-flex flex-column  gap-4 shadow">
          <h4>Enter your details below</h4>
          <div className="radio d-flex  align-items-center">
            <div className="radio-one">
              <input type="radio" name="system" checked />
              <label htmlFor="metric" id="metrec">
                Metric
              </label>
            </div>
            <div className="radio-two">
              <input type="radio" name="system" />
              <label htmlFor="imperial" id="imperiall">
                Imperial
              </label>
            </div>
          </div>

          <div className="labelz d-flex ">
            <p>Height</p>
            <p>Weight</p>
          </div>
          <div className="inputs d-flex justify-content-between gap-3">
            <input className="form-control" type="number" placeholder="0CM" />
            <input className="form-control" type="number" placeholder="0KG" />
          </div>
          <div className="result d-flex align-items-center">
            <div className="bmi d-flex flex-column gap-2 p-3">
              <p>Your BMI is...</p>
              <h3>23.4</h3>
            </div>
            <p>
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between 63.3kgs - 85.2kgs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
