import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "My Project 1",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/yei-learn.png",
    link: "https://My Project 1.org/",
    github: "https://github.com/aslam/My Project 1",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "My Project 2",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/yei-learn.png",
    link: "https://My Project 2.co/",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
  {
    id: 2,
    title: "My Project 3",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/yei-learn.png",
    link: "https://react-emoji-search.aslam.vercel.app/",
    github: "https://github.com/aslam/react-emoji-search",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 3,
    title: "BitcoinTemp",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/bitcointemp.png",
    link: "https://bitcointemp.com",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Create HTML Boilerplate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/static/projects/create-html-boilerplate.png",
    github: "https://github.com/aslam/create-html-boilerplate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/8ball-rust.png",
    github: "https://github.com/aslam/8ball-rust",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 6,
    title: "DontLeaveMe 😭",
    desc: "Beg for users to stay on your website.",
    img: "/static/projects/dontleaveme.png",
    link: "https://github.com/aslam/dontleaveme/",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/aslam/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects