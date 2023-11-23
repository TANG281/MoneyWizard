import React from "react";
import FloatingActionButton from "../components/FloatingActionButton";
import SideBar from "../components/SideBar";
import TransactionList from "../components/TransactionList";
import { getAccountNameById, getCategoryIconById, getCategoryNameById } from "../helpers/mockhelpers";
import accounts from "../mocks/accounts";
import categories from "../mocks/categories";
import transactions from "../mocks/transactions";
import "../styles/Transactions.scss";


const Transactions = () => {
  return (
    <div className="transactions">

      <SideBar />

      <h1>List of transactions</h1>

      <h3>Placeholder for filter</h3>

      <TransactionList
        transactions={transactions}
        categories={categories}
        accounts={accounts}
        getAccountNameById={getAccountNameById}
        getCategoryIconById={getCategoryIconById}
        getCategoryNameById={getCategoryNameById}
      />

      <FloatingActionButton />

    </div>
  );
};

export default Transactions;