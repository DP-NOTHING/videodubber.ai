import Link from 'next/link';

function Announcement() {
  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        Offering premium video translation with <span style={{color: 'rgb(253, 230, 138)'}}>Voice Cloning</span> 3x cheaper than the market.
        <Link href="/pricing/" className="inline-block underline">See our pricing here!</Link>
      </p>
    </div>
  );
}

export default Announcement;