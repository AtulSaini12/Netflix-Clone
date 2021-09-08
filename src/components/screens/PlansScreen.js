import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { doc, getDoc } from "firebase/firestore";
import db from "../../Firebase/firebase";
import "./PlansScreen.css";

export default function PlansScreen() {
  const [plans, setPlans] = useState(null);
  const [activePlan, setActivePlan] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    const getPlanData = async () => {
      const docRef = doc(db, "plans", `${user.email}`);
      const docSnapshot = await getDoc(docRef);

      setPlans(docSnapshot.data().plans);
      setActivePlan(docSnapshot.data().active);
    };

    getPlanData();

    return () => getPlanData;
  }, [plans, activePlan]);

  if (!plans) {
    return <div className="plans-screen">No Plans Available!</div>;
  }

  return (
    <div className="plans-screen">
      <div className="plans-screen-plan">
        <div className="plans-screen-info">
          <h5>{plans[0]["name"]}</h5>
          <h6>{plans[0]["description"]}</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plans-screen-plan">
        <div className="plans-screen-info">
          <h5>{plans[1]["name"]}</h5>
          <h6>{plans[1]["description"]}</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plans-screen-plan">
        <div className="plans-screen-info">
          <h5>{plans[2]["name"]}</h5>
          <h6>{plans[2]["description"]}</h6>
        </div>
        <button>Subscribe</button>
      </div>
      {/* {plans.map((i) => {
        return (
          <div className="plans-screen-plan">
            <div className="plans-screen-info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })} */}
    </div>
  );
}
