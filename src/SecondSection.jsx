import photo from "../assets/photo.png";
import "./SecondSection.css";
export default function SecondSection() {
  return (
    <div className="col-12">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={photo} />

        <div className="right2 d-flex flex-column justify-content-center gap-3">
          <h2>What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    </div>
  );
}
