import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        What have I created so far ?
      </h1>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://absoluuuutee.github.io/sasas/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className=" p-3 ">
              <p className="text-white font-semibold text-xl">
                🍔 dBurger: Order Your Favorite Burgers!
                </p>
                <p className="text-gray-500 text-[10px]">
                Order your favorite burgers online for quick delivery. Choose from a variety of delicious options and satisfy your cravings today!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://izzatulloh5566.github.io/Vue-Cinema/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3 ">
              <p className="text-white font-semibold text-xl">
                📷 Vue-Cinema: Your Personal Online Cinema
                </p>
                <p className="text-gray-500 text-[10px]">
                At Vue-Cinema, we offer continuous access to the exciting world of cinema, where you can enjoy your favorite movies anytime, anywhere. Our collection spans everything from the latest Hollywood blockbusters to iconic masterpieces of world cinema.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://m-box.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
              <p className="text-white font-semibold text-xl">
                🎥 M-box: Movies Website with Javascript
                  & React
                </p>
                <p className="text-gray-500 text-[10px]">
                M-box – your personal cinema right at home! We are open to all movie enthusiasts, no matter where you are. Offering a wide selection of films across various genres, from thrilling action-packed adventures to heartwarming dramas.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://izzatulloh5566.github.io/todoTsLink/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <div className="p-3">
              <p className="text-white font-semibold text-xl">
                🧾 To-Do List: Your Personal Task Organizer
                </p>
                <p className="text-gray-500 text-[10px]">
                To-Do List is your personal assistant for task management and time organization. Our application provides a streamlined platform for creating, managing, and prioritizing your tasks efficiently. Whether it is daily chores, work projects, or personal goals, To-Do List helps you stay organized and on track. With features like reminders, due dates, and categorization, managing your tasks has never been easier. Join us on To-Do List and take control of your productivity today.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <h3 className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400 text-center text-6xl pt-[25px]">
        “A step towards what you fear is a mile towards mastering it”{" "}
      </h3>
    </section>
  );
};

export default Projects;
