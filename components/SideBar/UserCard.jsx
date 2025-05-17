const UserCard = ({ isLight }) => (
  <div className={`flex items-center justify-between p-3 rounded-lg mt-4 cursor-pointer ${
    isLight ? 'bg-[#D1E9FF]' : 'bg-[#2A2A2A]'
  }`}>
    <div className="flex items-center gap-3">
      <img src="https://i.pravatar.cc/40" alt="User" className="w-10 h-10 rounded-full object-cover" />
      <div>
        <div className={`text-sm font-medium ${isLight ? 'text-[#222260]' : ''}`}>Shivkumar</div>
        <div className="text-xs text-[#64BD64]">Free Plan</div>
      </div>
    </div>
    <button className="bg-[#64BD64] text-sm text-black px-3 py-1 rounded hover:bg-[#52a552] transition">
      Upgrade
    </button>
  </div>
);

export default UserCard;
