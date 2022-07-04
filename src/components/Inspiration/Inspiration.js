import "./Inspiration.scss";
import { db } from "../../firebase";
import useCollection from "../../hooks/useCollection";
import { collection } from "firebase/firestore";

import React from "react";
import Loader from "../Loader/Loader";

const Inspiration = () => {
  const clientRef = collection(db, "clients-photos");
  const { products: clientsPhotos, loading } = useCollection(clientRef);

  const clientPhotosEl = clientsPhotos.map((photo) => {
    return (
      <img
        className="inspiration__photo"
        src={photo.image}
        alt="Client's instagram photo"
      ></img>
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
