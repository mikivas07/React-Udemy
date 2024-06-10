import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  if (!title) {
    throw new Error("El title no existe");
  }

  return (
    <>
      {/* <code>{JSON.stringify(newMessage2)}</code> */}
      {/* <h2>El Madrid tiene su champions numero {getSuma(10, 5)}</h2> */}

      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay ningun titulo",
  subTitle: "No hay subtitulo",
  name: "Miguel Vasquez",
};
