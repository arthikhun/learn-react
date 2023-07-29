import Layout from "../components/layout";

function Home() {
  return (
    <Layout>
      <div className="flex justify-center bg-red-400 items-center h-full">
        <div className="text-4xl">Hello World</div>
        <div className="text-2xl bg-yellow-200">Hello World22</div>
      </div>
    </Layout>
  );
}

export default Home;
