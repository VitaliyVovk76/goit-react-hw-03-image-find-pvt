import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ modalImg, src, alt, onToggleMod, onSetImgMod }) => {
  return (
    <li
      className={s.item}
      onClick={() => {
        onSetImgMod(modalImg, alt);
      }}
    >
      <img className={s.image} src={src} alt={alt} onClick={onToggleMod} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  modalImg: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onToggleMod: PropTypes.func,
  onSetImgMod: PropTypes.func,
};

export default ImageGalleryItem;
