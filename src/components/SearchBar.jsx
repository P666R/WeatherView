import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter city name"
        className="flex-grow"
      />
      <Button type="submit" variant="outline">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
