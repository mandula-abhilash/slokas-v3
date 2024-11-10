'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PlaylistControls({ 
  sloka, 
  language, 
  onPrevious, 
  onNext,
  total,
  current
}) {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        className="h-10 w-10 shrink-0"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-primary truncate text-center">
          {sloka.title[language]}
        </h3>
        <p className="text-xs text-muted-foreground text-center">
          {current} of {total}
        </p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        className="h-10 w-10 shrink-0"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}