import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// useEffect(() => {
//   setIsLoading(true);
//   let unsub = projectfirestore.collection("/tasks").onSnapshot((snapshot) => {
//     let results = [];
//     snapshot.docs.map((doc) => {
//       results.push({ id: doc.id, ...doc.data() });
//     });
//     dispatch({ type: ACTIONS_TYPES.SET_TASKS, tasks: results });
//     setIsLoading(false);
//   });

//   return () => unsub();
// }, []);

// const openModal = () => {
//   dispatch({ type: ACTIONS_TYPES.OPEN_MODAL });
// };

// const deleteTask = (id) => {
//   projectfirestore.collection("/tasks").doc(id).delete();
// };

// const editTask = (id) => {
//   projectfirestore
//     .collection("/tasks")
//     .doc(id)
//     .update({ title: "tes Ashot jan" });
// };
