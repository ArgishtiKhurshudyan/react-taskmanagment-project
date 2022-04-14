import { useEffect, useState } from "react";
import { projectfirestore } from "../firebase";
import { ACTIONS_TYPES } from "../state";

export default function useFireStore() {
  const getCollection = async (path, setIsLoading) => {
    setIsLoading(true);
    return projectfirestore
      .collection(path)
      .get()
      .then((snapshot) => {
        let results = [];
        snapshot.docs.map((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        return results;
      });
  };
  const addDoc = async (path, data) => {
    return projectfirestore.collection(path).add(data);
  };
  const editDoc = async (path, data) => {
    const { id, ...param } = data;
    return projectfirestore.collection(path).doc(id).update(param);
  };
  const deleteDoc = async (path, id) => {
    return projectfirestore.collection(path).doc(id).delete();
  };

  return { getCollection, addDoc, editDoc, deleteDoc };
}
