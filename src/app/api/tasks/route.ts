import { NextResponse } from "next/server";
import { resolve } from "path";

export interface Task {
  id: number;
  name: string;
}

const tasks: Task[] = [
  { id: 1, name: "プログラミング" },
  { id: 2, name: "ランニング" },
];

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await sleep(3000);

  return NextResponse.json(
    { tasks },
    {
      status: 200,
    }
  );
};

/**
 * 返却値が毎回異なるような場合は
 * リクエスト毎に動的に実行されるように設定する
 * 「ルートセグメントコンフィグ」
 */
export const dynamic = "force-dynamic";
