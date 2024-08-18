import NavBar from "../components/NavBar"
import AvatarCircles from "../components/magicui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];



const Home =()=>{
    return (
      <section>
        <div>
          <NavBar />
          <main className="font-inter w-full md:px-[20%] px-[10%] mt-14">
            <div className="">
              <h1 className="text-5xl font-bold">React Box Snippets</h1>
              <p className="text-zinc-700 font-inter mt-5">
                🚀 Ace your next
                <span className="p-1 ml-1 bg-zinc-100 font-bold text-zinc-600">
                  React Machine Coding Interview
                </span>{" "}
                with ease.
              </p>
              <p className="mt-8 text-zinc-600">
                Explore a collection of machine coding challenges solution that
                can help to refine your problem-solving skills, and build the
                confidence to tackle your next React coding interview with ease.
              </p>
            </div>
            <div className="mt-5">
              <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            </div>
          </main>
        </div>
      </section>
    );
}

export default Home