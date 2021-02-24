import "firebase/auth";
import "firebase/firestore";

import firebase from "firebase";

const db = firebase.firestore();

const getCurrentUser = () => {
  return firebase.auth.currentUser;
};

const uploadProfilePhoto = async (uri) => {
  const { uid } = getCurrentUser();

  try {
    const photo = await getBlob(uri);

    const imageRef = firebase.storage().ref("profilePhotos").child(uid);
    await imageRef.put(photo);

    const url = await imageRef.getDownloadURL();

    db.collection("users").doc(uid).update({
      profilePhotoUrl: url,
    });

    return url;
  } catch (error) {
    console.log("Error @uploadProfilePhoto: ", error);
  }
};

const getBlob = async (uri) => {
  return await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject(new TypeError("Network request failed."));
    };

    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
};

const register = async (userInfo) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    const { uid } = getCurrentUser();

    let profilePhotoUrl = "default";

    db.collection("users").doc(uid).set({
      email: userInfo.email,
      passowrd: userInfo.password,
      profilePhotoUrl,
    });

    if (userInfo.profilePhoto)
      profilePhotoUrl = await uploadProfilePhoto(userInfo.profilePhoto);

    delete userInfo.password;

    return { ...userInfo, profilePhotoUrl, uid };
  } catch (error) {
    console.log("Error @register: ", error.meaages);
  }
};

export default { register };
