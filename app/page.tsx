import Todo from "./components/todo/Todo";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-slate-100">
      <h2 className="text-3xl mt-10">To Do List'e Hoş Geldin</h2>
      <Todo />
    </div>
  );
};

export default Page;
