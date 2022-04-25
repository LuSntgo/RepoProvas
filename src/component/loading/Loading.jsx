import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <>
      <ThreeDots
        type="ThreeDots"
        color="#883100"
        arialLabel="loading-indicator"
        width={60}
      />
    </>
  );
};
export default Loading;
