import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, createUserWithEmailAndPassword, signOut} from "firebase/auth"
import { auth, firestore, googleProvider } from "./firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { loggoutUser, loginUser, userInfo } from "@/store/authSlice"
import { store } from "@/store/store"

export const fetchUserData = async (userId: string) => {
  const usersDocRef = doc(firestore, 'users', userId)
  const userData = (await getDoc(usersDocRef)).data()
  return userData
}

export const signInWithEmail = (
    email: string,
    password: string,
    setLoginErrors: (n: string) => void,
    setIsLoggedIn: (n: boolean) => void
  ) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then(async ({ user }) => {
        localStorage.setItem('token', user.uid)
        store.dispatch(loginUser(user.uid))
        setIsLoggedIn(true)
    })
    .catch(({ code }) => {
      switch (code) {
        case 'auth/user-not-found':
          setLoginErrors('Invalid login or password')
          break
        case 'auth/wrong-password':
          setLoginErrors('Invalid login or password')
          break
        case 'auth/network-request-failed':
          setLoginErrors('Network connection issue during authentication')
          break
        case 'auth/too-many-requests':
          setLoginErrors('Too many login attempts in a short period, the account has been locked.')
          break
        case 'auth/user-disabled':
          setLoginErrors('User account has been disabled by the administrator')
          break
        case 'auth/invalid-credential':
          setLoginErrors('The provided authentication credentials are incorrect')
          break
        default:
          setLoginErrors('Oops... something went wrong.')
      }
   })
  }

  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      localStorage.setItem('token', user.uid)
      const usersDocRef = doc(firestore, 'users', user.uid);
      const userData = await getDoc(usersDocRef);
      store.dispatch(loginUser(userData))
      if(!userData.exists()){
        await setDoc(usersDocRef, {
          id: user.uid,
          name: user.displayName || '',
          email: user.email || ''
        })
      }
      console.log('Zalogowano przez Google:', user);
      return user;
    } catch (error) {
      console.error('Błąd logowania przez Google:', error);
      throw error;
    }
  };
  
  export const forgetPassword = (email: string, setResetEmailSent: (n: boolean) => void, setResetEmailError: (error: string) => void) => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetEmailSent(true);
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
        if (error.code === 'auth/user-not-found') {
          setResetEmailError('Nie ma konta z takim adresem email');
        } else {
          setResetEmailError('Error sending password reset email');
        }
        throw error;
      });
  };
  


export const signUpWithEmail = (name: string, email: string, phoneNu: string, password: string, setLoginErrors: (n: string) => void,) => {
  return createUserWithEmailAndPassword(auth, email, password)
  .then(async({user}) => {
    const usersDocRef = doc(firestore, 'users', user.uid);
    await setDoc(usersDocRef, {id: user.uid, name, email, phoneNu})
    return user
  })
  .catch((code) => {
    switch (code){
      case 'auth/weak-password':
        setLoginErrors('The password is too weak. Please choose a stronger password.')
      case 'auth/email-already-in-use':
        setLoginErrors('Email is already in use. Please choose another email.')
    }
  })
}

export const signOutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('token');
    store.dispatch(loggoutUser());
    console.log('Użytkownik został wylogowany');
  } catch (error) {
    console.error('Błąd podczas wylogowywania:', error);
    throw error;
  }
};