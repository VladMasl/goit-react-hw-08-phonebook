import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#f0581a"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#f1806b"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;