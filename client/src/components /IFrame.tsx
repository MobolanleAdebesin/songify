import React from "react";

interface Props {
    id: string; 
    title: string; 
}
const IFrame: React.FC<Props> = (props: Props) => {
    let {id, title} = props 

  return (
    <iframe
    src={`https://open.spotify.com/embed/track/${id}`}
    title={`A frame containing audio for the song titled: ${title}`}
      width="100%"
      height="380"
      frameBorder="0"
      allow="encrypted-media"
    ></iframe>
  );
};

export default IFrame;
