function FeatureSection() {
  return (
    <div className="section" id="feature">
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* What's Different Div */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="text-darkGrayishBlue text-center max-w-sm md:text-left">
            Manage provides all the functionality your team needs without the
            complexity. Our software is tailor-made for modern digital products
            teams.
          </p>
        </div>
        {/* Number List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-12">
            <div className="rounded-l-full bg-brightRedSupLight mb-3 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <p className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  1
                </p>
                <h3 className="text-base font-bold md:text-lg">
                  Track company-wide progress
                </h3>
              </div>
            </div>
            <p className="text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              repellat excepturi voluptatem, doloremque expedita esse debitis
              ipsa cumque dolor aliquid!
            </p>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-12">
            <div className="rounded-l-full bg-brightRedSupLight mb-3 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <p className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  2
                </p>
                <h3 className="text-base font-bold md:text-lg">
                  Advanced built-in reports
                </h3>
              </div>
            </div>
            <p className="text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              repellat excepturi voluptatem, doloremque expedita esse debitis
              ipsa cumque dolor aliquid!
            </p>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-12">
            <div className="rounded-l-full bg-brightRedSupLight mb-3 md:bg-transparent">
              <div className="flex items-center space-x-2">
                <p className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  3
                </p>
                <h3 className="text-base font-bold md:text-lg">
                  Everything you need in one place
                </h3>
              </div>
            </div>
            <p className="text-darkGrayishBlue">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              repellat excepturi voluptatem, doloremque expedita esse debitis
              ipsa cumque dolor aliquid!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
