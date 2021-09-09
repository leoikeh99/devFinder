import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Result from "./components/Result";
import userData from "./userData.json";
import NoResult from "./components/NoResult";
import Spinner from "./components/Spinner";

function App() {
  const [theme, setTheme] = useState(localStorage.theme);
  const [user, setUser] = useState(userData);
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.add("transition");
    document
      .querySelectorAll("p")
      .forEach((p) => p.classList.add("transition"));
    document
      .querySelectorAll("div")
      .forEach((p) => p.classList.add("transition"));
    if (localStorage.theme === "light") {
      document.body.classList.add("bg-bg1");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.body.classList.add("bg-bg1_d");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  });

  const getUser = () => {
    if (name.trim() !== "") {
      fetch(`https://api.github.com/users/${name}`).then(async (res) => {
        setError(null);
        setLoader(true);
        const data = await res.json();
        setLoader(null);
        if (!data.message) {
          setUser(data);
        } else {
          setError(true);
          setLoader(null);
        }
      });
    }
  };
  return (
    <div className="font-spaceMono">
      <main className="w-11/12 screen1:w-card m-auto mt-12 mb-10">
        <Header theme={theme} setTheme={setTheme} />
        <SearchInput
          theme={theme}
          name={name}
          setName={setName}
          getUser={getUser}
        />
        {error ? (
          <NoResult />
        ) : !loader ? (
          <Result theme={theme} user={user} />
        ) : (
          <Spinner />
        )}
      </main>
    </div>
  );
}

export default App;
