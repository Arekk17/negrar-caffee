import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./firebase"

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
    })
  }