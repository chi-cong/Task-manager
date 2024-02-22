import "./RoundBarButton.css";

export const RoundBarButton = ({ clickFunc }) => {
  return (
    <button
      onClick={() => {
        if (clickFunc) {
          clickFunc();
        }
      }}
      className='round-bar-button'
    >
      Login
    </button>
  );
};
