import { onSnapshot } from "firebase/firestore";

const useFirebase = () => {
  //Create a function to fetch data from a db using a db ref

  const getProducts = (docRef) => {
    onSnapshot(docRef, (snapshot) => {
      const fetchedProducts = [];
      snapshot.docs.forEach((doc) =>
        fetchedProducts.push({ ...doc.data(), id: doc.id })
      );
      //sort data
      fetchedProducts.sort((a, b) => (a.title - b.title ? 1 : -1));
      return fetchedProducts;
    });
  };

  return { getProducts };
};

export default useFirebase;
