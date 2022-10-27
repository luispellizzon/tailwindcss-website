function GetStartButton({ hidden = false, reverse = false }) {
  return (
    <a
      href=""
      className={`${hidden ? "hidden" : ""} ${
        reverse
          ? "bg-white text-brightRed shadow-xl hover:bg-gray-300"
          : "bg-brightRed text-white hover:bg-brightRedLight"
      } p-3 px-6 text-white bg-brightRed rounded-full  md:inline-block`}
    >
      Get Started
    </a>
  );
}

export default GetStartButton;
