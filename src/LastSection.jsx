import "./LastSection.css";
import vector1 from "./assets/Vector (1).png";
import vector2 from "./assets/Vector (2).png";
import vector3 from './assets/Vector (3).png'
import vector4 from './assets/Vector (4).png'
import vector5 from './assets/Vector (5).png'
export default function LastSection() {
  return (
    <div className="col-12">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="lastRight">
          <p className="heading-1">Limitations of BMI</p>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="lastLeft d-flex justify-content-center flex-wrap">
          <div className="gender d-flex flex-column gap-3 shadow">
            {/* <img src={vector2} alt="" /> */}
            <h6>Gender</h6>
            <p>
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
          <div className="Age d-flex flex-column gap-3 shadow">
            {/* <img src={vector1} /> */}
            <h6>Age</h6>
            <p>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="Muscle d-flex flex-column gap-3 shadow">
            {/* <img src={vector3} alt="" /> */}
            <h6>Muscle</h6>
            <p>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
          <div className="Pregnancy d-flex flex-column gap-3 shadow">
            {/* <img src={vector4} alt="" /> */}
            <h6>Pregnancy</h6>
            <p>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="Race d-flex flex-column gap-3 shadow">
            {/* <img src={vector5} alt="" /> */}
            <h6>Race</h6>
            <p>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
