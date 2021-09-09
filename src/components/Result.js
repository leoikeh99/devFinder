import React from "react";
import moment from "moment";
import loc from "../images/icon-location.svg";
import twitterIcon from "../images/icon-twitter.svg";
import webIcon from "../images/icon-website.svg";
import companyIcon from "../images/icon-company.svg";
import loc_d from "../images/icon-location-d.svg";
import twitterIcon_d from "../images/icon-twitter-d.svg";
import webIcon_d from "../images/icon-website-d.svg";
import companyIcon_d from "../images/icon-company-d.svg";

const Result = ({
  user: {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  },
  theme,
}) => {
  return (
    <div className="flex gap-7 p-6 screen2:p-10 bg-bg2 dark:bg-bg2_d rounded-xl shadow-input dark:shadow-none w-full">
      <img
        className="w-28 h-28 rounded-full hidden screen1:block"
        src={avatar_url}
        alt=""
      />
      <div className="flex-grow">
        <div className="screen1:block flex gap-3 items-center">
          <img
            className="h-20 w-20 screen2:w-28 screen2:h-28 rounded-full screen1:hidden block"
            src={avatar_url}
            alt=""
          />
          <div className="screen1:flex justify-between">
            <div>
              <p className="text-base screen2:text-2xl text-text1 dark:text-text1_d font-bold leading-3">
                {name}
              </p>
              <a
                className="text-sm screen2:text-base text-primary dark:text-primary_d mb"
                href="">
                @{login}
              </a>
            </div>
            <p className="text-sm screen2:text-base text-text2 dark:text-text2_d mt-1">
              Joined {moment(created_at).format("ll")}
            </p>
          </div>
        </div>
        <p
          className={
            "text-sm screen2:text-base mt-5 text-text2 dark:text-text2_d" +
            ` ${!bio && " opacity-70"}`
          }>
          {bio ? bio : "This Profile has no bio"}
        </p>
        <ul className="mt-7 flex gap-0 screen2:gap-20 bg-bg1 dark:bg-bg1_d rounded-xl py-4 px-6 justify-around screen1:justify-start transition">
          <li className="text-center screen2:text-left">
            <p className="text-text2 dark:text-text2_d text-xs screen2:text-sm">
              Repos
            </p>
            <p className="text-text1 dark:text-text1_d text-base screen2:text-lg font-bold">
              {public_repos}
            </p>
          </li>
          <li className="text-center screen2:text-left">
            <p className="text-text2 dark:text-text2_d text-xs screen2:text-sm">
              Followers
            </p>
            <p className="text-text1 dark:text-text1_d text-base screen2:text-lg font-bold">
              {followers}
            </p>
          </li>
          <li className="text-center screen2:text-left">
            <p className="text-text2 dark:text-text2_d text-xs screen2:text-sm">
              Following
            </p>
            <p className="text-text1 dark:text-text1_d text-base screen2:text-lg font-bold">
              {following}
            </p>
          </li>
        </ul>

        <ul className="grid grid-cols-1 screen2:grid-cols-2 gap-y-3 gap-x-2 mt-7 transition">
          <li
            className={
              "flex gap-3 items-center text-text2 dark:text-text2_d" +
              ` ${!location && " opacity-50"}`
            }>
            <img src={theme === "light" ? loc : loc_d} alt="" />
            <p className="text-sm screen2:text-base">
              {location ? location : "Not Available"}
            </p>
          </li>
          <li
            className={
              "flex gap-3 items-center text-text2 dark:text-text2_d" +
              ` ${!twitter_username && " opacity-50"}`
            }>
            <img src={theme === "light" ? twitterIcon : twitterIcon_d} alt="" />
            <p className="text-sm screen2:text-base">
              {twitter_username ? twitter_username : "Not Available"}
            </p>
          </li>
          <li>
            <a
              className={
                "flex gap-3 items-center text-text2 dark:text-text2_d text-sm screen2:text-base hover:underline" +
                ` ${!blog && " opacity-50"}`
              }
              href={blog && `https://${blog}`}
              target="_blank">
              <img
                className="fill-current"
                src={theme === "light" ? webIcon : webIcon_d}
                alt=""
              />
              <p>{blog ? blog.substr(0, 17) : "Not Available"}</p>
            </a>
          </li>
          <li
            className={
              "flex gap-3 items-center text-text2 dark:text-text2_d" +
              ` ${!company && " opacity-50"}`
            }>
            <img
              className="text-text2_d"
              src={theme === "light" ? companyIcon : companyIcon_d}
              alt=""
            />
            <p className="text-sm screen2:text-base">
              {company ? company : "Not Available"}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Result;
