import "./index.css";
import gptLogo from "./assets/chatgpt.svg";
import add from "./assets/add-30.png";
import msg from "./assets/message.svg";
import home from "./assets/home.svg";
import save from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

const App = () => {
  return (
    <div id="App" className="flex min-h-screen">
      <div
        id="sidebar"
        className="w-3/12 border-r-2 border-solid border-gray-400"
      >
        <div id="upperSide" className="flex cursor-pointer">
          <img src={gptLogo} alt="" className="m-5 mr-3 ml-6" />
          <span className="mt-9 font-bold ">ChatGPT</span>
        </div>

        <div id="middleSide" className="m-3 flex items-center justify-center">
          <button className="flex h-12 items-center justify-center bg-purple-600 rounded-md p-2 w-60 ">
            <img src={add} alt="" className="h-[18px] w-[18px] mr-2" />
            New Chat
          </button>
        </div>

        <div
          id="lowerMiddle"
          className="flex flex-col items-center justify-center "
        >
          <button className="m-3 mt-4 border p-2 rounded-md flex w-60 h-full ">
            <img src={msg} alt="" className="mr-4" />
            What is programming fundamentals ?
          </button>
          <button className="m-3 mt-0 border p-2 rounded-md flex w-60 h-full">
            <img src={msg} alt="" className="mr-4" />
            How to use API ?
          </button>
        </div>

        <div id="lowerSide" className="mt-56 border-t-2 flex flex-col">
          <div className="flex mt-7 ml-10 cursor-pointer">
            <img src={home} alt="" className="mr-4 h-[18px] w-[18px]" />
            <span>Home</span>
          </div>
          <div className="flex mt-6 ml-10 cursor-pointer">
            <img src={save} alt="" className="mr-4 h-[18px] w-[18px]" />
            <span>Saved</span>
          </div>
          <div className="flex mt-6 ml-10 cursor-pointer">
            <img src={rocket} alt="" className="mr-4 h-[18px] w-[18px]" />
            <span>Upgraded to Pro</span>
          </div>
        </div>
      </div>
      <div
        id="main"
        className="h-full w-9/12 min-h-screen flex flex-col items-center justify-center mr-40 ml-40 "
      >
        <div id="chats">
          <div id="user" className="flex items-center mb-10 ml-6">
            <img src={userIcon} className="h-[40px] w-[40px] rounded-md mr-4" />{" "}
            Lorem ipsum dolor sit amet.
          </div>
          <div id="chat" className="flex p-7 bg-gray-800 rounded-lg ">
            <img
              src={gptImgLogo}
              alt=""
              className="h-[40px] w-[40px] rounded-md mr-4"
            />{" "}
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A, doloremque placeat aperiam sequi cum recusandae
            similique quaerat perferendis labore incidunt vero quisquam
            distinctio officiis neque adipisci? Neque, sed! Sed, minus eligendi
            vero quidem quibusdam quis ipsam dolor corrupti itaque asperiores
            repudiandae enim, architecto corporis, autem culpa natus blanditiis
            placeat! Qui ad ipsum maxime facilis debitis dolor totam deleniti
            doloribus saepe ducimus dignissimos, nobis officia quod reiciendis
            assumenda earum nemo laudantium adipisci praesentium dolorum
            inventore fuga. Ullam exuta quidem
            voluptatem voluptatibus ratione pariatur dolorum odio accusamus!
            Esse odio possimus quam ratione nihil voluptatum ut facilis rerum
            qui asperiores repellat soluta delectus beatae maxime eaque sequi,
            modi dignissimos, perspiciatis laborum autem aperiam cupiditate
            voluptate iure? Magni ea distinctio pariatur iure quibusdam, fuga
            expedita perferendis eaque ullam laboriosam, incidunt qui quo!
            Consectetur magnam voluptas exercitationem enim facere soluta error
            eos qui dolores dolorum eius natus molestiae possimus nihil
            recusandae voluptatum tenetur debitis mollitia porro totam, omnis
            quia. Quas, ratione modi? Atque non eius magni culpa. Distinctio
            officiis architecto placeat ea! Perferendis, inventore harum id amet
            maxime exercitationem iste sint ad non molestiae accusantium
            repudiandae numquam vel cupiditate enim quam. Dicta, ratione
            tenetur! Vel consectetur porro vero laudantium ut debitis accusamus
            nesciunt, quia dolor et. Expedita beatae officiis aliquid odio qui
            consequatur.
          </div>
        </div>
        <div id="chatFooter"  className="flex p-4 w-full mt-20 bg-gray-800 rounded-lg">
          <div id="input" className="flex w-full justify-between">
            <input type="text" placeholder="Send a message" className="bg-gray-800" />
            <button id="send">
              {" "}
              <img src={sendBtn} alt="" />
            </button>
          </div>
        </div>
          <div id="footer" >
            <p>ChatGPT can make mistakes. Consider checking important information.</p>
          </div>
      </div>
    </div>
  );
};

export default App;
