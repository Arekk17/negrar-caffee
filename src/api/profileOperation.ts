import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export const editUserData = async (userId: string, newData: { [key: string]: any }) => {
    try {
        const usersDocRef = doc(firestore, 'users', userId);
        await updateDoc(usersDocRef, newData);
        console.log('User data updated successfully');
      } catch (error) {
        console.error('Error updating user data:', error);
        throw error;
      }
    
}