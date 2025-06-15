import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
const PhotoUpload = ({ photo }) => {
  const cld = new Cloudinary({ cloud: { cloudName: "dgv0tczin" } });

  const img = cld
    .image(photo)
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return <AdvancedImage cldImg={img} />;
};

export default PhotoUpload;
