import alpacas from "@/datas/aplaca-data.json";
import { reactive } from "vue";

export type AlpacaAccessorize =
  | "accessories"
  | "backgrounds"
  | "ears"
  | "eyes"
  | "hair"
  | "leg"
  | "mouth"
  | "neck";
export type Alpacas = typeof alpacas;

interface AlpacaStore {
  alpacas: Readonly<typeof alpacas>;
  accessorizes: { [key in AlpacaAccessorize]: string };

  shuffle(): void;
  changeAccessorize(accessorizeName: AlpacaAccessorize, value: string): void;
}

function shuffleAlpacaAccessorize(part: AlpacaAccessorize): string {
  const randomIdx = Math.floor(Math.random() * alpacas[part].length);
  return alpacas[part][randomIdx];
}

export const alpacaStore = reactive<AlpacaStore>({
  alpacas: alpacas,
  accessorizes: {
    accessories: shuffleAlpacaAccessorize("accessories"),
    backgrounds: shuffleAlpacaAccessorize("backgrounds"),
    ears: shuffleAlpacaAccessorize("ears"),
    eyes: shuffleAlpacaAccessorize("eyes"),
    hair: shuffleAlpacaAccessorize("hair"),
    leg: shuffleAlpacaAccessorize("leg"),
    mouth: shuffleAlpacaAccessorize("mouth"),
    neck: shuffleAlpacaAccessorize("neck"),
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
