import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function AccountDetail({ balance, loan }) {
  return (
    <div className="account-details">
      <FontAwesomeIcon icon={faUser} size="4x" color="#0a2f6b" />
      <div>
        <p>
          Balance: $<span>{balance}</span>
        </p>
        <p>
          Loan: $<span>{loan}</span>
        </p>
      </div>
    </div>
  );
}

export default AccountDetail;
