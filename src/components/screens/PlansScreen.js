import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import db from "../../Firebase/firebase";
import {loadStripe} from '@stripe/stripe-js';
import "./PlansScreen.css";

export default function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(()=>{
        db.collection('products')
          .where('active', '==', true)
          .get().then((querySnapshot)=>{
              const products = [];
              querySnapshot.forEach(async productDoc => {
                  products(productDoc.id) = productDoc.data();
                  const priceSnap = await productDoc.ref.collection('prices').get();
                  priceSnap.docs.forEach(price => {
                      products(productDoc.id).prices = {
                          priceId : price.id,
                          priceData : price.data(),
                      }
                  })
              })
              setProducts(products);
          });
    },[]);
    
    const loadCheckout = async (priceId) =>{
        const docRef = await db.collection('customers').doc(user.uid).collection("checkout_sessions").add({
            price: priceId,
            succes_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        docRef.onSnapshot(async (snap) =>{
            const {error, sessionID} = snap.data();

            if(error){
                alert(`An error Occurred: ${error.message}`);
            }

            if(sessionID){
                const stripe = await loadStripe()
            }
        })

    }

    return (
    <div className="plans-screen" >
        {Object.entries(products).map(({productId, productData}) =>{
            return (
                <div className="plans-screen-plan">
                    <div className="plans-screen-info">
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <Button onClick={() => loadCheckout(productData.prices.priceId)} >Subscribe</Button>
                </div>
            );
             } )}
    </div>
  );
}
