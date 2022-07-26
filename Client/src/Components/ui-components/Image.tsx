import React  from "react";
import { IImageProps } from "../../utils/interfaces";

  Image.defaultProps = {
    defaultImage: "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
    height: 100,
    width: 100
  }

export function Image(props: IImageProps) {
    const {src} = props;
    const { defaultImage} = Image.defaultProps;
    return ( 
    <>
      <img src={src ? src : defaultImage} alt={defaultImage} height={props.height} width={props.width}/>
    </>
    )
}

