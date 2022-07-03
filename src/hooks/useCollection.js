import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

//Create a hook to get products
const useCollection = (colRef) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Using async function to set loading state
    const fetchProducts = async () => {
      try {
        const unsubscribe = onSnapshot(colRef, (snapshot) => {
          const tempProducts = [];
          snapshot.docs.forEach((doc) => {
            tempProducts.push({ ...doc.data(), id: doc.id });
          });
          setProducts(
            tempProducts.sort((productA, productB) =>
              productA.title - productB.title ? 1 : -1
            )
          );
        });
        return () => unsubscribe();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return { products, loading };
};

export default useCollection;
