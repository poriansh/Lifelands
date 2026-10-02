"use client";

import {useEffect, useState} from "react";

import GameItem from "@/feature/simulation/components/GameItem";
import { GameItemT } from "@/feature/simulation/types/simulation";


const MAX_ITEMS = 100;
const ITEM_LIFETIME = 10_000;

export default function GameSimulation() {
  const [items, setItems] = useState<GameItemT[]>([]);
  const [totalCreated, setTotalCreated] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      setItems((currentItems) => {
        const activeItems = currentItems.filter(
          (item) => now - item.createdAt < ITEM_LIFETIME,
        );

        const newItem: GameItemT = {
          id: now,
          createdAt: now,
        };

        return [...activeItems, newItem].slice(-MAX_ITEMS);
      });

      setTotalCreated((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-5">
      <div className="overflow-hidden rounded-2xl border border-violet-400/20 bg-slate-900/80 shadow-[0_20px_50px_rgb(0_0_0_/_0.28)]">
        <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:divide-x-reverse">
          <p className="px-5 py-4 text-sm font-medium text-slate-300 sm:px-6 sm:py-5">Total created: <span className="mr-2 text-xl font-bold tabular-nums text-violet-300">{totalCreated}</span></p>
          <p className="px-5 py-4 text-sm font-medium text-slate-300 sm:px-6 sm:py-5">DOM items: <span className="mr-2 text-xl font-bold tabular-nums text-violet-300">{items.length}</span></p>
        </div>
      </div>

      <div className="space-y-2.5">
        {items.map((item) => (
          <GameItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
