import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const date = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}년</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__date">{date}</div>
    </div>
  );
}

export default ExpenseDate;
