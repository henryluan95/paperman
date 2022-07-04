import "./Inspiration.scss";
import { db } from "../../firebase";
import useCollection from "../../hooks/useCollection";
import { collection } from "firebase/firestore";

import React from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Inspiration = () => {
  const clientRef = collection(db, "clients-photos");
  const { products: clientsPhotos, loading } = useCollection(clientRef);

  const clientPhotosEl = clientsPhotos.map((photo) => {
    return (
      <a href={photo.insta} target="_blank">
        <img
          className="inspiration__photo"
          src={photo.image}
          alt="Client's instagram photo"
          key={photo.id}
        ></img>
      </a>
    );
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="inspiration">
      <h2 className="inspiration__title">Inspired By You</h2>
      <div className="line inspiration__line"></div>
      <div className="inspiration__photos">{clientPhotosEl}</div>
    </div>
  );
};

export default Inspiration;
