import Form from "./../../../classes/Form";

export const createForm = (data, reset) => {
  return new Form(data, reset);
};

export const getDefaultColors = () => {
  return {
    hex: "#00000"
  };
};
