import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat, Heart } from "lucide-react";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to 6 times their length.",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setCurrentFact(catFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
          <Cat className="inline-block mr-2" /> The Wonderful World of Cats <Cat className="inline-block ml-2" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{currentFact}</p>
              <Button onClick={getRandomFact}>Get Another Fact</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cat Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://placekitten.com/300/200" alt="Cute kitten" className="rounded-lg mx-auto object-cover w-full h-[150px]" />
                <img src="https://placekitten.com/301/200" alt="Playful cat" className="rounded-lg mx-auto object-cover w-full h-[150px]" />
                <img src="https://placekitten.com/302/200" alt="Sleepy cat" className="rounded-lg mx-auto object-cover w-full h-[150px]" />
                <img src="https://placekitten.com/303/200" alt="Curious cat" className="rounded-lg mx-auto object-cover w-full h-[150px]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why We Love Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>They're independent yet affectionate</li>
              <li>Their purring is therapeutic</li>
              <li>They're low-maintenance pets</li>
              <li>They have unique personalities</li>
              <li>They're excellent companions</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setLikes(likes + 1)}
            className="group"
          >
            <Heart className="mr-2 h-6 w-6 group-hover:text-red-500 transition-colors" />
            Like this page ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;