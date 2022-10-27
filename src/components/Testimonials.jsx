import Person1 from "../assets/img/avatar-anisha.png";
import Person2 from "../assets/img/avatar-richard.png";
import Person3 from "../assets/img/avatar-ali.png";
import GetStartButton from "./GetStartButton";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold">What Our Customers Say </h2>
        <div className="container flex flex-col mx-auto space-y-12 mt-24 mb-10 md:flex-row md:space-x-6 md:space-y-0">
          {/* Testimonial 1*/}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-brightRedSupLight relative md:w-1/3">
            <img src={Person1} alt="" className="absolute w-16 -top-8" />
            <h5 className="text-lg font-bold">Anisha Lee</h5>
            <blockquote className="text-sm text-darkGrayishBlue">
              <q>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                ipsam fugiat ipsum inventore quasi voluptatibus illo sunt
                commodi blanditiis ea.
              </q>
            </blockquote>
          </div>
          {/* Add REACT SLIDER LATER */}
          {/* Testimonial 2*/}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-brightRedSupLight relative md:flex md:w-1/3">
            <img src={Person2} alt="" className="absolute w-16 -top-8" />
            <h5 className="text-lg font-bold">Richard Bravo</h5>
            <blockquote className="text-sm text-darkGrayishBlue">
              <q>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                ipsam fugiat ipsum inventore quasi voluptatibus illo sunt
                commodi blanditiis ea.
              </q>
            </blockquote>
          </div>
          {/* Testimonial 3*/}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-brightRedSupLight relative md:flex md:w-1/3">
            <img src={Person3} alt="" className="absolute w-16 -top-8" />
            <h5 className="text-lg font-bold">Ali Culey</h5>
            <blockquote className="text-sm text-darkGrayishBlue">
              <q>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                ipsam fugiat ipsum inventore quasi voluptatibus illo sunt
                commodi blanditiis ea.
              </q>
            </blockquote>
          </div>
        </div>
        <GetStartButton />
      </div>
    </section>
  );
}

export default Testimonials;
