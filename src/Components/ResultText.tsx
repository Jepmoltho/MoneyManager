interface ResultGreeting {
  beginningText: string;
  calculation: number;
  endText?: string;
}

export default function ResultText(props: ResultGreeting) {
  return (
    <h2>
      {props.beginningText} {props.calculation} {props.endText}
    </h2>
  );
}
