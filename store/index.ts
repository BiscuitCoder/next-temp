import { create } from 'zustand';
import {
  devtools,
  persist,
} from 'zustand/middleware';

interface BearState {
    bears: number;
    count: number;
    updateRandomCount: ()=>void;
    increasePopulation: (v:number) => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
}



const useStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                bears: 0,
                count: 0,
                increasePopulation: (v:number) => set((state) => ({ bears: state.bears + 1 }),false,{type:'increasePopulation',"info":v}),
                removeAllBears: () => set({ bears: 0,count: 0 },false,'removeAllBears'),
                updateBears: (newBears) => set({ bears: newBears },false,'updateBears'),
                updateRandomCount: () => set((state) => ({ count: Math.floor(Math.random() * 100) }),false,'updateRandomCount'),
            }),
            {
                name: 'bear-storage',
                partialize:(state)=>({bears:state.bears})
            }
        )
    )
);


export default useStore;