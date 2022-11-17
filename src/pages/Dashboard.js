import React from "react";
import { UserPurchaseHistory } from "../components/Table";
import purchaseHis from "../data/purchaseHistoryData.json";

const Dashboard = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Product Name</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>

      <tbody>
        {purchaseHis.purchase.map((item) => {
          return (
            <tr key={item.id}>
              <UserPurchaseHistory {...item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Dashboard;
