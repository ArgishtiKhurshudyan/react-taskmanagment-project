import { useEffect, useState } from "react";
import { projectfirestore } from "../firebase";
import { ACTIONS_TYPES, useBootcampContext } from "../state";

export default function useCollection(path = "/tasks") {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useBootcampContext();
  useEffect(() => {
    setIsLoading(true);
    let ref = projectfirestore.collection(path);
    let unsub;
    try {
      unsub = ref.onSnapshot((snapshot) => {
        let results = [];
        snapshot.docs.map((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        dispatch({ type: ACTIONS_TYPES.SET_TASKS, tasks: results });
        setIsLoading(false);
      });
    } catch (err) {
      throw new Error("Something went wrong");
    }
    return () => unsub();
  }, []);
  return { isLoading };
}
