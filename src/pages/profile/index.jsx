import React from 'react';
import TierCard from '../../components/tier-card';
// import ProfileHeader from '../../components/profile-header';

const ProfilePage = () => {
  const userProfile = {
    name: 'Kinda Funny Games',
    desc: 'Creating an independent production company and podcast network',
    avatarUrl: '/assets/avatar.png',
    coverUrl: '/assets/bg-avatar.png',
  };
  return (
    <div>
      <div className="bg-[url('/assets/bg-avatar.png')] bg-no-repeat bg-cover text-white p-4 h-[400px]">
        <div className="flex items-center justify-between px-60 mt-[270px] text-black">
          <div className="flex items-center justify-between gap-8 w-full">
            <img
              src={userProfile.avatarUrl}
              alt="Avatar"
              className="w-36 h-56"
            />
            <div className="text-center font-bold mt-32">
              <h1 className="text-2xl">{userProfile.name}</h1>
              <p className="text-lg">{userProfile.desc}</p>
            </div>
            <button className="bg-black text-white px-20 py-2 rounded-lg mt-32">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="px-60 mt-40 my-8">
        <div className="space-y-8">
          <TierCard image="/assets/tier/tier-1.png" description="Get all of Kinda Funny’s shows ad-free as both audio and video. This includes: The Kinda Funny Podcast, In Review, the Kinda Funny Gamescast, PS I Love You XOXO, the Kinda Funny Xcast, Kinda Funny Games Daily, Kinda Funny Game Showdown (no audio version), and Kinda Funny Screencast (when applicable.)" price="$20/month"  />
          <TierCard image="/assets/tier/tier-2.png" description="Get all of Kinda Funny’s shows ad-free as both audio and video. This includes: The Kinda Funny Podcast, In Review, the Kinda Funny Gamescast, PS I Love You XOXO, the Kinda Funny Xcast, Kinda Funny Games Daily, Kinda Funny Game Showdown (no audio version), and Kinda Funny Screencast (when applicable.)" price="$20/month"  />
          <TierCard image="/assets/tier/tier-3.png" description="Get all of Kinda Funny’s shows ad-free as both audio and video. This includes: The Kinda Funny Podcast, In Review, the Kinda Funny Gamescast, PS I Love You XOXO, the Kinda Funny Xcast, Kinda Funny Games Daily, Kinda Funny Game Showdown (no audio version), and Kinda Funny Screencast (when applicable.)" price="$20/month"  />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
