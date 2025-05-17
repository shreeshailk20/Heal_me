import { Search } from 'lucide-react';

const SidebarSearch = () => (
  <div className="relative mb-4 top-5">
    <Search className="absolute left-4 top-2 text-[#BDBDBD]" size={18} />
    <input 
      type="text" 
      placeholder="Search..." 
      className="w-full bg-[#2A2A2A] text-sm text-white pl-10 py-2 rounded-full placeholder:text-[#BDBDBD] outline-none"
    />
  </div>
);

export default SidebarSearch;
