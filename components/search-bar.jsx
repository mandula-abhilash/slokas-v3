'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function SearchBar({ query, setQuery, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search slokas by title or content..."
          className="w-full pl-10 pr-4 py-2 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
        />
      </div>
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </div>
  );
}