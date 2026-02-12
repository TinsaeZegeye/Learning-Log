import { useState } from "react";
import "../index.css";
import Header from "./Header";
import BillInput from "./BillInput";
import ServiceRating from "./ServiceRating";
import FriendServiceRating from "./FriendServiceRating";
import Summary from "./Summary";
import Button from "./Button";

export default function App() {
  const [billAmount, setBillAmount] = useState("");
  const [serviceRating, setServiceRating] = useState(0);
  const [friendServiceRating, setFriendServiceRating] = useState(0);

  function handleBillChange(amount) {
    setBillAmount(amount);
  }

  function handleServiceRatingChange(rating) {
    setServiceRating(rating);
  }

  function handleFriendServiceRatingChange(rating) {
    setFriendServiceRating(rating);
  }

  function handleReset(){
    setServiceRating(0);
    setFriendServiceRating(0)
    setBillAmount("")
  }

  const averageTipPercent = (serviceRating + friendServiceRating) / 2;

  const tipAmount = billAmount * (averageTipPercent / 100);
  const totalAmount = billAmount + tipAmount;

  return (
    <div className="container">
      <Header />

      <BillInput billAmount={billAmount} onBillChange={handleBillChange} />

      <ServiceRating
        rating={serviceRating}
        onRatingChange={handleServiceRatingChange}
      />

      <FriendServiceRating
        rating={friendServiceRating}
        onRatingChange={handleFriendServiceRatingChange}
      />

      {billAmount > 0 && (
        <Summary
          billAmount={billAmount}
          tipAmount={tipAmount}
          totalAmount={totalAmount}
        />
      )}

      <Button onReset={handleReset} />
    </div>
  );
}
