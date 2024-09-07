import { signInWithGoogelPopup, creatUserDocFromAuth } from "../utils/firebase"; //in firebase have 3 export, so when we import here don't forget destructure first

const Authentication = () => {
  const logGoogelUser = async () => {
    /*    const response = await signInWithGoogelPopup(); //whenever call to database, always be asynchronous
    console.log(response); //displayName: "Wanting Peng",email: "wantingpeng.mia@gmail.com",emailVerified: true
    //user: Object { providerId: "firebase", uid: "gtKcz8zR1sb6ybQ8Y6zyRxaBos72", accessToken: ..............
 */
    const { user } = await signInWithGoogelPopup(); // cauese we only need the uid in user obj in response
    console.log(user); //displayName,email, uid
    const userDocRef = await creatUserDocFromAuth(user); //got Userdata from firestore so awaite
  };
  return (
    <div>
      <h1>Authentication page</h1>
      <button onClick={logGoogelUser}> sign in with googel popup</button>
    </div>
  );
};

export default Authentication;
