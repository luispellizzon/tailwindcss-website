import Person1 from "../assets/img/avatar-anisha.png";
import Person2 from "../assets/img/avatar-anisha.png";
import Person3 from "../assets/img/avatar-anisha.png";

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold">What Our Customers Say </h2>
        <div className="container flex flex-col mx-auto mt-24 md:flex-row md:space-x-6">
          {/* Testimonial */}
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
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
