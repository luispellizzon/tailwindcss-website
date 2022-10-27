function GetStartButton({ hidden }) {
  return (
    <a
      href=""
      className={
        hidden
          ? "hidden md:block p-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
          : "md:block p-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
      }
    >
      Get Started
    </a>
  );
}

export default GetStartButton;
