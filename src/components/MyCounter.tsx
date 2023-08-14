interface propsMyCounter {
  text: number;
}
const MyCounter = ({ text }: propsMyCounter) => (
  <span style={{ margin: 20 }}>{text >= 0 && text <= 10 ? text : "done!"}</span>
);
export default MyCounter;
