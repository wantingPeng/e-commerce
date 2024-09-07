import { signInWithGoogelPopup } from "../utils/firebase";
const Authentication = () => {
  const logGoogelUser = async () => {
    const response = await signInWithGoogelPopup(); //whenever call to database, always be asynchronous
    console.log(response);
  };
  return (
    <div>
      <h1>Authentication page</h1>
      <button onClick={logGoogelUser}> sign in with googel popup</button>
    </div>
  );
};

export default Authentication;
