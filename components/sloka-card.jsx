'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function SlokaCard({ sloka, language, isPreview = false, variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <Card className="relative overflow-hidden transition-all duration-300 hover:bg-muted/50 p-3 hover:shadow-sm">
        <h3 className="text-sm font-medium text-primary mb-1">
          {sloka.title[language]}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {sloka.text[language]}
        </p>
      </Card>
    );
  }

  if (variant === 'full') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8">
          <div 
            className="absolute inset-0 pointer-events-none bg-repeat bg-[length:50px_50px] bg-center opacity-5"                    
            style={{
              backgroundImage: 'url("/pattern.jpg")',
            }}
          />

          <div className="relative space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6 text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-primary">
                {sloka.title[language]}
              </h3>

              <div className="relative bg-white/30 dark:bg-white/20 p-4 lg:p-6 rounded-lg backdrop-blur-md">
                <p className="text-base lg:text-lg font-medium leading-relaxed whitespace-pre-line">
                  {sloka.text[language]}
                </p>
              </div>

              {sloka.deityImage && (
                <div className="flex justify-center">
                  <div className="relative w-32 h-32 lg:w-48 lg:h-48">
                    <Image
                      // TODO: Remove the hardcoded value after setting up backend
                      src={`https://planning-applications-bucket.s3.eu-west-2.amazonaws.com/612dc8120ab9cb0abc81b689.jpeg?etag=ef104f05a0e865f18af7cc651a73d93f`}
                      alt={`${sloka.title[language]} Deity`}
                      fill
                      className="object-contain dark:brightness-90 dark:contrast-125"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Meaning and Context for mobile */}
            <div className="space-y-4 lg:hidden">
              <div className="space-y-2 bg-white/30 dark:bg-white/20 p-4 lg:p-6 rounded-lg backdrop-blur-md">
                <h4 className="text-base font-semibold text-primary">Meaning</h4>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {sloka.meaning[language]}
                </p>
              </div>

              {sloka.context && (
                <div className="space-y-2 bg-white/30 dark:bg-white/20 p-4 lg:p-6 rounded-lg backdrop-blur-md">
                  <h4 className="text-base font-semibold text-primary">When to Recite</h4>
                  <p className="text-sm text-muted-foreground">
                    {sloka.context[language]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Meaning and Context for desktop */}
        <Card className="relative overflow-hidden transition-all duration-300 p-6 lg:p-8 hidden lg:block">
          <div 
            className="absolute inset-0 pointer-events-none bg-repeat bg-[length:50px_50px] bg-center opacity-5"                    
            style={{
              backgroundImage: 'url("/pattern.jpg")',
            }}
          />

          <div className="relative space-y-6">
            <div className="space-y-4">
              <div className="space-y-2 bg-white/30 dark:bg-white/20 p-4 lg:p-6 rounded-lg backdrop-blur-md">
                <h4 className="text-base lg:text-lg font-semibold text-primary">Meaning</h4>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {sloka.meaning[language]}
                </p>
              </div>

              {sloka.context && (
                <div className="space-y-2 bg-white/30 dark:bg-white/20 p-4 lg:p-6 rounded-lg backdrop-blur-md">
                  <h4 className="text-base lg:text-lg font-semibold text-primary">When to Recite</h4>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    {sloka.context[language]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}