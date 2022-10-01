import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ onToggleModal, onSetImgModal, imgList }) => {
  return (
    <ul className={s.gallery}>
      {imgList.map(({ id, webformatURL, largeImageURL, tags }) => (
        //   <li className={s.item} key={id}>
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          modalImg={largeImageURL}
          alt={tags}
          width="240"
          onToggleMod={onToggleModal}
          onSetImgMod={onSetImgModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onToggleModal: PropTypes.func,
  onSetImgModal: PropTypes.func,
  imgList: PropTypes.array.isRequired,
};

export default ImageGallery;
