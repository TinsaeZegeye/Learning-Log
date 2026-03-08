const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, reason) {
  return {
    type: "account/requestLoan",
    payload: { amount, reason },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}

export default function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;

      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.reason,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

    default:
      return state;
  }
}
