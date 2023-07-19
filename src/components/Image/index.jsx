import ImageComponent from "next/image";

const Image = ({
  alt = "",
  src = "",
  className = "",
  container,
  lg,
  md,
  xs,
  ...rest
}) => (
  <ImageComponent
    {...{ alt, src, className, container, lg, md, xs, ...rest }}
  />
);

export default Image;
