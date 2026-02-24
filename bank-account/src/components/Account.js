import { useReducer } from "react";
import AccountDetail from "./AccountDetail";
import AccountActions from "./AccountActions";

const initialState = {
  balance: 1000,
  loan: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      if (action.payload > state.balance) return state;
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "getLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "payLoan":
      if (state.loan === 0 || state.balance < state.loan) return state;
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case "deleteAccount":
      if (state.balance !== 0 || state.loan !== 0) return state;
      return {
        balance: 0,
        loan: 0,
      };
    default:
      return state;
  }
}

function Account() {
  const [{ balance, loan }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="account">
      <AccountDetail balance={balance} loan={loan} />
      <AccountActions dispatch={dispatch} balance={balance} loan={loan} />
    </div>
  );
}

export default Account;
