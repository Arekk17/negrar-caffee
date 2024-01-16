
import { firestore } from "./firebase"
import { collection, doc, getDoc, setDoc,} from "firebase/firestore"
interface PromotionData {
    discountPercent: number;
  }
  
export const makeOrder = ( userId: any, userData: any, orderData: any ) => {
    const orderCollection = collection(firestore, 'order')
    const combinateData = {
        userData:{
            userId: userId,
            ...userData,
        },
        ...orderData,
    }
    return setDoc(doc(orderCollection), combinateData)
    .then(() => {
        console.log('zamowienie zostało złozone')
    })
    .catch((error: any) => {
        console.log('bład złozenia zamowienia', error)
    })
}
export const checkPromotion = (promoCode: string, originalPrice: number) => {
    const promoDocRef = doc(firestore, 'promotion', promoCode)
    return getDoc(promoDocRef)
    .then((promoSnapshot) => {
        if(!promoSnapshot.exists()){
            throw new Error('Promotion code is invalid')
        }
    
        const promoData = promoSnapshot.data() as PromotionData;
        const discountedPrice = originalPrice - (originalPrice * (promoData.discountPercent / 100));
        return discountedPrice;
    })
}