
export type ButtonType = {
  name: string;
  reached: boolean;
  onClick: () => void;
};

const Button = (props: ButtonType) => {
  const onClickHandler = () => {
    props.onClick();
  };

  return (
    <div>
      <button className={"buttons"} disabled={props.reached} onClick={onClickHandler}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
