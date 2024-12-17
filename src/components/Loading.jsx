import ContentLoader, { Instagram } from "react-content-loader";
const Loading = () => {
  return (
    <div className="w-11/12 mx-auto   flex flex-col items-center justify-center space-y-6">
      {/* Custom Loader */}
      <Instagram
       backgroundColor="#D72050"
       foregroundColor="#ecebeb"
       width={1000}
       height={600} />
    </div>
  );
};

export default Loading;
