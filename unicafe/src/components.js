

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatLine = ({ text, val }) => (
  <tr>
    <td>{text}</td>
    <td>{val + (text === 'positive' ? '%' : '')}</td>
  </tr>
);

const Stats = (props) => {
  const { good, ok, bad } = props.data;
  const all = good + ok + bad;
  const avg = Math.round(((good - bad) / all) * 100) / 100;
  const pctPos = Math.round(((good * 100) / all) * 100) / 100;

  if (all === 0) return <span>No feedback given</span>;

  return (
    <>
      <table>
        <tbody>
          <StatLine text="good" val={good} />
          <StatLine text="neutral" val={ok} />
          <StatLine text="bad" val={bad} />
          <StatLine text="all" val={all} />
          <StatLine text="average" val={avg} />
          <StatLine text="positive" val={pctPos} />
        </tbody>
      </table>
    </>
  );
};

export { Button, Stats };
