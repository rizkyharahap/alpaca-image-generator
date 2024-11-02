import alpacas from "@/datas/aplaca-data.json";
import { reactive } from "vue";

export type AlpacaAccessorize =
  | "backgrounds"
  | "neck"
  | "leg"
  | "ears"
  | "hair"
  | "eyes"
  | "accessories"
  | "mouth";
export type Alpacas = typeof alpacas;

interface AlpacaStore {
  alpacas: Readonly<typeof alpacas>;
  accessorizes: { [key in AlpacaAccessorize]: number };

  shuffle(): void;
  changeAccessorize(accessorizeName: AlpacaAccessorize, value: number): void;
}

function shuffleAlpacaAccessorize(part: AlpacaAccessorize) {
  return Math.floor(Math.random() * alpacas[part].length);
}

export const alpacaStore = reactive<AlpacaStore>({
  alpacas: alpacas,
  accessorizes: {
    backgrounds: shuffleAlpacaAccessorize("backgrounds"),
    neck: shuffleAlpacaAccessorize("neck"),
    leg: shuffleAlpacaAccessorize("leg"),
    mouth: shuffleAlpacaAccessorize("mouth"),
    ears: shuffleAlpacaAccessorize("ears"),
    hair: shuffleAlpacaAccessorize("hair"),
    eyes: shuffleAlpacaAccessorize("eyes"),
    accessories: shuffleAlpacaAccessorize("accessories"),
  },

  shuffle() {
    for (const accessorize in this.accessorizes) {
      this.accessorizes[accessorize as AlpacaAccessorize] =
        shuffleAlpacaAccessorize(accessorize as AlpacaAccessorize);
    }
  },

  changeAccessorize(accessorizeName, value) {
    this.accessorizes[accessorizeName] = value;
  },
});
