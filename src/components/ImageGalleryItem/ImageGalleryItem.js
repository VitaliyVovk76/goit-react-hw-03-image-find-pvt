import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, alt, onToggleMod }) => {
  return <img className={s.image} src={src} alt={alt} onClick={onToggleMod} />;
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onToggleMod: PropTypes.func,
};

export default ImageGalleryItem;
