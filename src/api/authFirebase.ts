import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail} from "firebase/auth"
import { auth, firestore, googleProvider } from "./firebase"
import { doc, getDoc } from "firebase/firestore"
import firebase from "firebase/compat/app"
import { error } from "console"

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
        const token = await user.getIdToken()
        localStorage.setItem('token', token)
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
        setResetEmailError('Error sending password reset email');
        throw error;
      });
  };
