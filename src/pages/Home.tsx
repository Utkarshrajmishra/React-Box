import { useState } from "react";
import SearchBox from "../components/SearchBox";
import AvatarCircles from "../components/magicui/avatar-circles";
import Card from "../components/Card";
import { Snippets } from "../constants/Snippets";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const Home = () => {
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle the search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter snippets based on search query
  const filteredSnippets = Snippets.filter((snippet) =>
    snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
      <div>
        <main className="font-inter w-full md:px-[20%] px-[10%] mt-14">
          <div className="">
            <h1 className="text-5xl font-bold">React Snippets Box</h1>
            <p className="text-zinc-700 font-inter mt-5">
              🚀 Ace your next{" "}
              <span className="p-1 outline-1 outline-zinc-200 outline  bg-zinc-100 font-bold text-zinc-600">
                React Machine Coding Interview
              </span>{" "}
              with ease.
            </p>
            <p className="mt-8 text-zinc-600">
              Explore a collection of <b>machine coding challenges</b> solutions
              that can help to refine your <b>problem-solving skills</b>, and 🧩
              build the confidence to tackle your next{" "}
              <b>React coding interview</b> with ease.
            </p>
          </div>
          <div className="mt-5">
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
          </div>
        </main>
        <section className="md:px-[20%] px-[10%] mt-16 font-inter">
          <p className="text-3xl font-bold">Coding Problems</p>
          <p className="mt-3 text-zinc-600">
            <b>Essential machine coding problems</b>
            commonly featured in <b>ReactJS interviews</b> 💻, paired with
            <b> versatile snippet</b>
            🔧 ready to be <b>seamlessly integrated</b> into your projects ✨.
          </p>

          <SearchBox onSearch={handleSearch} />
        </section>

        <section className="md:px-[20%] px-[10%] grid md:grid-cols-2 grid-cols-1 mt-6 gap-4 mb-8">
          {filteredSnippets?.map((items) => (
            <div key={items.id}>
              <Card title={items.title} content={items.content} link={items.link}/>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Home;
