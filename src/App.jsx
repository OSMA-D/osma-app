import { useState } from "react";

function App() {
  const [signup, setSignup] = useState(true);

  return (
    <div className="flex flex-col font-sans container mx-auto px-4 text-center text-slate-300">
      <div className="bg-slate-500 rounded-full uppercase m-4 hover:bg-gray-700">
        osma app in developing...
      </div>
    </div>
  );
}

export default App;
