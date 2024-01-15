
import { firestore } from "./firebase"
import { doc, getDoc,} from "firebase/firestore"
interface PromotionData {
    discountPercent: number;
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