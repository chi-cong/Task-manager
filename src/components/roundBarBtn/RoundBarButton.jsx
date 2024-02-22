import "./RoundBarButton.css";

export const RoundBarButton = ({ clickFunc }) => {
  return (
    <button
      onClick={() => {
        clickFunc();
      }}
      className='round-bar-button'
    >
      Login
    </button>
  );
};
