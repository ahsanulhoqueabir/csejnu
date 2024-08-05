import SMCP from "../utility/iconname";
import GetIcon from "../utility/icons";

const SocialLink = ({ social, coding }) => {
  const allProfile = [...social, ...coding];
  return (
    <>
      {allProfile.length > 0 && (
        <div className="text-info-content">
          <h1 className="text-3xl">SOCIAL PROFILE</h1>
          <ul className="py-5 text-lg flex flex-col gap-3">
            {allProfile.map((profile, index) => (
              <Account key={index} profile={profile} />
            ))}
          </ul>
          <hr className=" border-gray-400 w-3/4 py-5" />
        </div>
      )}
    </>
  );
};

export default SocialLink;

const Account = ({ profile }) => {
  const info = SMCP[profile.platform];
  const regex = /^https?:\/\/www\./;
  const url = info.base.replace(regex, "");
  return (
    <li className="flex items-center gap-4">
      <a
        href={`${info.base}${profile.link?.trim() || profile.handle?.trim()}`}
        target="blank"
        className="p-2 bg-accent-content rounded-full"
      >
        <GetIcon icon={`${info.icon.trim()}`} lib={info.pack} />
      </a>
      <p>
        {url}
        {profile.link?.trim() || profile.handle?.trim()}
      </p>
    </li>
  );
};
