import React, { useEffect, useState } from "react";
import Headline from "../../../components/Headline";
import ShowData from "../../../components/ShowData";
import { FaEdit, FaUser } from "react-icons/fa";
import logofacebook from "../../../assets/facebook.svg";
import logoinstagram from "../../../assets/instagram.svg";
import logolinkedin from "../../../assets/linkedin.svg";
import logogithub from "../../../assets/github.svg";
import logoyoutube from "../../../assets/youtube.svg";
import logoweb from "../../../assets/web.svg";
import logocodeforces from "../../../assets/codeforces.svg";
import logocodechef from "../../../assets/codechef.svg";
import logoleetcode from "../../../assets/leetcode.svg";
import logohackerrank from "../../../assets/hackerrank.svg";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import usePrivateFetch from "../../../hooks/fetch/usePrivateFetch";
import LoadingPage from "../../Shared/LoadingPage";
import SMCP from "../../../utility/iconname";
import GetIcon from "../../../utility/icons";

const PersonalInfo = ({ info, setStudentData }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isBioActive, setIsBioActive] = useState(false);

  const handleBioUpdate = () => {
    setIsBioActive(true);
  };
  const updateDescription = (e) => {
    e.preventDefault();
    const newDescription = e.target.description.value;
    const updatedData = {
      "personal.about": newDescription,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(
          `/students/updateStudent?email=${user?.email}`,
          updatedData
        );

        Swal.fire({
          title: "Updated!",
          text: "Your info has been updated.",
          icon: "success",
        });
      }
    });
    setIsBioActive(false);
  };
  // if (loading) {
  //   return <LoadingPage />;
  // }
  return (
    <div>
      <Headline>Personal Information</Headline>
      {
        <section className="pt-5 flex flex-col lg:flex-row gap-5">
          {/* left side  */}
          <div className="lg:w-[60%] ">
            <div className="flex flex-col lg:flex-row  lg:items-center">
              <div className="max-size-[400px] w-full rounded-lg">
                <img
                  data-aos="zoom-in-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="p-10 max-size[400px] rounded-lg"
                  src={
                    info?.personal?.photo
                      ? info?.personal?.photo
                      : user.photoURL
                  }
                  alt="Photo"
                />
              </div>
              <div
                data-aos="zoom-in-down"
                data-aos-delay="250"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                className="pt-5 lg:pt-0 w-full"
              >
                {info.personal?.name?.fullName && (
                  <ShowData
                    fieldName="name"
                    data={info.personal?.name.fullName}
                  />
                )}
                {info.personal?.name?.nickname
                  ? info.personal?.name.nickname && (
                      <ShowData
                        fieldName="nickname"
                        data={info.personal?.name?.nickname}
                      />
                    )
                  : ""}
              </div>
            </div>
            {info.personal?.about && (
              <div
                data-aos="fade-up-rights"
                data-aos-delay="250"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="pt-5">
                  <h2 className="flex items-center gap-2 font-bold text-lg">
                    {" "}
                    <FaUser /> <span>About Me</span>{" "}
                    <button
                      className={isBioActive ? "hidden" : "block"}
                      onClick={handleBioUpdate}
                    >
                      <FaEdit />
                    </button>
                  </h2>
                </div>
                {isBioActive ? (
                  <form onSubmit={updateDescription}>
                    <textarea
                      className="w-full bg-secondary-content text-info-content p-2 border-2 border-gray-300 rounded-lg h-36 focus:outline-none focus:border-primary"
                      defaultValue={info.personal?.about}
                      name="description"
                    ></textarea>
                    <button className="px-5 py-1 bg-success rounded text-white text-lg capitalize">
                      submit
                    </button>
                  </form>
                ) : (
                  <p>{info.personal?.about}</p>
                )}
              </div>
            )}
            <div
              data-aos="fade-up-right
                  "
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8"
            ></div>
            <div
              data-aos="zoom-in-down"
              data-aos-delay="250"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="pt-5"
            >
              <h2 className="text-lg font-bold">Social Link:</h2>
              <div className="pt-5 grid gap-2 grid-cols-6 lg:grid-cols-8 px-5 justify-between">
                {info?.social?.map((item, ind) => (
                  <Account profile={item} key={ind} />
                ))}
              </div>
            </div>
          </div>
          {/* right side  */}
          <div
            data-aos="fade-up-right"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="lg:bg-secondary-content lg:text-info-content pl-5 pt-5 lg:w-[40%]"
          >
            {info.personal?.blood && (
              <div>
                <ShowData fieldName="Blood Group" data={info.personal?.blood} />
              </div>
            )}
            {info.personal?.gender && (
              <div>
                <ShowData
                  fieldName="Gender"
                  data={info.personal?.gender === "M" ? "Male" : "Female"}
                />
              </div>
            )}
            {info.personal?.religion && (
              <div>
                <ShowData fieldName="Religion" data={info.personal?.religion} />
              </div>
            )}
            {info.personal?.email && (
              <div>
                <ShowData
                  className="lowercase"
                  fieldName="Email"
                  data={info.personal?.email}
                />
              </div>
            )}
            {info.personal?.phone && (
              <div>
                <ShowData
                  fieldName="Phone"
                  data={`+88 ${info.personal?.phone}`}
                />
              </div>
            )}
            {info.personal?.birthday && (
              <ShowData fieldName="Birthdate" data={info.personal?.birthday} />
            )}
          </div>
        </section>
      }
    </div>
  );
};

export default PersonalInfo;

const Account = ({ profile }) => {
  const info = SMCP[profile.platform];
  return (
    <a
      href={`${info.base}${profile.link?.trim() || profile.handle?.trim()}`}
      target="_blank"
      rel="noreferrer"
    >
      <GetIcon
        icon={`${info.icon.trim()}`}
        lib={info.pack}
        className="text-5xl text-info-content bg-accent-content p-3 rounded-full"
      />
    </a>
  );
};
