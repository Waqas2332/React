function Counter(props) {
  console.log("This is counter component");
  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
}
export default Counter;
