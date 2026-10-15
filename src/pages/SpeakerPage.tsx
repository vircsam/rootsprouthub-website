import React from 'react';
import SpeakerSection from '../components/SpeakerSection';

const SpeakerPage = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#070709] min-h-screen">
      <SpeakerSection isStandalone />
    </div>
  );
};

export default SpeakerPage;
