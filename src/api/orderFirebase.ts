
import { Order } from "@/types/orderTypes";
import { firestore } from "./firebase"
import { collection, doc, getDoc, setDoc,query, where, getDocs,} from "firebase/firestore"
import { User } from "@/types/userTypes";
import { clearBasket } from "@/store/shopSlice";
import { store } from "@/store/store";
interface PromotionData {
    discountPercent: number;
  }
  
export const makeOrder = ( userId: any, userData: User, orderData: Order, setMakeOrder: any ) => {
    const orderCollection = collection(firestore, 'order')
    const combinateData = {
        userData:{
            userId: userId,
            ...userData,
        },
        orderData:{
            ...orderData,
        }
    }
    return setDoc(doc(orderCollection), combinateData)
    .then(() => {
        setMakeOrder(`Zamowienie o nr: ${orderData.orderNumber} zostało przyjete do realizacji`)
        store.dispatch(clearBasket())
    })
    .catch((error: any) => {
        setMakeOrder('bład złozenia zamowienia')
        console.error(error)
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


export const fetchAllOrdersFromId = (userId: string) => {
    const ordersCollection = collection(firestore, "order");
    const ordersQuery = query(ordersCollection, where("userData.userId", "==", userId));
    return getDocs(ordersQuery)
      .then((querySnapshot) => {
        const orders: Order[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.orderData) {
            orders.push(data.orderData);
          }
        });
        return orders;
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        throw new Error('Error fetching orders');
      });
  };