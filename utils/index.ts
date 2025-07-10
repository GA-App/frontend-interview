import { Post } from "../types";

export function expandUniquePosts(data: Post[], ratio: number = 2): Post[] {
  return data.flatMap((obj, index) => Array.from({ length: ratio }, (_, j) => ({
    ...obj,
    id: obj.id + data.length * j + index * ratio,
    userId: obj.id + data.length * j + index * ratio,
  })),
  );


}
