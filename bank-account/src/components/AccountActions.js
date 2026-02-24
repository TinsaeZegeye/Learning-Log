import Action from "./Action";

function AccountActions({ dispatch, balance, loan }) {
  function handleDeposit() {
    const amount = Number(prompt("Enter deposit amount"));
    if (amount > 0) dispatch({ type: "deposit", payload: amount });
  }

  function handleWithdraw() {
    const amount = Number(prompt("Enter withdraw amount"));
    if (amount > 0) dispatch({ type: "withdraw", payload: amount });
  }

  function handleGetLoan() {
    const amount = Number(prompt("Enter loan amount"));
    if (amount > 0) dispatch({ type: "getLoan", payload: amount });
  }

  function handlePayLoan() {
    dispatch({ type: "payLoan" });
  }

  function handleDelete() {
    dispatch({ type: "deleteAccount" });
  }

  return (
    <div className="account-actions">
      <Action text="Deposit" onClick={handleDeposit} />
      <Action text="Withdraw" onClick={handleWithdraw} />
      <Action text="Get Loan" onClick={handleGetLoan} />
      <Action text="Pay Loan" onClick={handlePayLoan} disabled={loan === 0} />
      <Action
        text="Delete Account"
        onClick={handleDelete}
        disabled={balance !== 0 || loan !== 0}
      />
    </div>
  );
}

export default AccountActions;
